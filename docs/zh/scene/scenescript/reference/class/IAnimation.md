---
prev: ../../reference.md
---

# SceneScript Class IAnimation

This class represents a timeline property animation.

## Properties

### fps: Number (readonly)

The frames-per-second of the animation.

### frameCount: Number (readonly)

The total number of frames of this animation.

### duration: Number (readonly)

The duration in seconds of this animation.

### name: String (readonly)

The custom name of this animation.

### rate: Number

The speed factor of the animation.

## Functions

### play(): void

Continues or starts playing the animation if it was paused or stopped.

### stop(): void

Stops the animation and reverts to the beginning.

### pause(): void

Pauses the animation at the current position.

### isPlaying(): Boolean

Returns whether the animation is currently playing or if it is paused or stopped.

### getFrame(): Number

Get the current frame of the animation.

### setFrame(frame: Number): void

Set the animation to the specified frame.