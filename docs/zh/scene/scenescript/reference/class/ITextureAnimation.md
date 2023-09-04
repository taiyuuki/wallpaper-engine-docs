---
prev: ../../reference.md
---

## SceneScript Class ITextureAnimation

该类表示纹理动画。默认情况下，所有纹理动画的实例都共享同一个动画状态。调用任意函数都会使动画断开与共享状态的连接。你可以通过调用 join 函数将其重新加入到共享的动画状态。

不要与 [IVideoTexture](/wallpaper-engine-docs/scene/scenescript/reference/class/IVideoTexture) 混淆。

## 属性

### frameCount: Number (readonly)

动画的帧数。

### duration: Number (readonly)

动画的持续时间。

### rate: Number

动画的速度系数，默认为1。

## 函数

### play()

如果动画已暂停或停止，则继续播放动画。

### stop()

停止动画并恢复到最开始的状态。

### pause()

在当前位置暂停动画。

### isPlaying(): Boolean

返回动画当前正在播放、暂停或停止的布尔值。

### getFrame(): Number

获取动画当前的帧数。

### setFrame(frame: Number)

给动画设置为指定帧。

### join()

回到全局状态，与其他所有对象共享动画状态。