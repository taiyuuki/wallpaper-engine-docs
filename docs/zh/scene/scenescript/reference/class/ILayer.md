---
prev: ../../reference.md
---

# SceneScript Class ILayer

You can access this interface through the global object `thisLayer` anywhere in your SceneScript code to interact with the current layer.

## Properties

### origin: Vec3

Position of the layer.

### angles: Vec3

Orientation of the layer in degrees.

### scale: Vec3

Relative size of the layer.

### name: String

Custom name set in the editor.

### visible: Boolean

Whether the layer is currently visible.

### parallaxDepth: Vec2

The parallax scale for the X and Y axis.

## Functions

### getAnimation(name?: String): IAnimation

Get an animation object by name. Leave empty to get the animation object bound to the current property.

### rotateObjectSpace(angles: Vec3)

Rotate the layer around its current object axes.
