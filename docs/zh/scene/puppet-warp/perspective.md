# 3D Perspective Extrusion

With puppet warping, you can also simulate a 3D perspective of 2D images. We will use the samurai from our [Character Sheet Example](/wallpaper-engine-docs/scene/puppet-warp/charactersheet) to showcase an example of this. However, it is not necessary to use a character sheet, you can also use a standard model for this purpose and achieve similar results.

You should have read and understood the [Puppet Warp Introduction Guide](/wallpaper-engine-docs/scene/puppet-warp/introduction) before attempting this tutorial.

## Puppet Warp Geometry Setup

Navigate to the **Geometry** step in your puppet warp and make sure you are satisfied with the parameters you have set up there. Changing the number of subdivisions and the padding option in the **Geometry** settings may require you to re-do some of the following steps, so it is important you finalize these options before you continue with the 3D perspective extrusion feature.

It may be tempting to use a high subdivision value to have more fine-grained control over the mesh later, but this can make depth painting more difficult and reduces overall performance of the wallpaper. Alternatively, try using a subdivision value of 0 or 1, then click on the mesh to place subdivision slice points in places where you want to extrude later. This will give you better control over the mesh and keep things simpler, with less geometry to take care of.

Once you are satisfied with the basic geometry setup, enable the **3D Perspective Extrusion** in the **Geometry** step of the puppet warp.

## Painting the Depth Map

Click on the **Paint Depth** button to bring up the depth painting options on the left-hand side. Select one of the paint options (**Raise**, **Lower**, **Flatten**, **Smooth**) to raise or lower the perceived depth at any given location that you are painting the depth mask. You do not need to be very accurate for a good result, but if you need perfect accuracy, you can export the depth map, edit it in a third-party image editor and then import it back into Wallpaper Engine.

While painting the depth mask, make sure to adjust the **Extrusion Preview** value to rotate your character or object. This will allow you to get an idea of what type of perceived 3D depth your object will have in your animation later. Keep in mind that the value of the **Extrusion Preview** does not change anything about your puppet warp, it is merely a preview functionality that is later discarded.

Once you have finalized the depth mask, you can fine-tune the **Extrusion Scale** option to increase or decrease the perceived depth of the 3D effect. The **Culling** option is only relevant if you intend to rotate the object on its back. If you set this option to **Normal**, the backside of the layer will be transparent, while setting it to **No cull** will mirror the texture to the backside as well. In the vast majority of cases, you can ignore this option, it is only relevant if you rotate your object by more than 180° during your animation.

You can see an exemplary video of this process here, where we paint a depth map for our character while reviewing the outcome using the **Extrusion Preview** functionality:

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_extrusion_painting.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Adding 3D perspective effect to an animation

In order for the effects of a 3D extrusion to become visible, you will have to animate the **X** or **Y** axis of the *angles*. In our example, we only take the first bone with animations after the root bone and animate the **Y** axis of the angles up and down a few times during the animation, in order for the character to appear as if it is continuously turning left and right. Keep in mind that the order of bones matters, if you want the whole body of your character to turn, it's likely a good idea to add this to the first bone with animations.

::: tip
Animating the **Y** axis will make the movement appear left / right and animating the **X** axis will make the movement appear up / down.
:::

We select the bone and hide all properties except the *Angles Y* option. The angle Y keyframe starts at a value of 0, then transitions to *-15* a few frames later, followed by transition to an angle of **+15** before circling back to an angle of **-15** again. The animation ends where it started at a value of 0. This already suffices in our example to create the perception of left and right movement. You can see this process and the final result in the following video:

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_extrusion_animation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Alternative ways of utilizing perspective

Alternatively to actually animating the perspective, you may also find it useful to simply enable the **Perspective** option at the bottom of your layer, in the *Miscellaneous* section. This will enable the 3D extrusion at all times and might not fit your model very well, but you can experiment around and see if it works well in your specific case and tweak the **Extrusion scale** option of the 3D extrusion.
