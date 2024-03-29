# Model Animation Setup

If your model file includes bones and animations, Wallpaper Engine will display a **Configure Model** button when selecting the model in the editor. In this guide, we will show you how to set up animations for your model and how to blend from one animation to the next.

## Clipping your Animation

Many model files will have all their animations merged into one long animation. Wallpaper Engine offers a way to separate animations into many individual clips that you can utilize in your wallpaper. If this is not the case for your model, you can skip this section. To get started, click on **Configure Model**.

::: tip
In some cases, animations may even be spread out into individual FBX files. In this case, start your project with one model file. To import more versions of the same model with different animations, use the **Add FBX File** button in the **Animation** tab of the model editor. Any additional FBX files imported for a model are expected to include the same bone hierarchy to be compatible.
:::

In the **Animation tab** of the model editor, navigate to the **Animations** section. Select the animation that you want to split into clips and click on **Add Clip**. In our case, we have a model of a dog and we want to extract the first animation clip, which shows a walking animation. We recommend adding names for each clip so that you can discern your individual animations more easily later on.

## Locating the Animation Frames

In order to create a usable clip, we need to find the start and end frames for the animation. In our case, the animation starts at frame 0, so we can ignore the **Start frame** option. We move on to the **End frame** option and search for the end of the walking animation. You can use the mouse wheel to increase and decrease the current frame quickly or use the individual arrow keys to navigate through the animation frame-by-frame.

In our case, the animation ends at frame 20. Sometimes animations can have dead frames in between animations, make sure to cut these off to prevent any jittering in your animation later. In some use-cases, you may also want to set a **frame offset** in the clip options. This can be useful if you want the first playback of the animation to start at a later frame which can help to add or remove synchronization with other animations in your wallpaper.

Repeat this process for all animations you want to extract into individual clips.

## Root motion

If you have a movement animation, you may want your character to actually move within the 3D space in line with the animation. To achieve this, scroll down in the **Clip options** and select the appropriate **Motion root bone**. Typically, the root bone is not a visible element of the model itself but rather represents its foundation. After selecting the bone, you should start seeing your model move in the preview area on the right-hand side.

::: 
If you intend to let your character move around entirely through root motion, keep in mind that it may drift over time if the wallpaper is used for hours. Depending on your specific situation, it may be necessary to re-align the model via SceneScript at some point.
:::

In the editor, you can now add the animation by clicking on **Add** in the **Skeletal** animation section.

See the entire process in this video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/model_animation_clip.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>