# Wallpaper Engine里的视差效果

Wallpaper Engine 中的视差选项可以让你将壁纸配置为跟随鼠标的移动。你可以为壁纸的每一层配置不同的视差强度，也可以完全关闭某个图层的视差。这是一种创建物体深度感和距离感的方法，是使壁纸更具交互性的相对简单的方法。

你可以通过编辑器左侧的 **场景选项** 来启用 **镜头视差** 效果。视差效果有三个通用选项：

* **数量**：效果的整体强度。
* **延迟**：用户鼠标移动与图层移动之间的延迟。
* **鼠标影响**：鼠标移动的影响。**应设为非0值**，因为 0 表示鼠标不会影响效果，相当于在 2D 场景中禁用了它。

此外，启用 **镜头视差** 后，每个图层都会增加一个 视差深度 选项。可以让你微调每个图层的视差效果，或者通过设置为 0 来完全关闭特定图层的视差效果。

## 基本视差示例

We have created a sample project with a space background and a separate space ship layer. In order to enable the parallax effect on this project, we first navigate to the **Scene options** (above the list of layers) and then enable the **Camera Parallax** option towards the bottom of the scene options.

Afterwards, we select our background image and slightly adjust the **parallax depth** setting to our liking. The same process can be repeated for any other layer. Again, keep in mind you can turn of the parallax setting for any layer by setting the **parallax depth** to 0.

我们创建了一个具有太空背景和独立太空飞船图层的示例项目。为了启用视差效果，我们首先找到 **场景** 选项（在图层列表上方），然后在场景选项底部启用 **镜头视差** 选项。

接下来，我们选中背景图像，根据你自己的喜好稍微调整 **视差深度**。可以对任何其他层重复相同的过程。同样的，你也可以将 **视差深度** 设置为 0 以关闭任何图层的视差效果。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### 仔细检查背景大小

在我们的示例中，背景图像由于视差效果而超过了可见区域，导致灰色背景颜色暴露出来。这是应该避免的事情。为了修正这个问题，我们可以导入稍大一点的背景图像，或者我们需要调高一点背景层的 **比例**，否则每当用户将鼠标移向屏幕的外边缘时，就会看见壁纸的外边界。在本例中，我们略微增加图像的比例：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth_fix_borders.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 限制视差方向

你还可以将视差效果的方向限制为仅垂直移动或水平移动。为此，你需要单击视差深度属性旁边的链条图标，然后将 **X** 轴或 **Y** 轴设置为 0。

通过将 **Y** 属性设置为 0，壁纸背景层的视差移动会被限制在水平轴上，如以下视频所示：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth_limit_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

现在，背景只会沿 **X** 轴水平移动，而鼠标的任何上下方向的移动都将被忽略。