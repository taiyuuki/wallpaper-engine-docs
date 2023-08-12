---
prev: ../overview.md
---
# Foliage Sway Effect

The **Foliage Sway** effect can be used to simulate wind movements, especially for trees and plants. The effect has two different modes which have slightly different use-cases.

![Foliage Sway](/wallpaper-engine-docs/img/effects/Sway.gif)

## Effect settings

* **Opacity mask:** You can draw this mask to determine what areas of your image the effect is applied to.

### Modes

#### UV
The **UV** mode is recommended for most use-cases as it can be applied on any image layer with good results. It applies the sway effect per pixel, which makes it versatile. In this mode, it has the following settings that you can tweak to fit your image:

* **Phase:** Strength of offset in time to make effect look more varying.
* **Power:** The exponent of the effect which can make it appear more smoothly.
* **Ratio:** The aspect ratio of the sway effect. Lower than 1 means more horizontal sway and larger than 1 means more vertical sway.
* **Scale:** Can be used to make the effect match the size of the foliage on the image. For example you can increase the scale if you want more detail applied and i.e. make singular leaves move.
* **Direction:**: The orientation of the foliage on the image
* **Speed:** The sway speed.
* **Strength:** The maximal distortion of the sway.

#### Vertex
In **Vertex** mode, the complete image layer is swayed, making it only useful in cases where the swayed object has been cut out with transparency. In this mode, the effect has the following settings that can be tweaked:

* **Corner weights:** Controls how much each corner is animated by the sway (top left, top right, bottom right, bottom left)
* **Direction weights:** Controls how much the animation moves the image along the X and Y axis.
* **Phase:** The time offset. If you have a lot of images with this effect, use a different time offset here so they don't all animate in unison.
* **Power:** The exponent of the effect which can make it appear more smoothly.
* **Speed:** The sway speed.
* **Strength:** The total amount of sway, this is basically multiplied with the corner weights.

## Sample usage

The effect is used in the introductory tutorial of the Wallpaper Engine to effects, read relevant sections on the following page to see it in use:

* [Adding your first effects](/wallpaper-engine-docs/scene/first/effects)