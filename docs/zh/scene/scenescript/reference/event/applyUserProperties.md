---
prev: ../../reference.md
---

# SceneScript Event applyUserProperties

This event function will be called under two circumstances:

* It will be called once initially when the wallpaper is loaded.
* It will be called each time the user adjusts a user property setting.

```js
export function applyUserProperties(changedUserProperties) {

}
```

The parameter `changedUserProperties` will contain the key names of the specific user properties that you created. You can access properties via `changedUserProperties.keyname`, where `keyname` is the key that was assigned to the property in the project settings. For example, if you have a `color` property, it would be accessible via `changedUserProperties.color`.

 ::: warning Important
  After the initial wallpaper load event, the parameters will only contain property changes. For this reason, it is crucial that you check which value is being sent with the current event. We recommend using the `hasOwnProperty()` function for this.
:::
```js
export function applyUserProperties(changedUserProperties) {
        if (changedUserProperties.hasOwnProperty('first_property')) {
            // Logic for changedUserProperties.first_property goes here
        }
        if (changedUserProperties.hasOwnProperty('second_property')) {
            // Logic for changedUserProperties.second_property goes here
        }
        if (changedUserProperties.hasOwnProperty('third_property')) {
            // Logic for changedUserProperties.third_property goes here
        }
        // More properties go here
}
```

## Example Usage

In the following example, we use a checkbox property to conditionally turn off some code in our `update()` function.

In this example, we have assigned our script to a **Color** property. The checkbox user property with the key `iscolorful` will be used to turn off our code that cycles the color in rainbow colors. To try this example, create a checkbox property named *"Is Colorful?"* (the user property key will be auto-generated to `iscolorful` in that case) and bind a SceneScript to a **Color** property of an asset.

We created the `applyUserProperties` event function and to make sure that Wallpaper Engine has sent any changes for this property,
we first check if our `iscolorful` user property is part of the event:

```js
 if (changedUserProperties.hasOwnProperty('iscolorful'))
 ```
 
We then assign the current value of our user property to a local variable named `isColorful`. We then continuously check if `isColorful` is true in the `update()` function of our element and turn off our rainbow color code if the value is not `true`.

You can see the full example here:

```js{8,14,27-30}
'use strict';

import * as WEColor from 'WEColor';

let rainbowSpeed = 1;
let rainbowSaturation = 1;
let rainbowBrightness = 1;
let isColorful = false;

/**
 * @param {Vec3} value
 */
export function update(value) {
	if (isColorful) {
		value = WEColor.hsv2rgb({
			x: Date.now() / 2000 * rainbowSpeed % 1,
			y: rainbowSaturation,
			z: rainbowBrightness
		});
	}
	
	return value;
}

export function applyUserProperties(changedUserProperties) {
        // First make sure to check if applyUserProperties is sending your property. Unchanged properties are not sent along so do not forget to check for this!
        if (changedUserProperties.hasOwnProperty('iscolorful')) {
            // Assign the changed property to a local variable
            isColorful = changedUserProperties.iscolorful;
        }
}
```