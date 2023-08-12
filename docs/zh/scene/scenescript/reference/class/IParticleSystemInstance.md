---
prev: ../../reference.md
---

# SceneScript Class IParticleSystemInstance

Provides access to instance modifiers for particle systems. You can use this to adjust details of a particle system dynamically.

All factors are multiplied with the initializers and operators of your particle system. A factor of `1.0` is the default value at which the particle system remains unchanged.

## Properties

### alpha: Number

Factor to control opacity.

### size: Number

Factor to control size.

### count: Number

Factor to control emission rate.

### speed: Number

Factor to control initial velocity and forces.

### lifetime: Number

Factor to control lifetime.

### rate: Number

Factor to control simulation rate.

### colorn: Number

Modifies the color assigned to particles.

Note that the property name is indeed `colorn` with an `n` at the end. This exists for backward compatibility.

### controlpoint0: Vec3

Position of control point 0.

### controlpoint1: Vec3

Position of control point 1.

### controlpoint2: Vec3

Position of control point 2.

### controlpoint3: Vec3

Position of control point 3.

### controlpoint4: Vec3

Position of control point 4.

### controlpoint5: Vec3

Position of control point 5.

### controlpoint6: Vec3

Position of control point 6.

### controlpoint7: Vec3

Position of control point 7. 