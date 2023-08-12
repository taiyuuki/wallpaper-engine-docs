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