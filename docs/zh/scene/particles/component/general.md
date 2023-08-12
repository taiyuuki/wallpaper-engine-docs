---
prev: ../introduction.md
---

# Particle Systems - General

The **General** component of a particle system defines how the particle is rendered to the screen and which texture is used. It consists of three sections:

[[toc]]

## Material Settings

### Refract

When enabled, you can add an additional normal map which Wallpaper Engine uses to add a refraction effect to your particles.

This refract particle stays in place and is animated with *Particle Operator Size Change* and *Particle Operator Alpha Fade*. The material is set to translucent blending using the white image for the albedo texture. 

### Textures

#### Albedo Texture

The main texture used by this particle system. You can also import a sprite sheet to create animated textures or spawn particles with individual textures. Be sure to read our [Particle System Sprite Sheet Tutorial](/en/scene/particles/tutorial/spritesheet.html) if you want to learn more about how to utilize sprite sheets in your particle systems.

#### Normal Map Texture

**Optional.** This texture is only visible when you enable the **Refract** option. You can import a normal map here which Wallpaper Engine will use for a refraction effect.

### Shader Settings

#### Overbright

Allows you to adjust the brightness of your particle system. If you intend to raise the brightness, try enabling the [Bloom Effect](/en/scene/effects/bloom.html) on your wallpaper instead, especially *HDR Bloom* can achieve higher quality results than increasing the *Overbright* value.

#### Refract Amount

**Optional.** This option is only visible when you enable the **Refract** option. Controls the strength of the refraction effect.

### Rendering Settings

#### Blending

Depending on what type of content your particle system holds, choosing the correct blend mode is important. You can choose between **Additive**, **Translucent** and **Normal** blending.

::: details Click here to compare the three blend modes

<video width="100%" controls loop>
  <source src="/videos/particle_system_blending.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

## System Settings

### Max Count

Controls the maximum number of particles allowed to be spawned. This directly controls how much memory is allocated by the particles. Always set this value as low as necessary for your particle system to function, this can greatly increase performance and reduce memory usage.

### Start Time

Will pre-simulate the particle system for a certain amount of time when it is created. This is helpful to avoid the screen from looking empty, it will kick off the system as if it has already been running for the configured time. The higher this number is, the longer it will take to simulate, since it is based on real-time simulation.

### Worldspace

If this is enabled, the particles will ignore the position, scale and rotation of the particle system after they have been created. This can be useful if you want to attach a particle to another or something else - the particles that were spawned are not going to be dragged along with the object they were created from.

## Viewport Settings

**The viewport settings are only relevant for the preview screen that you see in the particle system editor.**

### Show Stats

Shows the number of particles in the upper right corner. Useful to determine the upper limit for the **Max Count** setting in the **System Settings** of your particle system.

### Show Axis

Renders a horizontal and vertical line in the preview screen to help you navigate the particle preview.

### Color

Allows you to change the color of the preview screen to test your particles on different backgrounds.