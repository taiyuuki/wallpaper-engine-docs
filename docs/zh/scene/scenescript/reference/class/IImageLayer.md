---
prev: ../../reference.md
---

# SceneScript Class IImageLayer

此类提供对特定图像图层的访问。

## 属性

### size: Vec2

基础图像的分辨率。

### perspective: Boolean

控制是否透视渲染的选项。

### solid: Boolean

控制图层是否是实（solid），如果设置为 true，图层将能够触发鼠标事件。

## 函数

### getEffect(name: String|Number): IEffect

按名称或索引查找材质效果，如果设置了的话。

### getEffectCount(): Number

获取此图像图层使用的效果数量。

### getTextureAnimation(): ITextureAnimation

如果此图像图层的反照率纹理是或GIF图，则返回纹理动画。

### getVideoTexture(): IVideoTexture

如果此图像图层的反照率纹理是视频，则返回视频纹理。

### playSingleAnimation(animation: String|Object, config?: Object): IAnimationLayer

通过动画名称或 JSON 配置创建新的动画图层。动画仅播放一次，然后自动将其删除。请在 IAnimationLayer 中查看 config 的配置选项。

### getAnimationLayerCount(): Number

获取当前图层使用的动画图层的数量。

### getAnimationLayer(name: String|Number): IAnimationLayer

通过名称或索引获取现有的动画图层。

### createAnimationLayer(animation: String|Object): IAnimationLayer

通过动画名称或 JSON 配置创建新的动画图层。

### destroyAnimationLayer(animationLayer: String|Object|IAnimationLayer): Boolean

通过名称、索引或 IAnimationLayer 对象的引用删除现有的动画图层。

### getBoneCount(): Number

获取骨骼数量。

### getBoneTransform(bone: String|Number): Mat4

按名称或索引获取骨骼的变换矩阵。

### getLocalBoneTransform(bone: String|Number): Mat4

通过名称或索引获取当前骨骼的变换矩阵。

### setLocalBoneTransform(bone: String|Number, transform: Mat4): void

通过名称或索引设置当前骨骼的变换矩阵。

### getLocalBoneAngles(bone: String|Number): Vec3

通过名称或索引获取当前骨骼的角度。

### setLocalBoneAngles(bone: String|Number, angles: Vec3): void

通过名称或索引设置当前骨骼的角度。

### getLocalBoneOrigin(bone: String|Number): Vec3

通过名称或索引获取当前骨骼的原点。

### setLocalBoneOrigin(bone: String|Number, origin: Vec3): void

通过名称或索引设置当前骨骼的原点。

### setBoneTransform(bone: String|Number, transform: Mat4): void

按名称或索引设置骨骼的变换矩阵。

### getBoneIndex(name: String): Number

按名称获取骨骼的索引。

### getBoneParentIndex(child: Number|String): Number

按名称获取骨骼的父骨骼索引。

### applyBonePhysicsImpulse(bone?: String|Number, directionalImpulse: Vec3, angularImpulse: Vec3): void

将指定的方向或角度应用到骨骼。

### resetBonePhysicsSimulation(bone?: String|Number): void

重置骨骼的物理力度和位置。

### getBlendShapeIndex(name: String): Number

通过名称获取混合形状的索引。

### getBlendShapeWeight(blendShape: String|Number): Number

通过名称或索引获取混合形状的权重。

### setBlendShapeWeight(blendShape: String|Number, weight: Number): void

通过名称或索引设置混合形状的权重。