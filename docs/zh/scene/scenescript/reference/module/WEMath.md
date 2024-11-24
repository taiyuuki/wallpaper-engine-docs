---
prev: ../../reference.md
---

# WEMath 模块

提供与一般数学函数相关的实用函数的模块。

```js
import * as WEMath from 'WEMath';
```

## 属性

### deg2rad: Number

度数转弧度的转换因子。

### rad2deg: Number

弧度转度数的转换因子。

## 函数

### smoothStep(min: Number, max: Number, value: Number): Number

将值基于最小值和最大值在[0, 1]范围内进行线性插值。用于生成平滑过渡。

### mix(a: Number, b: Number, value: Number): Number

根据值从 a 到 b 进行线性插值。a + (b - a) * value