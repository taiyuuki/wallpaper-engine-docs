---
prev: ../../reference.md
---

# SceneScript Event init

This event function will be called shortly after the object that owns the script has been created. It's useful for modifying or retrieving the initial value of a property for example. Since the `update()` function is called many times per second, you should try and place any code in the `init()` function that does not need to be recalculated every frame to optimize performance.

Wallpaper Engine will attempt to convert any numeric return values to [Vec2](/scene/scenescript/reference/class/Vec3) and [Vec3](/scene/scenescript/reference/class/Vec3) if you are working on a property that expects these return types. For example, if you return `2` on the `Scale` property, Wallpaper Engine will first convert the value to `Vec3(2, 2, 2)` so that it matches the return type the `Scale` property expects.

## Example Usage

In the following example, we use the `init()` event to store the initial value of the user property in a variable called `initialValue`. This has the advantage that the code in the `update()` function uses the position of our element in the editor as a starting point. Alternatively, we could also just hard-code a value for `initialValue.y` in the `update()` function.

```js{3,18-21}
'use strict';

let initialValue;

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = initialValue.y + (Math.sin(engine.runtime) * 100);
	return value;
}

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function init(value) {
    initialValue = value;
	return value;
}

```

You can choose to not return any value, then the property will not be modified. 