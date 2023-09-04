---
prev: ../../reference.md
---

# SceneScript Class IEffectLayer

图像图层和文本图层的基础类。

## 属性

### size: Vec2

图像图层的分辨率。 *只读*

### perspective: Boolean

如果设为`true`，图像图层将使用透视渲染而不是平面渲染。

### solid: Boolean

如果设置为 `true`，图像图层将能够触发 [鼠标事件](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor)。

## 函数

### getEffect(name: String|Number): IEffect

通过名称或索引查找材质效果。

### getEffectCount(): Number

获取此图像图层的效果数量。