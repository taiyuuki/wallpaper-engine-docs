---
prev: ../../reference.md
---

# SceneScript Class CameraTransforms

Objects of this class describe the camera orientation and position. You can generate an object of this class through the [thisScene](/scene/scenescript/reference/class/IScene) object.

## Properties

### eye: Vec3

Position of the camera origin.

## center: Vec3

Position of the point where the camera is looking towards.

## up: Vec3

Normalized direction going upwards to control the roll of the camera.

## zoom: Number

Amount of relative zoom, only used on 2D wallpapers. See thisScene.fov to control zoom in 3D wallpapers if needed. 