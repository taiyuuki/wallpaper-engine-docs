---
prev: ../../reference.md
---

# SceneScript class IEngine

您可以在全局脚本中的任何位置访问此接口，以获取有关用户系统和正在运行的壁纸的一些信息。

[[toc]]

## 属性

### screenResolution: Vec2

屏幕分辨率。

### canvasSize: Vec2

The size of the wallpaper project defined in the editor. Only for 2D scenes.

编辑器中定义的壁纸尺寸，只适用于2D场景壁纸。

### userProperties: Object

获取用户属性和用户属性当前的值。其中颜色属性会自动转换为 Vec3。

### timeOfDay: Number

以[0.00, 1.00]的范围表示一天中的时间。这意味着00:00:00表示为0.00，23:59:59表示为1.00。

### frametime: Number

更新上一帧所花费的时间。此属性非常有用，因为它可以让你创建具有规范化速度的动画。如果使用 SceneScript 创建任何类型的动画，对于具有不同 FPS 限制的用户，它将具有不同的速度，除非您优先使用`engine.frametime`对速度进行平衡。

### runtime: Number

墙纸运行的总时间（以秒为单位）。

::: danger Please Note
runtime会保留有限的浮点精度。如果你想创建一个计时器，请考虑使用`setTimeout()`作为替代。
:::

## 常量

### AUDIO\_RESOLUTION\_16: Number

用作`registerAudioBuffers()`的参数，创建具有**16**个频段的[AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers)对象。

### AUDIO\_RESOLUTION\_32: Number

用作`registerAudioBuffers()`的参数，创建具有**32**个频段的[AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers)对象。

### AUDIO\_RESOLUTION\_64: Number

用作`registerAudioBuffers()`的参数，创建具有**64**个频段的[AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers)对象。

## 函数

### isDesktopDevice(): Boolean

返回`true`说明当前的Wallpaper Engine在PC上运行，`false`则在移动设备上。

### isMobileDevice(): Boolean

返回`true`说明当前的Wallpaper Engine在移动设备上运行，`false`则在PC上。

### isWallpaper(): Boolean

当壁纸被用作壁纸（而不是屏幕保护程序）时返回`true`。

### isScreensaver(): Boolean

Returns `true` when the wallpaper is being used as a screensaver (as opposed to being used as a wallpaper).

当壁纸被用作屏幕保护程序（而不是壁纸）时返回`true`。

### isPortrait(): Boolean

如果壁纸分辨率是横屏，则返回`true`。

### isLandscape(): Boolean

如果壁纸分辨率是竖屏，则返回`true`。

### isRunningInEditor(): Boolean

你可以使用此函数来检查当前脚本是否正在运行中。

### registerAudioBuffers(resolution: Number): AudioBuffers

注册您的脚本到音频响应系统中，并获得用户的当前音频电平。`resolution`参数是必需的，用于定义分割音频频段的数量。为了节省内存和性能，您应该尽量使用实际需要的最低数字。

有效的`resolution`参数是`engine.AUDIO_RESOLUTION_16`，`engine.AUDIO_RESOLUTION_32`和`engine.AUDIO_RESOLUTION_64`，它们分别将音频频段分割为16，32和64个频段。

函数返回一个[AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers)对象，您可以将其存储到每帧渲染的音频电平中。

### registerAsset(file: String): IAssetHandle

如果使用 SceneScript 动态创建任何图层，请使用此函数将该组件标记为在你的壁纸中被使用。这对于发布到创意工坊非常重要，因为只有被使用或被标记的组件才会被打包到生成的场景壁纸中。

### setTimeout(callback: Function, delay?: Number): Function

以毫秒为单位启动延时器。返回可以提前停止延时器的回调。

### setInterval(callback: Function, delay?: Number): Function

以毫秒为单位启动计时器。返回可以提前停止计时器的回调。