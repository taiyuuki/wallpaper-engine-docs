---
prev: ../overview.md
---
# Advanced Fluid Simulation Effect

The **Advanced Fluid Simulation** effect can be used to create different types of interactive smoke, fire and liquid simulations. The effect is relatively complex due to its numerous settings that can be tweaked for the desired behavior. See the bottom of this page for some usage samples.

![Advanced Fluid Simulation](/wallpaper-engine-docs/img/effects/Advanced_Fluid_Simulation.gif)

### Effect Settings

Before continuing, it is important to understand that effect allows you to emit matter in three main different ways:

* **Line emitters:** Creates a line in which your matter is emitted into a certain direction.
* **Point emitters:** Creates a point from which your matter is emitted into a certain direction.
* **Dye emitters:** Allows you to paint static points in a color of your choosing from which matter is emitted.

You can add multiple emitters of each type within the same effect. Read the examples towards the bottom of this page to see some examples.
#### Settings Overview

* **Line emitter count:** The number of separate line emitters.
* **Point emitter count:** The number of separate point emitters.
* **Rendering:** The rendering mode, there are four different modes:

1. *Gradient*: Allows to you choose or import a gradient map.
2. *Emitter Color*: Allows you to pick a color for each emitter.
3. *Background Color*: Will use the color of the background for the color of the simulation.
4. *Distortion*: Instead of emitting colored fluid matter, the effect will cause a visual distortion. Often useful in combination with *Perspective* enabled.

* **Blend mode:** The way the effect mixes with the rest of the layer. In most cases, it makes sense to set this value to `Normal` or `Add` but you can experiment with this.
* **Perspective:** When enabled, you can use the four on-screen perspective controls to shift the perspective of the effect. and limit it to certain parts of the layer. Especially useful when using the **Distortion** rendering type.
* **Opaque background:** When enabled, the background layer will become opaque.
* **Collision mask:** Allows you to draw "walls" that the simulation with collide with. See tutorial below for an example.
* **Dye emitter:** Allows you to paint custom emitter locations. These emitters will only be affected by gravity and mouse input and otherwise stay static. **Tip:** You can drag and drop compatible layers into the *dye emitter* and Wallpaper Engine will use them as a map in real time.
* **Brightness:** The brightness of the simulation.
* **Feather:** The speed in which the outline of the simulation fades away.
* **Opacity:** The opacity of the simulation.
* **Curling:** The level of curls in the simulation.
* **Cursor influence:** How much the mouse cursor affects the simulation. Set to 0 to turn this feature off.
* **Pressure:** Increases the bounciness of the simulation. Note: We do not recommend using a value of `1.00` in combination with using gravity.
* **High pass filter:** When the remaining lifetime of the fluid reaches this value, it immediately fades away. Higher values mean that the simulation disappears more quickly.
* **Viscosity:** Higher values slow the simulation speed down.
* **Dissipation:** The speed at which the simulation fades away, higher values result in a shorter lifetime.
* **Saturation:** The saturation of any simulation colors. Lower values can sometimes increase the amount of colors, as large amounts of fluid on one spot will appear white.
* **Gravity Direction:** Direction of gravity, makes the fluid flow in the given direction.
* **Gravity Strength:** Strength of gravity, set to `0.00` to turn gravity off.

#### Script Function Overview

This effect supports the following custom rendering functions that can be called from SceneScript via **executeMaterialFunction**:

* **clearVelocity**: Clear velocity buffers (resets the fluid motion).
* **clearDye**: Clear dye buffers (reset the color buffers of the fluid).

## Advanced Fluid Simulation Effect Samples

### Line Emitter: Ice Vapor Example

In this example, we will showcase the line emitter and make use of the collision mask to create an interactive ice vapor effect as shown in the video below.

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/line_emitter_sample.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

