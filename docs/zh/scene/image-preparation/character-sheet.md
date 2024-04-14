# 创建角色表

Wallpaper Engine 可以让你创建角色表，你可以使用它来创建高质量的[操控变形动画](/wallpaper-engine-docs/scene/puppet-warp/introduction)。作为先决条件，你需要一个已被裁剪并加载到 Wallpaper Engine 中的角色图层。你可以使用 Wallpaper Engine 的[前景分离](/wallpaper-engine-docs/scene/image-preparation/foreground-separation)功能从基础图像中裁剪出角色，或者使用第三方图像编辑工具手动创建周围具有透明区域的角色切片。

## 角色表介绍

角色表将图像中的角色切割成多个独立的部分，可以对单个身体部位进行分层，以便使用操控变形动画制作更详细的动画。在我们的示例中，我们使用[前景分离](/wallpaper-engine-docs/scene/image-preparation/foreground-separation)教程中使用的相同角色：

![Character Sheet](/wallpaper-engine-docs/img/character-sheet-creation/character_sheet_example.png)

最值得注意的是，这把剑已经从原始角色中剪除，它之前占据的区域被周围区域的模糊颜色填充。对于大多数动画，这种模糊在后面的动画中是不明显的。看看我们用上述角色表创建的操控变形动画示例，并注意剑、盾牌和头部是如何大幅度移动，而不会对周围的躯体部位造成任何扭曲或不必要的副作用，这是将操控变形动画与角色表一起使用的最大优点：

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/character_sheet_puppet_warp.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>


## 创建角色表

首先，在编辑器中选择角色图层。右键单击并将鼠标悬停在 **图像编辑** 上，然后选择 **角色属性表创建**。

### 首要肢体

你需要做的第一件事是创建一个新肢体。单击 **添加肢体** 按钮创建第一个肢体，该肢体是躯体的一部分，请注意左侧的 **层次结构**。为了获得更复杂的角色表，每个肢体可以进一步细分为额外的肢体。**你应该始终从图层上最靠前的肢体开始**，然后一路向下。在我们的例子中，我们想从我们角色的手臂和剑开始，因为它是图层最前排的元素。我们将我们的肢体命名为 **Arm**（手臂），它将作为 **躯体** 的第一个子肢体。

我们首先将完整的剑和手臂绘制为前景区域，并确保正确的躯体其余部分作为背景。你会在侧边栏顶部找到两个按钮**：标记前景** 和 **标记背景**。先用前景画笔在指定肢体的区域上绘画。该区域将显示为浅白色。没有必要绘制一个绝对完美的区域，Wallpaper Engine 会尝试自动检测你绘制的肢体边缘。使用背景画笔则可以告诉 Wallpaper Engine 图像的哪些部分不属于肢体。

#### 蒙版遮罩技巧

如果你有一个特别复杂的角色，增加侧边栏底部的 **质量** 选项可能会对你很有帮助，尽管这会大大增加 Wallpaper Engine 重新计算当前肢体所需的时间。此时，你可以关闭左下角的 **自动重新计算** 选项，只需手动使用 **重新计算** 按钮即可确保更改生效！

将 **平滑** 选项降低到 0 也可以更准确地呈现对象，尽管它可能看起来锯齿感更严重。但是，如果你的蒙版遮罩不完美，请不要担心，在壁纸最终的动画中，较小的瑕疵是很难被注意到的。请观看我们的视频，了解我们为角色手臂绘制蒙版的方法：

绘制蒙版时，请确保按 **视图** 部分中的按钮定期检查 **前景** 和 **背景** 视图。你还可以使用 **蒙版** 按钮或按键盘上的 M 来切换蒙版，以获得原始图像的全局视图。


<video width="100%" controls>
  <source :src="$withBase('/videos/cs_arm.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
在本教程中，我们展示了用画笔模式创建角色表。你还可以使用多边形模式来绘制角色肢体的轮廓。要了解有关这两种绘制模式的更多信息，请参阅前景分离教程中的相关部分，我们在其中展示了这两个选项：

* [前景分离](/wallpaper-engine-docs/scene/image-preparation/foreground-separation)
:::

### 进一步分离肢体

一旦手臂和剑被正确遮罩，我们要进一步将手臂与剑分离，这可以为我们的操控变形动画提供更多的灵活性。为此，在左测的层次结构中选中 **Arm**，然后单击 **添加肢体** 按钮以创建手臂的子肢体。在我们的例子中，我们将它命名为 **Sword**（剑）。就像之前一样，我们将剑和手标记为 **前景**，而将上臂标记为 **背景**。由于剑已经与主体分离，因此我们的绘制不需要非常精确，因为手臂现在以镂空状态呈现，躯体完全可以忽略：

<video width="100%" controls>
  <source :src="$withBase('/videos/cs_sword.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 其他躯体的肢体

我们继续为角色创造另一个肢体。与前面不同的是，我们首先选中 **躯体**，然后使用 **添加肢体** 按钮创建一个新肢体。我们要创造一个肢体来表示角色的盾牌。这里需要注意的是，我们之前分离的肢体的剑现在可以被忽略，因为它已经与盾牌分离了。这实际上意味着我们可以在绘制盾牌前景蒙版时忽略它们，你会注意到盾牌上之前被剑覆盖的区域现在已被模糊的颜色填充，它是按盾牌整体的配色方案大致生成的：

<video width="100%" controls>
  <source :src="$withBase('/videos/cs_shield.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 完成角色表

最后一步，我们要在 **躯体** 上创建另一个肢体，表示角色的头部。像上述一样对其正确遮罩后，我们就可以完成我们的角色表了。请务必再次检查所有的肢体，并确保它们看起来与你预期的完全一样。对于我们的角色，我们现在有躯体（总是存在的），然后是头部、盾牌和手臂。手臂还有另一个子肢体，即剑。

当我们对角色表感到满意时，我们可以通过单击右下角的 **确定** 按钮进行确认。Wallpaper Engine 会从我们绘制的所有肢体中生成一个角色表。现在，我们可以使用角色表图层来创建操控变形动画。请参阅[操控变形动画角色表指南](/wallpaper-engine-docs/scene/puppet-warp/charactersheet)以从当前状态继续。

<video width="100%" controls>
  <source :src="$withBase('/videos/cs_summary.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

如果你仍然发现前景分离的结果存在问题，你还可以通过将 Wallpaper Engine 连接的外部图像编辑器来对自动前景分离进行细微调整。之后，你可以手动编辑图像图层的 **反照率纹理**。有关详细信息，请参阅以下指南：

* [外部图像编辑器的快速访问](/wallpaper-engine-docs/scene/image-preparation/external-editor)
