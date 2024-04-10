---
prev: ../introduction.md
---

# Particle Systems - Emitters

The emitter of a particle system determines the way in which new particles are created. Your particle system needs at least one emitter to function.

There are two types of emitters:

* **Sphere Random:** Spawns particles in a circular sphere around the origin of your particle system.
* **Box Random:** Spawns particles in a rectangle around the origin of your particle system.

While different emitter types offer certain unique settings, the vast majority of emitter settings are shared across all emitter types.

### Offset

Defines an offset for each direction at which the particles spawn, relative to the particle system position.

### Directions

Defines the direction in which particles spawn around the origin of your particle system. A value of `1` represents the value of `Distance Max` that you can configure further down.

Setting `Y` to `2` would mean the height of the emitter is double the max distance. Setting it to `0` would mean the emitter has no height, all particles spawn in a straight horizontal line. The same logic applies to `X` in respect to horizontal values and `Z` for depth values (in 3D wallpapers).

### Sign (Sphere Random Emitter)

This setting allows you to force positive or negative values for the spawn location of your particles for the given axis. Valid values are:

* `0`: Default, both positive and negative values are possible.
* `1`: Only positive values are possible.
* `-1`: Only negative values are possible.

For example: By setting `X` to `-1`, all `X` values will be negative, meaning the particles will spawn to the left of the particle system only. See the following visualization with different X / Y combinations in the upper left corner:

<video width="90%" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_system_sign.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Distance Min

The minimum distance at which particles spawn from the center of the particle system.

### Distance Max

The maximum distance at which particles spawn from the center of the particle system. You can further tweak this value by adjusting the multiplier in the `Directions` option above.

### Control point

Allows you to attach the emitter position to a control point. See the [**Control point**](/wallpaper-engine-docs/scene/particles/component/control_point.html) section for more details.

### Rate

The number of particles that spawn per second. The maximum number of particles is defined in the **System** settings of the particle system.

### Duration

The lifetime of the emitter in seconds. The default value of `0` means the emitter will never disappear. A value of `10` means the emitter will stop emitting new particles after 10 seconds but existing particles will continue to exist until they disappear according to their setup.

You can restart the emitter only by restarting the entire particle system via SceneScript. You can invoke the `stop()` and `play()` functions on your particle system via [SceneScript](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystem.html) if needed for your custom needs.

::: warning Please note
In the Wallpaper Engine editor, the particle system will always be visible indefinitely, you can only visualize this when applying and previewing the wallpaper.
:::

### Instantaneous

The number of particles which are created instantly when the particle system is created. Further particles will be spawned according to the configuration of the particle system. Keep the overall maximum number of particles in mind, you can configure this in the **System** settings of the particle system.

### Limit to one per frame

When enabled, the emitter only spawns one particle per frame. This means that the FPS limit configured by the user may have an impact on the number of particles.

### Speed Min

The minimum particle speed in conjunction with a movement **Operator**.

### Speed Max

The maximum particle speed in conjunction with a movement **Operator**.

## Audio response

Setting this to `Center` means that the particle system will be audio responsive to the left and right audio channel at the same time. The emitter will only be active when audio is playing.

### Exponent

Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the emitter.

### Bounds

The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.

### Frequency max

The highest audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the emitter to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).

### Frequency min

The lowest audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the emitter to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).