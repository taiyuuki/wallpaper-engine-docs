# Combined Timeline Animations

This guide picks up where the [introductory guide to timeline animations](/scene/timeline/introduction) has left off. We will extend our existing animation and add another property to it. For this example, we will take the cloud movement animation and add a growing and shrinking of the size to it as can be seen in the following preview:

<video width="100%" controls autoplay loop>
  <source src="/videos/timeline_combined_result.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In order to change the the size of an object, we can modify the **Scale** property. Select the object for the animation and then click on the cogwheel icon next to the **Scale** property and select **Bind Animation** just like before.

Instead of creating a new animation, we will add our new animation to the existing one so that we can properly link the animations to each other. Click on the dropdown selection field at the top and instead of **Create Animation**, select the existing *Cloud Movement* animation on the *Origin* property that we created in the previous guide. All additional animation options will immediately disappear as the settings of the previous animation will be used.

<video width="100%" controls>
  <source src="/videos/timeline_combined_configuration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You will now see the previous timeline graph with the *Origin* values again. Clear up the graph by hiding *Origin* properties by clicking on the *eye icon* next to them - they will still be part of the animation but hiding them makes it easier to focus on the scale for now. Since we want to change the scale for all three values in our example (**X**, **Y** and **Z**), make sure they are all highlighted by selecting them.

<video width="100%" controls>
  <source src="/videos/timeline_combined_focus.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now that you have selected the scale values, make sure the timeline slider is at the first frame (frame 0) and type **0** into all the scale values (X, Y, Z) on the right-hand side. Next, move the timeline slider one frame to the right, to frame 1 and set the scale for all three values (X, Y, Z) to **1** again. This means the cloud starts at a size of 0 on all axis, meaning it's effectively invisible. It will then smoothly transition to a size of 1 on all axis until frame 1 is reached.

Next up, we want to make sure that the cloud stays at scale **1** until the second-to-last frame. Move the timeline slider to the second-to-last frame and click on the *Toggle Keyframe* button. This is important because we don't Wallpaper Engine to start shrinking the cloud back down until this point in the animation. Usually Wallpaper Engine will set a new keyframe automatically (if the *Auto keyframe* option is enabled) but since the values have not changed here, it's important to manually create a new frame.

Once you have set the second-to-last frame, move on to the last frame and enter **0** into the X, Y and Z values for the scale property once again.

You can see all the previous steps in the following video and follow along, it also shows the final animation:

<video width="100%" controls>
  <source src="/videos/timeline_combined_keyframes.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

This is all there is to it. You can use this approach with any type of property and create complex animations that modify multiple properties of different types over time. The example shown here is a rather simple one but it's mainly supposed to enable you to get started with your own ideas on timeline animations. Be sure to check out the next section of this guide to learn more about how to utilize the *Mirror* and *Single* mode on animations and to see timeline animations applied to effects and particle systems.

All the steps from this guide can be found in one complete video here:

<video width="100%" controls>
  <source src="/videos/timeline_combined.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>