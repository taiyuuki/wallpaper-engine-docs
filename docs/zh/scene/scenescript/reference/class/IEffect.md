---
prev: ../../reference.md
---

# SceneScript Class IEffect

该类提供对图层使用的图像效果的访问。

## 属性

### visible: Boolean

效果当前是否可见。

### name: String

效果的自定义名称。

## 函数

### getMaterial(index: Number): IMaterial

访问此效果使用的材质。

### getMaterialCount(): Number

获取此效果使用的材质数量，每一个效果至少有一个材质。

### setMaterialProperty(propertyName: String, value: Number|Vec2|Vec3|Vec4)

为此效果使用的所有材质设置一个属性值。

### executeMaterialFunction(propertyName: String): void

执行此效果定义的自定义渲染函数。