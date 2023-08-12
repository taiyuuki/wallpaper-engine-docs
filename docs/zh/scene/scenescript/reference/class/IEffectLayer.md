---
prev: ../../reference.md
---

# SceneScript Class IEffectLayer

Base class for image and text layers.

## Properties

### size: Vec2

Resolution of the image layer in pixels. *Read-only.*

### perspective: Boolean

If set to `true`, the layer will use perspective rendering instead of flat rendering.

### solid: Boolean

If set to `true`, the layer will trigger [cursor events](/scene/scenescript/reference/event/cursor).

## Functions

### getEffect(name: String|Number): IEffect

Find a material effect by its name or index.

### getEffectCount(): Number

Get number of effects used by this image layer.