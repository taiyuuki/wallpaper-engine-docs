---
prev: ../tutorials.md
---

# 使用 SceneScript 处理音频数据

使用 SceneScript，你可以访问当前用户设备上的音频频率。Wallpaper Engine收集音频频率的电平，并使其可供你进一步处理。在本教程中，我们将介绍获取音频数据的基础知识，我们将实现一个示例，在该示例中，我们将使元素的大小跟随用户正在播放的音乐节拍自动缩放。

::: tip
你可以在编辑器中快速访问此页面底部提供的最终解决方案，而无需从此页面复制粘贴任何代码。

要快速将此示例添加到壁纸中，只需单击要随着音乐节拍调整大小的属性旁边的齿轮图标。选择**绑定脚本**，打开脚本编辑器。接下来，单击顶部的**代码段**，然后单击**替换脚本**，从脚本列表中选择**音频因素**（Audio Scale），然后单击**确定**。
:::

> 译注：在编辑器中，Audio Scale被翻译为“音频因素”，容易令人费解，Scale是比例缩放的意思，Audio Scale要表达的意思应该是对象的大小跟随音频缩放，但为了避免有人找不到对应的选项，所以这里也将其译作“音频因素”。

## 注册音频缓冲区

首先，需要通过从[全局变量engine](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine)调用`registerAudioBuffers()`函数，让Wallpaper Engine初始化音频响应系统。该函数将返回一个[AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers)对象，我们建议将其存储在脚本顶部的`audioBuffer`变量中，这样在加载壁纸时只需调用此函数一次：

```js{3}
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	
	return value;
}
```

`registerAudioBuffers`的参数决定了你需要的频段数量，你应该始终选择最低限度的数值，以确保不会浪费系统性能或内存。有效的值是:

* `engine.AUDIO_RESOLUTION_16` - 16个频段
* `engine.AUDIO_RESOLUTION_32` - 32个频段
* `engine.AUDIO_RESOLUTION_64` - 64个频段

在我们的示例中，我们注册了 16 个频段，因为在我们的教程中我们只关心低音频率，不需要更精细的音频频段。

## 音频响应基本示例

让我们从一个非常基本的音频响应示例开始。我们有一个图像图层放置在壁纸的中心，我们希望让它随着音乐的节拍动态调整大小。为此，我们单击**比例**属性旁边的齿轮图标，然后选择**绑定脚本**。然后，我们就可以使用 SceneScript 修改比例了。

我们需要用创建的`audioBuffer`获取电平以扩展上面的示例。`audioBuffer`对象可以让我们访问`audioBuffer.average`获取左右音频通道的平均电平。你也可以只访问`audioBuffer.left`获取左音频通道，只访问`audioBuffer.right`获取右音频通道。

最后一步，我们需要选择音频频段。在Wallpaper Engine中，最常处理的是频段是低音频段，它们代表低音频率和音乐节拍。你可以通过访问第一个元素`audioBuffer.average[0]`来获取低音频段。这里的[0]代表低音频段，而15则代表高音频段。选择[0]是因为我们希望元素随着音乐的节拍动态的调整大小。

```js
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = audioBuffer.average[0];
	value.y = audioBuffer.average[0];
	value.z = audioBuffer.average[0];

	return value;
}
```

::: danger
我们不建议在壁纸中使用此代码示例，请遵循页面的剩余内容，了解如何改进此实现。
:::


如果现在保存此脚本，并在播放音乐时点击**运行预览**，则图像图层将根据音乐的低音频率动态调整大小。观看以下视频以预览此代码示例：

<video width="100%" controls >
  <source :src="$withBase('/videos/scenescript_basic_audio.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 改进音频响应行为

我们之前的示例有几个问题，我们现在一一解决：

* 当没有播放音频时，比例为0时元素消失。
* 当电平达到峰值电平时，该元素可能会变得非常大。
* 动画看起来不是很流畅，并且跳来跳去不规则。

## 强制最小默认大小

有多种方法可以实现最小大小，但我们在这里给出的示例是我们推荐的方法，因为它可以让你以后在编辑器中轻松修改默认大小。

首先，在编辑器中将 **比例** 属性设置为所需的值。在我们的示例中，我们将图像图层比例的**X**、**Y**和**Z**配置为0.5，合理的选择是让其小于1，以确保在图像放大时图像质量不会受到影响。

之后，我们通过引入`init`函数，`init`函数会在壁纸加载时调用一次，并将默认值赋值给**比例**。之后我们要在此默认值的基础上增加音频音量：

```js
	value.x = defaultScale.x + audioBuffer.average[0];
```

如果没有音频正在播放，则比例将与默认值相同，并且所有比默认值更大的声音都将在此基础之上进行增加。完整的脚本如下所示，请注意我们是如何在`init`函数中存储默认值的：

