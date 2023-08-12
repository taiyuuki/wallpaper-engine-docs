# Combo Box User Property

A combo box property will offer users a dropdown menu with selection of pre-defined options. The user of the wallpaper will be able to pick one of them and the wallpaper will show the layers that you have associated with the respective option. Combo boxes can also be very useful in combination with SceneScript, however, this advanced usage is covered in the [SceneScript section](/wallpaper-engine-docs/scene/scenescript/introduction) of the documentation.

This example will show you how to make it possible for users to select one of multiple layers of your wallpaper. We will showcase this using three weather options: rain, snow and fog. Only one type of weather effect will be visible depending on the choice of the user. We are starting with a basic background image and have added the three weather effects via the **Add Asset** button on the left-hand side.

## Creating a Combo Box

We will start by selecting the first layer that we will later add to our combo box selection. Click on the layer you want to be able to toggle and then click the cogwheel icon at the top right corner, next to the visibility option (represented by the **eye icon**). Click on **Bind User Property** and then **Add Property**:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_bind_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now choose the property type **Combo** from the menu. Rename the property to something sensible, like ***Weather*** in our case. Add the all options that you want users to be able to choose from. In our case, this is ***Snow***, ***Rain*** and ***Fog***. You also need to enter a unique value for them, we will use 0, 1 and 2 respectively in this case. The values do not matter in this example, but in in advanced scenarios (using custom **SceneScript** code for example), the values can be made use of. The process is shown in the following video:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_create.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can now close both dialogs. The first option, ***Snow*** will be selected by default, and the layer that was currently selected will now be associated with the default ***Snow*** option.

## Associating Remaining Layers

Now select the next layer, ***Rain***, and start binding a user property like before. This time we will choose the existing ***Weather*** property and then choose ***Rain*** from the drop down menu. This will associate the ***Rain*** layer with the correct option. The rain effect will disappear as soon as you close the dialog since the default option is ***Snow***:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_link_rain.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Repeat the same with the ***Fog*** layer:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_link_fog.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Checking the Wallpaper Browser

After saving and applying your wallpaper, select it in the **Installed** tab of the Wallpaper Engine browse window. You will now find your combo box property on the right-hand side and can adjust the weather dynamically:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_finished.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
