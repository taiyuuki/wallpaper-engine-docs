---
prev: ../overview.md
---
# Blur Effect

The **Blur** effect applies a coarse gaussian blur to the image. This effect is relatively performance-intensive, it's mainly useful in combination with other effects or if you want to add dynamic blurs to your image.

If you just want to add a static blur to your image, you should rather do this in an image editor before importing your image into Wallpaper Engine.

![Blur](/img/effects/Blur.png)

### Effect Settings

* **Kernel size:** The size of the filter kernel. A larger kernel makes the image more blurry but also requires more system performance.
* **Monochrome:** Turns the area affected by the effect into a monochrome image (black and white).
* **Opacity mask:** You can draw this mask to determine what areas of your image the effect is applied to.
* **Scale:** Controls the amount of blur on the X and Y axis.

The effect has four different **Composite** modes:

![Composite mode](/img/effects/blur_composite_blend.png)

#### Composite: Normal

This is the default mode that does not come with any additional options. It applies the blur according to the kernel size and scale that you have configured.

#### Composite: Blend

This will take the **Blend mode** into account. In addition to the blur, you can select a different blend mode which will alter the colors of the image. This mode will also add two additional shader options:

* **Alpha:** Determines the opacity of the blend effect, higher values mean the effect is less transparent and appears stronger.
* **Offset:** Allows you to create an offset for the effect which will apply the blend effect with an offset on the X and Y axis.

::: tip
Using the composite blend option in combination with the blend modes *add* or *linear dodge* will for example all you to add glow to images and text.
:::

#### Composite: Under

This mode will add the blurred image below the unblurred image. This can be useful to add a glowing outline to text or transparent images.

#### Composite: Cutout

This will show the outline that you can generate with the composite mode *under* but it will completely erase the unblurred image. So using this, you can make glowing text that has been cut out, for example.
