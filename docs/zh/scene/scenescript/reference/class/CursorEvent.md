---
prev: ../../reference.md
---

# SceneScript Class CursorEvent

处理[鼠标事件](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor)中鼠标的位置信息。

::: warning
这个类仅与2D壁纸兼容，`Z`值目前尚未使用。
:::

## 属性

### worldPosition: Vec3

相对于整个世界（壁纸）的绝对位置。

### localPosition: Vec3

相对于对象的位置。例如，对于图像图层来说，`localPosition.x`将在`0`到`thisLayer.size.x`之间，`localPosition.y`将在`0`到`thisLayer.size.y`之间。

### hitBox: String?

骨骼动画的点击区域的名称，仅在具有骨骼动画的图像图层上可用。