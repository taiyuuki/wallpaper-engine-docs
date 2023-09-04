---
prev: ../../reference.md
---

# init事件

这个事件函数将在对象创建后不久被调用。它对于修改或获取属性的**初始值**非常有用。例如，由于`update()`函数每秒会被调用很多次，你应该尝试在`init()`函数中编写不需要每帧重新计算的代码，以优化性能。

Wallpaper Engine会尝试将任何数字返回值转换为[Vec2](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3)和[Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3)。例如，如果`比例`属性绑定的函数返回值为`2`，Wallpaper Engine会将值转换为`Vec3(2, 2, 2)`，以便它与`比例`属性的类型相匹配。

## 使用示例

在下面的示例中，我们使用`init()`事件将用户属性的初始值存储在变量`initialValue`中，这有一个好处是我们可以给`update()`函数使用的元素位置指定一个初始值。我们也可以在`update()`函数中以固定的算法使用`initialValue.y`的值。

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

你还可以选择不返回任何值，这样属性将不会被修改。