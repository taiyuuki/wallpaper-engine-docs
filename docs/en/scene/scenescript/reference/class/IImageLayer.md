---
prev: ../../reference.md
---

# SceneScript Class IImageLayer

This class provides access to functions specific to image layers.

## Properties

### size: Vec2

Resolution of the base image.

### perspective: Boolean

Controls the perspective rendering option.

### solid: Boolean

Controls whether the layer is solid. If set to true, the layer will react to click events.

## Functions

### getEffect(name: String|Number): IEffect

Retrieves an effect by index or custom name, if set.

### getEffectCount(): Number

Total number of effects used by this image layer.

### getTextureAnimation(): ITextureAnimation

Gets the texture animation if the albedo texture of this image layer is a sprite sheet/GIF.

### getVideoTexture(): IVideoTexture

Gets the video texture if the albedo texture of this image layer is a video file.

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

### getBoneCount(): Number

Get the number of skeletal bones.

### getBoneTransform(bone: String|Number): Mat4

Get world bone transform by name or index.

### setBoneTransform(bone: String|Number, transform: Mat4): void

Set world bone transform by name or index.

### getLocalBoneTransform(bone: String|Number): Mat4

Get local bone transform by name or index.

### setLocalBoneTransform(bone: String|Number, transform: Mat4): void

Set local bone transform by name or index.

### getLocalBoneAngles(bone: String|Number): Vec3

Get local bone angles by name or index.

### setLocalBoneAngles(bone: String|Number, angles: Vec3): void

Set local bone angles by name or index.

### getLocalBoneOrigin(bone: String|Number): Vec3

Get local bone origin by name or index.

### setLocalBoneOrigin(bone: String|Number, origin: Vec3): void

Set local bone origin by name or index.

### getBoneIndex(name: String): Number

Get the index of a bone by name.

### getBoneParentIndex(child: Number|String): Number

Get the index of a bone by name.

### applyBonePhysicsImpulse(bone?: String|Number, directionalImpulse: Vec3, angularImpulse: Vec3): void

Apply directional or angular impulse to a physics bone.

### resetBonePhysicsSimulation(bone?: String|Number): void

Resets physics forces and position.

### getBlendShapeIndex(name: String): Number

Get the index of a blend shape by name.

### getBlendShapeWeight(blendShape: String|Number): Number

Get blend shape weight by name or index.

### setBlendShapeWeight(blendShape: String|Number, weight: Number): void

Set blend shape weight by name or index.