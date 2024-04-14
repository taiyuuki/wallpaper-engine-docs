# 高级照明指南

默认情况下，你放置在编辑器中的光源发出的是静态光。在某些情况下，引入运动或脉动闪烁会很有用。在本指南中，我们将介绍一些使用[时间轴动画](/wallpaper-engine-docs/scene/timeline/introduction)和 [SceneScript](/wallpaper-engine-docs/scene/scenescript/introduction) 调整照明的方法。

::: danger 请注意
本文将专注于启用了照明的图像图层。在继续阅读本文之前，你应该已阅读并理解照明和反射指南：

* [实时照明和反射](/wallpaper-engine-docs/scene/lighting/introduction)

另外请注意，在某些情况下，你可以使用[脉动效果](/wallpaper-engine-docs/scene/effects/effect/pulse)来实现类似的效果，而无需依赖更复杂的实时照明设置。
:::

本文讨论以下主题：

[[toc]]

## 光照类型

### 点光源

默认光源类型是简单的点光源。调整其半径将决定光将传播多远，而调整强度将调整光在其半径内的亮度。

### 聚光灯

聚光灯会在指定的方向上发出锥形光。将聚光灯设置在正确的 **高度**，并调整其角度以朝向你要照射的物体。

你可以使用编辑器配置聚光灯的内光锥和外光锥，如以下视频所示：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_spot.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

在更高级的方案中，你也许希望能控制光线照射壁纸的角度。例如，可以向内旋转聚光灯，使其看起来好像从壁纸上层往下照射的。请看下面这个例子，看聚光灯是如何被转动的：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_spot_advanced.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 荧光灯

灯管从定义的起点向终点沿直线发出光。这两个点的位置都可以使用 **SceneScript** 或**时间轴动画**进行控制和移动。

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_tube.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 定向光

与聚光灯不同，定向光在壁纸内没有固定的位置，改变其位置不会产生任何可见的效果，因为它将始终照射整个壁纸。但是，你可以使用控件转动它所面向的方向，如编辑器中的 3D 箭头所示。

简而言之，当你想从特定角度将一条光线均匀地照射到整个壁纸上时，最好使用定向光。

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_directional.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 纹理投影

**聚光灯** 能够投射纹理，而不是单一的纯色光。这可以让你使用图像、视频文件甚至图层（包括所有效果）作为投影纹理来创建更复杂的照明场景。

要投影纹理，请先将光源类型设置为 **聚光灯** ，然后启用 **投影纹理** 选项。启用 **投影纹理** 后，将显示用于导入投影纹理的新选项。单击 **浏览** 按钮导入视频或图像文件，或将现有图层拖到投影纹理字段中。特别是后一个，可以让你在 2D 和 3D 壁纸中创建复杂的照明。

### 示例: 将图层作为投影纹理

在接下来示例中，我们将展示如何组合图层和效果用以快速创建高级照明方案。虽然此示例是在 3D 壁纸中创建的，但你也可以在 2D 壁纸中执行所有这些步骤，只需将投影图层设置为不可见即可。

首先，我们创建一个新的 **文本图层**，并将其文本设为多个`_`字符组成一条直线：`__________`，将填充设置为0 。或者你也可以导入一个具有你自己指定图案的新图像作为图层，文本图层只是一个示例，用来展示可处理动画的多功能性。

然后，我们给图层添加 **滚动** 效果，并将`X`的滚动速度设置为`0`关闭水平滚动。这样文本行就会从图层的底部向顶部滚动。

接下来，我们在聚光灯上启用 **投影纹理**。我们不用导入纹理，而是将文本图层从左侧拖到投影纹理中。这样灯光就会投射文本图层的滚动效果。

这里查看整个过程：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_texture_projection.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

请注意：为了在上面的示例视频中实现准确的视觉效果，我们启用了 **体积光** 和场景设置中的**超后处理HDR**，尽管这不是此功能所必须的。

## 照明动画

你可能希望为照明制作动画，例如闪烁动画。可以使用 SceneScript 或时间轴动画来实现。

### 时间轴脉动动画

创建脉动效果的最简单方法是对光源的 **强度** 属性使用时间轴动画。我们通常建议对光源的 **强度** 而不是 **半径** 进行动画处理，因为这样产生的效果更自然。如果你尚未使用过时间轴动画，我们建议你先阅读有关时间轴动画的介绍性教程，然后再继续：

* [时间轴动画介绍](/wallpaper-engine-docs/scene/timeline/introduction)

