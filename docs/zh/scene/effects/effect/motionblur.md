---
prev: ../overview.md
---

# 运动模糊效果

**运动模糊**效果会随着时间叠加图像，形成运动模糊的效果。

![Blur](/wallpaper-engine-docs/img/effects/Spin.gif)

### 效果设置

* **不透明蒙版：** 绘制蒙版，确定图像中哪些区域应用了效果。默认情况下，它会应用到整个图层。
* **积累率：** 图像积累的速度，**值越低，模糊程度越高**。

### 效果顺序

*运动模糊* 效果可以与其他效果组合，但请记住，*运动模糊* 效果只会对效果列表中**上方**的效果生效。将 *运动模糊* 效果放在其他效果的下方以让其生效。

例如，如果您已经将 [旋转效果](/wallpaper-engine-docs/scene/effects/effect/spin) 或 [滚动效果](/wallpaper-engine-docs/scene/effects/effect/scroll) 应用到图层，请确保 *运动模糊* 效果位于这些效果的下方。你可以通过拖动鼠标重新排列效果列表。下面视频演示了 *运动模糊* 效果只有在它被移动到 *旋转* 效果的下方后才开始生效：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/effects_order.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
