# 3D Advanced Lighting

While lights can also be used in a 2D context in Wallpaper Engine, certain features are reserved to interactions with 3D models. If you are creating a 2D wallpaper or if you want to get a basic introduction to lights in Wallpaper Engine, see the 2D lighting tutorial:

- [Real-Time Lighting & Reflections](/wallpaper-engine-docs/scene/lighting/introduction)

## 3D Shadow Casting

3D shadows can be configured per model and per light source. Shadows are supported by point lights, spot lights and directional lights.

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_3d_shadows.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

To enable shadows, enable the **Cast shadow** option on each light source which is supposed to cast shadows. By default, all models have shadows enabled, but you can enable or disable shadows in each model by toggling the **Cast shadow** option.

To ensure your wallpaper is as performant as possible, always think twice about enabling shadows on light sources and models. By disabling shadows on objects where they do not have a significant impact, you help to keep system usage low for your users.

## Volumetric Lighting

<video width="100%" controls loop>
  <source :src="$withBase('/videos/light_volumetrics.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Wallpaper Engine allows you to create volumetric lighting in combination with 3D models. To enable it, select your light and make sure the light type is set to **Point light** or **Spot light**. Afterwards, scroll to the bottom of the light settings and enable the **Cast volumetrics** option.

In many cases, volumetric lighting works very well in combination with **Bloom** and **Ultra HDR**. Before tweaking the volumetric lighting visuals, we recommend turning these options on in the **Scene options** tab on the left-hand side, next to the **Layers** tab. For more information, take a look at the **Bloom** Effects Tutorial.

Note that volumetric lighting is very expensive and should only be used sparingly.

- [Bloom Effects](/wallpaper-engine-docs/scene/effects/bloom)