# RGB设备支持

Wallpaper Engine 可以让你通过其 API 控制支持的 RGB 设备，并将你的壁纸与 LED 硬件同步。即使你没有这些设备，或者只有某些功能有限的兼容设备，你也可以简单地使用模拟器来模拟RGB设备。Corsair 的 iCUE 软件和 Razer 都提供了模拟这些设备的方法。

默认情况下，Wallpaper Engine 会将壁纸的颜色镜像到任何兼容设备。但是，你也可以将单个图层配置为负责所有照明。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/rgb_emulator.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 设备模拟器设置 (可选)

如果你想用 RGB 设备模拟器测试你的 RGB 灯在各种设备上的样子，我们推荐使用 Razer Chroma 模拟器。

首先，确保你安装了最新版本的Razer Synapse 3，并在Razer Synapse的设置中安装了Chroma Connect：

* [下载 Razer Synapse 3](https://www.razer.com/synapse-3)

然后，前往 Razer 开发者门户网站安装最新版本的 Razer Chroma 模拟器（在页面上向下滚动以获取链接）：

* [Razer 开发者门户网站](https://developer.razer.com/works-with-chroma/download/)

安装Razer Synapse 3和最新的Razer模拟器后，重新启动Wallpaper Engine并在应用程序设置中启用LED插件。使用 Wallpaper Engine 捆绑提供的任何标准壁纸（例如 **Razer Bedroom**）来验证模拟器是否正常工作。

## 配置 RGB 照明图层

如果你想完全控制壁纸的照明，你可以在兼容图层上启用 **将 iCUE 和 Chroma 限制于图层** 选项。在大多数情况下，它应该是一个图像图层，但你也可以使用特殊图层，例如 **固态层** 和 **组合层**。

开启此选项的图层不需要直接可见，它们可以位于其他图层的下方，但是，它们需要位于壁纸的可视区域中。因此，你应该确保这些额外的图层位于壁纸的中心，并且尽可能小，以便它们在用户可能使用的所有分辨率和纵横比上都能完全呈现。仅用于 LED 照明目的图层如果过大会增加不必要的内存开销，因此请让它们的尺寸尽可能的小。

分辨率非常小的 **固态层**（例如，32 x 32 px 是将内存开销降至最低的好方法），它们也可以很好的与效果结合使用，例如[脉动效果](/wallpaper-engine-docs/scene/effects/effect/pulse) 或 [着色效果](/wallpaper-engine-docs/scene/effects/effect/tint)。

### 关于组合层的额外说明

在使用 **组合层** 的情况下，其下所有图层都会被镜像到 RGB 设备上，它们本质上就像一个记录局部场景的 **相机**。如果选择采用这种方式，请确保使 **组合层** 的尺寸尽可能的小，并为该层选择尽可能小的分辨率，以减少系统负载。

::: tip
如果在多个图层上启用 **将 iCUE 和 Chroma 限制于图层** 选项，则该选项会只对位于最顶层的图层生效。确保仅在一个图层上使用它以避免混淆。
:::