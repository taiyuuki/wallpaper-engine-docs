---
prev: ../../reference.md
---

# SceneScript Module WEMath

Module which provides utility functions related to general mathematical functions.

```js
import * as WEMath from 'WEMath';
```

## Properties

### deg2rad: Number

Factor to convert degrees to radians.

### rad2deg: Number

Factor to convert radians to degrees.

## Functions

### smoothStep(min: Number, max: Number, value: Number): Number

Remaps value based on min and max into [0, 1] range. Useful for generating smooth transitions.

### mix(a: Number, b: Number, value: Number): Number

Interpolates from a to b based on value. a + (b - a) * value 