# 播放媒体数据

本指南建立在[集成专辑封面](/wallpaper-engine-docs/scene/audiovisualizer/albumcover)功能之上。虽然在本节中讨论的任何内容中，专辑封面集成不是必需的，但我们仍然建议您先阅读集成专辑封面的指南，然后再继续阅读本指南。虽然本指南建立在集成专辑封面指南之上，但您可以完全独立地使用所有功能。

## 显示歌曲标题，专辑标题和艺术家姓名

在本节中，我们将讨论如何将歌曲信息添加到壁纸中。请注意，如果某些数据不是由相应的媒体播放器传输的，或者音频文件不包含某些信息，则无法使用。例如不能保证歌曲文件一定包含专辑标题。

### 创建文本元素

首先，我们需要为要显示的每个元素创建**文本**图层。单击左侧的**添加组件**，然后向墙纸添加新的**文本**图层。

对于具有动态内容的文本图层，您需要记住的一件事是，它们可能会很长。这就是为什么正确配置媒体信息的文本层很重要：

1. 调整**点大小**以更改文本图层的大小。不要通过更改文本图层**比例**的方式调整大小，这样会降低文本显示的清晰度。
2. 将**水平对齐方式**设置为**左对齐**，并相应调整文本的位置。
3. 勾选**限制宽度**选项并使用编辑器中显示的紫色虚线调整最大宽度。这在处理动态文本（如歌曲标题）时尤其重要，因为它们可能很长。
4. 勾选**限制行**选项并将限制设置为**1**（或其他值）。
5. 最后，您可能希望勾选**溢出省略号**选项。这将截断太长的文本，并将结尾替换为三个点“...”表示文本被切断。

您可以在以下视频中看到设置及其最终结果：

<video width="100%" controls>
  <source :src="$withBase('/videos/media_text_settings.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 通过SceneScript集成专辑数据

* Song Title
* Album Title
* Artist Name

为要添加的每种类型的音乐数据创建一个文本元素。的最简单方法是创建一个**文本**图层，按照上一节中的说明对其进行配置，设置字体和字体大小。可以使用文本图层上的**复制**功能（右键单击文本图层，然后选择**复制**）。重复此操作，直到每个数据都有一个图层。在我们的例子中，我们将创建三个最常见（也是最可靠）的层：

* 歌曲名称
* 专辑名称
* 艺术家姓名

![Media Text Layers Example](/wallpaper-engine-docs/img/tutorials/media_text_layers.png)

创建好每个图层后，可以利用 SceneScript 中的[MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent)来检索所需的数据。为此，请选择第一个图层（例如歌曲图层），然后单击图层的**文本**属性旁边的齿轮图标并选择**绑定脚本**。您将看到一个示例代码片段，您可以用下面的示例代码替换它。

将相应的 SceneScript 代码复制到图层，然后对所有文本图层重复此过程：

::: 点击显示歌曲标题代码

```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.title;
}
```
:::

::: 单击以显示专辑名称代码
```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.albumTitle;
}
```
:::

::: 点击显示艺术家姓名代码
```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.albumArtist;
}
```
:::

将代码复制到每个相应的文本层并使用编辑器顶部的**运行预览**后，开始使用兼容的媒体播放器播放音乐。您现在应该看到所有对应的数据都将出现，前提是您的媒体播放器将实际数据发送给了Windows。

## 通过SceneScript获取并使用专辑封面颜色

您还可以通过[mediaThumbnailChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media)事件访问专辑封面颜色，特别是以函数参数形式提供的[MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent)类的实例。

**在此示例中，我们将展示如何更改整个壁纸的背景颜色以匹配专辑封面。**

::: danger 请注意
在此示例中，我们将更改背景颜色。只有当您的整个壁纸没有背景图像时，这才有意义。

**此处显示的代码适用于编辑器中的任何颜色属性。您还可以将其应用于编辑器中任意文本图层颜色或任意其他颜色属性。**
:::

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/media_colors.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

要开始使用，请在编辑器中任意元素上选择颜色属性。这里我们将更改壁纸整体的背景颜色，我们需要选择编辑器左上角的场景选项。然后，我们单击**背景颜色**属性旁边的齿轮图标，选择**绑定脚本**，将示例脚本替换为以下代码：

```js
'use strict';

// Set a default color here: "0, 0, 0" (RGB) means black by default
let color = new Vec3(0, 0, 0);

/**
 * @param {Vec3} value - for property 'clearcolor'
 * @return {Vec3} - update current property value
 */
export function update() {
	return color;
}

/**
 * @param {MediaThumbnailEvent} event
 */
export function mediaThumbnailChanged(event) {
	color = event.primaryColor;
}
```

代码将分配给属性`event.primaryColor`颜色。`primaryColor`是Wallpaper Engine擎在[MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent)中提供的众多颜色之一，有关可以使用的完整颜色列表，请参阅**MediaThumbnailEvent**页面。请务必注意，`textColor`将有一个始终让文本易于阅读的值`primaryColor`。如果在动态背景上添加文本，则可以使用文本的`textColor`属性以确保文本始终易于阅读。

### 添加简单的颜色过渡

你还可以使用简单的颜色过渡动画扩展前面的代码示例。使用以下代码片段，其中新旧颜色在`update()`函数执行期间不断相互转换：

```js
'use strict';

// Adjust this constant to change the duration of the transition
const DURATION = 1;

let newColor = new Vec3(0, 0, 0);
let oldColor = new Vec3(0, 0, 0);
let timer = DURATION;

/**
 * @param {Vec3} value - for property 'clearcolor'
 * @return {Vec3} - update current property value
 */
export function update() {
	var color = newColor;
	if (timer < DURATION) {
		color = newColor.subtract(oldColor).multiply(timer / DURATION).add(oldColor);
		timer += engine.frametime;
	}
	return color;
}

/**
 * @param {MediaThumbnailEvent} event
 */
export function mediaThumbnailChanged(event) {
	timer = 0;
	oldColor = newColor;
	newColor = event.primaryColor;
}
```

## 停止播放时隐藏媒体播放元素

如果用户未主动播放任何音频，则需要隐藏专辑封面和其他与媒体相关的元素。为此，请选择要在媒体播放停止时隐藏的元素，然后单击右上角**眼睛符号**旁边的齿轮图标。然后选择**绑定脚本**并使用以下代码片段：

```js
'use strict';

/**
 * @param {MediaPlaybackEvent} event
 */
export function mediaPlaybackChanged(event) {
	thisLayer.visible = event.state !== MediaPlaybackEvent.PLAYBACK_STOPPED;
}
```

此代码段将确保当用户停止媒体播放或从未开始任何媒体播放时，该元素将被隐藏。请注意，Wallpaper Engine区分了停止播放和暂停播放：如果用户只是暂停媒体播放，该元素将保持可见。

## 更多媒体数据

要全面了解更多媒体数据，可以查看相关的SceneScript事件参考页面:

* [SceneScript媒体事件](/wallpaper-engine-docs/scene/scenescript/reference/event/media)
