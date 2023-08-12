---
prev: ../../reference.md
---

# SceneScript Class MediaPlaybackEvent

This object describes a media playback event, which fires whenever the user starts, stops or pauses their media session.

The object provides color information which are stored in a [Vec3](/en/scene/scenescript/reference/class/Vec3.html) object, the RGB values are normalized to a range between 0.00 and 1.00. You can use these color objects in color properties, for example.

## Properties

### state: Number

The current state of the media session. This can be one of three values:

* `MediaPlaybackEvent.PLAYBACK_PLAYING` - Media is actively playing on the system.
* `MediaPlaybackEvent.PLAYBACK_PAUSED` - Media was previously playing, but playback was (temporarily) paused by the user.
* `MediaPlaybackEvent.PLAYBACK_STOPPED` - Media playback is completely stopped.