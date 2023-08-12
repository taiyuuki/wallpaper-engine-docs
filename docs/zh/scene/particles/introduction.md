# Particle Systems Introduction

Wallpaper Engine features a **particle systems editor** that allows you to create complex and even interactive particle systems and fine-tune them to your liking.

Particle systems consist of a large number of small images to build certain effects like fire, rain or moving objects like fallen leaves. You can control the image rendered on the sprites, how they are created and how they move. You can even interact with them using your mouse and they can also be made audio-responsive.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/particle_system_editor.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Wallpaper Engine allows you to build upon existing particle systems that come pre-installed in the editor or start completely new particle systems from the ground up. In this documentation, we explain how particle systems are built and which components make up a particle system, we will show-case this with a few examples.

## Particle Systems Components

Each particle system consists of different components that control certain characteristics of your wallpaper. Especially if you are just starting out with particle systems, it may make sense to open the documentation while configuring your particle system so that you know what each setting does.

| Component            | Description   |
|----------------------|---------------|
| [General](/wallpaper-engine-docs/scene/particles/component/general) | Defines how the particle is rendered to the screen, which texture is used and how many particles are spawning. |
| [Renderers](/wallpaper-engine-docs/scene/particles/component/renderer) | Let's you define special renderers for your particles. For example, you may choose a special renderer which stretches your particles depending on their velocity. |
| [Emitters](/wallpaper-engine-docs/scene/particles/component/emitters) | Defines how new particles are created. |
| [Initializers](/wallpaper-engine-docs/scene/particles/component/initializer) | Defines properties of your particles at the time of your creation, for example their size, speed and color. |
| [Operators](/wallpaper-engine-docs/scene/particles/component/operator) | Operators apply changes to properties of particles over time. Uses the **Initializer** values as a starting point. |
| [Child Particle Systems](/wallpaper-engine-docs/scene/particles/component/children) | Child particle systems are completely separate particle systems that are attached to your current particle system. You can spawn these at different times. **Optional.** |
| [Control Points](/wallpaper-engine-docs/scene/particles/component/control_point) | Control points are special points in the particle system or your wallpaper that you can interact with, including your mouse cursor. **Optional.** |