最简单的脉动效果可以通过创建时间轴动画来实现，该动画将 **强度** 从 1.00 变换到 2.00，然后再回到 1.00。但是，在我们的示例中，我们希望实现更丰富闪烁效果，模仿火源。

首先，我们给光源的 **强度** 属性添加时间轴动画，先选中光源，然后单击 **强度** 旁边的齿轮图标，选择 **绑定时间线动画** 并创建一个持续时间为 4 秒的时间轴动画。

为了实现类似于随机闪烁的光，我们希望不规则地上下改变强度的值。我们以 1.00 的强度值开始，作为时间轴动画的第一帧，然后每几帧动画以不同的强度从 **0.1** 到 **2.0** 上下变动。时间轴动画的第一帧和最后一帧的值均为 1，以便平滑过渡，这一点很重要。

动画完成后，我们将光源稍微移离墙纸的可见区域，给人一种屏幕外燃烧着火焰的感觉。

你可以在以下视频中看到该过程和最终结果：

<video width="100%" controls>
  <source :src="$withBase('/videos/pbr_light_timeline.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 基于 SceneScript 的脉动效果

在上面的时间轴动画部分，我们通过时间轴动画手动创建光源的随机闪烁。除此之外，我们还可以通过将 SceneScript 分配给光源的 **强度** 值以编程方式实现此目的。先选中光源，然后单击 **强度** 旁边的齿轮图标，选择 **绑定脚本**，不要同时绑定时间轴动画和脚本，以避免意外行为。

绑定脚本后，你将看到一个空的`update`函数。在我们的例子中，我们创建了一条上下波动的正弦曲线，它看起来就像火在随机闪烁，就像之前的例子一样。你可以复制粘贴我们的方案，也可以应用自己的逻辑。

```js
'use strict';

/**
 * @param {Number} value - for property 'intensity'
 * @return {Number} - update current property value
 */
export function update(value) {
	return 1 + 0.3 * Math.sin(engine.runtime * 7.33) + 0.2 * Math.sin(engine.runtime * 9.77);
}
```

你可以随意对光照强度的变换逻辑进行编程，SceneScript 为你提供了绝对的自由，因此你可以根据自己的想法使其简单或使其更复杂。在下一节中，我们将展示如何使用 SceneScript 将音频输入到光照的强度级别中。

## 音频响应光照

使用 SceneScript，你还可以根据系统音频的音量级别更改光照的强度，使光照对音频具有响应性。实现此目的的最简单方法是使用我们为你准备的代码片段。

选中光源，然后单击 **强度** 旁边的齿轮图标，选择 **绑定脚本**。然后找到顶部的 **代码段**，并将鼠标悬停在 **替换脚本**上。然后选择 **音频因素（number）**，代码将立即替换为音频脚本。然后 **确定**。现在再选中光源时，你会发现属性页面多了一个蓝色框，是音频相关的属性，你需要稍微调整它们以使其正常工作。请尝试使用以下设置：

* **音频频率：** 0 - *值为 0 表示脚本将监听节拍/低音*
* **音频响应：** 15 - *引入平滑，值越高意味着平滑越少*
* **最小：** 0.2 - *使用它来配置灯光的最小强度，如果没有声音播放时需要关闭灯光，请将其设置为 0*
* **最大：** 3 - *播放响亮音频时光照可达到的最大强度*


::: details 单击此处查看代码 (高级)
选中光源，然后单击 **强度** 旁边的齿轮图标，选择 **绑定脚本**。将默认代码替换为以下代码片段。可以在代码片段下方和代码注释中找到进一步的说明。

```js
'use strict';
	
/**
 * 控制平滑和频率
 */
const FREQUENCY_RESOLUTION = 16; // 必须为 16，32 或 64
const SOURCE_FREQUENCY = 0; // 0 表示脚本将监听基音/节拍。15 表示高音频率

const SMOOTHING = 16; // 较低值意味着更平滑
const MIN_VALUE = 1; // 最低灯光强度. 如果没有声音播放时需要关闭灯光，请将其设置为 0
const MAX_VALUE = 2; // 最大灯光强度

const VALUE_DELTA = MAX_VALUE - MIN_VALUE;


/**
 * 创建链接到音频的响应数据
 */
let audioBuffer = engine.registerAudioBuffers(FREQUENCY_RESOLUTION); // 添加系统音频级别到代码
var smoothValue = 0;
var initialValue;

/**
 */
export function update() {
	let audioDelta = audioBuffer.average[SOURCE_FREQUENCY] - smoothValue;
	
	smoothValue += audioDelta * Math.min(1.0, engine.frametime * SMOOTHING);
	smoothValue = Math.min(1.0, smoothValue);

	return (initialValue * (smoothValue * VALUE_DELTA + MIN_VALUE)) / 2;
}

/**
 */
export function init(value) {
	initialValue = value;
}
```

