# Working with Media Playback Data

This guide builds on top of the [Album Cover Integration](/wallpaper-engine-docs/scene/audiovisualizer/albumcover) feature. While you do not need to incorporate album covers into your wallpaper for any of the topics discussed here, we still recommend you read the album cover guide first before you continue here. This guide builds on top of the album cover guide but you can use all features completely independently from each other.

## Displaying Song Title, Album Title & Artist Name

In this section, we will discuss how to add certain song information to your wallpaper. Please note that some data may not be available if it is not transmitted by the respective media player or if the audio file does not include certain pieces of information. For example, there is no guarantee that a song file includes an album title.

### Creating a Text Element

To get started, we need to create text layers for each element that we want to show. Click on **Add asset** on the left-hand side and add a new **Text layer** to your wallpaper.

One thing that you need to keep in mind with text layers with dynamic content is that they could potentially become very long. This is why it is important that you properly configure the text layer for media information:

1. Adjust the **Point size** value to change the size of the text layer. Do not change the **Scale** of the text layer, it will reduce the quality of the text unnecessarily.
2. Set the **Horizontal alignment** to *left* and adjust the position of the text to account for this change.
3. Enable the **Max width** option and adjust the maximum width using the purple dotted line that appears in the editor. This is especially important when working with dynamic text such as song titles, as they can be very long.
4. Enable the **Max rows** option and set the limit to *1* (or another value of choice).
5. Lastly, you might want to enable the **Overflow ellipsis** option. This will cut off text that is too long and replace the end with three dots "..." to make it clear that the text was cut off.

You can see the setup and the end result of this in the following video:

<video width="100%" controls>
  <source src="/videos/media_text_settings.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Integrating Album Data via SceneScript

Create one text element for each type of music data you want to add. The easiest way to do this is to create one text layer, configure it as explained in the previous section. Set a font and font size of your choice. Now use use the **Duplicate** functionality on the text layer (right-click on the text layer, then select *Duplicate*). Repeat this until you have one layer for each data point. In our case, we will create the three most common (and the most reliable) layers:

* Song Title
* Album Title
* Artist Name

![Media Text Layers Example](/wallpaper-engine-docs/img/tutorials/media_text_layers.png)

Once you have create a layer for each of them, you can utilize the [MediaPropertiesEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent) in SceneScript to retrieve the data that you need. To do this, select your first layer (for example the song layer), then click on the cogwheel icon next to the **Text** property of the layer and select **Bind SceneScript**. You will be presented with a sample code snippet which you can replace with our sample code below.

Copy the appropriate SceneScript code to your layer and repeat the process for all of your text layers:

::: details Click to show song title code

```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.title;
}
```
:::

::: details Click to show album title code
```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.albumTitle;
}
```
:::

::: details Click to show artist name code
```js
'use strict';

var mediaData = "";

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	return mediaData;
}

/**
 * @param {MediaPropertiesEvent} event
 */
export function mediaPropertiesChanged(event) {
	mediaData = event.albumArtist;
}
```
:::

Once you have copied the code to each respective text layer and use the **Run Preview** functionality at the top of the editor, start playing music with a compatible media player. You should now see all data points appear, as long as your music player actually sends the data to Windows.

## Utilizing Album Cover Colors via SceneScript

You can also access album cover colors through the [mediaThumbnailChanged](/wallpaper-engine-docs/scene/scenescript/reference/event/media) event, specifically the [MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent) class that is provided as a function parameter.

**In this example, we will showcase how to change the background color of the entire wallpaper to match the album cover.**

::: danger Please note
In this example, we will be changing the **background color**. This only makes sense if you do not have a background image across your entire wallpaper.

**The code showcased here works on any color property in the editor. You may also apply it to any text layer color or any other color property in the editor.**
:::

<video width="100%" controls loop autoplay>
  <source src="/videos/media_colors.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

To get started, navigate to your color property of choice on any element in the editor. We will be changing the overall background color of our wallpaper, so we select **Scene options** in the upper left corner of the editor. We then click on the cogwheel icon next to the **Background color** property and select **Bind SceneScript**. Now we replace the sample script with the following code:

```js
'use strict';

// Set a default color here: "0, 0, 0" (RGB) means black by default
let color = new Vec3(0, 0, 0);

/**
 * @param {Vec3} value - for property 'clearcolor'
 * @return {Vec3} - update current property value
 */
export function update() {
	return color;
}

/**
 * @param {MediaThumbnailEvent} event
 */
export function mediaThumbnailChanged(event) {
	color = event.primaryColor;
}
```
The code assigns `event.primaryColor` to the color of the property. The `primaryColor` value is one of many color values that Wallpaper Engine provides in the [MediaThumbnailEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent), see the **MediaThumbnailEvent** page for a full list of color values you can use. It's important to note that the `textColor` value will always contain a value that makes text easy to read on top of the `primaryColor` value. If you add text on top of a dynamically colored background such as here, you can use the `textColor` property for the text to ensure that it will always be easy to read.

### Adding a simple color transition

You can also extend the previous code sample with a simple color transition animation. Use the following code snippet where the new and old color are continuously transitioned to one another during the `update()` function:

```js
'use strict';

// Adjust this constant to change the duration of the transition
const DURATION = 1;

let newColor = new Vec3(0, 0, 0);
let oldColor = new Vec3(0, 0, 0);
let timer = DURATION;

/**
 * @param {Vec3} value - for property 'clearcolor'
 * @return {Vec3} - update current property value
 */
export function update() {
	var color = newColor;
	if (timer < DURATION) {
		color = newColor.subtract(oldColor).multiply(timer / DURATION).add(oldColor);
		timer += engine.frametime;
	}
	return color;
}

/**
 * @param {MediaThumbnailEvent} event
 */
export function mediaThumbnailChanged(event) {
	timer = 0;
	oldColor = newColor;
	newColor = event.primaryColor;
}
```

## Hiding Media Playback Elements When Playback is Stopped

If a user is not actively playing any audio, it might make sense to hide the album cover and other media-related elements. To achieve this, select the element you want to hide when media playback is stopped and click on the cogwheel icon in the upper right corner next to the *eye symbol*. Then select **Bind SceneScript** and use the following snippet:

```js
'use strict';

/**
 * @param {MediaPlaybackEvent} event
 */
export function mediaPlaybackChanged(event) {
	thisLayer.visible = event.state !== MediaPlaybackEvent.PLAYBACK_STOPPED;
}
```

This snippet will ensure that when a user stops media playback or has never started any media playback, the element will be hidden. Note that Wallpaper Engine differentiates between playback being stopped and paused: If a user just temporarily pauses media playback, the element will remain visible.

## More Media Data

To get a full overview of what data you can retrieve via SceneScript, be sure to check out the reference page on all relevant SceneScript events:

* [SceneScript Media Events](/wallpaper-engine-docs/scene/scenescript/reference/event/media)
