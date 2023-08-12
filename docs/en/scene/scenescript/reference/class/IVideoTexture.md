---
prev: ../../reference.md
---

# SceneScript Class IVideoTexture

This class represents a video texture. Video textures are `.mp4` video files which are rendered similar to an image layer texture. Objects of this class allow you to control a video texture and read its current playback state. Using the `addEndedCallback` function, you can attach custom logic which is executed after the video has reached its end.

Not to be confused with [ITextureAnimation](/wallpaper-engine-docs/scene/scenescript/reference/class/ITextureAnimation).

## Properties

### duration: Number

The duration of the video in seconds. *Read-only* value.

### rate: Number

The playback speed of the texture animation.

### loop: Boolean

Whether or not this animation should loop.

## Functions

### play(): void

Start playing the animation if it's paused or stopped.

### pause(): void

Pause the animation.

### stop(): void

Stop the animation and reset the current time to zero.

### isPlaying(): Boolean

Checks if the animation is currently playing.

### getCurrentTime(): Number

Returns the current time of the video.

### setCurrentTime(frame: Number): void

Changes the current time of the video.

### addEndedCallback(callback: Function): void

Add a callback function which is fired every time the video reaches the end.