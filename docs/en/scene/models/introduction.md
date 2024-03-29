# Getting started with 3D Models

Wallpaper Engine supports importing 3D models including animations and textures. 3D models should be imported as .fbx files, though for very basic models without animations, you can also use the more basic .obj file format.

## 2D Scene or 3D Scene?

It is important to note that Wallpaper Engine differentiates between 2D and 3D scenes. While both scene types do support 3D models, 2D scenes disable perspective rendering by default and the handling of the editor is also much more focused on 2D objects. In 3D wallpapers, you can move camera objects freely in a 3D space while 2D scenes are limited to a flat perspective. You will also have different assets available to you the asset list. Before you get started, you should essentially decide whether the focus of your wallpaper is on animating 2D or 3D elements, though both can be done in either mode.

If you create a new wallpaper by first importing a 3D model, the wallpaper will be created as a 3D scene. Alternatively, you can use the Use Template button in the new wallpaper screen to manually choose whether or not your scene will be created as 2D or 3D scene. You can add 3D models to your 2D wallpapers by clicking on **Add Asset** on the left-hand side of the editor and selecting **Model** from the list.

## Importing and Configuring 3D models

Before getting starting, you should be aware of some details regarding the model setup.

### Model sizes

Model sizes are not standardized. Wallpaper Engine tries to account for this and normalize sizes by adjusting the scale during the import of new models. However, sizes may still need to be tweaked after importing. Use the **Scale** gizmo (symbol shows four diagonal arrows) in the editor to resize your model as shown in the following video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/model_resize.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Tip:** You can hold SHIFT while resizing a model with the editor controls to make the resizing more fine-tuned.

## Controlling objects in 3D Spaces

Especially when working in 3D wallpapers, you should be aware of the editor gizmos that you can select in the upper left corner: **Translate**, **Rotate** and **Scale**. In 3D scenes, you can also switch between **world space** and **local space** by clicking the planet icon and the home icon respectively.

World space means that the editor controls adjust the absolute position and rotation of an object in the 3D space while local space means that the changes you make are relative to its own orientation. If that sounds confusing, just take a look at the following example, where you can see how the world space option ignores the **angle** of the object:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/local_world_space_controls.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Axis Configuration

Make sure that `-z` is configured as the forward axis and `+y` as the up axis in your model file. This is the default Blender setting for FBX but you should still be aware of this technical detail. If the axes are misconfigured, you can import your models into Blender and select the correct output axes when exporting as FBX.

## Importing your model file

Once your model is ready, make sure its texture files are placed in the same directory. If you have a normal map, also place it in the directory of your model during the import process. During the import model dialog, you can manually load the texture and normal map file if they are not detected automatically.

If you want to start a new 3D wallpaper, simply drop the model file into the **New Project** dialog. For existing projects, click on **Add Asset** on the left-hand side of the editor and select **Model** from the list.

## Advanced Texture Settings

Once your model is imported, you can further configure various rendering details by selecting it and clicking on the **Advanced Texture Settings** button on the right-hand side.

Here, you will find various options related to lighting, reflection and rendering:

- **Lighting:** Enabled by default. Disable if no lights sources will be placed in your wallpaper.
- **Reflection:** Enables reflections and the reflection map below.
- **Rim lighting:** Enables silhouette lighting which can add a perceived depth to the rendered model.
- **Toon shading:** Changes the model rendering to toon shading (also known as Cel-shading) which is useful for cartoon-like characters. **Tip:** Try using it in combination with **Rim lighting**.
**Tint mask in albedo alpha:** When enabled, the alpha channel of the main albedo texture determines the areas of the texture that are tinted using the tint color option below.

Additionally, you can import various maps which allow you to implement a form of physically-based rendering (PBR) to your model:

- **Albedo:** The main texture of your model.
Normal map: Allows you to import and normal map for your model. Tip: Use the advanced texture options to flip the red (X axis) or green (Y axis) channel of the normal map, which may be necessary if your normal map was designed for a different engine or modeling tool.
- **Metallic map:** Marks certain area as metallic and increases their reflective properties.
- **Roughness map:** The roughness map affects the scattering of the reflected light, essentially it defines the blur of the reflection.
- **Reflection map:** Allows you to create a map to decrease the reflection in some areas of the texture if needed.
- **Emissive map:** Areas marked in the emissive map will appear to emit light and glow in dark scenarios. Keep in mind that emissive maps are not real light sources. Please note: Emissive maps in Wallpaper Engine only use the red color channel. To ensure your emissive map works properly, convert it to shades of red or white. You can customize the emissive color in the app.

## Next Steps

If your model does not come with any bones and animations, the setup is completed at this point and you can use the model as part of your wallpaper scene. Consider adding lights to your wallpaper, see the advanced lighting guide for more information:

- [Tips for Advanced Lighting](/wallpaper-engine-docs/scene/lighting/lights)

If your model does have animations, we recommend that you continue with the animation tutorial in order to learn how to import and organize animations within Wallpaper Engine:

- [Model Animation Setup](/wallpaper-engine-docs/scene/models/animation)