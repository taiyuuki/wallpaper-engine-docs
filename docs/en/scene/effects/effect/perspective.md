---
prev: ../overview.md
---
# Perspective Effect

The **Perspective** effect allows you to apply a perspective transformation to the image. This can be useful in combination with [**Texture User Properties**](/wallpaper-engine-docs/scene/userproperties/texture) to create surfaces with user-replaceable textures or to apply certain effects to the sky, the floor or any other surface with an angled perspective.

::: tip
You should apply this effect only on top of other existing effects or when using a texture user property. If you apply this effect merely to a static image, consider modifying your image in an image editor instead to improve the performance of the wallpaper, since there is no need to use a live effect for that.
:::

![Perspective](/wallpaper-engine-docs/img/effects/Perspective.gif)

### Effect Settings

* **Repeat:** Whether the image should repeat until the edges or be clamped.
* **p0:** Distortion of the bottom edge. Negative values will stretch the edge, positive values will compress it.
* **p1:** Distortion of the left edge. Negative values will stretch the edge, positive values will compress it.
* **p2:** Distortion of the right edge. Negative values will stretch the edge, positive values will compress it.
* **p3:** Distortion of the top edge. Negative values will stretch the edge, positive values will compress it.
