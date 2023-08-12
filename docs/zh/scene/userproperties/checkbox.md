# Checkbox User Property

A checkbox property allows users to select either **on** or **off** for a specific feature. You can assign it to most options in the editor that can be either in an **on** or **off** state.

In this tutorial, we will show two common use-cases for this. First, we want to hide an object in the wallpaper when a user property is turned off. Then, we show how individual settings of assets and effects can be turned on or off by the user.

In our example, we will use a clock that can be turned off if a user wishes to do so and additionally, let users choose between a 24 hour clock and a 12 hour clock.

## Hiding an Element

Select or create an editor component of your choice. We have added a clock to our wallpaper and we would like users to be able to turn it off if they prefer having no clock in their wallpaper.

Each element has a **visibility property** in the upper right corner (represented by the **eye icon**). You can assign an option to this element by clicking on the cogwheel icon next to the visibility icon and selecting **Bind User Property**. This will open the user property menu and prompt you to create a compatible user property - in this case a checkbox property. Create a new checkbox property by giving it a name and a default value and then confirm your selection. We simply name our user property **Clock** so that it's easy to understand what this property does.

You can also edit the optional **key** value which is needed for more advanced features, in most cases it's fine to leave the auto-generated default value there, in our case, the **key** of the property is `clock` (with a lowercase **c**).

After confirming the user property, you can see the the cogwheel icon next to the visibility option is now highlighted. Click on **File** in the upper left corner and then select **Apply Wallpaper** to apply the wallpaper to your desktop. Using this option, your wallpaper is also selected in the main user interface of Wallpaper Engine. Check the section on the right-hand side, you will now find the **Clock** user property there, allowing you to hide and show the clock to your liking.

See this whole process in the following video:

<video width="100%" controls loop>
  <source src="/videos/property_checkbox.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Turning an Option On or Off

Many elements and effects you can use in the editor have options that can be turned on or off. If you like, you can grant users the freedom to do so on their own for selected options. In our case, we will continue with our clock and add an option to toggle between a 24H clock and a 12H clock. 

We select our **Clock** once again and locate the **Use 24h format** option. Just like before, we click on **Bind User Property**. Instead of using the already existing user property, we create another user property by clicking on **Add Property**. It's important to make sure that it's a **Checkbox** just like before. To keep it simple and easy to understand for users, we name our property **24H Clock** and confirm our selection and make sure the property has now been linked to the **Use 24h format** option.

We now click on **File** and **Apply Wallpaper** again, the new user property is now visible in the Wallpaper Engine user interface and clicking it will switch between the 24H and 12H clock.

See this whole process in the following video:

<video width="100%" controls loop>
  <source src="/videos/property_checkbox_secondary.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Conditionally Hiding Options

In our previous example, the **24H Clock** option does not make sense when the clock itself is turned off as it has no visible effect on the wallpaper. This can be confusing for users of your wallpaper in some cases. This is why we recommend hiding these types of sub-options by utilizing the **Display Condition** in the settings of your user property.

First, you need to find the **Key** that was assigned to your primary user property. In the editor, go to **Edit** and then **Change Project Settings** to view all existing user properties. Then click on the edit icon next to your primary user property to view its key. In our case, the key for our property is `clock` (note, the label of the property is **Clock** with an uppercase **C**, but the auto-generated key is `clock` with a lowercase **c**).

We then go back to the user property list and select our secondary user property, in our case it's the **24H Clock** property. In the **Display Condition** field, we now type the following:

```js
clock.value == true
```

This means that the **24H Clock** property will only be visible when the value of the **Clock** property is `true` (in other words: it's turned **on**). You could achieve the opposite by writing `clock.value == false` instead.

We now click on **File** and **Apply Wallpaper** once again. When turning off the **Clock** option, you can now see that this will also hide the **24H** option from the user property list:

<video width="100%" controls loop>
  <source src="/videos/property_checkbox_secondary_visibility.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>