---
tags:
  - user properties
  - property
  - properties
  - settings
  - configuration
  - customization
  - tweaking
---
# Adding user options

Wallpaper Engine allows users to customize your wallpapers even further with the help of **user properties**. User properties allow you to give users the option to further tweak and customize individual aspects of your wallpaper, including hiding objects from the wallpaper altogether.

## Creating a visibility property

You may want to give users the ability to hide an element that you have added to your wallpaper. Each element has a **visibility property** in the upper right corner (represented by the **eye icon**). You can assign an option to this element by clicking on the cogwheel icon next to the visibility icon and selecting **Bind User Property**. This will open the user property menu and prompt you to create a compatible user property - in this case a checkbox property makes sense (the visibility can be either "on" or "off"). Create a new checkbox property by giving it a name and a default state and then confirm your selection. You can also add and edit the optional **key** value which is needed for more advanced features, in most cases it's fine to leave the auto-generated default value there.

That's it! If you now apply the wallpaper and select it in the "Installed" tab of Wallpaper Engine, you will find your user property at the bottom of the list and changing it will change the visibility of your wallpaper object. See the video below which showcases this by making the visibility of a clock user-configurable.

<video width="100%" controls>
  <source :src="$withBase('/videos/visibility_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Creating sub-properties with display conditions
In some cases, you may want to show additional properties under certain conditions. For example, take the example we have used in the previous section: You may have a clock and whenever the clock is enabled, you want to show users an additional option to switch between the 24 hour and 12 hour format. This helps declutter the properties list as you can selectively show properties whenever they are needed.

In the case of the clock, you can find a *Use 24h format* property when selecting the clock. Create a new checkbox user property for this setting just like in the previous example. In this case, however, you need to take the **key** value we mentioned in that section and create a little bit of code in the **display condition** option. Don't worry, it's not very complicated. The identifier of the clock property we created is **show_clock** - you can always look the identifier of each property up by opening the clock property in the property list. We now want the display condition to be:

```js
show_clock.value == true
```

This means that whenever the value of our `show_clock` property is `true` (which means "enabled"), we want this property to become visible in the user property list. This means that when a user turns on the clock, a new "24 hour clock" option becomes visible to them. You can view the video below to see how to set this up and what the outcome looks like:

<video width="100%" controls>
  <source :src="$withBase('/videos/display_condition.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Additional user property types (color and slider)

Whenever you want to assign a new user property to an option, Wallpaper Engine will automatically suggest the appropriate type for the property. For example, when assigning a property to a color option, a **color** type user property will be created. For numeric options, you can create a **slider** user property which we will showcase in this section.

First, pick an element you want to make configurable. In this case, we will just add a rain asset to our wallpaper and then next to the **Count** option, we click on the cogwheel icon and select **Bind User Property** just like before. This time around, Wallpaper Engine will suggest a slider property because **Count** is a number and not just "on or off" like the visibility. You will be asked to configure a default value, a minimum value, a maximum value and if the slider uses fractions or just whole numbers. In our example, we will set the default value to 0 (which means the rain is off by default), the minimum value will also be 0 and the maximum value will be 2. We also turn off fractional values. This means that the slider can be either 0, 1 or 2. If you apply the property now and then apply the wallpaper, you will see that changing the new rain property from 0 to 1 will enable the rain and further increasing it to 2 will increase the rain intensity. You can see this whole example in the video below:

<video width="100%" controls>
  <source :src="$withBase('/videos/slider_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Combo user properties

You may have noticed that Wallpaper Engine also offers **Combo** type user properties. These are mainly useful when you create custom-programmed logic with **SceneScript**. For more infos about these types of properties, please see the **SceneScript** chapter of this documentation website.