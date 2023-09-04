---
prev: ../../reference.md
---

# applyUserProperties事件

这个事件函数将在两种情况下被调用:

* 当壁纸加载时，这个事件函数将被调用一次。
* 每当用户调整用户属性设置时，这个事件函数将被调用。

```js
export function applyUserProperties(changedUserProperties) {

}
```

参数`changedUserProperties`将包含你创建的特定用户属性的键名（关键字）。你可以通过`changedUserProperties.keyname`访问属性，其中`keyname`是在项目设置中分配给属性的关键字。例如，如果你有一个`color`属性，它将通过`changedUserProperties.color`来访问。

::: warning 重要
  壁纸加载事件后，参数将只包含被更改的属性。因此，强烈建议你检查当前事件是否包含某个值，我们建议使用`hasOwnProperty()`函数来检查。
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

## 使用示例

在下面的示例中，我们使用一个复选框属性选择性地在我们的`update()`函数中禁用一些代码。

在这个例子中，我们为**颜色**属性绑定脚本，并创建键名为`iscolorful`的复选框用户属性，它将用来禁用我们在彩虹色中循环的代码。为了实现这一点，我们需要一个名为 *"Is Colorful?"* (在这种情况下，关键字将自动生成为`iscolorful`)复选框属性，并给组件的**颜色**属性绑定脚本。

我们在脚本中创建`applyUserProperties`事件函数以确保Wallpaper Engine发送属性的任何更改。

我们先检查事件中是否包含`iscolorful`用户属性：

```js
 if (changedUserProperties.hasOwnProperty('iscolorful'))
 ```

然后我们将用户属性保存在名为`isColorful`的局部变量中，并在`update()`函数中检查`isColorful`是否为true，以判断是否禁用彩虹色相关的代码。

你可以在此查看完整的示例:

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