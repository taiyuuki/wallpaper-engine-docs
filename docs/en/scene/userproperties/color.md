# Color User Property

A custom color property will allow users to change your wallpaper to match their personal tastes. Being able to change the color of objects or clothes on your wallpaper can make it stand out.

This tutorial will show you how you can use a color user property and the tint effect to adjust the color of a specific part of the wallpaper. We'll start with the image already being imported in the editor.

## Tint Effect Color Property Example

To showcase one way to utilize the color propert type, we will utilize the **Tint** effect as part of this guide. First we select an image layer and click on **Add** in the effects menu on the right hand-side and choose the **Tint** effect to get started.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_add_tint.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

We will need to mask the effect to the apple on the wallpaper in this case, so click on **Paint** near the **Opacity Mask** to begin painting the area. By default, the mask will be cleared with a ***black*** value, which means the effect becomes invisible. Use the brush tools to paint a ***white*** value exactly where the apple is. Click OK when you're done:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_paint_mask.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Adding the Color User Property

Once your Tint effect is set up, click on the cogwheel icon next to the **Color** property and choose **Bind User Property**. Click on **Add Property** and choose a proper name and default color for your new property, we will call it ***Apple Color*** in our example:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_add_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
Instead of adding a new property, you can also select the **Scheme Color** property which is always added to each wallpaper by default. If you use multiple effects, they can also share the same property.
:::

## Checking the Wallpaper Browser

After saving and applying your wallpaper, select it in the **Installed** tab of the Wallpaper Engine browse window. You will now find your color property on the right-hand side and can adjust the tint color dynamically:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_color_finished.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
