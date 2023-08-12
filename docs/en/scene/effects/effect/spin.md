---
prev: ../overview.md
---
# Spin Effect

The **Spin** effect can be used to continuously rotate parts of an image around its center or a specified point.

![Spin](/wallpaper-engine-docs/img/effects/Spin.gif)

### Effect Settings

* **Elliptical:** If you want to skew the animated object and rotate it like an ellipse.
* **Mode:** UV animates the selected pixels while Vertex will always rotate the entire image.
* **Perspective:** Make the rotation independent from the aspect ratio of the image.
* **Repeat:** Repeat the image around the borders, otherwise clamp it.
* **Opacity mask:** Allows you to draw a mask which determines which pixels will be affected.
* **Center:** The point to rotate around. Use the picker to easily select it by clicking somewhere on the image.
* **Feather:** Adds a smooth transition at the outer edges of the spin effect.
* **Time offset:** Adds a small delayed start to the effect, this can be useful if you are using the effect multiple times throughout your wallpaper and want to ensure they are not synchronized.
* **Speed:** Determines how fast the rotation is.
* **Angle (Elliptical only):** The angle/orientation of the ellipsis.
* **Ratio (Elliptical only):** How much the ellipsis is compressed/stretched.