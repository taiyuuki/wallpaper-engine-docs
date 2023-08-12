# Slider User Property

Many wallpaper components can be tweaked by changing individual settings in the editor. For example, you might have added rain to your wallpaper and increased the size or amount of rain. Some users might prefer slightly different values here, and in that case you can easily create and assign a **Slider** user property to give them the ability to do so. This guide we will showcase this exact scenario but you can apply this every time you see a configurable numeric value in the editor in the settings section on the right-hand side.

We start by adding a rain asset to our wallpaper. After selecting it, we navigate to the **Count** option on the right-hand side. Click on the cogwheel icon and select **Bind User Property**, Wallpaper Engine will automatically suggest a slider property because **Count** is a number.

You will be asked to configure a default value, a minimum value, a maximum value and if the slider uses fractions or just whole numbers. In our example, we will set the default value to 0 (which means the rain is off by default), the minimum value will also be 0 and the maximum value will be 2. We also turn off fractional values as this level of precision is unnecessary in this case. This means that the slider can be either 0, 1 or 2.

Saving the project and using the ou will see that changing the new rain property from 0 to 1 will enable the rain and further increasing it to 2 will increase the rain intensity.

## Checking the Wallpaper Browser

After saving and applying your wallpaper, select it in the **Installed** tab of the Wallpaper Engine browse window. You will now find your slider property on the right-hand side and can adjust your slider value dynamically. You can see the full process in the following video:

<video width="100%" controls>
  <source :src="$withBase('/videos/slider_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
