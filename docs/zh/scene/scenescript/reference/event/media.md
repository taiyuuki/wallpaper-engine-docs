---
prev: ../../reference.md
---

# 媒体相关的事件
 
SceneScript 提供了多个媒体集成事件，可以让你访问系统上当前播放的音乐或视频的信息。这仅适用于集成了全局 Windows 媒体系统的媒体播放器。某些媒体播放器可能需要你手动开启此功能。

::: danger 请注意
有些音频播放器中的音频数据无法被壁纸引擎访问。你构建的壁纸应该始终保证在禁用媒体功能或者某些数据不可用的情况下，仍然可以正常工作。
:::

[[toc]]

## mediaStatusChanged

这个事件函数将在媒体功能被禁用或启用时被调用。事件参数是一个[MediaStatusEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaStatusEvent)对象，你可以利用它来适配那些不使用媒体功能的用户的壁纸。

```js
export function mediaStatusChanged(event: MediaStatusEvent) {

}
```

## mediaPlaybackChanged

这个事件函数将在媒体开始播放、停止播放或暂停播放时被调用。事件参数是一个[MediaPlaybackEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent)对象，你可以利用它检查媒体的播放状态。例如： `event.state == MediaPlaybackEvent.PLAYBACK_PLAYING`，更多信息请参阅[MediaPlaybackEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent)。

```js
export function mediaPlaybackChanged(event: MediaPlaybackEvent) {

}
```

## mediaPropertiesChanged

这个事件函数将在当前播放的媒体属性发生变化时调用，包括歌曲标题、歌手名称、专辑名称等。所有信息都由[MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent)参数提供。

```js
export function mediaPropertiesChanged(event: MediaPropertiesEvent) {

}
```

## mediaThumbnailChanged

这个事件函数将在当前播放的媒体缩略图（专辑封面）发生变化时调用，事件参数是[MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent)，并且还包含额外的信息，例如主要颜色、次要瑶瑟和第三次要颜色等，你可以在壁纸中利用这些信息。

```js
export function mediaThumbnailChanged(event: MediaThumbnailEvent) {

}
```

## mediaTimelineChanged

这个事件函数将在播放媒体的当前时间发生变化时被调用。事件参数是一个[MediaTimelineEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaTimelineEvent)对象。**请注意：** 并不是所有媒体播放器都支持此功能，请确保你的壁纸在没能调用此函数的情况下也能正常工作。

```js
export function mediaTimelineChanged(event: MediaTimelineEvent) {

}
```