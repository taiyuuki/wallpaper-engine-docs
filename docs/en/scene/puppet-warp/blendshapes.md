# Shape Animations

Puppet warp animations also allow you to alter the actual shapes of your puppet. This can be used to create detailed facial animations and other types of animations where you want to make detailed adjustments to the texture itself.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

You should have read and understood the [Puppet Warp Introduction Guide](/scene/puppet-warp/introduction) before attempting this tutorial.

## Creating the Blend Shape

The overall idea of blend shapes is that you define an alternate arrangement of the geometry that you can transition to in your animation. For example, you could adjust the geometry of the face of a character so that the eyes appear closed.

To get started, navigate to the **Geometry** settings of your puppet warp. You first need to click on the **Lock Geometry for Vertex Editing** button if you have not done so already, since blend shapes would break if you made further edits to the geometry. Use the **Edit Topology** button to fine-tune the automatically generated geometry if needed.

In the **Edit Blend Shapes** section, click on the **Add** button to create a new blend shape. Each point in the geometry will now become moveable, adjust all the points that are relevant to your shape animation to their final position. In the following video, we exemplify this by moving the geometry above the eye downwards, making the eye appear closed:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_setup.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Creating an Expression

In the next step, you need to create an **Expression**. Expressions are a collection of multiple blend shapes. If you only have one blend shape, simply set it to a value of `1.0`. If you have multiple blend shapes, mix them together in a way that you want to control them later during a specific animation. You can also set intermittent values such as 0.5, if you want a certain blend shape only to appear partially during an expression.

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_expression.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Animating the Expression

In the final step, go to an existing animation or create a new animation for your puppet. While having no bones selected in the animation view, you can create a timeline animation for the expression like with any other property. In the following video, we will showcase this with our knight facial animation:

<video width="100%" controls>
  <source :src="$withBase('/videos/puppet_warp_blend_shapes_animation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
