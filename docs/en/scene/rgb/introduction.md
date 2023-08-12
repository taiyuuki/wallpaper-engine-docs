# RGB Hardware Support

Wallpaper Engine allows you to take control of supported RGB devices through its API and synchronize your wallpaper with LED hardware. Even if you do not own any or just a limited set of compatible hardware, you can simply utilize an emulator. Both Corsair's iCUE software and Razer offer ways to emulate devices that you do not own.

By default, Wallpaper Engine will mirror the colors of your wallpaper to any compatible device. However, you can also configure a single layer to be responsible for all lighting.

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

## Configuring an RGB lighting layer

If you want to take full control over the lighting of your wallpaper, you can enable the **Limit iCUE & Chroma to this layer** option on a compatible layer. In most cases, this would be an image layer, but you can also use special layers such as **solid layers** and **composition layers** for this purpose.

Layers with this option do not need to be directly visible and they could be below other layers, however, they need to be in the viewable area of the wallpaper. For this reason, you should make sure that these extra layers are in the center of your wallpaper and as small as possible so that they are fully rendered on all resolutions and aspect ratios that users might use. Unnecessary large layers that are only used for LED lighting purposes also introduce an unnecessary increase in video RAM, so try to keep them as small as possible. 

**Solid layers** with a very small resolution (for example *32 x 32 px* are a good way to keep video RAM usage to a minimum), they can also be combined well with the [Pulse effect](/wallpaper-engine-docs/scene/effects/effect/pulse) or the [Tint effect](/wallpaper-engine-docs/scene/effects/effect/tint) for example.

### Extra Notes on Composition Layers

In the case of **composition layers**, all layers that are below it will be mirrored onto the RGB hardware, they essentially act like a *camera* that record a part of your scene. If you choose to go this route, make sure to keep the composition layer as small as possible and choose a **resolution** for this layer that is as small as necessary to reduce system load.

::: tip
If you enable the **Limit iCUE & Chroma to this layer** option on multiple layers, the option will only take effect for the topmost layer. Make sure to only use it on one layer to avoid confusion.
:::