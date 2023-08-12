# Single & Mirrored Timeline Animations

In this guide we will showcase examples of how using the **Mirror** and **Single** mode for timeline animations can be used to change the behavior of effects or particle systems over time. The examples showcased here can also be applied to any other property though, you can also create single or mirrored movement or scaling animations, for instance.

## Wallpaper intro with a single timeline animation

In this section, we will show you how you can use timeline animations to create intro animations to your wallpaper. We will be using the [Refraction effect](/wallpaper-engine-docs/scene/effects/effect/refraction) for this tutorial, but keep in mind that this is just an example and you can apply timeline animations with any effect or property of your choice, it's really up to your imagination what to do with them.

To get started, we have prepared a window scene with multiple layers, one of them being a window texture. We select our window and then add the **Refraction** effect to it to get started. The effect has a property called **Strength** which we want to increase over time. We'll click on the cogwheel icon, select *Bind Timeline Animation* and configure it. For **Mode**, we select **Single** since we only want the animation to play once and then stay in its last state forever. This is essentially all we need to do to create intro animations. For this tutorial, we will change the duration to 3600 seconds (5 minutes) to slowly let the ice freeze over the window.

Once you have set up the animation, set the strength to 0 while on the first frame to let the window start without any ice refraction at all. Then move to the timeline slider to the last frame of the animation and afterwards, increase the **Strength** to a higher value that you want to retain for the rest of the wallpaper runtime. In our case, we have selected a value of **0.3**. You can immediately see the line in the graph form the shape of an upwards curve (click on the *magnifying glass* icon to reset the view). If you click the *Play* button now in the timeline panel, you will see the animation runs from the beginning to the end and halts at the last frame forever.

You can see all the timeline-related steps of this section in the following video:

<video width="100%" controls>
  <source src="/videos/timeline_effect_ice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Mirrored timeline animation for recurring behavior

Whenever you want your animation to cycle between its beginning and end, you can set the animation mode to **Mirrored**. This will loop the animation endlessly, but instead of abruptly jumping back to the beginning, the animation will run in reverse at the same speed it ran forwards. In this example, we will use this to alter the weather conditions of the wallpaper. For this purpose, we have added a **Snow** asset the wallpaper. This asset is really just a particle system with multiple properties, one of them being **Count**. The count property changes the number of snow particles that are spawned, which makes more snow flakes appear on the screen.

To get started, we select our *Snow* asset and scroll down to the **Count** property on the right. We click on the cogwheel icon and select *Bind Timeline Animation* as with previous examples. In this case, we configure the timeline animation in **Mirror** mode and set a time of 120 seconds. That means that after 2 minutes (120 seconds), the animation will stat playing in reverse again for another 120 seconds and then restart once again.

Once the animation is set up, we decrease the starting amount of snow by setting the *Count* to something low like **0.2**. We then move the timeline slider to the last keyframe of the animation and set a high *Count* value such as 2. You can obviously do the exact opposite if you like and have the snow start strong at 2 and then decrease towards 0.2 the end of your animation - but this is all matter of taste.

Your animation is now ready to play already, especially if you have set a very long runtime, it might be too inconvenient to wait for minutes to see how it plays out, so you can always manually move the timeline slider to a specific point of your timeline and see how it looks at that specific point in time of your animation. Keep in mind that Wallpaper Engine will not abruptly spawn a larger number of particles but rather slowly increase the newly created particles, so there is always a bit of a delay until changes to **Count** (and many other properties of particle systems) are visible, even inside the editor.

<video width="100%" controls>
  <source src="/videos/timeline_effect_count.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

We have created a timelapse of the end-result in the following video where you can see the amount of snow particles increase over time and then lower back down. This cycle will continue endlessly as long as the wallpaper is running:

<video width="100%" controls>
  <source src="/videos/timeline_effect_snow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>