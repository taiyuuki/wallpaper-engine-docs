# 混合形状动画

操控变形动画还可以让你更改木偶的实际形状。这可用于创建详细的面部动画和其他类型的动画，你可以对纹理本身进行详细调整。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

在尝试本教程之前，你应该已经阅读并理解了[操控变形动画介绍](/wallpaper-engine-docs/scene/puppet-warp/introduction)。

## 创建混合形状

混合形状的总体思路是定义一个可以在动画中切换的几何图形排列。例如，你可以调整角色面部的几何形状，使眼睛看起来是闭合的。

首先，打开操控变形动画的 **几何图形** 设置。如果你尚未点击 **锁定几何图形以进行顶点编辑** 按钮，则首先需要点击此按钮，因为对几何图形做进一步编辑，混合形状会被破坏。如果你有需要，使用 **编辑拓扑** 按钮可以微调自动生成的几何图形。

在 **编辑混合形状** 部分中，单击 **添加** 按钮创建新的混合形状。几何图形中的每个点现在都将变得可移动，将与形状动画相关的所有点调整到其最终位置。在下面的视频中，我们通过向下移动眼睛上方的几何图形，使眼睛看起来是闭合的：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_setup.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 创建表情

下一步，你需要创建一个 **表情**。表情是多个混合形状的集合。如果只有一个混合形状，只需将其值设置为1。如果你有多个混合形状，请将它们混合在一起，以便稍后在特定动画中控制它们。如果希望某个混合形状在表情中部分显示，也可以设置一个中间值，例如0.5。

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_expression.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 对表情进行动画处理

最后一步，打开现有的动画或为操控变形创建新的动画。虽然在动画视图中没有骨骼被选中，但你可以像其他任何属性一样为表情创建时间轴动画。在下面的视频中，我们将通过骑士的面部动画来展示这一点：

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_animation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
