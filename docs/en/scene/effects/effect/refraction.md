---
prev: ../overview.md
---
# Refraction Effect

The **Refraction** effect allows you to distort the image based on a normal map. The refraction effect is especially well suited for creating frozen ice effects on windows or any similar distortion.

You can also fine-tune the effect by painting an opacity mask. For example: Frozen windows tend to have more ice towards the outer parts of the window, so you could paint a reduced **value** with the opacity mask in the center of the window to make the effect appear less strong towards the middle.

![Refraction Effect](/wallpaper-engine-docs/img/effects/Refract.gif)

### Effect Settings

* **Opacity mask:** You can draw this mask to determine what areas of your image the effect is applied to. You can also paint lower values at certain parts of the opacity map to lower the effect strength for certain parts of the image.
* **Normal map:** Allows you to import a custom normal map to alter how the image is distorted.
* **Scale:** The scale of the distortion details.
* **Strength:** How much distortion is applied to the image.