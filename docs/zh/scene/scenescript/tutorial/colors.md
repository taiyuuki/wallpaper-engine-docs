---
prev: ../tutorials.md
---

# 使用 SceneScript 修改颜色

在本指南中，我们将介绍如何使用 SceneScript 修改对象的颜色。我们将介绍如何利用`WEColor`模块轻松切换颜色，而不必手动处理 **RGB** 值。与往常一样，这只是一个示例，你可以以更复杂的方式修改颜色并创建自己的自定义行为。

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/scenescript_color.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 颜色属性和SceneScript

Wallpaper Engine中的 color 属性始终用[Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3)对象表示。这三个属性表示三个 RGB 颜色通道：

* `x`: 红色通道（R）
* `y`: 绿色通道（G）
* `z`: 蓝色通道（B）

你可以根据自己的喜好使用 SceneScript 修改这些 RGB 值，值的范围是从0到255。

## 彩虹色示例

要实现彩虹色示例，首先在壁纸中选择一个图像图层。然后单击 **色调颜色** 属性旁边的齿轮图标，选择**绑定脚本**并在脚本编辑器里进行查看。

### 利用WEColor模块

SceneScript 提供了[WEColor](/wallpaper-engine-docs/scene/scenescript/reference/module/WEColor)模块，该模块包含一些实用函数，能让你更轻松地处理颜色。在我们的示例中，我们希望不断改变颜色。如果使用RGB来实现是相当繁琐的，更好的做法是使用**HSV**颜色，而不是标准的RGB。

如果你还不熟悉 HSV：它是由表示颜色的三个值构成：色调（也叫色相，Hue），饱和度（Saturation）和亮度（Value）。其中只有**色调**用来表示颜色，这对于我们处理颜色会非常方便，因为我们只需要修改单个值，而不必处理RGB三个颜色值。

我们首先将`WEColor`模块导入到脚本中：

```js
import * as WEColor from 'WEColor';
```

在`update()`函数中，我们利用`WEColor.hsv2rgb()`函数为每一帧生成新的 RGB 值。`WEColor.hsv2rgb()`函数将一个表示HSV值的`Vec3`对象作为参数，动态生成RGB值，如下所示：

```js
	value = WEColor.hsv2rgb({
		x: engine.runtime * 0.25,
		y: 1,
		z: 1
	});
```

如你所见，我们主要关心这里的`x`值，它代表了颜色的色调（Hue）值。我们让它与`engine.runtime`变量一起增加。只要加载并运行壁纸，`engine.runtime`变量就会不断增加，因此我们就有了无限的颜色变化。在我们的示例中，我们将该值乘以 0.25 以减慢变化速度，你可以根据自己的需求增加或减小此值。

**饱和度** `y` 和**亮度** `z` 则始终维持最大值1。

## 完整的彩虹色解决方案

下面是完整的彩虹色解决方案。我们将速度移动到脚本顶部命名的常量值`RAINBOW_SPEED`中，这样会更易于阅读和修改，并且我们对 HSV 颜色的饱和度和亮度也做了同样的事情。我们只需要简单地修改单个值，我们的 color 属性现在将以恒定的速度在所有颜色之间变换。

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
你可以在 SceneScript 代码编辑器中方便地获取此示例，方法是单击顶部的**代码段**，然后单击**替换脚本**，选择**彩虹颜色**。这会将当前元素的所有现有代码替换为上面的彩虹示例。
:::