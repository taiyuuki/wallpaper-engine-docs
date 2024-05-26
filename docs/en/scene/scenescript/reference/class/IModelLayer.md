---
prev: ../../reference.md
---

# SceneScript Class IModelLayer

This class provides access to functions specific to 3D model layers.

## Properties

### perspective: Boolean

Controls the perspective rendering option.

### rootmotion: Boolean

If the model is playing an animation that supports root motion, you can disable and enable movement from root motion with this property. It's enabled by default.

## Functions

### playSingleAnimation(animation: String|Object, config?: Object): IAnimationLayer

Create a new animation layer by animation name or JSON config. Only play the animation once, then remove it automatically. See IAnimationLayer for config options.

### getAnimationLayerCount(): Number

Get the number of animation layers currently used on this layer.

### getAnimationLayer(name: String|Number): IAnimationLayer

Get an existing animation layer object by name or index.

### createAnimationLayer(animation: String|Object): IAnimationLayer

Create a new animation layer by animation name or JSON config.

### destroyAnimationLayer(animationLayer: String|Object|IAnimationLayer): Boolean

Remove an existing animation layer by name, index or IAnimationLayer object reference.