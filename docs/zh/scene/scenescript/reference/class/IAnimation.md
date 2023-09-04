---
prev: ../../reference.md
---

# SceneScript Class IAnimation

这个类表示一个时间轴动画。

## 属性

### fps: Number (readonly)

动画的帧率。

### frameCount: Number (readonly)

动画的总帧数。

### duration: Number (readonly)

动画的持续时间。

### name: String (readonly)

动画的自定义名称。

### rate: Number

动画的速度系数。

## Functions

### play(): void

当动画暂停或停止时，继续或开始播放动画。 

### stop(): void

停止动画并返回到初始状态。

### pause(): void

在当前位置暂停动画。

### isPlaying(): Boolean

返回动画是否正在播放或暂停、停止。

### getFrame(): Number

返回当前帧数。

### setFrame(frame: Number): void

设置动画到指定帧。