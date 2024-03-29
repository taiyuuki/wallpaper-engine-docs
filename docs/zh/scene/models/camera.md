# 3D Camera Setup

By default, Wallpaper Engine will use the last position that you have used in the editor to determine the perspective that users of your 3D scene will see. We strongly recommend adding at least one camera asset to your scene so that you can position the user perspective reliably.

::: tip
While you can add multiple cameras to your scene, Wallpaper Engine will only use the bottom-most visible camera in the asset list. To switch between specific angles automatically, you can simply utilize the **camera path** functionality as described below, you should not add multiple camera for this use-case.
:::

For advanced use-cases, you can change through multiple cameras either by using user properties that toggle the visibility of individual cameras or by changing the visible property via **SceneScript**.

## Camera Setup

To add a camera, click on **Add Asset** on the left-hand side and select **Camera** from the list of assets.

The easiest way to position a camera in your 3D scene is by using the **Edit Camera POV** functionality. This will switch the editor view to the perspective of the camera. To move and look around the 3D space, hold the left or right mouse button and move your mouse around the scene. You can then move through the 3D space with the WASD keys. Hold the middle mouse button to spin the camera.

Each camera also comes with a FOV ("Field of View") option that allows you configure the zoom level of the camera.

## Path Setup

Cameras also allow you to define one or more paths that they will follow. The paths can either be played randomly or in a sequential order. In order to create a new path, click on the **Add** button in the **Paths** section.

After creating your path, you should configure the duration of the path animation in seconds. Click on the **Settings** button in the timeline section when your path is selected and change the duration to the desired length.

::: tip
Before you create your first path

It's important to understand that you cannot record paths in Wallpaper Engine. Rather, you can define points and Wallpaper Engine will generate the path between them.
:::

Ensure the timeline animation is set to frame 0 (where it should be by default). Click on **Edit Camera POV** to switch to the perspective of the camera and move the camera to the desired starting position. Click on the **Update keyframe** button (key and plus symbol) to lock in the starting point of your camera path.

**Before moving on to the next space:** Move the timeline frame count further to the right. If you want to have only one start and end point of your animation, simply move it all the way to the right to the last frame. Readjust the timeline animation by clicking on the magnifying glass symbol.

Once you have moved the timeline frame to the next frame of your choice, move the camera in the 3D space. Once you have reached the desired location of the camera, click the **Update keyframe** button again to create a new position for your camera. Repeat this process until you have defined all points for the camera path (in many cases, this would be two points: the first frame and the last frame). Wallpaper Engine will now generate a camera path between all the points you have defined.

Watch this process in the following video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/camera_path.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### A note on the playback modes

By default, timeline animations are created in **Single** mode. If you click on the **Settings** button in the timeline section and change a path to **Loop** or **Mirror** mode, it will cause the path to never end. This means that Wallpaper Engine will never move on to the next path in the list of paths. This can be useful for intro camera paths, as you could start with one or more paths in **Single** mode and then move on to a path that is in **Loop** or **Mirror** mode indefinitely.

## Advanced: Camera Path Position

You may have noticed that cameras paths do not use the standard approach of orienting objects in Wallpaper Engine. Instead of having an **Origin**, **Angles** and **Scale** value, the camera path utilizes three different properties:

- Center: Defines the point in space at which the camera is facing. Setting it to 0, 0, 0 means the camera is facing in the center point of the wallpaper - no matter the position of the camera in the 3D space.
- Eye: Defines the position of the camera in the 3D space.
- Up: Defines the spin of the camera. This is directional vector that depends on the direction that the camera is facing, so it's hard to type sensible numbers by hand. **Tip:** Hold the middle mouse button while controlling the camera perspective to spin the camera.

This solves various problems with interpolated camera paths, as the camera would otherwise move in non-sensible ways. Sometimes it may be useful to manually override these values if you want to make very precise camera paths, which is why it may be good to know what these values represent.

::: tip TIP
To spin a camera smoothly around a fixed point using a camera path, you can configure the Center property manually and lock it to the position of the point you want to spin around. This allows you to create a smooth pivoting camera motion.
:::