# 角色表

创建操控变形动画的一个更高级的方式就是使用角色表。角色表要求你提供一个角色的分割版本，将你的角色分割成不同的肢体/零件。这可以用来创建更复杂、更准确的动画，因为零件可以自由移动和重叠，而不会使图像失真。使用操控变形不一定能取得良好的效果，但根据你想要的结果，它可以产生很大的不同。**即使你不依赖于角色表，你仍然可以按照操控变形动画的其他教程进行操作**。

在尝试本教程之前，你应该已经阅读并理解了[操控变形动画介绍](/wallpaper-engine-docs/scene/puppet-warp/introduction)。

## 创建角色表

请确保身体和衣服被切分成各自独立的部分，并将它们放在同一个图像上。让图像的分辨率尽可能小，同时保证图像上的透明/不可见区域尽可能小。例如，不要将所有肢体排成一排，而是将它们排成一个正方形。

在我们的示例中，我们使用之前操控变形教程中的武士角色，并使用图片编辑工具将其切割成独立的角色表。我们的角色表如下所示（你可以使用以下图像文件来跟着操作）：

![Character Sheet Example](/wallpaper-engine-docs/img/puppet-warp/samurai_sheet.png)

### 使用 Wallpaper Engine 创建角色表

Wallpaper Engine 附带了一个角色表创建工具，你可以使用它相对轻松地创建角色表。在此处查看我们的角色表创建教程：

* [创建角色表](/wallpaper-engine-docs/scene/image-preparation/character-sheet)

## 角色表准备工作

### 角色几何图形

就像基于非切割角色的操控变形一样，我们必须完成操控变形入门指南中所有的步骤。首先，我们要创建物体的几何图形。但我们没有必要按照介绍教程中的说明那样创建切片，因为切片现在是多余的，角色的所有部分都能够清楚地分开：

![Character Sheet Geometry](/wallpaper-engine-docs/img/puppet-warp/puppet_sheet_geometry.png)

### 角色骨架

在创建角色的骨骼时，请确保骨骼正确的顺序。例如，手臂和头部的骨骼与上半身区域的骨骼相连，而帽子骨骼与头部骨骼相连。重复此操作，直到每个身体部位都连接到其各自的 *相邻* 部位：

![Character Sheet Skeleton](/wallpaper-engine-docs/img/puppet-warp/puppet_sheet_skeleton.png)

### 角色权重

使用角色表时绘权重会变得容易得多，因为角色的区域现在清晰地分开了。例如，你可以看到帽子和剑是如何被涂成一种颜色的，而如果使用模型的原始版本就不会这么简单。你还可以看到我们如何将某些元素分成不同的区域。例如：绳子、披风和腿，都被划分成不同的骨骼，以便创建更精确的动画：

![Character Sheet Weights](/wallpaper-engine-docs/img/puppet-warp/puppet_sheet_weights.png)

## 将角色表重新组合成姿势

在开始制作角色动画之前，你需要将角色表重新组合成剪裁前的原始姿势。为此，请打开操控变形界面，在页面底部，你可以在 **可选** 部分找到一个名为 **参考姿势** 的按钮。将角色的所有部分拖回其原始位置，以将角色模型重新组合为原始状态。点击 **确认** 按钮保存参考姿势。这个姿势将用于动画的起点，这就是为什么在实际制作角色动画之前创建它很重要。

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_reassemble.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 为角色制作动画

你现在可以像在介绍教程中一样为角色制作动画。但动画可以更准确，它们在模型上处于单独的图层，你可以更好地控制每个单独的身体部位。请务必查看 *操控变形动画* 章节的剩下部分的内容，我们将为此角色表创建的一些更高级的动画示例。 