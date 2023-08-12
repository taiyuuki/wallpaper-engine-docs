---
prev: ../overview.md
---
# Transform Effect

The **Transform** effect allows you to rotate, scale or move the image.

::: tip
You should apply this effect only on top of other existing effects. If you apply this effect merely to a static image, consider modifying your image in an image editor instead to improve the performance of the wallpaper, since there is no need to use a live effect for that.
:::

![Transform](/wallpaper-engine-docs/img/effects/Transform.gif)

### Effect Settings

* **Mode:** Whether you want to distort the pixels or the edges of the layer. If you choose *UV* then you will distort the pixels which allows you to add additional effects after this effect and is usually what you want to use. If you choose *vertex* you will distort the edges of the layer and it will only work correctly if this effect is the last one that will be displayed.
* **Repeat:** Whether the image should repeat until the edges or be clamped. This is only relevant for the UV option.
* **Angle:** This allows you rotate the image around its center.
* **Offset:** This allows you to move the image along the X or Y axis internally.
* **Scale:** This allows you to tile the image along the X or Y axis (if repeat is enabled).