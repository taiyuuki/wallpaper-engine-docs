---
prev: ../overview.md
---
# Shake Effect

The **Shake** effect can be used to continuously shake parts of an image back and forth. This effect can be used to shake natural objects but also to create **breathing** animations of any characters that are part of your scene.

![Shake](/wallpaper-engine-docs/img/effects/Shake.gif)

### Effect Settings

The effect has two different modes, a standard one and an audio response mode. The following settings are shared across both modes:

* **Direction:** Allows you limit the movement of the shake. By default, the shake will go *left* and *right* which means it will extend in both directions of the image you are animating. In special situations this may be unwanted and you can use this option to limit the shake effect so it will only distort the image along one direction and not both.
* **Noise:** Allows you to add a bit of randomized movement to the shake animation. By default the shake animation is very periodic and uniform, with *noise* enabled, it will vary in strength and position over time.
* **Shake Direction:** Allows you to pain the direction of the shake effect in a so-called *flow mask*. The shake will follow the direction of your cursor.
* **Time offset:** Allows you to paint different areas of the image that will have a delay in the animation, where the *Amount* of the painted area represents the delay. This is useful if you want to use one shake effect on multiple characters or elements on the image. Without different time delays, all elements would shake in sync which can often look odd, especially when you are animating multiple breathing characters.
* **Opacity:** Allows you to draw certain areas of the image that will not be included in the effect (by setting the *Amount* to 0 while drawing) or where the effect is reduced (any *Amount* below 255).
* **Bounds:** Allows you to change the timing of the animation. By default the animation will cover the full time range from 0 to 1. If you want to, for example, increase the amount of time that the animation will show the maximum amount of shake, you can change the bounds to *0* and *0.5*. This means that the full animation completes early at *0.5* and will stay there for a while. This is useful for making simple eye blinking animations where you want the shake to be disabled for a long time and only show up for a very short moment.
* **Strength:** How much distance the shake animation will cover.

#### Default Mode
When the option **Audio response** at the top of the effect settings is set to **None**, the shake effect will shake the selected parts of the image in a regular interval. The following settings are available:

* **Friction:** Biases towards the inner or outer part of the animation. For example, if you have shaking grass in the wind, you usually want a bit more erratic movement, you can use this option to achieve that.
* **Speed:** How fast the shake plays.

#### Audio response mode

By changing the **Audio response** option from **None** to any other option will cause the shake effect to react to audio playing on the computer. In most cases, you want to set this value to **Center**, this will cause the shake to appear for audio played on both the left or right audio channel. When set to **Left** or **Right**, the effect will only listen to either the left or right audio channel, which can be useful if you want to only shake an element when audio is played on a specific side.

* **Audio amount:** The strength of the shake effect in relation to the audio levels being played.
* **Audio bounds:** Allows you to determine how the minimum and maximum value of the audio response will cause the shake animation to change. With the default bounds of *0* and *1* it will map the whole shake movement to the minimum and maximum of the audio response volume. If you change this to *0* and *0.1*, for example, then the shake animation will be very responsive and shake with to the strongest movement even with only a little amount of audio being registered.
* **Audio exponent:** Allows you to change the audio response curve or power. By increasing this value, you will reduce how strongly low audio volume will affect the animation.
* **Frequency max:** The **highest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the shake effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).
* **Frequency min:** The **lowest** audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the shake effect to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).

