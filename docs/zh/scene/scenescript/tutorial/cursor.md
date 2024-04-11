---
prev: ../tutorials.md
---

# 鼠标点击事件与SceneScript

SceneScript 提供了一些与鼠标相关的事件，可让你对鼠标移动和鼠标点击做出响应。请务必查看鼠标事件的参考页快速了解其概述：

* [SceneScript鼠标事件](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor)

在这个页面，我们将向你展示一些可以应用于壁纸的用例。

## 鼠标点击播放声音

为了实现点击壁纸元素播放声音，你首先需要将声音文件导入编辑器。导入声音文件后，选择它并更改以下内容：

* 为声音层指定一个简洁且唯一的名称，之后将在 SceneScript 代码中用到它。默认情况下，使用的是音频文件的文件名。
* 将**模式**选项设置为**单**，以便声音只播放一次。
* 启用底部的**无声开始**选项，否则加载壁纸时声音将播放一次。

准备好声音层后，选择要单击以播放声音文件的层。对于像这样的常规事件，在Wallpaper Engine中没有专门定义它们的地方。习惯上，我们将鼠标单击事件放在右上角的**可见性**属性中。所以，单击图层右上角眼睛图标旁边的齿轮图标，然后选择**绑定脚本**：

![SceneScript Event Script Location](/wallpaper-engine-docs/img/scenescript/scenescript_event_script.png)

你将看到一个空的`update()`函数，你可以删除该函数，因为点击事件不需要它。为了对鼠标点击做出反应，我们需要`cursorClick()`函数。当用户单击Wallpaper Engine中的对象时，Wallpaper Engine将自动执行此函数。在事件函数中，我们需要用`thisScene.getLayer()`获取我们之前使用的声音层，并在其上执行`play()`函数以播放声音。

以下面的代码片段为例，你只需将`PLACEHOLDER`替换为声音层的实际名称即可。单击**确定**关闭 SceneScript 编辑器，然后单击编辑器顶部的**运行预览**，最后点击元素测试事件是否正常工作。

```js
'use strict';

const SOUND_LAYER_NAME = 'PLACEHOLDER';

/**
 * @param {CursorEvent} event
 */
export function cursorClick(event) {
	thisScene.getLayer(SOUND_LAYER_NAME).play();
}

```

::: tip
你无需将此示例复制粘贴到编辑器中，你可以在编辑器中快速访问此代码片段，通过单击**代码段**，然后单击**替换脚本**，你将在可用代码片段列表中找到**单击播放音效**。
::: 

## 鼠标点击运行时间轴动画

与上一教程类似，你还可以将此方法应用于[时间轴动画](/wallpaper-engine-docs/scene/timeline/introduction)。我们在图像图层的 **比例** 属性上生成时间轴动画。在设置时间轴动画的过程中，将**模式**设置为**单个**，这一点很重要，这样我们的动画就只会播放一次。然后为时间轴动画命名。在我们的例子中，将其命名为`LogoShake`：

![SceneScript Event Timeline Animation](/wallpaper-engine-docs/img/scenescript/scenescript_click_event_timeline.png)

现在，我们重复与上一节相同的步骤，在对象的可见性属性上创建一个`cursorClick()`函数。但是，在此示例中，我们需要获取并使用的是时间轴动画，而不是声音层。

为此，我们首先调用`thisLayer.getAnimation()`，在这里，如上所述，我们为时间轴动画填写了一个唯一的名称，以便我们可以将其名称放在`getAnimation()`函数的参数中，这一点很重要。最后，我们可以在动画上调用`play()`函数，该函数将在单击时播放动画。请参阅下面的完整示例，你只需确保将`LogoShake`替换为时间轴动画的名称即可。

```js
'use strict';

/**
 * @param {CursorEvent} event
 */
export function cursorClick(event) {
	thisLayer.getAnimation("LogoShake").play();
}
```

现在，当我们单击我们的对象时，我们的时间轴动画将播放一次，如以下视频所示：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/scenescript_click_event_timeline.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
理论上，我们在此页面上介绍的内容适用于所有包含某种`play()`功能的壁纸元素：

* [IAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimation) - 时间轴属性动画
* [IAnimationLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimationLayer) - 操控变形动画
* [IParticleSystem](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystem) - 粒子系统
* [ISoundLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ISoundLayer) - 声音文件
* [ITextureAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/ITextureAnimation) - 纹理动画
* [IVideoTexture](/wallpaper-engine-docs/scene/scenescript/reference/class/IVideoTexture) - 基于.MP4视频的纹理

首先准备一个相关对象，然后从壁纸中获取它，然后调用其`play()`函数。
:::