# Bloom Effects

The bloom effects add a glow around bright parts of the wallpaper. This is especially useful for images with a lot of contrast or dark images where you've added some bright particle effects like fire or lighting. Bloom can be enabled in the **Scene options** and unlike other effects, is applied to all layers where it can be further tweaked.

Bloom is only visible if the **post-processing** option is at least set to **enabled**. You can also choose to support **HDR bloom** on your wallpaper, which will only be visible to users who set **post-processing** to **ultra** in their settings and it requires notably more performance, so care should be taken that the wallpaper is otherwise [optimized well](/wallpaper-engine-docs/scene/performance/texture). Should you enable **HDR bloom**, make sure to also configure the standard bloom settings for users who do not wish to use HDR.

::: tip
If you are adding bloom just to make the source image you imported glow, but without really taking advantage of any animations or particles, then you should consider to add the glow into your image directly. Especially **HDR bloom** requires a lot of processing power so it should be used appropriately.
:::

# Basic Bloom

To enable basic bloom on your wallpaper, click on the scene settings and enable bloom there. You can now adjust the bloom **strength** and also the brightness **threshold** for bloom. A lower threshold means that bloom will be applied sooner and to darker areas of the image.

The example image here has a high contrast and a lot of well defined light sources, so it works well with bloom. The animated details like the rainbow strips at the top of the walls are especially good candidates for the bloom effect. You want to make sure that the bloom effect is not applied to the entire image, since that generally does not look good, try to configure the threshold so it only affects bright parts of the image.

<video width="100%" controls>
  <source src="/videos/effects_bloom_basic.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


# HDR Bloom

You can enable the high-quality **HDR bloom** effect additionally to the normal bloom effect by checking the **Ultra post-processing (HDR)** checkbox below the bloom option. HDR bloom requires a lot more performance and should only be used if it has a great visual impact on your wallpaper. Keep in mind you have to set the option **Post-processing** to **Ultra** in your performance settings to see HDR on your final wallpaper, the editor ignores this option and always allows you to preview the bloom HDR look.

::: tip
If you enable HDR bloom, all users who only have normal bloom enabled will only see normal bloom on your wallpaper. Make sure to test your wallpaper with both bloom settings in the editor!
:::

With HDR enabled, the wallpaper can become brighter than what your monitor is physically capable of displaying. HDR bloom can pick this **overbrightening** up and create an *emissive* glow effect only around parts of the image that are brighter than possible. You can control this brightness on every image, image effect or particle effect separately and control exactly which parts of the image will be glowing.

A few additional options will appear with HDR bloom enabled:

* **HDR strength**: This is the same as the standard bloom strength and controls the amount of glow, but this one allows you to control the strength when HDR is enabled.
* **HDR scatter**: This option controls how much the glow effect is spread over the image from a glowing source or if the glow stays only close to the source.
* **HDR threshold**: This is the same as the standard bloom threshold and allows you to control how bright the image must be to produce bloom. The key difference is that you usually keep this value close to 1, meaning only parts of the image that are *overbright* will actually produce bloom.
* **HDR threshold smoothing**: This option controls how smooth the transition between brightness below and above the threshold will be and can be useful to reduce flickering. If you set this to 0, then the transition will be immediate, if you set this to 1, then even dark part of the image will glow very slightly and this glow becomes stronger the brighter the image becomes.

Every layer will have a new option called **HDR brightness** appear in their properties when you have HDR bloom enabled. This brightness allows you to set the amount of over-brightening on a layer and it only affects the wallpaper when HDR is enabled for the user as well.

In this example we are enabling **HDR Bloom** and switch back to the layers menu. Here we increase the **HDR brightness** option for the top two rainbow layers to add a nice, high quality glow effect to them.

<video width="100%" controls>
  <source src="/videos/effects_hdr_bloom.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Other examples of HDR bloom are glowing text or glowing particles, both also have an **HDR brightness** option that allows you to adjust the individual glow per object. For small particles or objects, you can even increase this value far beyond the provided limit and push the glow further.

<video width="100%" controls>
  <source src="/videos/effects_hdr_bloom_examples.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
