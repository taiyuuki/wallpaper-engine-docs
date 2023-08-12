# Depth Parallax

The **Depth Parallax** effect in Wallpaper Engine allows you to create a perceived 3D effect on your image. This effect requires a few extra steps to set up, so we recommend following along if you are using the effect for the first time.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/depth_parallax.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Installing the Depth Map Generator DLC

In order to make the most out of the Depth Parallax effect, you must first install the free Editor Extensions DLC. This is necessary to generate a high-quality *depth map* that this effect uses. Wallpaper Engine will ask you to install the DLC if you are trying to use it in the editor for the first time. Alternatively, you can also directly install it through the Steam website:

* [Free Editor Extensions DLC](https://store.steampowered.com/app/1790230/)

The DLC downloads a complex **neural network** which handles the generation of the depth map. **The neural network requires multiple gigabytes of disk space**, which is why we decided to make this feature an optional DLC to keep the base size of Wallpaper Engine as small as possible.

Users of your wallpaper do **not** need this DLC in order to use your wallpaper to the full extent, the DLC is only required to generate the high-quality depth map for this effect.

## Preparing Your Wallpaper

The **Depth Parallax** effect requires you to enable the **Camera Parallax** option in your wallpaper settings. This should be done before you apply the effect for the first time:

Click on **Scene options** on the left-hand side and set **Camera Parallax** to **Enabled** at the bottom of the options list. Next, select the **Layers** tab again and select your image layer, then navigate to the right-hand side and change the **Parallax Depth** option to `0` for both the `X` and `Y` axis. You may need to repeat this step for all layers in your wallpaper to disable the general parallax effect first.

You can see the full process up until here in the following video:

<video width="100%" controls>
  <source :src="$withBase('/videos/depth_parallax_scene_settings.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Generating a Depth Map

Once you have configured the general parallax settings for your wallpaper, select your image layer and click on the **Add** button on the right-hand side in the **Effects** list. Navigate to the **Depth Parallax** effect and apply it to your layer.

After you have added the effect, it will be non-functional until you generate a **depth map**. You will need to install the **Free Editor Extensions DLC** for this, Wallpaper Engine will ask you to install the DLC if it is not installed. Alternatively, you can also import a custom depth map that you generated outside of Wallpaper Engine. Click on the **Generate** button to open the *depth map generator*.

The depth map generator will analyze the depth of the image and will generate a depth map which essentially describes how far away individual parts of your image are, this can then be used to create a 3D perspective out of your 2D image. Depending on the resolution of your image and the performance of your computer, generating the depth map can take a few minutes since the underlying process is rather complex.

The depth map generator has a few settings that you can tweak:

* **Blur:** Will apply a blur to individual areas in the depth map to soften the transition between them.
* **Auto contrast:** Will ensure that the depth map uses the full color range from pure white to pure black, increases the effect strength.
* **Invert:** Inverts the depth map for special edge cases where this might be desirable.
* **Outline compensation:** Tries to account for outlines of characters and small objects in your image, high values can lead to inaccuracies. **Tip:** See the next section on how to manually fix minor problems with your depth map.

In a lot of cases, you can simply use the default values for the depth map generator as a starting point. Confirm your depth map by clicking **OK**. The depth map will now be applied and the effect will now be functional.

See this process in the following video:

<video width="100%" controls>
  <source :src="$withBase('/videos/depth_parallax_create.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Fine-Tuning and Improving the Depth Map

Once you have applied the depth map, you can already see the **Depth Parallax** effect in action. You can further tweak the **Depth** option on the **X** and **Y** axis to fine-tune the strength on the horizontal and vertical axis. Changing the **Perspective** value will influence how much the perceived **3D effect** is. The **Center** option controls the pivot point of the depth effect.

You may have also noticed the **Quality** option at the top. For most cases, the **Occlusion Performance** option works best. If you use very high values for the **Depth** and **Perspective** options, try and see if the **Occlusion Quality** option improves the visual fidelity of the effect significantly on your wallpaper, though this comes at the cost of requiring additional performance.

### Improving the Depth Map

If the depth map generator has missed or misinterpreted individual parts of your image, you can manually fix the depth map. Watch the following video to see a specific example where the depth map is missing some tree tops, causing them to be severely skewed when the effect is active. These issues are easily fixable by painting over the auto-generated depth map. To do this, first click on **Manual Editing** next to the **Depth Map** when viewing the effect, then select **Paint**.

::: tip
Temporarily set the **Depth** to `0.01` while painting, otherwise the image will continue to move significantly along with your mouse while you are painting over the depth map which can be confusing.
:::

Wallpaper Engine will now present you with the paint overview on the left. You can click on **Show Mask** to hide or show the auto-generated mask. Use the color picker tool next to **Amount** to select the area that the object belongs to. In our case, we select the shade of gray on the depth map that belongs to the tree line on our picture. Now we simply extend the depth map so that it includes the tree tops in the gray area of the depth map. After saving our updated depth map by clicking **OK**, the tree line is now properly rendered and not severely skewed anymore like before.

See this depth map improvement process in the following video:

<video width="100%" controls>
  <source :src="$withBase('/videos/depth_parallax_fix.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