In order to get started, we first add the effect to our image layer. Since we will be working with a single line emitter, we set the **Point emitter count** to `0` and change the **Line emitter count** to `1`. In this case, we change the **Rendering** mode to *Emitter color* since we want to set a simple color for our ice vapor.

#### Positioning the Line Emitter

Once you set the *line emitter count* to `1`, you will find the line emitter on your wallpaper. We now place it on the top of our glass and extend it slightly over the sides. Using the editor controls, we position the angle upwards and slightly to the left so that the emitted vapor appears to be flowing upwards out of the glass towards the ice cubes on our image. By increasing the size of the emitter, we also increase the amount of matter that is emitted.

#### Configuring the Collision Mask

One important aspect of this example is the collision mask. We want our ice vapor to collide with the sides of the glass and the ice cubes on our image. To accomplish this, we can draw a custom collision mask. Click on the **Paint** button next to the *collision mask*. We draw a line on the outline of the glass, then fully paint over the ice cubes.

<video width="100%" controls>
  <source :src="$withBase('/videos/fluid_collision.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

We now further tweak all settings of the effect before continuing. We used the following settings, though we recommend experimenting around with them until you get a better feeling for what each value does:

* **Brightness:** 1.0 - We just leave this at its default.
* **Feather:** 1.0 - We set the *Feather* value to 1.0 since it results in a smooth vapor looking fluid.
* **Opacity:** 0.9 - We reduce the *Opacity* value slightly, this helps to reduce some overly bright parts of the simulation, especially since we also enabled HDR Bloom on our wallpaper.
* **Curling:** 13.0 - We set a medium to low value for the *Curling* value, since this results in a smoke-like simulation.
* **Cursor influence:** 1.00 - We want our simulation to react to the user's mouse cursor.
* **Pressure:** 0.5 - We use a medium value here to make the simulation a bit bouncy - not too little and not too much.
* **High pass filter:** 0.1 - The *high pass filter* should only start removing the simulation towards a very late stage in its lifetime, so we set a very low value. We want our animation to live relatively long because the vapor moves slowly.
* **Viscosity:** 0.5 - We set a very low *Viscosity* since it fits the smoke-like appearance of the ice vapor best.
* **Dissipation:** 0.3 - The *Dissipation* of the simulation is set to a very low value because the simulation moves slowly and needs to live relatively long for the desired outcome.
* **Saturation:** 0.4 - The *Saturation* is set to 0.4 since the simulation would otherwise turn too white as the color tends to overlap and turn overly bright quickly.
* **Gravity direction:** -144 - The **Gravity Direction** points to the lower left corner for us, since we want the vapor to fall towards the direction of the ice cubes on our image.
* **Gravity strength:** 6.00 - The *Gravity Strength is set to a value of *6.00*, this required some trial attempts since we want the vapor too fall slowly without hindering the vapor from first flying upwards over the glass.

The line emitter was given a **dark** blue color, all other values were configured by using the mouse controls in the editor.

::: tip
These type of simulations tend to look even better in combination with [HDR Bloom](/wallpaper-engine-docs/scene/effects/bloom), give it a try!
:::

### Working with Gradient Maps

By default, the effect will use a gradient map for its coloring. You can create your own gradient maps and import them into the editor, we recommend a size of 128x8 pixels. The colors towards the right are the primary colors at the point at which fluids are emitted while the colors towards the left make up the colors used at the outline of the simulation.

Wallpaper Engine comes with several ready-to-use gradient maps that you can utilize for your wallpapers. Simply click on the **Browse** button next to the **Gradient map** option and select one of the gradient maps. Additionally, you can tweak the settings just below the gradient map to change the way colors are rendered. For example, by lowering the value of the **Feather** property, you can increase the intensity of the colors at the outer edges of the simulation.

See the following video for a quick example:

<video width="100%" controls>
  <source :src="$withBase('/videos/fluid_gradients.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### SceneScript: Attaching Emitters to Mouse Cursor & Audio-Responsiveness

