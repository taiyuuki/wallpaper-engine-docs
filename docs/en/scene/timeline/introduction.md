# Timeline Animation Introduction

Timeline animations allow you to create animations with a pre-defined length for all properties of your wallpaper components. If that sounds confusing, don't worry, this guide will introduce you to all steps needed to create timeline animations by providing a few sample use-cases with in-depth explanations.

::: tip
Do not confuse timeline animations with animations that are created through [effects](/wallpaper-engine-docs/scene/effects/overview), they are entirely different concepts.
:::

## Creating a simple movement animation

In order to get started with timeline animations, let's say you want to repeatedly move an object - in our case a cloud - from one side of your image to the other side.

The first step is to establish what you actually want to animate, so let's have a look what happens if you move an object from left to right in the editor:

<video width="100%" controls>
  <source src="/videos/timeline_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can see how the X axis on the *Origin* property increases as you move the object from left to right. So for this animation, we want to assign a timeline animation to the *Origin* property, specifically the *X axis*. We can do so by clicking on the cogwheel icon next to *Origin* and selecting *Bind Timeline Animation*.

Once you click on *Bind Timeline Animation*, you are presented with the basic options of the animation:

* **Mode:** Changes the playback behavior of the animation:
    * *Loop:* The animation will run to the end and then immediately jump back to the beginning once it is complete.
    * *Mirror:* The animation will return to the beginning backwards once it reaches the end.
    * *Single:* The animation will only play once and then stop at the last frame.
* **Seconds:** The number of seconds that the animation runs from the first to the last frame.
* **Frames:** The number of keyframes which are the individual steps of each animation.
* **Name:** Optional name for the animation, especially useful when using an animation in combination with *SceneScript*.
* **Start paused:** If the animation starts paused, you need to manually start it with *SceneScript*.
* **Wrap loop frames:** Will automatically create a smoothly looped animation for you by creating a smooth transition to the first frame.

For this example, we will keep **Mode** as **Loop** since we want the cloud to re-appear on the left once it has reached the end. The **Seconds** essentially decide how long the cloud takes to travel from left to right, for this tutorial we set it to **3 seconds** but usually you would likely want to make the cloud much slower by setting a really high time like 30 seconds - ultimately that's a matter of taste, however. The **frames** decide how many detailed steps there are in the animation. Generally you can leave this at 30 for most animations, but in order to achieve natural animations, you should ensure that there are enough empty frames between the keyframes you want to set. We set the name to *Cloud Movement* to recognize the animation later and the **Start paused** option stays **off** because we want the animation to just run the whole time. We also turn off the **Wrap loop frames** option in this case, since we do **not** want a smooth transition between the end and the beginning of the animation: We want the object to abruptly jump from the right side back to the left. This is somewhat of a special case, as in most cases you probably want to have a smooth transition between the first and last frame of your animation.

::: tip
Make sure to have enough frames in your animation to create natural looking animations and try to have a couple of empty frames between your saved keyframes. If your keyframes are too close, the smooth ***curve*** will effectively be ignored by the animation and the animation will look more robotic.
:::

<video width="100%" controls>
  <source src="/videos/timeline_simple_configuration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Once you confirm the settings, you will immediately see the timeline animation panel on your screen. The timeline animation will show three lines that represent the three values of the *Origin* property: **X** (red), **Y** (green) and **Z** (blue). Since we really only care about moving the object on the **X** axis (left to right), we start by hiding the other values by right-clicking on the **Origin x** option on the left and selecting *Show single* to hide the other lines:

<video width="100%" controls>
  <source src="/videos/timeline_show_single.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

We can now start with the animation. First move the object to the desired starting position. You can see **keyframe 0** is selected by default at the bottom of the timeline and since the **Auto Keyframe** option is enabled by default, any changes you make will automatically become a keyframe in the animation.

Once the cloud is in its starting position, move the timeline marker in the graph to the last frame. Once you have placed it at the last frame, you can move the cloud to the desired end-position or manually type in a number into the **X** value of the origin property. You should now also try and readjust the zoom level of the timeline graph by clicking on the *magnifying glass* icon on the right, this will automatically re-adjust the timeline to give you a complete overview over your animation.

Once you have placed the keyframe at the end, you can already click on the *Play* button to start the animation preview loop. You can see this process and the outcome in the video below.

<video width="100%" controls>
  <source src="/videos/timeline_keyframe_placement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

By default, Wallpaper Engine will smoothen animations by easing the speed of the animation in and out. It uses **Bézier curves** for this: When you select one or more keyframes of a property (the boxes in the graph), you can also fine-tune the curves by grabbing the lines that appear around them.

However, in this case, we want the cloud to move at a constant speed since clouds generally don't accelerate or slow down their movements. To ensure this, turn off the Bézier curves by selecting the keyframes of the *Origin x* line (the two red boxes) and then click on the *Toggle Bézier interpolation* button three times until it is turned off (it has four modes: *both, left, right, none* - these are represented by the coloring of the button) and the graph turns from a curve into a straight line. This means the cloud now moves at a constant speed across the screen. See the following video for a showcase of this:

<video width="100%" controls>
  <source src="/videos/timeline_interpolation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

That's it, we now have a cloud that moves from left to right in a permanent loop. Simple changes that you could add at this point would be to move the cloud much further off the screen to delay its re-appearance, for example. You can also rewatch all steps and the result in the following video.

<video width="100%" controls>
  <source src="/videos/timeline_simple_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the next section, we will discuss how to combine multiple properties into one animation to achieve more complex timeline effects and talk about how to utilize additional keyframes for more complex animations.