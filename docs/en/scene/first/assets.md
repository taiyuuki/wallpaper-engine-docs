# Adding your first assets

In the previous section, we introduced effects which we applied to the background image. The background image is an **asset** in Wallpaper Engine, which is an additional element in your wallpaper. Wallpaper Engine supports different types of assets, the most common ones are images, text layers, particle systems, sounds and even 3D models.

In this section of the tutorial, we will show you how to add and customize assets to your wallpapers. We will continue working on the wallpaper that we have worked on in the previous section. Start by clicking on the **Add Asset** button on the left-hand side of the screen. This will open an overview of all assets installed by default. Click on **Light Shafts** and select **Light Shafts 1** and confirm by clicking on **OK** as shown in the video below.

<video width="100%" controls>
  <source :src="$withBase('/videos/asset_adding.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Using handles to move, rotate and scale assets

Your assets will be added to your wallpaper immediately but the position and size may not immediately be the way you want them. Wallpaper Engine uses 3D handles which you may already be familiar with if you have ever worked with a 3D game engine. These handles allow you to easily modify the **Origin** (*the position*), the **Angle** (*the rotation*) and the **Scale** (*the size*) of your assets. Watch the video below to see how the different handles allow you to move, scale and resize your assets:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Let's continue by flipping the light shafts and moving them to the upper right corner to match the lighting on the mountains. Move the light shafts, then flip them so that they fall into the right direction.

Flipping can be achieved by turning the **Scale** for the X axis negative. There are two ways to do this: Grab the **red box** at the tip of the arrow handle and move it to the left so that the light shafts flip over. Alternatively, you can also manually type **-1** into the **Scale** input field for the X axis. You may also adjust some of the asset properties like changing its color to fit the more orange tone of the light and lowering its opacity to make the effect a bit more subtle. See the video below which shows this process:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_placement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Adding a clock

As described above, another type of asset is a **Text Layer**. Text layers can have dynamic content in them, but this is more advanced and requires **SceneScript** knowledge which is explained in other sections of the documentation. For this tutorial, we will be using the clock preset, which is a configurable clock you can add to your wallpaper with ease. Like before, click on the **Add Asset** button on the left and select the clock preset from the list and confirm with **OK**.

The clock will be added to the wallpaper immediately. Since it is a text layer, it contains special properties like **Font**, which lets you choose a font from a list or even allows you to import your own font file which will be packaged inside of the wallpaper. For this tutorial, we will change the font to "Alcubierre" which is one of the default fonts. We also slightly reduce the **Point size** value which is the size of the font. For text layers, we generally recommend changing the size using this property rather than changing the actual **Scale** as we did with the light shafts earlier - this results in the optimal fond rendering and will increase the sharpness of the font. You can also check the other options, the clock can also be configured to be a 12h or 24h clock, depending on your preference.

<video width="100%" controls loop>
  <source :src="$withBase('/videos/asset_clock.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Keep in mind that since the clock relies on **SceneScript**, the clock will not actually run while in the editor, it will merely show a static preview (12:34 by default). You can *turn on* the clock by clicking the **Run Preview** button at the top of the editor that will appear after the clock has been added or preview the wallpaper.

## Asset Hierarchy

Wallpaper Engine also allows you to create a hierarchy within your asset list. This allows you to attach assets to another parent asset. If the parent asset is moved, rotated or scaled, so will all its children. This can help to organize your wallpaper assets into groups that are tied together, though you should only use it when objects are firmly tied to each other.

To create a hierarchy, simply drag and drop an asset onto another asset in the list and move to the right as shown in this video:

<video width="100%" controls loop>
  <source src="/videos/asset_hierarchy.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

As you can see in the video, when attaching the circling stars to the clock, they start moving, rotating and scaling along with the clock.

We will not be utilizing this feature as part of this beginner tutorial but you may find it useful to organize your wallpaper better. It is especially useful in more advanced use-cases, for example if you want multiple assets to move in union as part of a *timeline animation* or a custom-coded *SceneScript* animation.