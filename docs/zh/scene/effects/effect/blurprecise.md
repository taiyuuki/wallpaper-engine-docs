---
prev: ../overview.md
---
# 精确模糊效果

**精确模糊** 效果对图像应用精确的高斯模糊。你应该先尝试一下[普通模糊效果](/wallpaper-engine-docs/scene/effects/effect/blur)，看看它是否能满足你的需求，因为它比精确模糊效果的性能更好。精确模糊效果更适用于产生光线、轮廓等。

如果只是想在图像上添加一个静态模糊，最好在导入图像到 Wallpaper Engine 之前在图像编辑器中进行处理。

## 使用

![Blur](/wallpaper-engine-docs/img/effects/Blur_precise.gif)

### 效果设置

该效果会影响整个图层。你可以为每个轴配置它的核大小和比例：

* **核大小：** 滤镜的核大小。较大的核会使图像更模糊，但也会消耗更多的系统性能。
* **比例：** 控制 X 和 Y 轴上的模糊程度。

