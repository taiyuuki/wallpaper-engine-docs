# User Properties Introduction

Wallpaper Engine allows you to make parts of your wallpaper configurable by your users by adding so called *user properties* to your project. These user properties appear on the right-hand side when a user selects your wallpaper in the Wallpaper Engine **Installed** tab. In this guide, we will explain how to create and make use of properties and what each property type represents. Advanced users can also integrate user properties into their **SceneScript** code, this is documented in the [SceneScript section](/wallpaper-engine-docs/scene/scenescript/introduction) of the documentation.

## User Properties

The following user property types are available in Wallpaper Engine. Click on any of them to view a detailed description on how they work:

* [**Color**](/wallpaper-engine-docs/scene/userproperties/color) (`color`): A color picker
* [**Slider**](/wallpaper-engine-docs/scene/userproperties/slider) (`slider`): A slider that allows users to select a number within a specified range
* [**Checkbox**](/wallpaper-engine-docs/scene/userproperties/checkbox) (`bool`): A checkbox that is either on or off
* [**Combo**](/wallpaper-engine-docs/scene/userproperties/combo) (`combo`): A dropdown selector where each element has a text and a hidden value
* [**Text**](/wallpaper-engine-docs/scene/userproperties/text) (`textinput`): A text input field
* [**Texture**](/wallpaper-engine-docs/scene/userproperties/texture) (`texture`): Allows users to replace a texture with a custom image or video

Properties will be shown on the right-hand side when a wallpaper is selected:

![User Properties](/wallpaper-engine-docs/img/tutorials/scene_properties.jpg)

You can always view, edit and even create new properties by opening your project in the Wallpaper Engine editor, navigating to the **Edit** menu at the top and selecting **Change Project settings**.

## Creating sub-properties with display conditions
In some cases, you may want to show additional properties only under certain conditions. For example, you may have a clock in your wallpaper and you want to give users the ability to hide the clock and change between a 24 hour and 12 hour format. In this case, you might create two checkbox properties:

* *Show Clock*
* *Use 24h format*

Since the *"Use 24h format"* user property does not make sense on its own, it's best that you hide it if the clock is disabled. This can significantly reduce clutter in your wallpaper settings, making it easier for users to configure your wallpaper.

To implement this, first create the *Show Clock* checkbox property (or whatever user property name makes sense in your wallpaper). Take note of the *Key* that Wallpaper Engine automatically generates below your user property name. In the case of *"Show Clock"*, the key would be `show_clock`.

Now, create your related user properties. During the creation, you can configure a *display condition* at the bottom of the creation form. All you need to do is to add the following code there (just replace `show_clock` with the key of your user property):

```js
show_clock.value == true
```

You can see the entire process in this video:

<video width="100%" controls>
  <source src="/videos/display_condition.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
You can also create display conditions for combo properties with a dropdown list of options. In that case, you would need to replace the `true` keyword with a value that you have created in the combo property. For example:

```
yourproperty.value == "example123"
```
:::