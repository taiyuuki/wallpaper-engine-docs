---
prev: ../overview.md
---
# Blend Effect

The **Blend** effect allows you to blend multiple images or even animated image layers into one layer.

![Blend](/wallpaper-engine-docs/img/effects/Blend.gif)

::: tip
You can drag and drop an image layer into the **Blend texture** to dynamically use another image layer as a blend texture.
:::

### Effect Settings

* **Blend mode:** This determines how the images will be blended together. The default option is *multiply* which will multiply the colors, if you want to, for example, fully blend over to a different image, you would set this option to *normal*.
* **Number of textures:** This allows you to choose between how many textures you want to blend in this effect, you can choose up to 6 textures to be blended at once.
* **Blend texture 1 - 6:** These are the different input textures that you want to overlay over the current image. You can import a different, static texture here or even drag & drop another image layer into these options. That way you can blend different animated layers together.
* **Blend amount 1 - 6:** This allows you to control how strongly each individual blend texture will be blended on top of the previous texture.
* **Opacity mask:** The opacity mask will determine which region of the image is affected by the blend effect at all. By default the entire image will be blended.

#### Blend Transform

* **Transform:** If you only want to show the blend effect in a smaller region of the image, you can enable the transform option and you will get access to a few more settings to control and shrink the textures that will be blended on top. Enabling this option will also ensure that the aspect ratio of the blended textures will not be changed anymore.
* **Transform repeat:** This settings control how blending is performed outside of the blended images. If you choose to make them smaller, you can use this option to *clip* (cut off the effect outside of the blended textures) or *repeat* (repeat the whole blended texture, like a tiled image) or *clamp* (only repeat the outer pixels of the blended texture).
* **Angle:** This is the transform angle of the blended textures, if transform is enabled.
* **Offset:** This is the position offset of the blended textures, if transform is enabled.
* **Scale:** This allows you to resize the blended textures, if transform is enabled.

* **Write alpha:** This option allows you to also modify the opacity of the underlying image. By default, only colors will be blended, but enabling this option will also modify the opacity of the layer based on the opacity of the blended textures.
