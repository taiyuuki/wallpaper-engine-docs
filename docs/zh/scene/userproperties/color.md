# 颜色用户属性

自定义颜色用户属性将可以让用户更改壁纸以符合他们的个人喜好，使壁纸更具吸引力。

本教程将向你展示如何使用颜色属性和着色效果来调整壁纸特定部分的颜色。我们将从编辑器中已导入的图像开始。

## 着色效果的颜色属性示例

为了展示颜色属性的使用方式，我们将使用**着色**效果作为本指南的一部分。首先，我们选择一个图层，然后单击右侧效果菜单中的**添加**，然后选择**着色**效果。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_add_tint.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

在这个例子中，我们需要在壁纸上添加遮盖苹果的效果，单击**不透明度蒙版**旁的**绘制**开始绘制。默认情况下，蒙版是代表清除的全**黑色**，这意味着效果是不可见的。使用绘制工具的画笔在苹果所在的位置绘制一个**白色**的区域。完成后单击确定：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_paint_mask.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 添加颜色用户属性

设置着色效果后，单击**颜色**属性旁边的齿轮图标，然后选择**绑定用户属性**。单击**添加属性**并为该属性选择一个专有名称和默认颜色，在我们的示例中，我们将它称为**Apple Color**：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_add_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
除了添加新属性，你还可以选择**主题颜色**属性，它始终会在每张壁纸中添加。如果你使用了多个效果，它们可以共享相同的属性。
:::

## 在壁纸浏览器中查看

保存并应用壁纸后，在Wallpaper Engine主界面的**已安装**选项卡中选中该壁纸。你将在右侧找到用户颜色属性，并且可以动态调整着色：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_finished.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
