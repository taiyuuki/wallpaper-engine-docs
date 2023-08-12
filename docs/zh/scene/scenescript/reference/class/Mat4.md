---
prev: ../../reference.md
---

# SceneScript Class Mat4

Mat4 utility class used for creating a 4 dimensional identity matrix which can be used for matrix manipulations.

## Constructors

### constructor(): Mat4

Creates an identity matrix.

## Functions

### translation(position?: Vec2|Vec3): Vec3

If position is specified, it will change the translation vector of the matrix and return nothing. If position is not specified, it will return the current translation vector.