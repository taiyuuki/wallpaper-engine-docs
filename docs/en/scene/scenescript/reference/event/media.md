---
prev: ../../reference.md
---

# SceneScript Media Integration Events

SceneScript offers multiple media integration events that allow you to access information about currently playing music or videos on the system. This will only be available for media players that integrate with the global Windows media system. Some media players require this feature to be turned on first.

::: danger Please note
Some media data is not available in certain audio players. Always build your wallpapers in a way that they do not break when the feature is disabled or if certain data points are unavailable.
:::

[[toc]]

## mediaStatusChanged

This event function will be called when the media integration is turned on or off by the user in the app settings. The event parameter is a [MediaStatusEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaStatusEvent). You can utilize this to adapt your wallpaper for users who choose not to use this feature at all.

```js
export function mediaStatusChanged(event: MediaStatusEvent) {

}
```

## mediaPlaybackChanged

This event function will be called when the users starts, stops or pauses media playback. The event parameter is a [MediaPlaybackEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent). You can use the class constants to check for the appropriate state. For example: `event.state == MediaPlaybackEvent.PLAYBACK_PLAYING`, see the `MediaPlaybackEvent` class for more information.

```js
export function mediaPlaybackChanged(event: MediaPlaybackEvent) {

}
```

## mediaPropertiesChanged

This event function will be called when the properties of the currently playing media change. It contains text information such as the song title, artist name, album name and more. All information are supplied by the [MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent) parameter.

```js
export function mediaPropertiesChanged(event: MediaPropertiesEvent) {

}
```

## mediaThumbnailChanged

This event function will be called when the thumbnail of the currently playing media changes. The event parameter is a [MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent) and also contains additional information, such as primary, secondary and tertiary colors used in the album art which you can utilize in your wallpaper.

```js
export function mediaThumbnailChanged(event: MediaThumbnailEvent) {

}
```

## mediaTimelineChanged

This event function will be called when the current time of the playing media changes. The event parameter is a [MediaTimelineEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaTimelineEvent). **Please note:** Not all media players support this feature, make sure your wallpaper also works fine when this function is never called.

```js
export function mediaTimelineChanged(event: MediaTimelineEvent) {

}
```