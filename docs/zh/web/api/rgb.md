# RGB Hardware Support

Wallpaper Engine allows you to take control of supported RGB devices through its API and synchronize your wallpaper with LED hardware. Even if you do not own any or just a limited set of compatible hardware, you can simply utilize an emulator. Both Corsair's iCUE software and Razer offer ways to emulate devices that you do not own.

<video width="100%" controls loop autoplay>
  <source src="/videos/rgb_emulator.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Hardware Emulator Setup (Optional)

If you want to utilize an RGB hardware emulator to test how your RGB lights look on a wide range of devices, we recommend the Razer Chroma emulator.

First, make sure you have the latest version of Razer Synapse 3 installed. It's also important to make sure you install **Chroma Connect** in the Razer Synapse settings:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

Afterwards, head to the Razer developer portal and install the latest version of the Razer Chroma emulator (scroll down on the page to get the link):

* [Razer Developer Portal](https://developer.razer.com/works-with-chroma/download/)

Once you have installed Razer Synapse 3 and the latest Razer Emulator, restart Wallpaper Engine and make sure the LED Plugin is enabled in the application settings. Verify that the emulator works by using any of the standard wallpapers that are shipped alongside Wallpaper Engine (such as **Razer Bedroom**).

## Initializing the LED plugin

Before any LED-related code is executed, you should first check if the LED plugin has been loaded, until then any related RGB logic should be skipped.

```js
var wallpaperSettings = {
    ledPlugin: false,
    cuePlugin: false
};

window.wallpaperPluginListener = {
    onPluginLoaded: function (name, version) {
        if (name === 'led') {
            // LED plugin loaded (works for all hardware)
            wallpaperSettings.ledPlugin = true;
        }
        if (name === 'cue') {
            // iCUE-specific plugin loaded, only needed if you want to utilize extra iCUE functions
            wallpaperSettings.cuePlugin = true;
        }
    }
};
```

## Sending color data from an HTML canvas

The main approach to sending color data to RGB hardware is to utilize the `setAllDevicesByImageData` function which can be found in the `window.wpPlugins.led` object:

```js
window.wpPlugins.led.setAllDevicesByImageData(encodedImageData, width, height);
```
The function must be provided with concatenated RGB data in the form of a string as its first parameter and also requires the width and height of the reference image as additional parameters. The recommended way to create this data is to draw an HTML canvas and then turn that into the RGB data string.

We recommend the following approach to converting a canvas into RGB data:

```js
function getEncodedCanvasImageData(canvas) {
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var colorArray = [];

    for (var d = 0; d < imageData.data.length; d += 4) {
        var write = d / 4 * 3;
        colorArray[write] = imageData.data[d];
        colorArray[write + 1] = imageData.data[d + 1];
        colorArray[write + 2] = imageData.data[d + 2];
    }
    return String.fromCharCode.apply(null, colorArray);
}

// Only execute this logic if the LED plugin has actually been loaded
if (wallpaperSettings.ledPlugin) {
    const canvas = document.getElementById('RGBCanvas');
    var encodedImageData = getEncodedCanvasImageData(canvas);
    window.wpPlugins.led.setAllDevicesByImageData(encodedImageData, canvas.width, canvas.height);
}
```

This is currently the most efficient way to compress and send the bitmap. It's still important that you choose a canvas of appropriate size (100 x 20 pixels) to minimize the performance impact, you can efficiently downsample any given canvas by copying it to a smaller one first before generating the bitmap.

The color data you send will automatically be converted by the hardware drivers and applied to all devices according to the configuration set by the hardware manufacturer. In the following example, a canvas with two rising audio bars (see the *audio visualizer* section of the documentation) split at the center of the canvas was used:

<video width="100%" loop autoplay controls>
  <source src="/videos/rgb_audio.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In examples likes that, we consider it best practice to also include some sort of idle animation for RGB lights so that the LED hardware does not turn off while no audio is playing. However, these implementation details are absolutely up to your own preference.

## Additional Corsair iCUE functions

While not necessary for the vast majority of users, you can also access certain functions of the Corsair iCUE SDK directly using Wallpaper Engine. For most users, we recommend sticking to what is described in the guide above, but if you have something very specific in mind for Corsair iCUE-compatible hardware, you can add some additional features using `window.cue`. For more infos, please check out the following guide:

* [Additional Corsair iCUE functions](/web/api/icue)
