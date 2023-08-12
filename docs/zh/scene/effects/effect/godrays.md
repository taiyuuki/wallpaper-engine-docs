---
prev: ../overview.md
---
# God Rays Effect

The **God Rays** effect adds shimmering god rays to the image which are emitted from bright spots and can also be masked to ensure only light sources emit them.

::: tip
This effect can be heavy on performance and you may want to consider adding a user property to allow users to turn this off.
:::

![Godrays](/wallpaper-engine-docs/img/effects/Godrays.gif)

### Effect Settings

* **Cast type:** The *radial* cast type will create rays in a circular fashion, centered around a specific point that you can change with the *center* option. The *directional* cast type will create rays that go into a fixed direction, that you can change with the *direction* option.
* **Quality:** This allows you to configure how precise the rays will be. Higher values can have a severe impact on performance.
* **Kernel size:** This allows you to configure how blurry the god rays will be. When less quality is used, you generally need more blur to hide artifacts.
* **Blend mode:** This controls how god rays will be blended with the background image.
* **Noise:** Enabling this option adds natural looking shimmer to the rays, it's highly recommended to keep this enabled in most cases to have the god rays animated.
* **Copy background:** Enabling this option is useful for transparent images. If you apply the god rays to a transparent image or text, for example, they will blend incorrectly and you will get a poor result. Enable this option to improve blending over transparent pixels and fix that.

* **Opacity mask:** You can paint this mask to limit casting of the god rays into a certain area, like the sky or sun.
* **Albedo:** This texture will be scrolled to generate the noise animation.
* **Color:** This allows you to change the color of the rays.
* **Blur scale:** This allows you to further reduce or increase the blur that is applied to the god rays.

#### Noise
* **Noise amount:** This option controls how much noise variance will be added to the rays.
* **Noise scale:** This allows you to change the size of the noise variance. A high scale will result in more rapid, flickering changes while a lower scale will make the noise appear more uniform.
* **Noise smoothness:** This allows you to control the smoothness of the noise texture.
* **Noise speed:** This option controls how rapidly the noise texture is scrolled and applied to the rays.

#### Ray Casting
* **Center:** Only for *radial* casting. This changes the center from where the rays are emitted.
* **Direction:** Only for *directional* casting. This changes the direction of the rays.
* **Ray threshold:** This controls how bright the background image must be before rays are added to the image at any given point.
* **Ray intensity:** This allows you to change how bright rays will appear.
* **Ray length:** This allows you to adjust the length of the rays. Keep in mind that longer rays may produce artifacts and you may have to increase the quality option to get a nice looking effect.
