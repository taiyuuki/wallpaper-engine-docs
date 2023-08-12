# SceneScript Reference

SceneScript is follows the ECMAScript 2018 specification, so you can utilize all functionalities from ECMAScript that you would also find in similar languages such as *JavaScript*. This is very useful as you can make use of various helpful classes. For example, `Date` allows you to access the current date and time, `Math` allows you to access various mathematical utility functions.

This page only covers all additions that SceneScript adds to make working with wallpapers possible.

## Globals

SceneScript introduces a handful of globals which you can access at any point in your code.

| Global        | Description   |
|---------------|---------------|
| [engine](/en/scene/scenescript/reference/class/IEngine.html) | Access to general features of the application. `IEngine` class. |
| [input](/en/scene/scenescript/reference/class/IInput.html) | Input related data, mainly the mouse cursor. `IInput` class.|
| [thisScene](/en/scene/scenescript/reference/class/IScene.html) | The currently loaded scene wallpaper. `IScene` class |
| [thisLayer](/en/scene/scenescript/reference/class/ILayer.html) | The layer this script has been loaded on. `ILayer` class. |
| [thisObject](/en/scene/scenescript/reference/class/IThisPropertyObject.html) | The object this script belongs to. `IThisPropertyObject` class. |
| [console](/en/scene/scenescript/reference/class/IConsole.html) | Access the console log for debugging purposes. `IConsole` class. |
| [shared](/en/scene/scenescript/reference/class/Shared.html) | Empty by default, allows you to share data between multiple scripts. `Shared` class. |

## Events

SceneScript uses an event system that allows you to run specific code whenever certain events take place. Most notably, the `update` event is most commonly used to execute SceneScript code at every frame that Wallpaper Engine calculates. The `init` event is good for running code once when the wallpaper is first loaded and the `applyUserProperties` event allows you to react to changes to user properties of your wallpaper. Additionally, there are a handful of `cursor` events which related to mouse movement and mouse input which you can incorporate into your wallpaper.

