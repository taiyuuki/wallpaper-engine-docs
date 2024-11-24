---
prev: ../../reference.md
---

# WEColor 模块

提供与颜色操作相关的实用函数。

```js
import * as WEColor from 'WEColor';
```

## 函数

### rgb2hsv(rgb: Vec3): Vec3

将一个标准化的RGB向量转换为标准化的HSV向量。

### hsv2rgb(hsv: Vec3): Vec3

将一个标准化的HSV向量转换为标准化的RGB向量。

### normalizeColor(rgb: Vec3): Vec3

将一个颜色从范围[0, 255]标准化到[0, 1]。

### expandColor(rgb: Vec3): Vec3

将一个颜色从范围[0, 1]扩展到[0, 255]。