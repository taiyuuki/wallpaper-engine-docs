# 添加你的第一个组件

在上一节中，我们介绍了应用于背景图像的效果。背景图像是Wallpaper Engine中的一个**组件**，它是壁纸中的附加元素。Wallpaper Engine支持不同类型的组件，最常见的是图像，文本图层，粒子系统，声音，甚至3D模型。

在本教程的这一部分中，我们将向您展示如何向壁纸添加和自定义组件。我们将继续处理我们在上一节中处理过的壁纸。首先单击屏幕左侧的**添加组件**按钮。这将打开默认安装的所有组件。单击**光束**并选择**光束1**，然后单击**确定**，如下面的视频所示。

<video width="100%" controls>
  <source :src="$withBase('/videos/asset_adding.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 使用移动、旋转和缩放组件

您的组件将立即添加到壁纸中，但位置和大小可能不会立即就是您想要的。Wallpaper Engine使用3D处理器（handles），如果您曾经使用过3D游戏引擎，您可能已经熟悉这种处理器。这些处理器允许您轻松修改组件的**起点**（位置）、**角度**（旋转）和**比例**（大小）。观看下面的视频，了解不同的处理器如何移动、缩放和调整组件大小：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

让我们继续翻转光束并将它们移动到右上角以适配山上的光照。移动光束，然后翻转它们，使它照射于正确的方向。

翻转可以通过将 X 轴的刻度变为负数来实现。有两种方法可以做到这一点：抓住箭头尖端的红框并将其向左移动，以便光束翻转。或者，您也可以在 X 轴的刻度输入框中手动键入-1。您还可以调整其他组件属性，例如更改其颜色以适应光线的橙色色调，并降低其不透明度以使效果更加微妙。请参阅下面的视频，其中展示了此过程：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_placement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 添加时钟

如之前所述，另一种类型的组件是**文本**图层。文本图层中可以包含动态内容，但这属于更高级的功能，需要 **SceneScript** 的知识，在文档的其他部分对此进行了说明。在本教程中，我们将使用时钟预设，这是一个可配置的时钟，您可以轻松添加到壁纸中。和之前一样，单击左侧的**添加组件**按钮，然后从列表中选择**时间**，然后单击**确定**。

时钟将立即添加到壁纸上。它是一个文本图层，包含特殊属性，例如Font，它允许您从列表中选择字体，甚至允许您导入自己的字体文件，该文件将被打包进壁纸中。在本教程中，我们将字体更改为“Alcubierre”，这是默认字体之一。我们还略微减小了**大小**的值，即字体的大小。对于文本图层，我们通常建议使用此属性更改大小，而不是像之前对光轴所做的那样更改实际**比例**——这是保证字体的清晰度的最佳的渲染方式。您还可以检查其他选项，例如可以配置为12h或24h制，具体取决于您的喜好。


<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_clock.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

请注意，由于时钟依赖于 **SceneScript**，因此时钟在编辑器中不会直接运行，它只会显示静态预览（默认为 12：34）。您可以通过单击编辑器顶部的**运行预览**按钮来查看壁纸在添加时钟后的预览效果。