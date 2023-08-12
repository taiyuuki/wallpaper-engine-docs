# External Image Editor Quick Access

Wallpaper Engine allows you to configure your favorite external image editor to be used as a supplementing image editing tool that you can quickly access throughout the editor. You can configure an image editor of your choice in the Wallpaper Engine editor by navigating to the **Edit** menu at the top, then selecting **Editor Settings**. Next to **Custom Image Editor Path**, click on the **Select** button to select the **.exe** of your editor of choice.

This feature works with all image editing programs we have tested and you can easily connect Wallpaper Engine with tools like Adobe Photoshop or free alternatives such as Paint.NET or GIMP.

## Quickly Accessing an External Editor

Whenever you are dealing with a texture or a mask, you can quickly access your image editor of choice by hovering over the **Manual Editing** button next to the texture or mask and then selecting **Edit with External Image Editor**. Wallpaper Engine will load the editor with the image and will wait for you to use the **Quick Save** functionality of your image editor to reload the texture. This is especially handy whenever you want to use advanced image editing features when creating a mask or when you quickly to make some minor adjustments to the image you are working with.

See the following video for a demonstration where we edit the texture of an image layer. We first select our image layer, then scroll down to the **Materials** section and select the advanced view for materials. Next to the **Albedo** texture, we click on **Manual Editing** followed by **Edit with External Image Editor** to add some eye brows to our jelly texture. After using the quick save functionality of our editor, Wallpaper Engine automatically re-imports the updated texture.

<video width="100%" controls>
  <source :src="$withBase('/videos/external_editor.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
