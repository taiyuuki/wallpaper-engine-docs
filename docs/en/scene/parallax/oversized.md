# Scrolling an Oversized Image

We can import an oversized background image and use the parallax effect to loosely make it possible for the user to "explore" the image by moving the mouse over the desktop. In order to do this, we will import a very large image and disable the **Resize image** option, so that the image is included in its original size:

![Disable Resize](/wallpaper-engine-docs/img/tutorials/disable_resize.png)

Once the image has been imported, we need to adjust the project resolution so that it matches a real common desktop resolution such as Full HD or 4K UHD. In this example, we set the project resolution to 1920x1080 by clicking on **Edit** in the top menu row of the editor, followed by **Change Project Resolution**. You can enter the new project resolution into the appropriate fields in the project settings:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_explore_resolution.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the next step, we need to enable the parallax effect in the **Scene options** again. We can now adjust the parallax strength or resize the image to ensure the mouse travels across the complete image - but not further. You can do this by moving the mouse to each corner of the image, as it should never leave the image. Fine-tune the parallax strength setting as needed until the movement of the mouse cursor covers the correct area and never goes off-screen:

<video width="100%" controls loop autoplay>
  <source src="/videos/parallax_explore_finalize.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
