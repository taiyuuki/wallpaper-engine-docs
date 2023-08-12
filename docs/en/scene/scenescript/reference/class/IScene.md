---
prev: ../../reference.md
---

# SceneScript Class IScene

You can access this interface through the global object `thisScene` anywhere in your SceneScript code to access properties and functions related to the currently loaded scene.

[[toc]]

## Properties

### bloom: Boolean

Turns the bloom effect on and off.

### bloomstrength: Number

Strength of the bloom effect.

### bloomthreshold: Number

Minimum brightness required to make bloom show up.

### clearenabled: Boolean

Whether the backbuffer will be cleared at the beginning of a frame.

### clearcolor: Vec3

The color to clear the backbuffer with.

### ambientcolor: Vec3

The ambient color in 3D.

### skylightcolor: Vec3

The lower ambient color in 3D.

### fov: Number

Field of view in 3D.

### nearz: Number

Near Z plane distance for 3D.

### farz: Number

Far Z plane distance for 3D.

### camerafade: Boolean

Whether the camera will show the fade effect when changing paths.

### camerashake: Boolean

Turns camera shake on or off.

### camerashakespeed: Number

Sets the base speed for the camera shake.

### camerashakeamplitude: Number

Sets the magnitude of the camera shake.

### camerashakeroughness: Number

Sets how rough the camera will shake.

### cameraparallax: Boolean

Turns the camera parallax effect on or off.

### cameraparallaxamount: Number

How strong the parallax will scale.

### cameraparallaxdelay: Number

How quickly or slowly the parallax effect will transition.

### cameraparallaxmouseinfluence: Number

How much the parallax effect is affected by the cursor position.

## Functions

### getLayer(name: String|Number): ILayer

Get a layer by index or custom name.

### getLayerCount(): Number

Get the total layer count.

### enumerateLayers(): ILayer[]

Get all layers in an array.

### destroyLayer(name: String|Number|ILayer): Boolean

Remove a layer by index, name or reference. The layer will actually be removed in a deferred manner so consider this when expecting scripts to stop or destroy on that layer.

### createLayer(configuration: String|Object|IAssetHandle): ILayer

Creates a new layer and returns a reference to it. The configuration can simply be a path to the asset relative to the project, a custom object just like in the `scene.json` file itself with any overrides you want or an [IAssetHandle](/wallpaper-engine-docs/scene/scenescript/reference/class/IAssetHandle) returned by `engine.registerAsset()`.

### sortLayer(layer: String|Number|ILayer, index: Number): Boolean

Changes the display order of a layer.

### getLayerIndex(layer: String|ILayer): Number

Returns the current index of a layer in the scene graph.

### getInitialLayerConfig(layer: String|Number|ILayer): Object;

Get the initial configuration of an existing layer.

### getCameraTransforms(): CameraTransforms

Returns the current, static camera transforms. Do not use this while using a camera path!

### setCameraTransforms(cameraTransforms: CameraTransforms): void

Changes the current, static camera transforms. Do not use this while using a camera path!