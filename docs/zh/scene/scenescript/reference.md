# SceneScript Reference

SceneScript is follows the ECMAScript 2018 specification, so you can utilize all functionalities from ECMAScript that you would also find in similar languages such as *JavaScript*. This is very useful as you can make use of various helpful classes. For example, `Date` allows you to access the current date and time, `Math` allows you to access various mathematical utility functions.

This page only covers all additions that SceneScript adds to make working with wallpapers possible.

## Globals

SceneScript introduces a handful of globals which you can access at any point in your code.

| Global        | Description   |
|---------------|---------------|
| [engine](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine) | Access to general features of the application. `IEngine` class. |
| [input](/wallpaper-engine-docs/scene/scenescript/reference/class/IInput) | Input related data, mainly the mouse cursor. `IInput` class.|
| [thisScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) | The currently loaded scene wallpaper. `IScene` class |
| [thisLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ILayer) | The layer this script has been loaded on. `ILayer` class. |
| [thisObject](/wallpaper-engine-docs/scene/scenescript/reference/class/IThisPropertyObject) | The object this script belongs to. `IThisPropertyObject` class. |
| [console](/wallpaper-engine-docs/scene/scenescript/reference/class/IConsole) | Access the console log for debugging purposes. `IConsole` class. |
| [shared](/wallpaper-engine-docs/scene/scenescript/reference/class/Shared) | Empty by default, allows you to share data between multiple scripts. `Shared` class. |

## Events

SceneScript uses an event system that allows you to run specific code whenever certain events take place. Most notably, the `update` event is most commonly used to execute SceneScript code at every frame that Wallpaper Engine calculates. The `init` event is good for running code once when the wallpaper is first loaded and the `applyUserProperties` event allows you to react to changes to user properties of your wallpaper. Additionally, there are a handful of `cursor` events which related to mouse movement and mouse input which you can incorporate into your wallpaper.

