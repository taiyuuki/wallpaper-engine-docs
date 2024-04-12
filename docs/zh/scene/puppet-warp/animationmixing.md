# 给单个操控变形多个动画

你可以将多个动画应用于操控变形的角色和对象。它相比只使用一个动画更有优势，主要是你可以在不同的时间应用不同的动作。如果你已经阅读了我们的[操控变形动画介绍指南](/wallpaper-engine-docs/scene/puppet-warp/introduction)，你应该知道我们该如何在一个动画中为所有身体部位制作动画。在很多情况下这样就很不错了，但你可能会希望角色的某些部位更少或更频繁地移动。

例如，你的角色可能有一个一般的闲置姿势，并希望他们每 30 秒移动一次手臂。与其构建一个包含所有这些零碎动作的大型动画，不如使用多个较小的动画，Wallpaper Engine 会将它们合并为一个。

在我们的高级操控变形教程中，我们将为武士模型创建以下 4 个动画：

* 一般的闲置动画
* 披风动画
* 头部动画
* 剑的动画

我们将它们全部添加到同一个控制变形当中，你可以看到它们是如何无缝地合并在一起的：

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_multiple_animations.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

我们仔细观察剑的动画。可以看到我们创建了一共 100帧、也就是 大约 4 秒时间的动画，然后我们只对动画的前几帧进行处理，其余帧则保持原始姿势。我们将动画添加到木偶上后选中它，并将动画速率降低到原始速度的三分之一左右，使动画持续时间略高于 12 秒。

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_multiple_animations_sword.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

我们用不同的速度重复披风和头部运动的过程，使角色动起来更加自然，因为它不会在短时间内以相同的方式重复运动。