---
prev: ../tutorials.md
---

# Processing Audio Data with SceneScript

With SceneScript, you can access the audio levels on the current end-user device. Wallpaper Engine collects the audio levels of certain audio frequencies and makes them available to you for further processing. In this tutorial, we will explain the basics of retrieving these audio levels and we will implement an example where we change the size of an element in the editor to follow the beat of music that a user is playing.

::: tip
You can quickly access the finalized solution presented at the bottom of this page in the editor without having to copy-paste any code from this page.

To quickly add this example to your wallpaper, simply click on the cogwheel icon next to the property you want to resize along with the beat of your music. Then click on **Bind Script**. The SceneScript code editor will appear. Next, click on **Snippets** at the top, followed by **Replace Script**. Select **Audio Scale** from the list of available scripts and confirm with **OK**.
:::

## Registering the Audio Buffers

To get started, you first need to initialize the audio responsive system from Wallpaper Engine by calling the the `registerAudioBuffers()` function from the [global engine object](/en/scene/scenescript/reference/class/IEngine.html). The function will return an [AudioBuffers](/en/scene/scenescript/reference/class/AudioBuffers.html) object, we recommend storing it in a `const` at the top of your script so that you only need to call this function once when the wallpaper is loaded:

```js{3}
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	
	return value;
}
```

The parameter of `registerAudioBuffers` determines the number of frequency bands you need, you should always choose the lowest number to ensure you are not wasting any system performance or memory. Valid values are:

* `engine.AUDIO_RESOLUTION_16` - 16 frequencies
* `engine.AUDIO_RESOLUTION_32` - 32 frequencies
* `engine.AUDIO_RESOLUTION_64` - 64 frequencies

In our example, we registered 16 frequencies since we only care about the bass frequencies as part of this tutorial, so a more finely-divided audio band is unnecessary.

## Basic Audio Responsive Example

Let's start with a very basic audio responsive example. We have an image layer that we placed in the center of our scene and we want to make it resize dynamically with the beat of music. To achieve this, we click on the cogwheel icon next to the **Scale** property and select **Bind SceneScript**. We can now modify the **Scale** with SceneScript.

We now need to extend the example above by retrieving some audio volume levels from the `audioBuffer` that we created. The audio buffer object allows us to access `audioBuffer.average` to retrieve the average audio levels of the left and right audio channel. You can also only retrieve the left audio channel by accessing `audioBuffer.left` and the right audio channel by accessing `audioBuffer.right`.

In the final step, we need to choose which audio frequency we want to access. In Wallpaper Engine, you most commonly want to work with low frequencies that represent the bass and the beat of music. That means, you can access the bass frequencies by accessing the first element via `audioBuffer.average[0]`. In our case, `[0]` represents the low bass frequencies, while `15` represents high treble frequencies. We go with `[0]` because we want our element to resize along the beat of our music.

```js
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = audioBuffer.average[0];
	value.y = audioBuffer.average[0];
	value.z = audioBuffer.average[0];

	return value;
}
```

::: danger
We don't recommend using this code example in your wallpaper, follow-along with the rest of the page to learn about how to improve on this simple implementation.
:::

If you now save this script and click on **Run Preview** while listening to music, your image layer will dynamically resize depending on the audio volume of the bass frequencies of your music. Watch the following video to preview this code example:

<video width="100%" controls >
  <source src="/videos/scenescript_basic_audio.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Improving Audio Responsive Behavior

Our previous example has a few issues that we will address one by one now:

* When no audio is playing, the scale is set to 0 and our element disappears.
* The element can become very large when the audio levels reach peak levels.
* The animation does not appear very smooth and it jumps around erratically.

## Enforcing a Minimum Default Size

There are multiple ways you could achieve a minimum size, but the example we give here is the approach we recommend as it allows you to easily modify the default size in the editor later.

First, set the **Scale** property to a desired value in the editor. In our example, we configure **Scale X**, **Scale Y** and **Scale Z** to be **0.5** for our image layer. It makes sense to start with a smaller value than 1 to ensure the quality of the image does not suffer when the image gets scaled up too large.

After that, we extend our SceneScript code further by introducing the `init` function. The `init` function is called once when the wallpaper is loaded and allows us to store the default value of `Scale` that you configured in the editor in a variable. We then use this default value to add the audio volume on top:

```js
	value.x = defaultScale.x + audioBuffer.average[0];
```

If no audio is playing, the scale will now be the same as your default value and everything louder than that will have the audio volume additionally on top of that. The full script looks like this now, notice how we store the default value in the variable `defaultScale` in the `init` function:

