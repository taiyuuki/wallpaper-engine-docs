# 时间轴动画中的 SceneScript 事件

您可以将 **动画事件** 添加到任何[时间轴动画](/wallpaper-engine-docs/scene/timeline/introduction)或[骨骼动画](/wallpaper-engine-docs/scene/puppet-warp/introduction)中，并在动画通过特定帧时使用它们来触发效果、播放声音或在壁纸中执行任何其他自定义 SceneScript 逻辑。在开始之前，请确保您已经熟悉 [SceneScript](/wallpaper-engine-docs/scene/scenescript/introduction) 的基础知识，它可以用于处理所有的动画事件。

## 创建事件

首先打开要添加事件的时间轴或骨骼动画，在底部看到时间轴面板。然后，将时间轴拉到要触发事件的帧。确定了帧，单击时间轴面板右下角的闹钟按钮。

在我们的示例中，当角色开始向上移动剑并旋转它时，我们让它立即触发剑鸣声。我们将时间轴拉到帧 2 的位置并单击闹钟按钮。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_open_dialog.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

在打开的新对话框中输入事件的名称，在本例中，我们将事件命名为 **sword**（剑）。帧会自动设置为当前这一帧，但你也可以根据需要在此处编辑帧。

单击 **确定** 添加新事件并关闭对话框。您还可以通过单击新事件选项旁边的绿色 **加号** 按钮来一次添加多个事件。

现在你可以在时间轴上看到，添加了事件的每一帧上都有一个点。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_add_event.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 对事件作出响应

我们的动画现在有一个事件，它将在给定的帧上触发，我们可以使用它来执行 SceneScript 支持的任何操作，例如显示/隐藏图层或效果、播放声音甚至启动/停止其他动画。

我们想要播放一个声音，所以我们将一个声音拖到窗口中，将其导入编辑器。默认情况下，声音会循环播放，因此我们需要选择声音组件，并在右侧的声音模式中将其改为 **单**。我们还希望稍后在 SceneScript 脚本中能够获取此声音，因此在本例中，我们将声音层重命名为 **sword_sfx**。

声音现在应该处于暂停状态，等待从脚本中启动它。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_import_sound.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

为了在脚本中对动画事件做出响应，我们需要确保将脚本添加到播放动画事件的同一层，在本例中为 **Samurai** 层。我们选择此图层并单击右上角的 **齿轮** 图标选择 **绑定脚本**。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_add_script.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

我们只关心动画事件，因此我们将首先删除默认添加的整个`update()`函数，因为在我们这个特定的示例不需要它。删除后，我们单击顶部的 **代码片段**，然后选择 **添加函数**，从列表中选择 **animationEvent**，将动画事件的回调函数添加到脚本中，这里就是我们需要对 **sword** 事件做出响应的内容。当然，您也可以直接手动输入该函数，这里展示的只是一种快捷方式。

以下代码片段将检查触发的动画事件的名称，它将找到 **sword_sfx** 层并在其上调用 **play** 函数。这意味着每次触发 **sword** 事件时都会播放一次剑鸣声。

```js
export function animationEvent(event, value) {
	if (event.name == 'sword') {
		thisScene.getLayer('sword_sfx').play();
	}
}
```

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_edit_script.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 测试事件

单击顶部的 **运行预览**，查看是否能播放声音。如果出现脚本错误，可以查看底部的 **日志**，查看错误详情并修复脚本。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_animationevents_complete.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