As always, you can custom-program behavior into most properties of the simulation with the help of [SceneScript](/wallpaper-engine-docs/scene/scenescript/introduction). In this example, we will showcase how to utilize SceneScript to attach a point emitter to your mouse cursor and how to make it audio-responsive.

#### Attaching Emitter to Mouse Cursor

First, set up a point emitter to your liking. Scroll down to the point emitter settings and next to the **Position** values of the emitter, click on the cogwheel icon and select **Bind SceneScript**. This works best in cases where the effect is applied to a layer that stretches across the full screen, as the cursor position can only determined across the entire canvas:

```js
'use strict';
/**
 * @param {Vec2} value - for property 'emitterPos0'
 * @return {Vec2} - update current property value
 */
export function update(value) {
  value.x = input.cursorWorldPosition.x / engine.canvasSize.x;
  value.y = 1.0 - input.cursorWorldPosition.y / engine.canvasSize.y;
  return value;
}
```

You can see a video of the end result in the next section, though with an additional feature where a mouse click is required to actually emit any fluids.

#### Emitting a Fluid when Mouse is Clicked

In this example, we want to showcase how emitters can be changed by mouse inputs of the user, specifically when the user holds down the mouse button. In this case, we want to only emit matter while the left mouse button is held down. Emitters cannot be disabled on the fly, however, you can simply change their size to a value of `0.00`, which is essentially the same as disabling them.

You can attach the following snippet to the **Size** value of your emitter. Click on the cogwheel icon next to the **Size** value and select **Bind SceneScript**, then copy paste the following code snippet:

```js
'use strict';

const IDLE_SIZE = 0.00;
const CLICK_SIZE = 0.05;

var emitterValue = IDLE_SIZE;

/**
 * @param {Number} value - for property 'emitterSize0'
 * @return {Number} - update current property value
 */
export function update(value) {
	return emitterValue;
}

/**
 * @param {CursorEvent} event
 */
export function cursorDown(event) {
	emitterValue = CLICK_SIZE;
}

/**
 * @param {CursorEvent} event
 */
export function cursorUp(event) {
	emitterValue = IDLE_SIZE;
}
```

You can adjust the `IDLE_SIZE` and `CLICK_SIZE` values at the top of the script to adjust the size when the mouse button is clicked or not. For example, you could adjust the `IDLE_SIZE` value to `0.01` if you always want to have a slight fluid emission even when the mouse button is not held down. We recommend sticking to values below `0.1` as the size values are relatively small.

See the following video for an example of this solution. In the video, the emitter is also attached to the mouse cursor as explained in the previous section of this guide:

<video width="100%" controls>
  <source :src="$withBase('/videos/fluid_onclick.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Enabling Audio-Responsiveness of Emitter

You can also make the emitters audio-responsive through SceneScript. In this example, we will increase the size of the emitter with the beat of music that is being played on the user's system.

To do this, click on the cogwheel icon next to the **Size** property of the emitter and select **Bind SceneScript**. Now navigate to the **Snippets** section at the top and select **Replace Script**, followed by **Audio Factor**. Confirm the script changes by pressing OK.

You will now see new options for the audio-responsiveness below the **Size** option. You can leave the **Audio frequency** at `0` and set the **Audio response** to `15`.

The **Min** property represents the size which the emitter has when no audio is being played. We set this to `0.00` which means the emitter is turned off when no audio is playing.Alternatively you can also try low values like `0.01` if you would like the emitter to always appear with a reduced size. Try to stick to values below `0.01` as the **Size** is very susceptible to larger numbers.

For the **Max** value, you can type in a relatively high number such as `5`, since the value will only be active momentarily while the beat of your music is playing.

The result of this example can be viewed in the following video. Note that the video has no audio but we added an audio visualizer to show you when we start and stopped the background music:

<video width="100%" controls>
  <source :src="$withBase('/videos/fluid_audioresponse.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>