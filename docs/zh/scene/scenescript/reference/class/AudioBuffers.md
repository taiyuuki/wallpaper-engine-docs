---
prev: ../../reference.md
---

# SceneScript Class AudioBuffers

Provides access to the left and right audio spectrum values and their combined average. The `left`, `right` and `average` arrays always have the same size as defined in the `resolution` parameter of [engine.registerAudioBuffers(resolution: Number)](/scene/scenescript/reference/class/IEngine). Their contents will be updated for every frame automatically, so you can continuously read the audio levels from this object.

If you have initialized this object with a resolution of `16` for example, then accessing either `left[0]`, `right[0]` or `average[0]` would return you the current audio levels of low bass frequencies which is useful for detecting beats and most commonly used in Wallpaper Engine. Accessing `left[15]`, `right[15]` or `average[15]` would be for high treble frequencies, while all values in between represent a specific audio frequency range.

The volume levels typically range from `0.00` to `1.00`, though they may also in some cases reach higher values than `1.00`. If this is a problem for your use-case, you can utilize `Math.min()` to limit the values to `1.00`. For example:

```js
Math.min(1.00, audioBuffers.average[0]);
```

## Properties

### average: Float32Array

This is the arithmetic mean of both channels (`left` and `right`) divided by half.

We recommend using this property unless you specifically want to work with the audio data from both channels independently.

### left: Float32Array

Array that contains the audio volume levels of the left audio channel.

### right: Float32Array

Array that contains the audio volume levels of the left audio channel.