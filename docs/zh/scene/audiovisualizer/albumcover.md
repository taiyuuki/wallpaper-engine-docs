# Album Cover Integration

Wallpaper Engine allows you to integrate Windows Media data such as album covers, song titles, current playtime and more into your wallpaper. This guide will primarily explain how to utilize album covers in your wallpapers. You can learn more about how to retrieve additional information in the following guide:

* [Media Information Integration](/zh/scene/audiovisualizer/mediainformation.md)

<video width="100%" controls autoplay loop>
  <source src="/videos/album_simple_showcase.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*A simple showcase of the album cover integration as explained in this tutorial. Note that Wallpaper Engine relies on the Windows Media overlay for album covers, as shown in the video above.*

## Album Cover Resolution

We recommend limiting the resolution of the album cover integration to 256x256 pixels or less. The quality and resolution of album covers generally depends on the respective media player and the audio file. However, we recommend using square resolutions between 100x100 pixels and 256x256 pixels in size.

## Creating a Placeholder

Users of your wallpapers will not always be playing media content at all times, making it important to ensure that the space in which the album cover is placed has some sort of placeholder while no audio playback is active.

If no audio is playing and you simply want a solid color (or to hide the album cover entirely), you should use a **Solid Placeholder** layer, as it offers the best performance for this use-case. To add a **Solid Placeholder** layer, click on **Add Asset** on the left-hand side, followed by selecting the **Solid Placeholder** type from the list towards the bottom. Select a preferred size and default color for the album cover layer.

If you want to show a placeholder image instead, you can simply import it into the editor and proceed without having to use the **Solid Placeholder** layer. In our example, we will showcase this feature using a 256x256px placeholder image that we have prepared. It is mainly important that your image is square and ideally has the exact resolution that you later want to use for your album covers.

## Assigning the Album Cover

Once you have created your placeholder, you can now continue with the most basic implementation of this feature, mainly to just show an album cover whenever one becomes available. To do this, select your placeholder layer and click on **Advanced Texture Settings** on the right-hand side towards the bottom of the properties list.

Click on the cogwheel icon next to the *Albedo* texture and select **Bind Album Cover**. You will be presented with two options: *Current album cover* and *Previous album cover*. In this case, we want to use the *Current album cover* but we will show you how to utilize the previous album cover in the next section. Confirm your selection and press the **Run Preview** button in the editor. You should now see your album cover in your wallpaper once you start playing music with a media player that integrates with the Windows media functions.

## Advanced: Creating a Transition between Album Covers

In this section, we want to utilize the **Blend effect** to smoothly transition between two album covers using a [Timeline Animation](/zh/scene/timeline/introduction.md). It is a bit more advanced, but if you follow this section step-by-step, you should be able to implement this yourself.

First, select the album cover layer you have created previously. Click on the **Add** button in the effects list on the right-hand side and select the [Blend effect](/zh/scene/effects/effect/blend.html) or the [Blend Gradient effect](/zh/scene/effects/effect/blendgradient.html).

Next, select the blend effect you have created and click on the cogwheel icon next to the *Albedo* texture. Just like before, select **Bind Album Cover**. In the pop-up window that appears, select the **Previous album cover** option now and confirm your change. You will not see any immediate changes, but this means the blend texture will always be the previous album cover that was used.

### Creating a Timeline Animation

Now that you have configured the *Albedo texture*, you need to create a short timeline animation that will allow you to smoothly transition between the two album covers.

Select the blend effect and navigate towards the bottom of its property list. Next to the **Blend amount** value, click on the cogwheel icon and select **Bind Timeline Animation**. You will now see the animation options, you will need to make some changes here:

* **Mode:** Set this option to **Single**, since we only want the transition to play once when needed.
* **Seconds:** This is the duration that it will take to transition between the album covers, set it to your liking, for example, 2 seconds.
* **Frames:** You can leave this value at `60`.
* **Start paused:** Make sure this option is **enabled**.

Once this is done, you will see the timeline of the **Blend amount** value at the bottom. Grab the timeline selector and move it all the way to the last frame. Afterwards, drag the **Blend amount** value down to `0.00` on the right. You should now see a smooth curve in the timeline animation, see the following video as an example:

<video width="100%" controls>
  <source src="/videos/album_blend.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Enabling the Animation with SceneScript

The last step to get the album cover transition to work is to utilize the `mediaThumbnailChanged` event which is triggered whenever Wallpaper Engine receives a new album cover. Go back to the **Blend animation** that you have previously created and, once again, click on the cogwheel icon next to the **Blend amount** property of the effect. This time, select **Bind SceneScript**. You will be presented with a placeholder script, replace the contents of the script window with the following code:

```js
'use strict';

/**
 * @param {MediaThumbnailEvent} event
 */
export function mediaThumbnailChanged(event) {
	thisObject.getAnimation().play();
}
```

This will start playing the timeline animation that you have just created when a new thumbnail is available. The animation will smoothly transition between the old album cover to the new album cover.

## Additional Media Features

This guide provided a basic example of how to utilize the album cover feature. We suggest that you also consider users who might not be playing music by hiding these elements and ensuring the wallpaper works even without music playing. For some more advanced tutorials, see the