```js
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);
let defaultScale;

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.x = defaultScale.x + audioBuffer.average[0];
	value.y = defaultScale.y + audioBuffer.average[0];
	value.z = defaultScale.z + audioBuffer.average[0];

	return value;
}

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function init(value) {
	defaultScale = value;
	return value;
}
```

::: tip
You can quickly add the `init` function in the SceneScript editor by clicking on **Snippets** at the top, then select **Insert Function**, followed by **init**.
:::

## Restricting the Maximum Audio Response

At this point, the animation will have a minimum size but it may still reach very large levels. It's important to note that the audio buffers normally do not reach values greater than `1.00`, however, in some cases this may happen. For this reason, we recommend always limiting the values you are working with. You can conveniently do this with the `Math.min()` function which easily allows you to limit a number to exceed a specific value. In our case, we extend our code by wrapping `audioBuffer.average[0]` in `Math.min()` with a maximum value of `1.00`:

```js
	value.x = defaultScale.x + Math.min(audioBuffer.average[0], 1.00);
	value.y = defaultScale.y + Math.min(audioBuffer.average[0], 1.00);
	value.z = defaultScale.z + Math.min(audioBuffer.average[0], 1.00);
```

If you do more complex processing with the audio data, you should first work with the unrestricted original audio data and only at the last step limit its value. Take how we do it in the next section of this page, where we only apply `Math.min()` at the last step of our processing.

## Smoothing the Audio Response

The last issue we need to address is the erratic movement of our audio visualization. The `update()` function is called every time Wallpaper Engine renders a new frame. This means that the values can jump significantly between frames if the audio volume changes drastically in a short period of time. Follow-along this section by reading the paragraphs below and review the code block below to see its corresponding lines, it's not as complicated as it looks at first glance!

We can address this by adding a bit of extra code to smoothen the audio response. First, we need to declare a new variable that stores the audio response across multiple `update()` calls, we will name this variable `smoothAudioVolume` and initiate it with a value of `0` outside of any function.

Next, we calculate the difference between the current audio volume and the previous audio volume (stored in `smoothAudioVolume`) to see how much the audio levels have changed since the last frame has been calculated. We store this result in a variable named `volumeDifference`.

We use the `volumeDifference` in the next step to smoothen the response by multiplying it with a smoothing factor. In our example, we placed the `SMOOTHING_RATE` in a constant at the top of the code with a value of `15`, you can alter this number to increase or decrease the level of smoothing.

We also multiply this with `engine.frametime`. This is important as we need the frametime to normalize the animation across different FPS settings, otherwise it will look different depending on what FPS setting is used. Keep in mind that the `update()` function is called once per frame. That means, if your FPS limit is 60, the `update()` function is called 60 times. If your FPS limit is `30`, it will just be called 30 times.

Finally, we add this calculation to our `smoothAudioVolume` variable. In our code, this really just means the following:

```js
	smoothAudioVolume += volumeDifference * SMOOTHING_RATE * engine.frametime;
```
Just like in the previous sections, we use `Math.min()` to limit our maximum value to `1.00` to account for peak audio levels.

We then simply return `smoothAudioVolume` at the end of the `update()` function. Previously, we modified value and specifically set `value.x`, `value.y` and `value.z`. However, if you know that all of them will be the same, you can just return a number and Wallpaper Engine will automatically apply the number to all three of them. This also works for `Vec2` properties, for example.

The final code now looks as follows:

```js{4,7,15,18,21}
'use strict';

const audioBuffer = engine.registerAudioBuffers(engine.AUDIO_RESOLUTION_16);
const SMOOTHING_RATE = 15;

let defaultScale;
let smoothAudioVolume = 0;

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
 export function update(value) {
	// Calculate difference in audio volume between last frame and now
	let volumeDifference = audioBuffer.average[0] - smoothAudioVolume;

	// Add difference between previous and current frame, include frametime to account for FPS
	smoothAudioVolume += volumeDifference * SMOOTHING_RATE * engine.frametime;

	// Limit value to 1.00 to ignore excessive audio levels
	smoothAudioVolume = Math.min(smoothAudioVolume, 1.00);

	// Wallpaper Engine will create a Vec3 object for us if we just return a number here
	return smoothAudioVolume;
}

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function init(value) {
	defaultScale = value;
	return value;
}
```

You can see the outcome of this in the following video. The animation is now much smoother and even when no audio is playing, our object remains visible and never grows to excessive sizes:

<video width="100%" controls >
  <source src="/videos/scenescript_smoothened_audio.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>