---
prev: ../introduction.md
---

# Particle Systems - Renderers

Your particle system needs at least one renderer to function. There are four different types of renderers available:

[[toc]]

The following video shows how all four renderers behave when particles move in a fast vortex. Keep in mind that this is simply a showcase example, each renderer caters to specific use-cases.

<video width="auto" style="margin:0 auto;display:block;" controls loop autoplay>
  <source src="/videos/particle_system_renderer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Sprite Renderer

This is the **default** renderer that is relevant in most cases. It simply renders your particles to your screen with the configured orientation.

## Sprite Trail Renderer

This renderer will stretch your particles depending on their velocity.

* **Length:** The length is multiplied with speed and determines the ideal length of the particle.
* **Max Length:** The maximum length a particle can reach at very high velocities.

## Rope Renderer

This renderer draws a line between each particle that is spawned.

* **Subdivision:** The number of subdivisions in each line. Higher numbers makes corners smoother at the cost of system performance.

## Rope Trail Renderer

This renderer draws a line along the path of each particle. It is relatively expensive but allows you to draw smooth lines along your particles, which may be useful in complex movement scenarios such as the vortex example in the video above.