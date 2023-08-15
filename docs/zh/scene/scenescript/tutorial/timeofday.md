# 使用 SceneScript 更改时间

在本教程中，我们将介绍 SceneScript 如何根据当前时间更改壁纸的某些部分。我们的示例会很具体，但实际你可以通过[**engine.timeOfDay**](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine.html#timeofday-number)简单获取当前时间，以便实现您的想法或自定义逻辑。

或者，您也可以使用 *ECMAScript* 的`Date`类来访问当前的小时、分钟、秒和更多与日期相关的数据，就像在其他语言（如 *JavaScript*）中一样。

## 根据时间更改背景图像

我们将探讨如何利用[混合效果](/wallpaper-engine-docs/scene/effects/effect/blend)根据当前时间多次更改整个背景图像。我们强烈建议您使用*混合*效果，而不是使用多个图像图层，以减少对显存的消耗。这可以显著提高性能，尤其是对于图像图层。

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/timeofday.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 混合效果的基础图像

首先添加一张午夜图像作为壁纸的基础图像。在我们的例子中，它是一个窗户的夜间版本，如上面的动画所示。我们将用 SceneScript 逻辑令此图像在时钟到达午夜时刻00：00：00时显示。

添加午夜图像图层后，向其添加 [混合效果](/wallpaper-engine-docs/scene/effects/effect/blend) ，然后继续本教程的后续步骤。

### 混合模式

选择已添加到的混合效果。首先，确保**混合模式**选项的设置是**Normal**（正常模式）。这是为了确保混合纹理以其原始状态呈现，而不受其他混合纹理的影响。在某些情况下，您可能希望出于艺术目的偏离这一点，但在大多数情况下，**Normal**选项应该是最佳选择。

### 纹理数量

 配置混合模式后，将**纹理量**选项设置为除基础图像以外，要在一天中显示的附加图像数量。在我们的例子中，除了代表午夜的基本图像之外，我们还有**三个**额外的图像，因此我们将值设置为**3**：

1. 黎明
2. 中午
3. 黄昏

加载其他纹理最快捷的方法是将它们直接拖到编辑器**混合纹理**框中，并确保图像按一天从开始到结束的正确顺序。

请参阅以下视频，了解以上步骤：

<video width="75%" style="margin:0 auto;display:block;" controls autoplay loop>
  <source :src="$withBase('/videos/blend_textures.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

You should now see the last blend texture as your wallpaper texture, since the last blend texture is overlapping all other textures right now.

你现在可以看到最后一个混合纹理作为壁纸图像了，因为最后一个混合纹理覆盖了所有其他纹理。

### 混合量的 SceneScript 逻辑

现在就是SceneScript发挥作用的时候。我们需要使用 SceneScript 更改**混合效果**属性列表底部的**混合量**选项，以便每个纹理在一天中的特定时间开始出现。我们可以使用 SceneScript 实现此目的，方法是混合量从0开始，然后在达到一天中的特定时间时平滑地将该值增加到1。

单击第一个**混合量**旁边的齿轮图标，然后选择**绑定脚本**，然后将现有示例脚本替换为以下代码片段：

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

此代码片段使用两个Wallpaper Engine SceneScript功能:

* [**engine.timeOfDay**](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine.html#timeofday-number) 表示当前一天当中的时间，值的范围是0.00-1.00，而不是秒，其中0.00代表00:00:00,而1.00代表23:59:59。
* [**WEMath.smoothStep()**](/wallpaper-engine-docs/scene/scenescript/reference/module/WEMath.html#smoothstep-min-number-max-number-value-number-number) 这是一个函数，它可以平滑地计算两个值之间的值，我们用它来从一个纹理平滑地混合到下一个纹理。

将此脚本添加到每个**混合纹理**的混合量。确保始终重新配置`START_HOUR`和`END_HOUR`值，以控制每个混合纹理在一天中的什么时间出现。

常量`BLEND_DURATION`的默认值`0.004`会让两个相邻混合图层之间的平滑过渡正好持续14.4秒，您可以根据自己的喜好稍微调此值，但请确保对所有图层使用相同的值。每增加`0.001`会使混合时间延长3.6秒。

仔细检查混合图层之间是否没有留下任何间隙，您设置的各个时间段应涵盖一整天，而没有跳过一天中的任何时间。唯一的例外是在午夜，因为默认情况下，基本图像在午夜始终可见。

在我们的示例中，我们设置的值如下，但您可以根据自己的喜好调整它们：

**混合量:**
```js
const START_HOUR = 7;
const END_HOUR = 10;
```

**混合量2:**
```js
const START_HOUR = 10;
const END_HOUR = 18;
```

**混合量3:**
```js
const START_HOUR = 18;
const END_HOUR = 22;
```

如果你的昼夜周期包含不同数量的混合纹理，则需要适当地重新分配每个纹理的涵盖时间。

在我们的示例中，基础的午夜纹理在早上7：00之前可见，最后一个混合纹理淡出之后，在晚上22：00将再次可见。您不需要配置午夜图像纹理，因为其他混合纹理都不可见时，它就会变为可见。