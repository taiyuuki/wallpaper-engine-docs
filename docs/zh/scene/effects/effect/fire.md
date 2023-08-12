---
prev: ../overview.md
---
# Fire Effect

The **Fire** effect allows you to animate existing flames on an image. You can use this effect to colorize and add motion to existing, static flames. If you want to add fire to an image that doesn't include any flames yet, then you may instead want to use the fire particle presets.

![Fire](/img/effects/Fire.gif)

### Effect Settings

* **Blend mode:** Controls how the fire blends with the background image.
* **Refract:** This allows you to choose whether you also want to refract/distort the background image.
* **Flow map:** This texture needs to be painted by you in order to add fire to the image. You need to draw into the direction the fire should move.
* **Albedo:** This texture is used to blend color over the background image.
* **Alpha:** This allows you to adjust the opacity of the effect.
* **Color start:** This color is blended with the albedo texture where the albedo texture is bright.
* **Color end:** This color is blended with the albedo texture where the albedo texture is dark.
* **Distortion:** How much refraction / distortion will be applied.
* **Feather:** This controls whether there is a smooth transition or hard fall off on the edge of the fire.
* **Scale:** The size of the albedo and refraction textures.
* **Smoothness:** How much the albedo texture will be smoothed.
* **Speed:** How fast the fire moves.
* **Threshold:** This allows you to adjust the edge of the fire. A higher value will reduce the amount of fire that will be added where you painted.

