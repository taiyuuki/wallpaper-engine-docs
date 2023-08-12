---
prev: ../overview.md
---
# Motion Blur Effect

The **Motion Blur** effect accumulates the image over time to create a blurry appearance of movement.

![Blur](/img/effects/Spin.gif)

### Effect Settings

* **Opacity mask:** You can draw this mask to determine what areas of your image the effect is applied to. By default it applies to the complete layer.
* **Accumulation rate:** How fast the image is accumulated, **lower values mean more blur**.

#### Order of Effects

*Motion Blur* can be combined with other effects but keep in mind that the *Motion Blur* effect will only be applied to effects that are listed **above** itself in the effects list. Move the *Motion Blur* effect below any affect that you want it to apply to.

For example, if you have applied a [Spin effect](/scene/effects/effect/spin.html) or [Scroll effect](/scene/effects/effect/scroll.html) to a layer, make sure *Motion Blur* is below these effects in the effects list. You can re-arrange the effects list by simply dragging and dropping effects with your mouse. See the video below to see how the *Motion Blur* effect only starts becoming visible once it is moved below the *Spin* effect:

<video width="100%" controls loop autoplay>
  <source src="/videos/effects_order.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