```js
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);
let defaultScale;

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = defaultScale.x + audioBuffer.average[0];
	value.y = defaultScale.y + audioBuffer.average[0];
	value.z = defaultScale.z + audioBuffer.average[0];

	return value;
}

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function init(value) {
	defaultScale = value;
	return value;
}
```

::: tip
你可以在 SceneScript 编辑器中快速添加`init`函数，方法是单击顶部的**代码段**，然后选择**插入函数**，选择**init**。
:::

## 限制最大音频响应

现在，音频响应动画具有最小默认值，但仍可能变得非常大。需要注意的是，音频缓冲区通常不会大于`1.00`，但是，在某些情况下不排除会发生。因此，我们建议始终限制正在使用的值。你可以使用`Math.min()`函数轻松地将数字限制为不超过特定的值。在我们的例子中，我们通过`Math.min()`限定`audioBuffer.average[0]`的最大值为`1.00`：

```js
	value.x = defaultScale.x + Math.min(audioBuffer.average[0], 1.00);
	value.y = defaultScale.y + Math.min(audioBuffer.average[0], 1.00);
	value.z = defaultScale.z + Math.min(audioBuffer.average[0], 1.00);
```


如果你需要对音频数据进行更复杂的处理，应使用未被限制的原始音频数据，仅在最后一步对其进行限制。在本页的下一节中，我们只在最后一步对音频数据使用`Math.min()`进行处理。

## 平滑音频响应

我们需要解决的最后一个问题是音频可视化不流畅。每次Wallpaper Engine渲染新帧时都会调用`update()`函数。这意味着，如果音频音量在短时间内发生剧烈变化，则值可能会在帧之间显着跳跃。请结合后面的代码来阅读下面的段落，它其实并不像看起来那么复杂！

我们可以通过添加一些额外的代码来平滑过度音频响应。首先，我们需要声明一个新变量，用于存储多次`update()`调用时的音频响应，我们将此变量命名为`smoothAudioVolume`并在函数外部将其初始化为`0`，

接下来，我们计算当前音频音量与先前音频音量（存储在`smoothAudioVolume`中）之间的差异，以查看自计算最后一帧以来电平发生了多少变化。我们将此结果存储在名为`volumeDifference`的变量中。

我们在下一步中使用`volumeDifference`乘以一个平滑乘数，在我们的示例中，我们将平滑乘数放在代码顶部的常量`SMOOTHING_RATE`中，其值为15，你可以更改此数字以增加或减少平滑级别。

我们还需要将其乘以`engine.frametime`，这很重要，因为我们需要用每帧的时间来调整不同 FPS 设置中的动画速度，否则在不同的FPS设置下，速度会有所不同。请记住，`update()`函数每帧调用一次，这意味着，如果你的 FPS 限制为 60，则该函数将每秒被调用 60 次。如果你的 FPS 限制为 30 ，则只会被调用 30 次。

最后，我们将计算结果赋值给`smoothAudioVolume`变量。在我们的实际上代码中，只有这一行：

```js
	smoothAudioVolume += volumeDifference * SMOOTHING_RATE * engine.frametime;
```

就像前面的部分一样，我们使用`Math.min()`将电平的峰值限制为`1.00`。

然后，我们只需在`update()`函数的末尾返回`smoothAudioVolume`。之前我们修改了`value`的值并专门设置`了value.x`和`value.y`，但是如果你清楚的知道三者是同一个值，则可以返回一个数字，Wallpaper Engine 会自动将该数字应用于三个值。这一点同样适用于`Vec2`属性。

最终代码现在如下所示：

```js{4,7,15,18,21}
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);
const SMOOTHING_RATE = 15;

let defaultScale;
let smoothAudioVolume = 0;

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
 export function update(value) {
	// Calculate difference in audio volume between last frame and now
	let volumeDifference = audioBuffer.average[0] - smoothAudioVolume;

	// Add difference between previous and current frame, include frametime to account for FPS
	smoothAudioVolume += volumeDifference * SMOOTHING_RATE * engine.frametime;

	// Limit value to 1.00 to ignore excessive audio levels
	smoothAudioVolume = Math.min(smoothAudioVolume, 1.00);

	// Wallpaper Engine will create a Vec3 object for us if we just return a number here
	return smoothAudioVolume;
}

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function init(value) {
	defaultScale = value;
	return value;
}
```

你可以在以下视频中看到此操作的结果。动画现在变得更加流畅，即使没有播放音频，我们的对象仍然可见，并且永远不会变得过大：

<video width="100%" controls >
  <source :src="$withBase('/videos/scenescript_smoothened_audio.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>