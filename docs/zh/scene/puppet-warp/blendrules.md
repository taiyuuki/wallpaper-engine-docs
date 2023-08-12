# Blend Rules for Bones

Blend rules are an advanced feature of puppet warp animations. They allow you to solve a few specific animation cases where you want to attach a bone to another object. An example might be that a character holds an object in their left hand and then throws it over to the right hand. In that case, you would now want the object to follow all movements of the hand it is in automatically. Blend rules allow you to do this as you can essentially change the parent bone for an object during an animation.

We will showcase blend rules with the following example animation. **Notice how the sword remains attached to the rock until the knight pulls on it.** After the sword is pulled, it continues to follow the hand movement as the knight is holding it. This was achieved through a blend rule that changed the parent bone of the sword from the rock to the hand of the knight.

<video width="100%" controls>
  <source :src="$withBase('/videos/blend_rule_animation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Setting Up a Blend Rule

In order to configure a blend rule, we first need to configure this relationship between two bones in the bone setup of our puppet warp model. Open up step 2 of the puppet warp setup process (the **Skeleton setup**) and select the bone that you want to utilize for this purpose.

For this specific example, we create a normal skeleton for our knight character and another separate root bone that floats above the rock. This second root bone serves no direct animation purposes, it is merely used as a reference point of the rock position for our animation. In your case, you should choose the bone that you want to attach your object to in your animation, for example a hand of your character.

In the next step, we select the bone that represents the sword and click on the **Edit Constraints** button on the right-hand side to bring up the settings for the bone constraints. We navigate to the **Blend Rules** tab and select the bone that we want to attach the object to. In our case, we select the bone that represents the rock as a blend rule bone.

::: tip
You can give each bone a name, this helps with selecting bones in the blend rule setup as you will be able to easily identify them by name.
:::

### Animating the Blend Rule

After creating the blend rule, you will notice that the bone is now attached to the bone you selected in the bone constraints settings.

In our example, we want the sword to become attached to the hand that it originally belongs to once the knight pulls out the sword from the stone. We have prepared all other parts of the animation and now only the sword remains stationary.

The sword starts with the blend rule at its default value of 1.00, which means it is fully attached to the bone that represents the position of the rock. We now want to lower the blend rule and turn it off by setting it to 0.00 at the right frame in the animation.

We select the hand bone and look for our blend rule in the timeline animation list, followed by right-clicking on it and selecting *Show single*. We now see the animation timeline for the blend rule. Now we need to find the exact frame at which we want the sword to move into the hand of the knight. We place a keyframe on that frame by navigating to the exact frame in the timeline, followed by clicking on **Toggle keyframe**. Then we move one frame to the right and place a second keyframe. You can find all blend rules of a bone by selecting the bone and scrolling to the bottom of the menu on the right-hand side. For the second keyframe, we lower the value of the blend rule to 0.0 which creates a smooth curve between the two frames in which the sword detaches from the rock.

The sword will now smoothly transition from the stationary rock position that we have placed it in from the start and will follow along the knight's hand. Watch the following video to see this entire section carried out:

<video width="100%" controls>
  <source :src="$withBase('/videos/blend_rule_example.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

The example we show is a single animation that does not loop. If you want to create an animation that loops smoothly, you can simply return the blend rule value back to its starting value.

In more complex animations, you may even have multiple blend rules for one bone. In that case, Wallpaper Engine will place your object in between the bones in accordance to their blend rule value. This would allow you to float an object in between certain bones.