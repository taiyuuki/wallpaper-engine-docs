---
prev: ../../reference.md
---

# SceneScript Class Mat4

Mat4 工具类，用于创建一个 4 维的单位矩阵，可以用于矩阵操作。

## 构造函数

### constructor(): Mat4

创建一个单位矩阵。

## 函数

### translation(position?: Vec2|Vec3): Vec3

如果指定了 position 参数，它将改变矩阵的变换量且不会返回任何值。如果没有指定 position 参数，它将返回当前的变换量。