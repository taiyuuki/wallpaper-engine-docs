---
prev: ../../reference.md
---

# SceneScript Class MediaPlaybackEvent

该对象描述了媒体播放事件，当用户开始、停止或暂停媒体会话时触发。

The object provides color information which are stored in a [Vec3](/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3) object, the RGB values are normalized to a range between 0.00 and 1.00. You can use these color objects in color properties, for example.

> 译注：这里的第二段话疑似是原作者写错了位置，与本节内容无关，因此不做翻译，但保留原文。

## 属性

### state: Number

当前媒体会话的状态。可以是以下三个值:

* `MediaPlaybackEvent.PLAYBACK_PLAYING` - 媒体正在系统中播放。
* `MediaPlaybackEvent.PLAYBACK_PAUSED` - 媒体之前在播放，但是被用户暂停了
* `MediaPlaybackEvent.PLAYBACK_STOPPED` - 媒体已经停止播放。