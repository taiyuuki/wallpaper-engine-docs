# Audio Visualization

Wallpaper Engine allows you to process audio volume levels for the left and right audio channel and use that to visualize audio that is being played on the user's system. Each channel splits the audio frequencies into 64 parts. Each part represents a frequency range for the audio: Low frequencies represent bass while high frequencies represent treble sound ranges.

Utilizing these volume levels allows you to build various types of audio visualization, from full-on bar audio visualizers, to making certain elements on your wallpaper react to the beat of music (by only looking at low frequency ranges, as they usually represent the beat of audio being played).

## Creating an audio listener

In order to get started with an audio visualizer, you have to register a listener function in JavaScript that will supply the audio volume levels to you. Wallpaper Engine provides the `window.wallpaperRegisterAudioListener` function for this purpose, it expects a callback function that you also need to create.

You should call the `wallpaperRegisterAudioListener` function once. Please note: Don't register the audio listener within the `window.onload` event (or any similar events), this is unreliable and can lead to Wallpaper Engine missing certain events. When in doubt, call this function at the end of your `body` tag.

In the example below, we're also creating an empty `wallpaperAudioListener(audioArray)` function that is handed as a callback parameter to the `wallpaperRegisterAudioListener`. The function will later contain your custom logic for the audio handling. The name for that function is up to you, but it must have parameter that takes the audio volume levels as an array.

```js
function wallpaperAudioListener(audioArray) {
    // Handle audio input here
}
window.wallpaperRegisterAudioListener(wallpaperAudioListener);
```

The `wallpaperAudioListener` function will now be called when new audio samples arrive, which occurs roughly 30 times per second.

## Processing the audio samples

The actual audio data is included in the `audioArray` that we have created as a parameter to our `wallpaperAudioListener` function above. This array has a fixed length of 128.

Array elements **0 until 63** contain volume levels for the **left channel**.
Array elements **64 until 127** contain the volume levels for the **right channel**.

The lower array elements for each channel represent bass frequencies, so at array index 0, you will find the lowest bass sounds for the left channel and at array element 64, you will find the bass sounds for the right audio channel. The higher up you go in the array, the higher the audio frequencies will get, so array indices closest to 64 will contain treble audio volume levels for the left channel and array indices closest to array index 127 will contain the treble audio volume levels for the right channel.

Each array will generally contain a floating point value from 0.00 to 1.00. 0.00 means that the specific frequency is currently not playing any sound and 1.00 means that the frequency is playing at its maximum volume. However, due to the technical implementation, it can be that in very few cases, the numbers may be much greater than 1.0 For this reason, we recommend limiting the volume values to 1.00 with the help of `Math.min()`. See the sample project below for a concrete example.

## Audio visualization example

<video width="100%" loop autoplay>
  <source src="/videos/web_audio_visualizer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the following example, we are providing a very basic full implementation of the audio visualizer previewed above. You can easily copy-paste this into an empty `.html` file, import it into Wallpaper Engine and it should work straight away. We don't recommend placing all scripts, styles and HTML content into one file normally, however, for the sake of this tutorial, it's easiest to see it all in one place.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <style>
        body { margin:0; padding:0; }
        html, body { width:100%; height:100%; overflow:hidden; }
        canvas { height:100vh; width:100vw }
    </style>
    </head>
    <body>
        <canvas id="AudioCanvas"></canvas>
        <script>
        let audioCanvas = null;
        let audioCanvasCtx = null;
        function wallpaperAudioListener(audioArray) {
            // Clear the canvas and set it to black
            audioCanvasCtx.fillStyle = 'rgb(0,0,0)';
            audioCanvasCtx.fillRect(0, 0, audioCanvas.width, audioCanvas.height);

            // Render bars along the full width of the canvas
            var barWidth = Math.round(1.0 / 128.0 * audioCanvas.width);
            var halfCount = audioArray.length / 2;

            // Begin with the left channel in red
            audioCanvasCtx.fillStyle = 'rgb(255,0,0)';
            // Iterate over the first 64 array elements (0 - 63) for the left channel audio data
            for (var i = 0; i < halfCount; ++i) {
                // Create an audio bar with its hight depending on the audio volume level of the current frequency
                var height = audioCanvas.height * Math.min(audioArray[i], 1);
                audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
            }

            // Now draw the right channel in blue
            audioCanvasCtx.fillStyle = 'rgb(0,0,255)';
            // Iterate over the last 64 array elements (64 - 127) for the right channel audio data
            for (var i = halfCount; i < audioArray.length; ++i) {
                // Create an audio bar with its hight depending on the audio volume level
                // Using audioArray[191 - i] here to inverse the right channel for aesthetics
                var height = audioCanvas.height * Math.min(audioArray[191 - i], 1);
                audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
            }
        }

        // Get the audio canvas once the page has loaded
        audioCanvas = document.getElementById('AudioCanvas');
        // Setting internal canvas resolution to user screen resolution
        // (CSS canvas size differs from internal canvas size)
        audioCanvas.height = window.innerHeight;
        audioCanvas.width = window.innerWidth;
        // Get the 2D context of the canvas to draw on it in wallpaperAudioListener
        audioCanvasCtx = audioCanvas.getContext('2d');

        // Register the audio listener provided by Wallpaper Engine.
        window.wallpaperRegisterAudioListener(wallpaperAudioListener);
        </script>
    </body>
