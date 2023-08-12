# SceneScript Events in Timeline Animations

You can add **animation events** to any [timeline](/wallpaper-engine-docs/scene/timeline/introduction) or [puppet warp animation](/wallpaper-engine-docs/scene/puppet-warp/introduction) and use them to trigger effects, play sounds or perform any other custom SceneScript logic in your wallpaper when an animation passes a certain frame. Before getting started, make sure you're also familiar with the basics of [SceneScript](/wallpaper-engine-docs/scene/scenescript/introduction), which will be used to handle all animation events.

## Creating an Event

Start by opening the timeline or puppet warp animation you wish to add an event to, so that you can see the graph editor at the bottom. Now you can scrub over the timeline to the frame where you want to trigger the event. If you decided on a frame, click on the alarm clock button in the bottom right of the graph editor.

In our example we will trigger a sword sound right when the character starts moving the sword up and rotates it. We move the frame guide to frame 2 and click on the alarm clock button.

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_open_dialog.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


Enter a name for the event in the new dialog that opens, in our case we will name the event **sword**. The frame is automatically set to the current frame, but you can also edit the frame here if you prefer.

Now click on **OK** to add the new event and close the dialog. You can also add multiple events at once by clicking the green **plus** button next to the new event options to add another event.

You will see a dot in the timeline on each frame that has any events now.

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_add_event.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Reacting to an Event

Our animation has an event now that will be fired on a given frame and we can use this to do anything that is supported by SceneScript, for example showing/hiding layers or effects, playing sounds or even starting/stopping other animations.

We want to play a sound, so we'll import a new sound into the editor by dragging it into the window. By default sounds play in a loop, so we will immediately change the sound mode to **single** on the right side with the sound selected. We also want to easily reference this sound later, so in our case we rename the layer to **sword_sfx**.

The sound should now be paused and waiting to be started from a script.

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_import_sound.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In order to react to an animation event in a script, we have to make sure to attach our script to the same layer on which the animation event is played, in our case the **Samurai** layer. We'll select this layer and attach a script by clicking on the **cog wheel** icon in the top right and choosing **Bind Script**.

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_add_script.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


We only care about animation events, so we'll start by removing the whole `update()` function that is added by default since we don't need it for our specific example. Once it is removed, we click on **Snippets** at the top, we then choose **Insert Function** and then select **animationEvent** from the list. This will add the animation event callback for us into the script, this is what we need to react to our **sword** event. Of course you can also just type the function, this is just a shortcut.

The following code snippet will check the name of the animation event that was fired and then it will find the **sword_sfx** layer and call the **play** function on it. This means the sword sound will now be played once every time the **sword** event is fired.

```js
export function animationEvent(event, value) {
	if (event.name == 'sword') {
		thisScene.getLayer('sword_sfx').play();
	}
}
```

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_edit_script.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Testing the Event

Click on **Run Preview** at the top and see if the sound is being played. In case there is any scripting error, you can check the **Log** at the bottom to see the error details and fix the script.

<video width="100%" controls>
  <source src="/videos/timeline_animationevents_complete.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
