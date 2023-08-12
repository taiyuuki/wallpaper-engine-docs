---
prev: ../overview.md
---
# Depth Parallax

The **Depth Parallax** effect allows you to create a perceived 3D depth for your images. This effect requires you to enable **Camera Parallax** in the scene settings of the editor, followed by setting the parallax depth to **0** for the current layer.

<video width="100%" controls loop autoplay>
  <source src="/videos/depth_parallax.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

We highly recommend reading the full guide on the Depth Parallax, as the initial set-up of the effect is more complicated than usual:

* [**Full Guide on Depth Parallax**](/en/scene/parallax/depthparallax.html)

## Installing the Free Editor Extensions DLC

In order to make the most out of the Depth Parallax effect, you must first install the [Free Editor Extensions DLC](https://store.steampowered.com/app/1790230/). This is necessary to generate a high-quality *depth map* that this effect uses.

The DLC downloads a complex **neural network** which handles the generation of the depth map. **The neural network requires multiple gigabytes of disk space**, which is why we decided to make this feature an optional DLC to keep the base size of Wallpaper Engine as small as possible.

Users of your wallpaper do **not** need this DLC in order to use your wallpaper to the full extent, the DLC is only required to generate the high-quality depth map for this effect.

### Effect Settings

* **Quality:** The quality decides the number of samples this effect processes. It has three values:
    * **Basic:** 1 Sample, very high performance, recommended for basic uses of the effect.
    * **Occlusion Performance:** 30 Samples, Average Performance, recommended for most usage scenarios of this effect.
    * **Occlusion Quality:** 50 Samples, Low Performance, recommended for scenarios with high depth and perspective settings.
* **Depth Map:** Texture that describes the different levels of depth in the image. We recommend you auto-generate this with the free *Editor Extensions DLC* as described above.
* **Opacity Mask:** Let's you disable the effect or lower its intensity in selected parts of the image by painting a map over the respective areas.
* **Center:** Changes the focus point of the **Depth**.
* **Depth:** Decides the mouse influence on the horizontal (**X**) and vertical (**Y**) axis. You can configure them individually to restrict the left-right and up-down movement.
* **Perspective:** The strength of the perceived 3D depth effect.