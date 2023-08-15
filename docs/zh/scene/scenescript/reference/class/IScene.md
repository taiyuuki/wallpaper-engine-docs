---
prev: ../../reference.md
---

# SceneScript Class IScene

您可以在 SceneScript 代码中任意位置的全局对象`thisScene`访问此接口，以获取与当前加载的场景相关的属性和函数。

[[toc]]

## 属性

### bloom: Boolean

高光效果的状态（打开或关闭）。

### bloomstrength: Number

高光效果的强度。

### bloomthreshold: Number

使高光效果显示的最低亮度。

### clearenabled: Boolean

是否在每帧开始时清除后台缓存。

### clearcolor: Vec3

清除后台缓冲使用的颜色。

### ambientcolor: Vec3

The ambient color in 3D.

3D的环境颜色。

### skylightcolor: Vec3

The lower ambient color in 3D.

3D的较低环境色。

### fov: Number

3D的视野。

### nearz: Number

3D的近Z平面距离。

### farz: Number

3D的远Z平面距离。

### camerafade: Boolean

更改路径时相机是否会显示淡入淡出效果。

### camerashake: Boolean

关闭或打开相机抖动。

### camerashakespeed: Number

设定相机抖动的基本速度。

### camerashakeamplitude: Number

设置相机抖动的幅度。

### camerashakeroughness: Number

设置相机抖动的粗糙度。

### cameraparallax: Boolean

打开或关闭相机视差效果。

### cameraparallaxamount: Number

视差的强度。

### cameraparallaxdelay: Number

视差过渡的延迟量。

### cameraparallaxmouseinfluence: Number

视差效果受鼠标光标位置的影响程度。

## 函数

### getLayer(name: String|Number): ILayer

按索引或自定义名称获取图层。

### getLayerCount(): Number

获取图层数量。

### enumerateLayers(): ILayer[]

获取所有图层并放入数组中。

### destroyLayer(name: String|Number|ILayer): Boolean

按索引或自定义名称或图层引用删除图层。该图层实际上将以延迟的方式删除，因此如果想用脚本来停止或删除图层时，请考虑这一点。

### createLayer(configuration: String|Object|IAssetHandle): ILayer

创建图层并返回其引用，图层配置可以是相对于项目路径的组件，也可以是像`scene.json`文件那样的自定义对象，或者是通过`engine.registerAsset()`返回的[IAssetHandle](/wallpaper-engine-docs/scene/scenescript/reference/class/IAssetHandle)对象，

### sortLayer(layer: String|Number|ILayer, index: Number): Boolean

更改图层的显示顺序。

### getLayerIndex(layer: String|ILayer): Number

返回图层的当前索引。

### getInitialLayerConfig(layer: String|Number|ILayer): Object;

获取现有图层的初始配置。

### getCameraTransforms(): CameraTransforms

返回当前的静态摄像机变换，使用摄像机路径时不要使用!

### setCameraTransforms(cameraTransforms: CameraTransforms): void

更改当前的静态摄像机变换，使用摄像机路径时不要使用!