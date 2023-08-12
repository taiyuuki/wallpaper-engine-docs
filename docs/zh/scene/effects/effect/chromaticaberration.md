---
prev: ../overview.md
---
# Chromatic Aberration Effect

The **Chromatic Aberration** effect creates a multi-colored outlined similar to artifacts you might find on photographs. The effect itself is static but you can utilize [SceneScript](/wallpaper-engine-docs/scene/scenescript/introduction) to create animations for it.

![Blur](/wallpaper-engine-docs/img/effects/Chromatic_Aberration.gif)

### Effect Settings

* **Mode:** Change the overall mode of the chromatic aberration effect:
* *Expansion:* Will apply the effect from a certain center point. You can determine the center point below.
* *Directional:* Will apply the effect into a certain direction, you can determine the direction below.
* *Radial:* Will apply the effect in a circular manner around a given point.
* *Barrel:* Will apply the effect in a rounded rectangle around the entire layer.
* **Chroma:** The color pair used for the chromatic aberration artifacts.
* **Opacity mask:** Allows you to draw a mask to reduce or entirely disable the effect in parts of your image.
* **Strength:** The strength of the effect, this option is best coupled with SceneScript to animate this effect. See more information below.

## Animated Chromatic Aberration

The *Chromatic Aberration* effect itself is static but you can animate it with the help of SceneScript. We recommend using the **Strength** property for this, though other properties may also be used.

To get started, scroll to the **Strength** property of the effect and click on the cogwheel icon next to it. Then select **Bind SceneScript**. Wallpaper Engine comes with multiple sample code snippets here that you can access. Click on **Snippets** at the top of the code window, then select **Replace Script**. Select one of the two relevant scripts and confirm with **OK**:

* **Flicker**: Will permanently increase and lower the intensity of the effect in an erratic way. New settings will appear once you add this snippet, allowing you to further tweak this.
* **Audio Factor**: Will make the effect audio responsive. Try setting the **Min** value to `0.0` to disable the effect when no audio is being played and set the **Max** value to `3.0` to have a strong effect when the beat of music is playing. You may tweak these values to your liking.

Do note that the SceneScript logic is only executed in the editor when you click the **Run Preview** button at the top of the editor. Of course you can also custom-program your own logic here, these two sample snippets are just for convenience.