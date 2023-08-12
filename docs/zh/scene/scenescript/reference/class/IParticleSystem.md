---
prev: ../../reference.md
---

# SceneScript Class IParticleSystem

This class provides access to particle systems and lets you modify their playback state.

## Properties

### instance: IParticleSystemInstance

Access to instance modifiers, see [IParticleSystemInstance](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystemInstance) for more information.

## Functions

### play(): void

Resume emission or restart particles if emission has finished.

### pause(): void

Pause emission of new particles.

### stop(): void

Stop emission and clear all existing particles immediately.

### isPlaying(): Boolean

Check if any particles are still being emitted or simulated.

### emitParticles(count: Number?): void

Emit the provided number of particles instantly, disregarding whether the system is stopped or paused.