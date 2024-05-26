---
prev: ../../reference.md
---

# SceneScript Class IModelLayer

此类提供对3D模型图层的访问。

## 属性

### perspective: Boolean

控制是否透视渲染的选项。

### rootmotion: Boolean

如果模型正在播放支持根运动的动画，你可以通过此属性禁用和启用从根运动。默认是启用。

## 方法

### playSingleAnimation(animation: String|Object, config?: Object): IAnimationLayer

通过动画名称或JSON配置创建一个新的动画图层。动画只播放一次，然后自动移除它。请在 IAnimationLayer 中查看 config 的配置选项。

### getAnimationLayerCount(): Number

获取当前图层使用的动画图层的数量。

### getAnimationLayer(name: String|Number): IAnimationLayer

通过名称或索引获取现有的动画图层。

### createAnimationLayer(animation: String|Object): IAnimationLayer

通过动画名称或JSON配置创建一个新的动画图层。

### destroyAnimationLayer(animationLayer: String|Object|IAnimationLayer): Boolean

通过名称、索引或 IAnimationLayer 对象的引用删除现有的动画图层。