</html>
```

The HTML and JavaScript example above contains detailed comments that should help you understand it. Let's have a closer look at some of the details, though:

### Normalizing the browser styles

First, the CSS rules in the `<style>` block allow the canvas to fit on any resolution and any aspect ratio. You should always make sure that your wallpaper works on any type of screen resolution and aspect ratio, it's bad practice to only consider one resolution in your work and it usually only takes a few minor tweaks to ensure it works fine for all users.

In this example, we're resetting the default `margin` and `padding` on the body to 0 and hide any `overflow` (which shouldn't be necessary but it can be a good way to prevent scroll bars appearing in some edge cases). Next up, we set the canvas to be equal to the full width and height of the user's viewport.

### JavaScript-based normalization and initialization 

For our JavaScript code, it's important that we avoid the `window.onload` function and any similar window events, at least when it comes to the Wallpaper Engine specific code as it can lead to issues with the event system. Since we avoid the `onload` event call, it's very important that our JavaScript code is loaded after the HTML body has been rendered already, since our JavaScript directly accesses our canvas. Placing JavaScript at the inside-end of the `body` tag is perfectly valid, so we recommend this approach.

If you have never worked with `canvas` elements, it's important to know that they use an internal resolution for rendering and a secondary resolution for its size in HTML / CSS, so it's best to specifically set the canvas height and width to the window height and width with JavaScript, which we're doing in the following two lines of our JavaScript code:

```js
audioCanvas.height = window.innerHeight;
audioCanvas.width = window.innerWidth;
```

At the very end of our JavaScript code sample, we call the `wallpaperRegisterAudioListener` function which causes the `wallpaperAudioListener` to be executed whenever new audio data comes in. As noted above, it's important that this call is not placed inside any `window` events such as `window.onload`, you should structure your HTML so that your JavaScript is loaded last and does not depend on `window` events.

The function will draw the left audio channel in red and the right audio channel in blue (in reverse order for aesthetical purpose only). The key part of the code can be found here:

```js
for (var i = 0; i < halfCount; ++i) {
    // Create an audio bar with its hight depending on the audio volume level of the current frequency
    var height = audioCanvas.height * Math.min(audioArray[i], 1);
    audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
}
```

The height of the audio bars is determined by the volume level of the frequency that is currently being iterated over in the `for` loop. Let's assume the user has a 1920x1080 screen resolution. If the height of the window is 1080 and the volume level for the current frequency (stored in `audioArray[i]`) is 0.50, the bar for this specific frequency will be drawn with a height of 540 pixels (1080 * 0.50). This logic is repeated for all audio frequencies, each time Wallpaper Engine supplies a new set of audio data.

You may have noticed that we have also wrapped the `audioArray[i]` into `Math.min(audioArray[i], 1);`. This is to ensure the audio levels are limited to 1.00 at their peak. Most values will never go above 1.00, but due to the nature of the implementation, in rare cases this might spike above 1.0 which can cause your wallpaper to render incorrectly.

Of course this is a very basic example and you can change the type of visualization drastically, as you can create much more than just simple audio bars with this type of data. You can also try and add some interpolation between each calls to the `wallpaperAudioListener` function to smoothen the audio bar movement and make it less erratic, but in these cases you should consider adding an [FPS limit](/web/performance/fps) to your wallpaper.

## Audio Visualizer Problem Solving

To conserve performance, Wallpaper Engine will not send audio data to your wallpaper unless you actually load a `wallpaperAudioListener` in the code of your wallpaper. Wallpaper Engine will add the following line to the auto-generated `project.json` once it detects a properly registered audio listener in the editor preview:

```json
"supportsaudioprocessing" : true,
```

This should happen automatically after you import a JavaScript file that is loaded within your main HTML file, however, if you are editing your files on the go, you may need to specifically use the `Save` functionality in the editor to force Wallpaper Engine to update your `project.json`.

As a last resort, you can also manually add that line to the `project.json`, though if your code is set up properly, this should not be necessary. You can access the `project.json` by clicking on **Edit** at the top of the editor and then selecting **Open in Explorer** to view your project files.

If you continue to have issues with your visualizers, we recommend setting up a debugger connection for Wallpaper Engine as outlined in the following tutorial, this way you can debug the JavaScript code more effectively and check the incoming audio levels you receive:

* [Web Wallpaper Debugging](/web/debug/debug)