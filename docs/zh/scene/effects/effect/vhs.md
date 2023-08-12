---
prev: ../overview.md
---
# VHS Effect

The **VHS** effect can add an old-school retro effect to your image. It consists of several components: a scrolling distortion line, a noise overlay, random artifacts and chromatic aberration. The distortion line will shift the image from side to side and scroll from top to bottom by default. The noise overlay will add a faint random pattern over the entire image in combination with small, thin artifacts that randomly appear. Chromatic aberration will separate the colors of the image diagonally.

![VHS](/wallpaper-engine-docs/img/effects/VHS.gif)

::: warning Please note
If you only want to utilize the chromatic aberration of this effect, we recommend using the [Chromatic Aberration effect](/wallpaper-engine-docs/scene/effects/effect/chromaticaberration) directly as it offers more customization options and better performance.
:::

### Effect Settings

* **Opacity mask:** This option allows you to limit the effect to a certain part of the image.
* **Noise:** This texture is used to generate the noise overlay and artifacts.
* **Blend mode:** This controls how the VHS effect is blended with the background image.
* **Grayscale:** By enabling this option, the noise overlay will not change the color, only the luminosity of the image.
* **Alpha:** How much the effect is visible.

#### Distortion
* **Distortion speed:** This controls the speed of the distortion line.
* **Distortion strength:** This controls how much the image is distorted from left to right.
* **Distortion width:** This controls the width of the distortion line.

#### Artifacts
* **Artifacts:** This controls the number of visible artifacts.
* **Scale:** You can adjust this option to change the size of the noise overlay and artifacts.
* **Invert artifacts:** By enabling this option, the color is inverted where the artifacts are, otherwise the artifacts will be white dots.
* **Chromatic aberration:** You can adjust this option to change the distance of the color separation effect.
