---
prev: ../../reference.md
---

# SceneScript Class IEffect

Class that provides access to image effects used on image layers.

## Properties

### visible: Boolean

Whether the effect is currently visible.

### name: String

Custom name of the effect if any is specified.

## Functions

### getMaterial(index: Number): IMaterial

Access a material used by this effects.

### getMaterialCount(): Number

Total number of materials used by this effect, every effect has at least one material. 

### setMaterialProperty(propertyName: String, value: Number|Vec2|Vec3|Vec4)

Set a property value on all materials used by this effect that have a matching property.

### executeMaterialFunction(propertyName: String): void

Execute a custom render function defined by the effect.