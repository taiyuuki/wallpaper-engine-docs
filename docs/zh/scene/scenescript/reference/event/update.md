---
prev: ../../reference.md
---

# SceneScript Event update 

This event function will be called every frame for all scripts that export it. The function parameter `value` is the current value of the property that you have assigned this script to. The type of `value` also depends on the property of the script.

```js
export function update(value) {
    // The initial value of the property this script is assigned to.
    return value;
}
```

Wallpaper Engine will attempt to convert any numeric return values to [Vec2](/scene/scenescript/reference/class/Vec3) and [Vec3](/scene/scenescript/reference/class/Vec3) if you are working on a property that expects these return types. For example, if you return `2` on the `Scale` property, Wallpaper Engine will first convert the value to `Vec3(2, 2, 2)` so that it matches the return type the `Scale` property expects.

You can choose to not return any value, then the property will not be modified.


## Note on Frametime

Since the `update()` function gets called each frame, it gets called more often for users with a high FPS limit in the Wallpaper Engine settings. If you animate anything in the `update()` function, make sure to use `engine.frametime` to normalize the speed of your animation across all FPS settings. If you do not use `engine.frametime`, the speed of your animation will increase with higher FPS settings in Wallpaper Engine.

For example, if you want to move an object upwards, use `engine.frametime` as a reference and multiply it with a factor to increase the speed of the animation. In the following example, we hard-coded `100` as a factor but you would change this to match the desired animation speed:

```js
export function update(value) {
    value.y += engine.frametime * 100;
    return value;
}
```