---
prev: ../../reference.md
---

# SceneScript Class IAnimationLayer

此类代表操控变形动画或 3D 模型动画图层。可以使用如下配置属性创建新的动画图层:

* **config.blendin**: Boolean - 自动平滑混合动画的开始。
* **config.blendout**: Boolean - 自动平滑混合动画的结束。
* **config.blendtime**: Number - 动画混合的时间（以秒为单位）。
* **config.autosort**: Boolean - 在所有不透明图层之后插入图层，但在任何其他图层之前。

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