我们在代码段的顶部放置了一些常量变量，你可以根据自己的喜好调整这些变量。在大多数情况下，主要需要更改的值是`SMOOTHING`, `MIN_VALUE` 和`MAX_VALUE` 。

`SMOOTHING` 可以确保光照不会在每个节拍突然亮起，而是在平滑的曲线上增加和减少。你可以降低平滑值以增加平滑度，较高的值会起到相反的作用，使光照对声音的反应更快。1 - 50 之间的值效果很好。

`MIN_VALUE` 和 `MAX_VALUE`定义光照的最低和最高强度。在上面的示例中，光照的强度 至少为 1，如果你希望在没有播放声音时完全关闭灯光，则可以将其更改为 0。
:::

## 光照运动

光照也可以在场景中动态移动。对于大多数用例，我们建议在 **起点** 属性上使用时间轴动画。在开始制作动画之前，你应该注意，与 2D 场景中的大多数对象不同，灯光的 Z 轴位置很重要。你可以将 Z 轴位置视为壁纸上方光源的高度，这也是 Wallpaper Engine 在控制 Z 轴位置的光源属性下方提供一个 **高度** 滑块的原因。例如，高度与法线贴图就是密切相关的。在大多数情况下，你可以使用默认值，但你可以尝试一下，看看不同的高度是否更适合你的特定用例。

要创建动画，我们首先选中光源，然后单击 **起点** 属性旁边的齿轮图标，我们选择 **绑定时间轴动画** 创建一个持续时间为 5 秒的时间轴动画。

在我们的示例中，我们想要创建一个在顶部飞行的灯光，它可能看起来像燃烧的弹射火器或是类似的东西，尽管在不同的场景中，它也可能是流星或其他一些头顶灯。我们首先将灯光移动到右侧的起始位置。然后，我们选择动画的最后一帧，并将灯光移动到屏幕的左侧。点击播放按钮，应该可以看到灯光从右到左的移动，之后它会传送回起点。

现在，我们在时间轴中间选择一个关键帧，然后向上移动光线。点击播放动画，应该可以看到光照向上飞，然后又飞回去。

### 光源淡入和淡出

由于光照在离角色很远的地方也会被反射，我们会看到光照到达最左侧时会突然跳到右侧。为了解决这个问题，我们需要将光源的 **强度** 属性添加到现有动画中。单击 **强度** 旁边的齿轮图标，选择 **绑定时间轴动画**，然后将动画添加到现有的 **起点** 属性动画中。

现在，你会在时间轴动画的属性列表中看到 **强度**。右键单击它，选择 **显示单个**，以便于我们专注于 **强度** 属性。另外，请务必点击动画右侧的放大镜图标，用以重新对齐动画图表。移动到动画的第一帧，将强度降低到 0。这样在动画开始时，光照完全变暗且不可见。向前移动几帧，并增加强度，在我们的例子中，我们将其设置为 2。然后，我们移动到动画的末尾，并创建一个新的关键帧，再将其值设为 2。这就是再次淡出光照的时刻。最后一步是移动到动画的最后一个关键帧，将强度设置为 0，与起始帧的强度相同。

基本上，光照现在实现了动画的淡入，并在结束时淡出，从而防止光源出现任何明显的突然跳跃。

你可以在以下视频中看到此完整过程：

<video width="100%" controls>
  <source :src="$withBase('/videos/pbr_light_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 让光源跟随鼠标

使用 **SceneScript**，你还可以动态地将光源附加到鼠标光标的位置，这实质上是将鼠标变成照射到场景上的 *闪光灯*。

![Real-time lighting and reflections](/wallpaper-engine-docs/img/pbr/pbr_mouse.gif)

如上一节关于光照运动所述，光具有预定义的高度。由于鼠标光标始终处于 0 的高度，因此我们需要确保 Z 轴位置不变。首先，选中要跟随鼠标光标的光源，然后在 **原点** 属性旁边，单击齿轮图标，选择 **绑定脚本**。

你可以复制粘贴以下脚本替换默认创建的模板。脚本本身相当简单，它将光源 `x` 和 `y` 的位置设置为等于鼠标光标的 `x` 和 `y` 位置，它们通过`input.cursorWorldPosition`来获取。但我们有目的地省略了 `z` 值，以确保光线保持为预定的高度：

```js
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = input.cursorWorldPosition.x;
	value.y = input.cursorWorldPosition.y;
	return value;
}
```
