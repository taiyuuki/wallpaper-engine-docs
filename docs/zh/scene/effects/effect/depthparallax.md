---
prev: ../overview.md
---

# 深度视差

**深度视差**效果可以为图像创建一种真实的三维深度。 该效果需要在编辑器的场景设置中启用**场景视差**，并将当前层的视差深度设置为**0**。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/depth_parallax.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

We highly recommend reading the full guide on the Depth Parallax, as the initial set-up of the effect is more complicated than usual:

我们强烈建议阅读完整的深度视差指南，因为初始设置效果比平时复杂得多：

* [**完整的深度视差指南**](/wallpaper-engine-docs/scene/parallax/depthparallax)

## 安装深度贴图生成器 DLC

为了最大限度的支持制作深度视差效果，你首先必须安装免费的编辑器扩展 DLC。这是生成高质量深度贴图所必需的。如果你是第一次尝试在编辑器中使用该功能，Wallpaper Engine 会要求你安装 DLC。或者，你也可以直接通过Steam网站安装它：

* [免费的编辑器扩展DLC](https://store.steampowered.com/app/1790230/)

DLC 会下载一个复杂的 **神经网络**，用于处理深度贴图的生成。**神经网络需要数 GB 的磁盘空间**，这也是为什么我们将此功能作为可选 DLC，尽可能减少 Wallpaper Engine 占用的磁盘空间。

最终的壁纸用户**不需要**下载这个 DLC 也能使用你的壁纸，DLC 只是用来生成高质量的深度贴图。

### 效果设置

* **品质：** 品质决定了这个效果处理的样本数量。有三个值：
  * **基本：** 1个样本, 非常高性能, 建议用于基本的使用场景。
  * **遮蔽 - 性能：** 30个样本, 平均性能, 建议用于大多数使用场景。
  * **遮蔽 - 质量：** 50个样本, 低性能, 建议用于场景中高深度和透视设置。
* **深度贴图：** 描述图像不同级别深度的纹理。我们建议使用免费的 *编辑器扩展DLC* 自动生成这个纹理。
* **不透明蒙版：** 禁用或降低图像选定区域的效果强度。
* **中心：** 改变 **深度** 的焦点。
* **深度：** 决定鼠标对水平轴(**X**)和垂直轴(**Y**)的影响。你可以分别配置它们来限制左右和上下移动。
* **透视：** 3D深度效果的感知强度。