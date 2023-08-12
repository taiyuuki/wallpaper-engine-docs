# Time of Day Changes with SceneScript

In this tutorial we will explain how SceneScript enables you to change parts of your wallpaper depending on the current time of day. Our example is rather specific, but you can access the current time of day via SceneScript via [**engine.timeOfDay**](/en/scene/scenescript/reference/class/IEngine.html#timeofday-number) for your own ideas and custom logic of any type.

Alternatively, you can also use the *ECMAScript* `Date` class to access the current hours, minutes seconds and more date-related data just like you would in other languages such as *JavaScript*.

## Change Background Image Depending on Time of Day

We will explore how to utilize the [Blend effect](/scene/effects/effect/blend.html) to change the entire background image multiple times during a day depending on the current time. We strongly recommend that you utilize the *Blend* effect for this type of effect instead of using multiple image layers to reduce VRAM usage. This can significantly improve performance, especially when using effects on the image layer.

<video width="100%" controls autoplay loop>
  <source src="/videos/timeofday.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Base Image with Blend Effect

Start off by adding the image that you want to use at midnight as a base image for your wallpaper. In our case, it's the night-time version of a window, as shown in the animation above. It's important to use the midnight image as a base image, since our SceneScript logic will expect this image to be shown at exactly midnight when the clock reaches 00:00:00.

After adding the midnight image as a layer, add the [Blend effect](/scene/effects/effect/blend.html) to it to continue with the rest of this tutorial.

### Blend Mode

Select the blend effect that you have added to your midnight layer. First, make sure to set the **Blend mode** option to **Normal**. This is to ensure that each blend texture is rendered in its original state without being influenced by other blend textures. In some cases you may want to deviate from this for artistic purposes, but in most cases the **Normal** option is probably the best choice.

### Number of Textures

After configuring the blend mode, set the **Number of textures** option to each additional image you want to display throughout the day in addition to your starting image. In our case, we have **three** additional images in addition to the base image which represents night-time, so we set the value to **3**:

1. Dawn
2. Mid-day
3. Dusk

The quickest way to load the additional textures is by dragging and dropping them into the blend texture box. Make sure the images are in the correct order, from the beginning of the day until the end of the day.

 See the following video to see the steps until here:

<video width="75%" style="margin:0 auto;display:block;" controls autoplay loop>
  <source src="/videos/blend_textures.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You should now see the last blend texture as your wallpaper texture, since the last blend texture is overlapping all other textures right now.

### SceneScript Logic for Blend Amount

This is where SceneScript comes in handy. We now need to alter the **Blend amount** options at the bottom of the *Blend effect* properties list using SceneScript, so that each texture starts appearing at a specific time of day. We can achieve this with SceneScript by starting all blend amounts at a value of 0, followed by smoothly increasing the value to 1 when a specific time of day has been reached.

Click on the cogwheel icon next to the first **Blend Amount** value and select **Bind Script**. Now replace the existing sample script with the following code snippet:

```js{5,6}
'use strict';

import * as WEMath from 'WEMath';

const START_HOUR = 7;
const END_HOUR = 11;
const BLEND_DURATION = 0.004;

export function update(value) {
	return WEMath.smoothStep(
      (START_HOUR - BLEND_DURATION) / 24,
      START_HOUR / 24,
      engine.timeOfDay
    ) * WEMath.smoothStep(
      END_HOUR / 24,
      (END_HOUR - BLEND_DURATION) / 24,
      engine.timeOfDay
    );
}
```

This snippet makes use of two Wallpaper Engine SceneScript features:

* [**engine.timeOfDay**](/en/scene/scenescript/reference/class/IEngine.html#timeofday-number) which represents the current day with values from 0.00 - 1.00 instead of seconds, where 0.00 is 00:00:00 and 1.00 is 23:59:59.
* [**WEMath.smoothStep()**](/en/scene/scenescript/reference/module/WEMath.html#smoothstep-min-number-max-number-value-number-number) is a function which smoothly calculates a value between two values which we use to smoothly blend over from one texture to the next.

Add this script to all **Blend amount** values for each blend amount texture. Make sure to always reconfigure the `START_HOUR` and `END_HOUR` values to control at what time of day each blend texture appears.

The default value of `0.004` for the `BLEND_DURATION` constant results in a smooth transition that lasts exactly 14.4 seconds between the two adjacent blend layers, you can slightly adjust this value to your liking but make sure to use the same value for all layers. Increasing the value by `0.001` increases the blend time by 3.6 seconds.

Double-check that you are not leaving any gaps between blend layers by accident, your values should cover the entire day without skipping any hour of the day. The only exception is around midnight, since the base image is always visible by default at exactly midnight.

In our example, we have set the following values but you should adjust them to your liking:

**Blend amount:**
```js
const START_HOUR = 7;
const END_HOUR = 10;
```

**Blend amount 2:**
```js
const START_HOUR = 10;
const END_HOUR = 18;
```

**Blend amount 3:**
```js
const START_HOUR = 18;
const END_HOUR = 22;
```

If your day and night cycle contains a different number of blend textures, you need to distribute hourly texture changes appropriately.

In our example, the night-time base texture is visible before 7:00 in the morning and becomes visible again at 22:00 in the evening after the last blend texture fades out again. You cannot configure the midnight texture, it will be visible whenever all blend textures are invisible.