| Event                | Description   |
|----------------------|---------------|
| [init](/en/scene/scenescript/reference/event/init.html) | This initialization function will be called once after the object it belongs to has been created. |
| [update](/en/scene/scenescript/reference/event/update.html) | This event function will be called every frame for all scripts that export it. |
| [destroy](/en/scene/scenescript/reference/event/destroy.html) | This event function will be called just before the object it belongs to gets destroyed. |
| [resizeScreen](/en/scene/scenescript/reference/event/resizeScreen.html) | This function will be called every time the wallpaper resizes because of a change to the current resolution. |
| [applyUserProperties](/en/scene/scenescript/reference/event/applyUserProperties.html) | This event function will be called once initially when the wallpaper is loaded and whenever any user properties are being adjusted by the user. |
| [cursorEnter](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor enters the bounds of the object. |
| [cursorLeave](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor leaves the bounds of the object. |
| [cursorMove](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor has been moved. |
| [cursorDown](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor is being pressed down on an object. |
| [cursorUp](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor is being released over an object.  |
| [cursorClick](/en/scene/scenescript/reference/event/cursor.html) | This event function will be called when the cursor has been pressed and released on the same object. |
| [mediaStatusChanged](/en/scene/scenescript/reference/event/media.html) | This event function will be called when the media integration is turned on or off by the user. |
| [mediaPlaybackChanged](/en/scene/scenescript/reference/event/media.html) | This event function will be called when the users starts, stops or pauses media. |
| [mediaPropertiesChanged](/en/scene/scenescript/reference/event/media.html) | This event function will be called when the properties of the currently playing media change. |
| [mediaThumbnailChanged](/en/scene/scenescript/reference/event/media.html) | This event function will be called when the thumbnail of the currently playing media changes. |
| [mediaTimelineChanged](/en/scene/scenescript/reference/event/media.html) | This event function will be called when the current time of the playing media changes and is only provided by certain applications. |

## Classes

All components of Wallpaper Engine are provided with a fitting class so that you can access everything programmatically. The following list contains all relevant classes introduced by SceneScript:

| Class                | Description   |
|----------------------|---------------|
| [AnimationEvent](/en/scene/scenescript/reference/class/AnimationEvent.html) | This object describes an animation event that has been fired from a timeline or puppet warp animation. |
| [AudioBuffers](/en/scene/scenescript/reference/class/AudioBuffers.html) | Provides access to the left and right audio spectrum values and their combined average for audio visualization purposes. |
| [CameraTransforms](/en/scene/scenescript/reference/class/CameraTransforms.html) | Objects of this class describe the camera orientation and position. |
| [CursorEvent](/en/scene/scenescript/reference/class/CursorEvent.html) | Provides information about the cursor position during cursor events. |
| [IAnimation](/en/scene/scenescript/reference/class/IAnimation.html) | This class represents a timeline property animation. |
| [IAnimationLayer](/en/scene/scenescript/reference/class/IAnimationLayer.html) | This class represents a puppet warp animation layer. |
| [IConsole](/en/scene/scenescript/reference/class/IConsole.html) | You can access this interface anywhere in your SceneScript code through the global `console` object to interact with the console log. |
| [IEffect](/en/scene/scenescript/reference/class/IEffect.html) | Provides access to image effects used on image layers. |
| [IEffectLayer](/en/scene/scenescript/reference/class/IEffectLayer.html) | Base class for image and text layers. |
| [IEngine](/en/scene/scenescript/reference/class/IEngine.html) | Provides general information about the user device and the running wallpaper. |
| [IImageLayer](/en/scene/scenescript/reference/class/IImageLayer.html) | This class provides access to functions specific to image layers. |
| [IInput](/en/scene/scenescript/reference/class/IInput.html) | Provides access to input related data, mainly the mouse cursor. |
| [ILayer](/en/scene/scenescript/reference/class/ILayer.html) | Provides access to data related to a layer. |
| [IMaterial](/en/scene/scenescript/reference/class/IMaterial.html) | Provides access to dynamic properties of materials / shader properties. |
| [IParticleSystem](/en/scene/scenescript/reference/class/IParticleSystem.html) | Provides access to particle systems and lets you modify their playback state. |
| [IParticleSystemInstance](/en/scene/scenescript/reference/class/IParticleSystemInstance.html) | Provides access to instance modifiers for particle systems. You can use this to adjust details of a particle system dynamically. |
| [IScene](/en/scene/scenescript/reference/class/IScene.html) | Provides access to properties of the currently loaded scene. |
| [ISoundLayer](/en/scene/scenescript/reference/class/ISoundLayer.html) | Provides access functions specific to sound layers. |
| [ITextureAnimation](/en/scene/scenescript/reference/class/ITextureAnimation.html) | This class represents a texture animation. |
| [IVideoTexture](/en/scene/scenescript/reference/class/IVideoTexture.html) | This class represents a video texture animation. |
| [Mat4](/en/scene/scenescript/reference/class/Mat4.html) | Utility class used for creating a 4 dimensional identity matrix. |
| [MediaPlaybackEvent](/en/scene/scenescript/reference/class/MediaPlaybackEvent.html) | Media integration event, fired when the user starts, stops or pauses media. |
| [MediaPropertiesEvent](/en/scene/scenescript/reference/class/MediaPropertiesEvent.html) | Media integration event, fired when the properties of the current media session are changing. |
| [MediaStatusEvent](/en/scene/scenescript/reference/class/MediaStatusEvent.html) | Media integration event, fired when the user turns the media integration on or off. |
| [MediaThumbnailEvent](/en/scene/scenescript/reference/class/MediaThumbnailEvent.html) | Media integration event, fired when the thumbnail pertaining to the current media changes. |
| [MediaTimelineEvent](/en/scene/scenescript/reference/class/MediaTimelineEvent.html) | Optional media integration event, fired irregularly when the current time of the media session changes. |
| [Shared](/en/scene/scenescript/reference/class/Shared.html) | Related to the global object `shared` which you may use to share data between multiple scripts. |
| [Vec2](/en/scene/scenescript/reference/class/Vec2.html) | Utility class which holds a 2 dimensional value pair: `x` and `y`. |
| [Vec3](/en/scene/scenescript/reference/class/Vec3.html) | Utility class which holds a 3 dimensional value pair: `x`, `y` and `z`. |

## Modules

Wallpaper Engine also provides some modules which can be used to access certain utility functions. These can be helpful to easily implement certain use-cases.

| Module                | Description   |
|----------------------|---------------|
| [WEColor](/en/scene/scenescript/reference/module/WEColor.html) | Module which provides utility functions related to color manipulation. |
| [WEMath](/en/scene/scenescript/reference/module/WEMath.html) | Module which provides utility functions related to general mathematical functions. |
| [WEVector](/en/scene/scenescript/reference/module/WEVector.html) | Module which provides utility functions related to working with vectors. |
