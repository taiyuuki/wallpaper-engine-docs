---
prev: ../../reference.md
---

# SceneScript Module WEColor

Module which provides utility functions related to color manipulation.

```js
import * as WEColor from 'WEColor';
```

## Functions

### rgb2hsv(rgb: Vec3): Vec3

Converts a normalized RGB vector into a normalized HSV vector.

### hsv2rgb(hsv: Vec3): Vec3

Converts a normalized HSV vector into a normalized RGB vector.

### normalizeColor(rgb: Vec3): Vec3

Normalizes a color from range [0, 255] to [0, 1].

### expandColor(rgb: Vec3): Vec3

Expands a color from range [0, 1] to [0, 255]. 