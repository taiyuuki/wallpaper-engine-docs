# 组合时间轴动画

本指南从[时间轴动画介绍](/wallpaper-engine-docs/scene/timeline/introduction)指南中断的地方开始。我们将扩展现有的动画，并为其添加另一个属性。在此示例中，我们将采用云的移动动画，并为其添加缩放效果，如以下预览所示：

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/timeline_combined_result.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

为了更改对象的大小，我们可以修改 **比例** 属性。选择动画的对象，单击 **比例** 属性旁边的齿轮图标，然后和之前一样选择 **绑定时间轴动画**。

我们不会创建新动画，而是将动画添加到现有动画中，以便我们可以正确地将动画相互组合。单击顶部的下拉菜单，然后选择我们在上一指南中创建的 **Origin（起点）** 属性上的现有 **Cloud Movement（云移动）** 动画。所有其他选项会立即消失，因为这样将沿用上一个动画的设置。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_combined_configuration.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

现在，你将再次看到带有 **起点** 值的时间轴图。通过单击旁边的 “*眼睛图标*” 来隐藏 **起点** 属性对应的时间轴 —— 它们仍将是动画的一部分，但隐藏它们可以更轻松地暂时专注于 **比例** 动画。由于我们想更改示例中所有三个值（**X**、**Y** 和 **Z**）的刻度，单击它们以确保它们都高亮显示。

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_combined_focus.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

现在你已经选择了比例值，请确保时间轴滑块位于第一帧（帧 0）中，并在右侧的所有比例值（X、Y、Z）中键入 **0**。接下来，将时间轴滑块向右移动一帧，移动到帧 1，并将所有三个值（X、Y、Z）的比例设置为 **1**。意思是，当云在所有轴上的大小都是 0，意味着它实际上是不可见的。然后，它在到达帧 1的过程中，将平滑过渡到所有轴上的大小至 1。

接下来，我们要让云的比例值保持为 **1**，直到倒数第二帧为止。将时间轴滑块移动到倒数第二帧，然后单击 “*切换关键帧*” 按钮。这很重要，因为在动画的这一帧之前，我们不希望将云缩小到原来的大小。通常，Wallpaper Engine 会自动设置新的关键帧（如果启用了 “*自动关键帧*” 选项的话），但由于此处的值没有更改，因此需要手动创建新的关键帧，这一点非常重要。

设置倒数第二帧后，拉到最后一帧，然后再次在比例属性的 X、Y 和 Z 值中输入 **0**。

你可以在以下视频中看到前面的所有步骤并按照视频操作，它还展示了最终的动画：

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_combined_keyframes.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

这就是全部内容了。你可以将此方法应用于任何类型的属性，随时间推移修改不同类型的多个属性，以创建复杂的动画。这里展示的是一个相当简单的例子，主要是为了启发你自己对时间轴动画的理解。请务必阅读本指南的下一节，详细了解如何在动画上使用 **镜像** 模式 和 **单张** 模式，并查看应用于效果和粒子系统的时间轴动画。

本指南中的所有步骤都在以下完整的视频中展现：

<video width="100%" controls>
  <source :src="$withBase('/videos/timeline_combined.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>