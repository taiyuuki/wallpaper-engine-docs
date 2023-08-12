# Parallax Effect in Wallpaper Engine

The parallax options in Wallpaper Engine allow you to configure your wallpaper to move dynamically based on the movement of your mouse cursor. The parallax effect can be configured to have different levels of strength for each layer of your wallpaper or can be turned off altogether for individual layers. This allows for a way to create a sense of depth and distance of objects and is a relatively simple way to make your wallpaper more interactive.

You can enable the **Camera Parallax** effect by navigating to the **scene options** on the left-hand side of the editor. The parallax effect has three main options shared by all elements:

* **Amount**: The overall strength of the effect.
* **Delay**: The delay between the user's mouse movement and the movement of layers.
* **Mouse influence**: The influence of the mouse movement. **You should change this value to be not zero**, as a value of 0 means that the mouse does not influence the effect which essentially disables it for 2D scenes.

Additionally, each layer receives a **parallax depth** option once you enable **Camera Parallax**. This allows you to fine-tune each layer's parallax or turn it off altogether by setting it to 0 for that specific layer.

## Basic Parallax Example

We have created a sample project with a space background and a separate space ship layer. In order to enable the parallax effect on this project, we first navigate to the **Scene options** (above the list of layers) and then enable the **Camera Parallax** option towards the bottom of the scene options.

Afterwards, we select our background image and slightly adjust the **parallax depth** setting to our liking. The same process can be repeated for any other layer. Again, keep in mind you can turn of the parallax setting for any layer by setting the **parallax depth** to 0.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Double-Checking the Background Size

In our example, the background image will move outside of the visible area due to the parallax effect now which will make the gray background color visible. This is something you should always avoid. To compensate for this we can either import a slightly larger background image or we need to increase the scale of the background layer, otherwise the wallpaper will have visible border whenever the user moves the mouse towards the outer edge of the screen. In this example, we slightly increase the scale of the image:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth_fix_borders.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Limit Parallax Directions

You can also limit the direction of the parallax scrolling effect to only allow for vertical or horizontal movement. In order to do this, you have to click the chain icon of the **parallax depth** property and then set the **X** or **Y** axis to 0 respectively.

We will limit movement of the background layer of the wallpaper we just created to the horizontal axis by setting the **Y** property to 0, as shown in the following video:

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/parallax_depth_limit_movement.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Now the background will only move horizontally, along the **X** axis, while any upwards and downwards movement of the mouse is ignored.