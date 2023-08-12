# Texture User Property

If you would like to allow users to replace a texture with an **image or video** of their own choice, you can use the texture user property to do so. The texture user property can be applied to:

* Image layers
* Effect masks
* Particle system textures

In this guide, we will showcase the basic example using an image layer, which is the most common use-case for this feature.

Keep in mind that any effects and their masks will not be updated when a user replaces a texture, so this feature is best-suited for simple image layers without complex and specific effect masks.

## Making an Image Layer Configurable

To get started, select an image layer of your choice in the editor, then check the right-hand side and navigate to the **Advanced Texture Settings** button towards the bottom.

You will see the **Albedo** texture of your image layer, which is the base texture of the layer. Click on the cogwheel icon next to it and select **Bind User Property**. You will now be presented with the user property selection screen. You can now create a new **Texture** type user property and link it to the texture of your image layer.

When viewing your wallpaper in the **Installed** tab of Wallpaper Engine now, you will find your new texture property on the right-hand side. Users can now import all compatible image and video formats. If the user does not use this property, the image that you initially imported into the editor will be used instead.

You can see this entire process in the following video:

<video width="100%" controls>
  <source src="/videos/property_texture.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Performance Optimization

If you want to create your wallpaper with a large default background color that can be replaced with a custom image, read this section.

It is important that you do not import a large single-color image and then apply the texture user property to it - this will cause a lot of texture memory to be used even if your users never use this feature.

We recommend that you create a small image in the aspect ratio of your wallpaper. For example, if you are creating a 4K UHD (3840x2160) or Full HD (1920x1080) wallpaper, create a small placeholder image first. This image would be in your desired default color, for example all black or all white. We recommend creating a 244x144px image for these resolutions.

Then, import it into your wallpaper and increase the scale accordingly so that your image covers the entire wallpaper. In the case of 244x144px, you need to set the scale to 7.5 in the editor when working with a Full HD wallpaper and 15.0 if you are working with a 4K wallpaper. This will ensure your image covers the entire wallpaper and that it uses as little memory as necessary for this. Users will then be able to import their own images on top of that.

#### Summary

**Do not:**

* Start your wallpaper with a large single-colored image and then apply a texture user property to it

**Do this:**

* Create a wallpaper using the *Scene template* in your desired resolution (for example 1920x1080)
* Create a small image that is the same aspect ratio as your project resolution (for example, take 1920x1080 and divide it by 7.5 to get to 244x144)
* Import the image and increase the scale until it covers your entire wallpaper
* Now create a texture user property on your small image. User images will be correctly scaled automatically.
