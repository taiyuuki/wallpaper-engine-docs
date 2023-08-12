---
prev: ../overview.md
---
# Color Key Effect

The **Color Key** effect allows you to remove parts of the image that match a certain color. This kind of effect is used by *green screens* in video editing software.

![Color Key](/img/effects/Color_key.gif)

### Effect Settings

* **Color:** The color that will be used as a reference for what should be made transparent. You can use the picking tool in the color picker to easily take a color from the image.
* **Flatten:** Whether you want to pre-multiply the resulting image with the alpha value. This can be useful to reduce border artifacts of the color.
* **Invert:** Whether you want to change the transparency so that everything else becomes transparent except for your selected color.
* **Write alpha:** The opacity value that will be applied to your color key.
* **Tolerance:** This allows you to increase the threshold used to determine whether a given color is similar enough to your color key or not.
* **Fuzziness:** This allows you to have a smooth transition between for the tolerance threshold.