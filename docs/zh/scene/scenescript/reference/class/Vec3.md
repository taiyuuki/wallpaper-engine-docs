---
prev: ../../reference.md
---

# SceneScript Class Vec3

用于创建 3 维键值对的工具类，键值对为`x`, `y` 和 `z`。

## 属性

### x: Number

第一项的值。

### y: Number

第二项的值。

### z: Number

第三项的值。

## Constructors

### constructor(x: Number, y: Number, z: Number): Vec3

分别设置 x， y 和 z 的构造函数。

### constructor(): Vec3

将所有成员设置为 0 的构造函数。

### constructor(value: Number): Vec3

将 x， y 和 z 设置为同一个值的构造函数。

### constructor(x: Number, y: Number): Vec3

设置 x 和 y，而 z 设置为 0 的构造函数。

### constructor(value: String): Vec3

解析字符串中的前三个数字并设置 x， y 和 z 的构造函数。

### constructor(value: Vec2): Vec3

从 Vec2 中设置 x 和 y，而 z 设置为 0 的构造函数。

## 杉树

### length(): Number

返回向量的长度。

### lengthSqr(): Number

返回向量的平方长度。这更高效，如果你只需要进行二进制比较，请使用它。

### normalize(): Vec3

规范化向量并将结果作为新对象返回。

### copy(): Vec3

返回一个副本。

### add(value: Number|Vec3): Vec3

增加参数的数值并将结果作为新对象返回。

### subtract(value: Number|Vec3): Vec3

减去参数的数值并将结果作为新对象返回。

### multiply(value: Number|Vec3): Vec3

将三个分量相乘并将结果作为新对象返回。

### divide(value: Number|Vec3): Vec3

将三个分量相除并将结果作为新对象返回。

### dot(value: Vec3): Number

计算向量的点积。

### reflect(normal: Vec3): Vec3

返回法线向量。

### cross(value: Vec3): Vec3

返回向量的叉乘。

### toString(): String

将成员组合为字符串，用空格分隔，以便可以再次解析。