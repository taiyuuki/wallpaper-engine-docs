---
prev: ../tutorials.md
---

# Modifying Colors with SceneScript

In this guide, we explain how you can use SceneScript to modify the colors of an object. We also explain how to utilize the `WEColor` module to easily shift through colors instead of having to manually deal with **RGB** values. As always, this is just an example implementation, you can modify the colors in much more complex ways and create your own custom behavior.

<video width="100%" controls autoplay loop>
  <source src="/videos/scenescript_color.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Color Properties and SceneScript

Wallpaper Engine offers a [color property](/scene/userproperties/color) that you can find throughout various assets in the editor, you can also add a distinct [Tint effect](/scene/effects/effect/tint) to image layers for more complex scenarios.

The color property in Wallpaper Engine is always represented by a [Vec3](/scene/scenescript/reference/class/Vec3) object. The three properties represent the three RGB color channels:

* `x`: Red Color Channel
* `y`: Green Color Channel
* `z`: Blue Color Channel

You can modify these RGB values with SceneScript to your liking, the values range from `0` to `255`.

## Rainbow Color Example

To implement this example in your own project, select an image layer in your wallpaper. Then click on the cogwheel icon next to its **Color** property and select **Bind SceneScript** to bind a script to the color property and to view the SceneScript editor.

### Utilizing the WEColor Module

SceneScript comes with the [WEColor](/scene/scenescript/reference/module/WEColor) module which holds a few utility functions to make it easier to work with colors. In our example, we want to constantly shift the colors. Implementing this with just the `red`, `green` and `blue` color channels is rather tedious. For this reason, it makes sense to work on the **HSV** representation of our color instead of the standard **RGB** representation.

If you are unfamiliar with **HSV**, it represents each color with three components: `Hue`, `Saturation` and `Value`. The `Hue` value represents the color on its own which makes it very convenient for our use-case, as we simply have to modify the `Hue` value instead of having to deal with `red`, `green` and `blue` color values.

We start by importing the `WEColor` module into our script:

```js
import * as WEColor from 'WEColor';
```

In the `update()` function, we now utilize the `WEColor.hsv2rgb()` function to generate new **RGB** values for our color on each frame. The `WEColor.hsv2rgb()` function takes a `Vec3` object as an argument which we generate on-the-fly as follows:

```js
	value = WEColor.hsv2rgb({
		x: engine.runtime * 0.25,
		y: 1,
		z: 1
	});
```

As you can see, we mainly care about the `x` value here, which represents the **Hue** value of our color. We simply increase this number along with the `engine.runtime` variable. The `engine.runtime` variable constantly increases as long as the wallpaper is loaded, so we have an infinite color shift. In our example, we have multiplied the `engine.runtime` value with 0.25 to slow it down a bit, you can modify this value to your liking and either increase or further decrease this value.

We leave the **Saturation** and **Value** represented by `y` and `z` unchanged at their maximum value of `1`.

## Full Rainbow Color Solution

You can find the full solution below. We have moved the speed factor into a new constant value named `RAINBOW_SPEED` at the top of the script to make it easier to read and modify and we did the same for the saturation and brightness levels of our **HSV** color. After modifying the value, we simply return it and our color property will now shift through all colors in a constant speed.

```js
'use strict';

import * as WEColor from 'WEColor';

const RAINBOW_SPEED = 0.25;
const RAINBOW_SATURATION = 1;
const RAINBOW_BRIGHTNESS = 1;

/**
 * @param {Vec3} value
 */
export function update(value) {

	value = WEColor.hsv2rgb({
		x: engine.runtime * RAINBOW_SPEED,
		y: RAINBOW_SATURATION,
		z: RAINBOW_BRIGHTNESS
	});
	
	return value;
}
```

::: tip
You can conveniently access this example in the SceneScript code editor by clicking on **Snippets** at the top, followed by **Replace Script** and then **Rainbow Color**. This will replace all your existing code for your current element with the rainbow example from above.
:::