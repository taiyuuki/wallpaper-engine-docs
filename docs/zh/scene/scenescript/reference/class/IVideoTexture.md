---
prev: ../../reference.md
---

# SceneScript Class IVideoTexture

该类表示视频纹理。视频纹理是 `.mp4` 视频文件，它们与图像图层的纹理类似。该类允许你控制视频纹理并读取其当前播放状态。使用 `addEndedCallback` 函数，你可以在视频播放完成以后附加自定义逻辑。

不要与 [ITextureAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/ITextureAnimation) 混淆。

## 属性

### duration: Number

The duration of the video in seconds. *Read-only* value.

以秒为单位的视频持续时间。*只读值*。

### rate: Number

视频纹理动画的播放速度。

### loop: Boolean

动画是否应该循环播放。

## 函数

### play(): void

如果动画已暂停或停止播放，则播放动画。

### pause(): void

暂停动画。

### stop(): void

停止动画并将当前播放时间重置为零。

### isPlaying(): Boolean

检查当前动画是否正在播放。

### getCurrentTime(): Number

返回视频的当前播放时间。

### setCurrentTime(frame: Number): void

改变视频的当前播放时间。

### addEndedCallback(callback: Function): void

添加在视频播放完成时触发的回调函数。