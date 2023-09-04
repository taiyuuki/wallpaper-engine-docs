# SceneScript语言参考

SceneScript 遵循 ECMAScript 2018 规范，因此你可以使用 ECMAScript 中所有的功能，这些功能可以在类似的语言（如 JavaScript）中找到。这非常有用，因为你可以使用各种有用的类。例如，允许访问当前日期和时间的`Date`，允许你访问各种数学函数的`Math`。

本页仅介绍 SceneScript 为使处理壁纸而添加的所有新增功能。

## 全局变量

SceneScript 引入了一些全局变量，你可以在任何代码的位置访问这些全局变量。

| Global        | Description   |
|---------------|---------------|
| [engine](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine) | 访问应用程序的常规功能。 `IEngine` class. |
| [input](/wallpaper-engine-docs/scene/scenescript/reference/class/IInput) | 与输入相关的数据，主要是鼠标光标。 `IInput` class.|
| [thisScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) | 当前加载的场景壁纸对象。 `IScene` class |
| [thisLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ILayer) | 当前脚本所在的图层对象。 `ILayer` class. |
| [thisObject](/wallpaper-engine-docs/scene/scenescript/reference/class/IThisPropertyObject) | 当前脚本所属的对象。 `IThisPropertyObject` class. |
| [console](/wallpaper-engine-docs/scene/scenescript/reference/class/IConsole) | 访问控制台日志以进行调试。 `IConsole` class. |
| [shared](/wallpaper-engine-docs/scene/scenescript/reference/class/Shared) | 默认情况下为空，允许你在多个脚本之间共享数据。 `Shared` class. |

## 事件

SceneScript 使用事件系统，该系统允许你在发生某些事件时运行特定代码。最值得注意的是，`update`事件是最常用于在Wallpaper Engine中每一帧中执行的SceneScript代码。`init`事件适用于首次加载壁纸时运行一次的代码，`applyUserProperties`事件允许你对壁纸的用户属性更改做出反应。此外，还有一些与鼠标移动和鼠标输入相关的`cursor`事件，你可以将这些事件添加到壁纸中。