| Event                | Description   |
|----------------------|---------------|
| [init](/wallpaper-engine-docs/scene/scenescript/reference/event/init) | This initialization function will be called once after the object it belongs to has been created. |
| [update](/wallpaper-engine-docs/scene/scenescript/reference/event/update) | This event function will be called every frame for all scripts that export it. |
| [destroy](/wallpaper-engine-docs/scene/scenescript/reference/event/destroy) | This event function will be called just before the object it belongs to gets destroyed. |
| [resizeScreen](/wallpaper-engine-docs/scene/scenescript/reference/event/resizeScreen) | This function will be called every time the wallpaper resizes because of a change to the current resolution. |
| [applyUserProperties](/wallpaper-engine-docs/scene/scenescript/reference/event/applyUserProperties) | This event function will be called once initially when the wallpaper is loaded and whenever any user properties are being adjusted by the user. |
| [cursorEnter](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor enters the bounds of the object. |
| [cursorLeave](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor leaves the bounds of the object. |
| [cursorMove](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor has been moved. |
| [cursorDown](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor is being pressed down on an object. |
| [cursorUp](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor is being released over an object.  |
| [cursorClick](/wallpaper-engine-docs/scene/scenescript/reference/event/cursor) | This event function will be called when the cursor has been pressed and released on the same object. |
| [mediaStatusChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | This event function will be called when the media integration is turned on or off by the user. |
| [mediaPlaybackChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | This event function will be called when the users starts, stops or pauses media. |
| [mediaPropertiesChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | This event function will be called when the properties of the currently playing media change. |
| [mediaThumbnailChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | This event function will be called when the thumbnail of the currently playing media changes. |
| [mediaTimelineChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) | This event function will be called when the current time of the playing media changes and is only provided by certain applications. |

## Classes

All components of Wallpaper Engine are provided with a fitting class so that you can access everything programmatically. The following list contains all relevant classes introduced by SceneScript:

| Class                | Description   |
|----------------------|---------------|
| [AnimationEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/AnimationEvent) | This object describes an animation event that has been fired from a timeline or puppet warp animation. |
| [AudioBuffers](/wallpaper-engine-docs/scene/scenescript/reference/class/AudioBuffers) | Provides access to the left and right audio spectrum values and their combined average for audio visualization purposes. |
| [CameraTransforms](/wallpaper-engine-docs/scene/scenescript/reference/class/CameraTransforms) | Objects of this class describe the camera orientation and position. |
| [CursorEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/CursorEvent) | Provides information about the cursor position during cursor events. |
| [IAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimation) | This class represents a timeline property animation. |
| [IAnimationLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IAnimationLayer) | This class represents a puppet warp animation layer. |
| [IConsole](/wallpaper-engine-docs/scene/scenescript/reference/class/IConsole) | You can access this interface anywhere in your SceneScript code through the global `console` object to interact with the console log. |
| [IEffect](/wallpaper-engine-docs/scene/scenescript/reference/class/IEffect) | Provides access to image effects used on image layers. |
| [IEffectLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IEffectLayer) | Base class for image and text layers. |
| [IEngine](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine) | Provides general information about the user device and the running wallpaper. |
| [IImageLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/IImageLayer) | This class provides access to functions specific to image layers. |
| [IInput](/wallpaper-engine-docs/scene/scenescript/reference/class/IInput) | Provides access to input related data, mainly the mouse cursor. |
| [ILayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ILayer) | Provides access to data related to a layer. |
| [IMaterial](/wallpaper-engine-docs/scene/scenescript/reference/class/IMaterial) | Provides access to dynamic properties of materials / shader properties. |
| [IParticleSystem](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystem) | Provides access to particle systems and lets you modify their playback state. |
| [IParticleSystemInstance](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystemInstance) | Provides access to instance modifiers for particle systems. You can use this to adjust details of a particle system dynamically. |
| [IScene](/wallpaper-engine-docs/scene/scenescript/reference/class/IScene) | Provides access to properties of the currently loaded scene. |
| [ISoundLayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ISoundLayer) | Provides access functions specific to sound layers. |
| [ITextureAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/ITextureAnimation) | This class represents a texture animation. |
| [IVideoTexture](/wallpaper-engine-docs/scene/scenescript/reference/class/IVideoTexture) | This class represents a video texture animation. |
| [Mat4](/wallpaper-engine-docs/scene/scenescript/reference/class/Mat4) | Utility class used for creating a 4 dimensional identity matrix. |
| [MediaPlaybackEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent) | Media integration event, fired when the user starts, stops or pauses media. |
| [MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent) | Media integration event, fired when the properties of the current media session are changing. |
| [MediaStatusEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaStatusEvent) | Media integration event, fired when the user turns the media integration on or off. |
| [MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent) | Media integration event, fired when the thumbnail pertaining to the current media changes. |
| [MediaTimelineEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaTimelineEvent) | Optional media integration event, fired irregularly when the current time of the media session changes. |
| [Shared](/wallpaper-engine-docs/scene/scenescript/reference/class/Shared) | Related to the global object `shared` which you may use to share data between multiple scripts. |
| [Vec2](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec2) | Utility class which holds a 2 dimensional value pair: `x` and `y`. |
| [Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3) | Utility class which holds a 3 dimensional value pair: `x`, `y` and `z`. |

## Modules

Wallpaper Engine also provides some modules which can be used to access certain utility functions. These can be helpful to easily implement certain use-cases.

| Module                | Description   |
|----------------------|---------------|
| [WEColor](/wallpaper-engine-docs/scene/scenescript/reference/module/WEColor) | Module which provides utility functions related to color manipulation. |
| [WEMath](/wallpaper-engine-docs/scene/scenescript/reference/module/WEMath) | Module which provides utility functions related to general mathematical functions. |
| [WEVector](/wallpaper-engine-docs/scene/scenescript/reference/module/WEVector) | Module which provides utility functions related to working with vectors. |
