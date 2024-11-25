# 组件概述

Wallpaper Engine中的组件（assets）是壁纸的单个元素或组件(components)。与传统的图像编辑软件非常相似，组件以图层的形式排列，因此你可以在组件列表中按特定顺序重新排列它们，以定义哪些元素位于彼此的前面或后面。

> 译注：编辑器里将壁纸中的每一个图层称之为assets，本意是资产，编辑器里将其翻译为“组件”，虽然它和components并不是同一个词，但在这里指的是同一个东西。

你可以通过单击屏幕左侧的**添加组件**按钮将组件添加到壁纸中。这将打开默认安装的所有组件的列表，并将在列表下面提供一些特殊组件类型。你可以选择一个组件并确认你的选择，这会将组件添加到你的壁纸中。或者，如果你想导入任何外部文件，例如图像或声音，你只需将它们拖到组件区域中，只要文件是受支持的类型，它们将被自动导入：

<video width="100%" controls>
  <source :src="$withBase('/videos/asset_adding.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 使用控件移动、旋转和缩放组件

你的组件将被立即添加到壁纸中，但位置和大小可能不会直接就是你想要的。Wallpaper Engine使用3D控件（handles），如果你曾经使用过3D游戏引擎，你可能已经熟悉这种控件。这些控件可以让你轻松修改组件的**起点**（位置）、**角度**（旋转）和**比例**（大小）。观看下面的视频，了解不同的控件如何移动、缩放和调整组件大小：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

