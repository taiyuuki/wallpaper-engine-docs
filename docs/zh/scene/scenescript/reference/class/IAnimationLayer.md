---
prev: ../../reference.md
---

# SceneScript Class IAnimationLayer

此类表示操控变形动画（操控变形动画）图层。

## Properties

### fps: Number (readonly 只读)

动画图层的帧速率

### frameCount: Number (readonly 只读)

动画图层的帧数

### duration: Number (readonly 只读)

动画图层的持续时间

### name: String (readonly 只读)

动画图层的自定义名称。

### rate: Number

动画图层的速度系数。

### blend: Number

该动画图层的混合量。

### visible: Boolean

动画图层是否正在被应用（也就是是否可见）。

## 函数

### play(): void

当处于暂停或停止状态时继续播放动画。

### stop(): void

停止动画并恢复到初始状态。

### pause(): void

在当前位置暂停动画。

### isPlaying(): Boolean

返回动画图层是否正在播放或暂停的布尔值。

### getFrame(): Number

获取动画图层的当前帧。

### setFrame(frame: Number)

给动画图层设置为指定帧。

### addEndedCallback(callback: Function)

添加一个回调函数，每当动画到达终点时触发。