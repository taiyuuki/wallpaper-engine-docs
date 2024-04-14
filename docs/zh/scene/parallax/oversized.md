# 滚动超大图像

我们可以导入一张超大的背景图像，并应用视差效果，使用户可以在桌面上通过移动鼠标来“探索”图像。为此，我们将导入一个非常大的图像并禁用 **调整图像大小** 选项，以便图像以原始大小导入：

> 译注：这里导入图像的方式是：新建壁纸的时候，将图片拖进编辑器。

![Disable Resize](/wallpaper-engine-docs/img/tutorials/disable_resize.png)

导入图像后，我们需要调整项目分辨率，使其与常见桌面分辨率（例如全高清或 4K UHD）相匹配。在此示例中，我们点击编辑器顶部菜单行中的 **编辑**，然后单击 **更改项目分辨率**，将项目分辨率设置为 1920x1080。你也可以在新建项目时在设置中输入相应的字段：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_explore_resolution.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

下一步，我们需要再次在 **场景** 选项卡中启用视差效果。调整视差强度或图像大小，以确保鼠标在整个图像上移动但不会过远。你可以将鼠标移动到图像的每个角落来测试，它最远也不会离开图像。根据需要微调视差强度，直到鼠标的移动覆盖正确的区域又不会离开屏幕：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_explore_finalize.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
