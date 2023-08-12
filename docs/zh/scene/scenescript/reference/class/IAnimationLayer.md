---
prev: ../../reference.md
---

# SceneScript Class IAnimationLayer

This class represents a puppet warp animation layer.

## Properties

### fps: Number (readonly)

The speed of the animation layer.

### frameCount: Number (readonly)

The number of frames of this animation.

### duration: Number (readonly)

The duration in seconds of this animation.

### name: String (readonly)

The custom name of this animation layer.

### rate: Number

Speed factor of the animation layer.

### blend: Number

The amount of blending on this animation layer.

### visible: Boolean

Whether this animation layer is currently being applied.

## Functions

### play(): void

Continues or starts playing the animation layer if it was paused or stopped.

### stop(): void

Stops the animation layer and reverts to the beginning.

### pause(): void

Pauses the animation layer at the current position.

### isPlaying(): Boolean

Returns whether the animation layer is currently playing or if it's paused/stopped.

### getFrame(): Number

Get the current frame of the animation layer.

### setFrame(frame: Number)

Set the animation layer to the specified frame.

### addEndedCallback(callback: Function)

Add a callback to be fired every time the animation layer reaches the end.