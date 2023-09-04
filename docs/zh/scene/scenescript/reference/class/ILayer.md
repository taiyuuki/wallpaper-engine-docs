---
prev: ../../reference.md
---

# SceneScript Class ILayer

你可以通过全局对象`thisLayer`在 SceneScript 代码中的任何位置访问此接口，以便与当前图层进行交互。

## 属性

### origin: Vec3

图层的起点位置。

### angles: Vec3

图层的角度。

### scale: Vec3

图层的缩放比例。

### name: String

在编辑器中给图层自定义的名称。

### visible: Boolean

图层当前是否可见。

### parallaxDepth: Vec2

X轴和Y轴的视差深度。

## 函数

### getAnimation(name?: String): IAnimation

按名称获取动画对象。参数留空则获取绑定到当前属性的动画对象。

### rotateObjectSpace(angles: Vec3)

让图层绕当前对象的坐标轴旋转。
