---
prev: ../../reference.md
---

# SceneScript Class CameraTransforms

Objects of this class describe the camera orientation and position. You can generate an object of this class through the [thisScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) object.

该类描述了相机的方向和位置。你可以通过 [thisScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) 对象来生成该类的对象。

## Properties

### eye: Vec3

相机的原点位置。

## center: Vec3

相机的焦点位置。

## up: Vec3

向上的方向，用于控制相机的滚动。

## zoom: Number

相对的缩放系数，仅能在 2D 壁纸中使用。3D 壁纸的缩放系数控制请参阅 thisScene.fov。