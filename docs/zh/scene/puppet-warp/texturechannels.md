# Texture Channel Animations

Puppet warping allows you to utilize texture channels to blend between two or more different textures as part of your animation. In this tutorial, we will showcase how to implement a simple eye blinking animation with this approach.

::: warning Please note
You should have read and understood the [Puppet Warp Introduction Guide](/wallpaper-engine-docs/scene/puppet-warp/introduction) before attempting this tutorial since this guide expects you to have a basic puppet warp layer set up.

The tutorial showcases a [character sheet](/wallpaper-engine-docs/scene/puppet-warp/charactersheet), though character sheets are not necessary for this feature to function.
:::

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/puppet_warp_eye_blinking.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Creating a Texture Channel

To add a texture channel, open the puppet warp menu of your image layer. Below the puppet warp steps, you will find a button labeled **Texture Channels** in the **Optional** section of the puppet warp properties. Click the **Texture Channels** button to open the texture channel configuration. You will start off with exactly one texture channel which is the base image of your puppet warp image layer. Click on the **Add Channel** button to import a new image as an additional channel.

::: warning Important
Each channel must have the same resolution as the main puppet warp image, since Wallpaper Engine will look for differences on a pixel-per-pixel basis. Make sure to always keep the resolution the same while you are preparing additional texture channels.
:::

In our example, we have two versions of our image, one is a character sheet of a knight with open eyes, while the second version shows the same knight with closed eyes. We import the closed-eyed knight version as an additional channel and Wallpaper Engine will automatically mark all areas in which the original image differs from the imported image so that you can get an easy overview of which parts of the image have changed between layers:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_texture_channel_setup.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Alpha Writing

The **Alpha writing** option for texture channels is mainly relevant if you add or remove transparent areas of the image, in other words, changing the shape or silhouette of the image. In our example, we have only changed the eyes, we did not modify any transparent areas outside of our character. For this reason, we turn off the **Alpha writing** option since it is not necessary in this case. If you have a more complex set of changes with overlapping changed areas, the **Alpha writing** option should be turned off as well. In contrary, if you change or replace the silhouette of the image, you want to turn this option on. When in doubt, try toggling the option and see if the behavior of the puppet model delivers your expected result.

### Creating Additional Channels

You can create multiple texture channels for more complex texture animations and you can configure the order in which all channels are drawn. However, keep in mind that this feature is not intended to control a large number of frames like a GIF.

::: warning Limits
Depending on the texture resolution of your model and the combined changes of all texture channels, you may end up hitting the limit for texture channel data. Should you get an error when trying to finish texture channel editing, you either have to remove channels or change them, so that their affected area becomes smaller.
:::

## Texture Channel Animations

Once you have set up your texture channels, you can continue to the **Animation** section of your puppet warp. In our case, we create a new 4 second looped animation for the texture channel, though you can also incorporate texture channel animations into any existing animation.

::: warning Important
You can only see the texture channels when no bones are selected. If you have selected any bones in the **Animation** view, you can deselect them by clicking on the selected bone again.
:::

While no bones are selected, you will see the individual texture layers as options on the left-hand side of the animation section. In our case, we have named the texture layer *"knight eyes closed"* so that we can immediately identify it here. On the right-hand side, you can select a value between `0.00` and `1.00` for the opacity of each texture layer channel. By increasing and decreasing this value in an animation, you can animate the texture of your puppet warp by transitioning between these different channels.

In our case, we increase the opacity of the texture channel from `0.00` to `1.00` in two short bursts and leave the value at `0.00` for the remaining animation. The result is that the eyes appear to be blinking quickly, followed by remaining open for multiple seconds. You can see this example in the following video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_texture_channel_animation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
