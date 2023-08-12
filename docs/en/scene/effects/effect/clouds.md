---
prev: ../overview.md
---
# Clouds Effect

The **Clouds** effect allows you to add simple moving clouds to your image. They can be displayed in a flat manner or even with perspective distortion. You can also fully tweak their colors, size and sharpness.

![Clouds](/wallpaper-engine-docs/img/effects/Clouds.gif)

### Effect Settings

* **Blend mode:** This allows you to control how the clouds will be blended with the image. Usually the *normal* or *add* blend mode will be the most useful.
* **Shading:** This option controls whether the clouds will look lit, with dark areas, or fully white, for example.
* **Write alpha:** Enabling this option will make the background image only be visible where the clouds are.
* **Albedo:** This texture is the standard noise texture used to generate the clouds.
* **Opacity mask:** The opacity mask allows you to limit the effect to only certain parts of the image.

#### Colors
* **Alpha:** The total opacity of the clouds.
* **Color start:** This is the core color of the clouds, that will be used in places where the clouds are fully visible.
* **Color end:** This is the outer color of the clouds, used where the clouds are transparent. You can use these color options to colorize the fringe area of the clouds.
* **Feather:** Determines how much of the cloud texture will be blended in opacity. Reducing this option will make the edge of the clouds sharper.
* **Scale:** The size of the albedo texture. There are 4 options because the texture is sampled twice and you can scale both samples along the X and Y axis. So the Z and W values correspond to the scaling of the second texture sample.
* **Smoothness:** This changes the smoothness of the albedo texture.
* **Speed:** How fast both of the cloud textures move along the X and Y axes.
* **Threshold:** This is the sharp edge of the clouds. If you reduced the *feather* option, you can use this to change where the clouds will be cut off.

#### Perspective Clouds
* **Perspective:** This option determines whether you want to enable perspective distortion for the clouds. You will have to adjust the *perspective warp* parameters in order to achieve a nice effect.
* **Perspective warp:** These values control how much the clouds get compressed near each border of the image. If want to animate a perspective sky, for example, you can use the values `-0.3 0 0.45 0` which will compress the clouds at the bottom and stretch them at the top. You will also need to increase the Y and W components of the scale option. Finally, use the opacity mask to make sure the clouds are only displayed at the top of the image.