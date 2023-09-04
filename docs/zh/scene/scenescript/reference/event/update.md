---
prev: ../../reference.md
---

# update事件

这个事件函数将在所有脚本的每一帧中被调用一次。事件函数的参数`value`是脚本对应属性的当前值。`value`的类型取决于脚本对应的属性类型。

```js
export function update(value) {
    // The initial value of the property this script is assigned to.
    return value;
}
```

Wallpaper Engine会尝试将任何数字返回值转换为[Vec2](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3)和[Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3)。例如，如果`比例`属性绑定的函数返回值为`2`，Wallpaper Engine会将值转换为`Vec3(2, 2, 2)`，以便它与`比例`属性的类型相匹配。

你还可以选择不返回任何值，这样属性将不会被修改。

## 关于帧率的注意事项

由于`update()`函数将在每一帧当中被调用，假如用户在Wallpaper Engine的设置中使用了高帧率，在相同时间内它将会被调用更多的次数。如果你要确保`update()`函数中的任何动画都能够按正常速度工作，请使用`engine.frametime`来标准化你的动画速度。

例如，如果你要想向上移动对象，请使用`engine.frametime`作为基准，然后将其乘以一个速度系数作为动画的速度。在以下示例中，我们使用`100`作为速度系数，你可以根据需要修改这个值：

```js
export function update(value) {
    value.y += engine.frametime * 100;
    return value;
}
```