# Foreground Separation

Foreground separation in Wallpaper Engine allows you to separate your image into multiple independent parts with relative ease and without the use of any third-party image editing tools. This can be especially useful when you have one or more characters or objects in the foreground of your base image and want to treat your foreground object as an independent layer. This can help with applying effects to a character and allows you to place assets in between your foreground object and your background image.

Foreground separation in Wallpaper Engine works well for most images but in some cases you may still want to manually tweak the final result or even fully rely on a third-party image editing tool.

## Introduction to Foreground Separation

In this guide, we will showcase how to separate a character from an image and turn it into its own layer. In the following example, we are able to use foreground separation to turn our sample image into two layers: One layer for the character in the foreground of our image and another background layer for the scenery in the background of the image. In more complex scenarios, you can use foreground separation multiple times on the same base image, for example if you have multiple characters or objects on your image that you would like to turn into independent layers.

![Foreground Separation](/wallpaper-engine-docs/img/foreground-separation/foreground_separation.gif)

As you can see, the character has been cut out through foreground separation. The background is left with a blurred area that is automatically filled in. While the blur might become visible under certain circumstances, it should be hardly noticeable in most cases, as the colors are determined by background image, allowing them to blend in well with the image.

#### Benefits of foreground separation

In its most basic form, this separating foreground objects into distinct layers allows you to apply effects to your foreground character without affecting your background (for example with the **Shake effect** which is often used for breathing and tends to spill over into the background). It also enables you you to place other assets in between your foreground layer and your background layer. We have showcased this in the following video where we placed a **Smoke** asset in between our character and the background by moving it in between the layers:

<video width="100%" controls autoplay loop>
  <source src="/videos/foreground_layering.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Foreground separation can also be used as a starting point for a [puppet warp animation](/wallpaper-engine-docs/scene/puppet-warp/introduction).

## How to use Foreground Separation

In order to get started, import your image into the Wallpaper Engine editor, then right-click on it and hover over **Image Editing** and select **Foreground Separation**. You will now see the foreground separation window within the editor.

## Paint Modes

There are two modes that you can use to define the outlines of your character. The first option we want to showcase is the **Paint Brush** mode. Both modes are viable tools to achieve foreground separation, be sure to read the following section and then decide on which mode to try.

Get started by enabling **Paint Brush Mode** by clicking the brush symbol in the foreground separation window as shown in the following video:

<video width="100%" controls autoplay loop>
  <source src="/videos/foreground_separation_mode.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Paint Brush Mode

When using the paint brush functionality, the two core functions are the **Mark Foreground** and **Mark Background** buttons on the left. Use them to mark different parts of the image as either your foreground character or the background areas that are not part of your character. Switch between marking parts of the background and foreground. Often just a single brush stroke suffices to mark whole areas as either foreground or background. The **Erase** functionality marks an area as essentially *neutral* and the app will decide whether or not it considers it part of the background or foreground.

::: danger Very important
Do not try to accurately draw in tiny details unless absolutely necessary. Simply paint the rough areas of your character and the background. Wallpaper Engine will automatically attempt to detect the outline of your foreground object.

To see this in practice, watch the video below.
:::

See the following video for an example of how to extract a character. Notice how the first big paint brushes already select the character outline relatively well even though the foreground paint brush was only applied in the center of the character. Certain areas such as the tip of the sword and the background areas in the middle of the character and on the right-hand side need to be specifically marked as part of the background.

**Take note when the brush changes from "Mark Foreground" to "Mark Background".**

<video width="100%" controls>
  <source src="/videos/foreground_separation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Using the controls in the **View** section, you can switch between viewing the **foreground** and **background** independently. Before finalizing the character separation, you should switch between the foreground and background view and make sure that both layers match your expectations as you cannot return to the foreground separation process without starting from scratch.

### Polygon Mode

As an alternative to the aforementioned *Paint Brush Mode*, you can also use the polygon drawing functionality to create the outlines of your character. You can enable it by clicking on the **Polygon** icon on the left-hand side.

With **Polygon Mode**, you can set points around your character to define its rough outline. Make sure to draw a full circle around your character, this means the last point you set needs to be connected to the first point that you created to complete a full loop around your character. Unlike the **Paint Brush Mode**, you should follow the outline of your character closely to get a good result.

In order to get started, set a point anywhere at the outline of your character, then run points along the line of your character. You can delete points by clicking the middle mouse button on a point that you want to delete. You can insert new points by clicking on an already existing lines and you can move existing points around to adjust their position.

The following video shows the same image as in the previous section being extracted by using **Polygon Mode**:

<video width="100%" controls>
  <source src="/videos/foreground_separation_polygon.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip Tip
You can also draw multiple independent polygons if your character consists of multiple independent parts.
:::

### Additional Controls

As mentioned in the previous section, it is helpful to frequently switch between the foreground-only and background-only view to ensure that the separation is aligning with your expectations, otherwise make sure to mark more areas as either background or foreground. You can also tweak the **Mask tolerance** and the **Smoothing** values to ensure the selection matches your character or object as closely as possible. Increasing the **Mask tolerance** will expand the selected foreground areas slightly while decreasing it will make the selection more closely tied to the object.

Additionally, you can also lower or raise the **Quality** setting at the bottom of the options. This can significantly alter the current selection, so it can be useful to do this early on in your process. Keep in mind that raising the quality will significantly raise the time it needs for Wallpaper Engine to recalculate the mask.

If the frequent recalculations after your brush strokes become bothersome or take a long time on your system, you can also turn off the **Auto recalculate** feature in the lower left corner and instead trigger manual recalculations by manually pressing the **Recalculate** button in the lower left corner.

#### Maximizing Accuracy

If you are dealing with very fine outlines on a character or an object, it may be necessary to tweak the settings for maximum precision. You can maximize the accuracy of the foreground separation algorithm by tweaking the following settings:

* **Mask tolerance:** 0
* **Smoothing:** 0
* **Quality level:** 2

Should you still notice issues with the foreground separation results, you can still make minor adjustments to the automatic foreground separation by connecting Wallpaper Engine with an external image editor. Afterwards, you can manually edit the **Albedo** texture of your image layer. See the following guide for more infos:

* [External Image Editor Quick Access](/wallpaper-engine-docs/scene/image-preparation/external-editor)
