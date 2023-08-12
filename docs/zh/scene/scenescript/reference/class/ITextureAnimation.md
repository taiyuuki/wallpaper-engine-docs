---
prev: ../../reference.md
---

## SceneScript Class ITextureAnimation

This class represents a texture animation. By default, all instances of an animated texture share an animation state. Calling any function here that changes the animation will disconnect it from the shared state. You can revert this and use the shared animation state again by calling join.

Not to be confused with [IVideoTexture](/scene/scenescript/reference/class/IVideoTexture).

## Properties

### frameCount: Number (readonly)

The number of frames of this animation.

### duration: Number (readonly)

The duration in seconds of this animation.

### rate: Number

Speed factor of the animation, default is 1.

## Functions

### play()

Continues or starts playing the animation if it was paused or stopped.

### stop()

Stops the animation and reverts to the beginning.

### pause()

Pauses the animation at the current position.

### isPlaying(): Boolean

Returns whether the animation is currently playing or if it's paused/stopped.

### getFrame(): Number

Get the current frame of the animation.

### setFrame(frame: Number)

Set the animation to the specified frame.

### join()

Return to the global, shared animation between all objects. 