| Event                | Description   |
|----------------------|---------------|
| [init](/wallpaper-engine-docs/scene/scenescript/reference/event/init) | 此初始化函数将在创建其所属的对象后调用一次。 |
| [update](/wallpaper-engine-docs/scene/scenescript/reference/event/update) | 所有导出了这个函数的脚本，都会在每一帧调用一次此函数。 |
| [destroy](/wallpaper-engine-docs/scene/scenescript/reference/event/destroy) | 此事件函数将在它所属的对象被销毁之前调用。 |
| [resizeScreen](/wallpaper-engine-docs/scene/scenescript/reference/event/resizeScreen) | 每次分辨率改变时，都会调用此函数。 |
| [applyUserProperties](/wallpaper-engine-docs/scene/scenescript/reference/event/applyUserProperties) | 此事件函数将在第一次加载壁纸、以及用户调整任意用户属性时调用。 |
| [cursorEnter](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 当鼠标的光标进入对象的边界时，将调用此事件函数。 |
| [cursorLeave](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 当鼠标的光标离开对象的边界时，将调用此事件函数。 |
| [cursorMove](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 移动鼠标光标时将调用此事件函数。 |
| [cursorDown](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 当在对象上按下鼠标点击时，将调用此事件函数。 |
| [cursorUp](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 当在对象上抬起鼠标点击时，将调用此事件函数。  |
| [cursorClick](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | 当在同一对象上点击并抬起鼠标时，将调用此事件函数。 |
| [mediaStatusChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | 当用户改变媒体状态（打开或关闭）时，将调用此事件函数。 |
| [mediaPlaybackChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | 当用户启动、停止或暂停媒体时，将调用此事件函数。 |
| [mediaPropertiesChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | 当当前播放的媒体的属性发生更改时，将调用此事件函数。 |
| [mediaThumbnailChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | 当当前播放的媒体的缩略图更改时，将调用此事件函数。 |
| [mediaTimelineChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | 当播放媒体的当前时间发生变化时，将调用此事件函数，只有某些特定的应用程序支持。 |

## Classes

Wallpaper Engine为所有组件都提供了一个适当的类，以便你可以通过编程方式访问所有内容。以下列表包含 SceneScript 引入的所有相关类：

| Class                | Description   |
|----------------------|---------------|
| [AnimationEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/AnimationEvent) | 此类的对象描述已从时间轴动画或变形动画触发的动画事件。 |
| [AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers) | 提供对左右音频频谱值及其组合平均值的访问，以便进行音频可视化。 |
| [CameraTransforms](/wallpaper-engine-docs/scene/scenescript/reference/class/CameraTransforms) | 该类的对象描述相机方向和位置。 |
| [CursorEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/CursorEvent) | 提供有关鼠标事件的位置信息。 |
| [IAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimation) | 此类表示时间轴属性动画。 |
| [IAnimationLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimationLayer) | 此类表示骨骼动画图层。 |
| [IConsole](/wallpaper-engine-docs/scene/scenescript/reference/class/IConsole) | 你可以通过全局对象在 SceneScript 代码的任何位置访问此接口，以便与控制台日志进行交互。 |
| [IEffect](/wallpaper-engine-docs/scene/scenescript/reference/class/IEffect) | 提供对图像图层上使用的图像效果的访问。 |
| [IEffectLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IEffectLayer) | 图像图层和文本图层的基础类。 |
| [IEngine](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine) | 提供有关用户设备和正在运行的壁纸的通用信息。 |
| [IImageLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IImageLayer) | 此类提供对特定图像图层的访问。 |
| [IInput](/wallpaper-engine-docs/scene/scenescript/reference/class/IInput) | 提供对输入相关数据（主要是鼠标）的访问。 |
| [ILayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ILayer) | 提供对与图层相关的数据的访问。 |
| [IMaterial](/wallpaper-engine-docs/scene/scenescript/reference/class/IMaterial) | 提供对材质/着色器属性的动态属性的访问。 |
| [IParticleSystem](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystem) | 提供对粒子系统的访问，并允许你修改其播放状态。 |
| [IParticleSystemInstance](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystemInstance) | 提供对粒子系统的实例修饰符的访问。你可以使用它来动态调整粒子系统的细节。 |
| [IScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) | 提供对当前加载场景的属性的访问。 |
| [ISoundLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ISoundLayer) | 提供特定对声音层的访问功能。 |
| [ITextureAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/ITextureAnimation) | 此类表示纹理动画。 |
| [IVideoTexture](/wallpaper-engine-docs/scene/scenescript/reference/class/IVideoTexture) | 此类表示视频纹理动画。 |
| [Mat4](/wallpaper-engine-docs/scene/scenescript/reference/class/Mat4) | 用于创建4维矩阵的类。 |
| [MediaPlaybackEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent) | 媒体集成事件，在用户启动、停止或暂停媒体时触发。 |
| [MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent) | 媒体集成事件，在当前媒体会话的属性发生更改时触发。 |
| [MediaStatusEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaStatusEvent) | 媒体集成事件，在用户打开或关闭媒体集成时触发。 |
| [MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent) |媒体集成事件，当与当前媒体相关的缩略图发生更改时触发。 |
| [MediaTimelineEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaTimelineEvent) | 可选的媒体集成事件，在媒体的当前时间发生更改时触发。 |
| [Shared](/wallpaper-engine-docs/scene/scenescript/reference/class/Shared) | 与可用于在多个脚本之间共享数据的全局对象。 |
| [Vec2](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec2) | 保存二维键值的类：`x` 和 `y`. |
| [Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3) | 保存三维键值的类：`x`, `y` 和 `z`. |

## Modules

Wallpaper Engine还提供了一些可用于访问某些功能的模块。这些有助于轻松实现某些功能。

| 模块                | 描述   |
|----------------------|---------------|
| [WEColor](/wallpaper-engine-docs/scene/scenescript/reference/module/WEColor) | 提供与颜色处理相关的函数模块 |
| [WEMath](/wallpaper-engine-docs/scene/scenescript/reference/module/WEMath) | 提供与数学相关的函数模块。 |
| [WEVector](/wallpaper-engine-docs/scene/scenescript/reference/module/WEVector) | 提供与向量相关的函数模块。 |
