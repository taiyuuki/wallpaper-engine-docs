---
prev: ../../reference.md
---

# SceneScript Class Vec2

用于创建 2 维键值对的工具类，键值对为`x` 和 `y`。

## 属性

### x: Number

第一项的值。

### y: Number

第二项的值。

## 构建函数

### constructor(x: Number, y: Number): Vec2

分别设置 x 和 y 的构造函数。

### constructor(): Vec2

将所有成员设置为 0 的构造函数。

### constructor(value: Number): Vec2

将 x 和 y 设置为同一个值的构造函数。

### constructor(value: String): Vec2

解析字符串中的前两个数字并设置 x 和 y的构造函数。

### constructor(value: Vec3): Vec2

从 Vec3 中设置 x 和 y的构造函数。

## 函数

### length(): Number

返回向量的长度。

### lengthSqr(): Number

返回向量的平方长度。这更高效，如果你只需要进行二进制比较，请使用它。

### normalize(): Vec2

规范化向量并将结果作为新对象返回。

### copy(): Vec2

返回一个副本。

### add(value: Number|Vec2): Vec2

增加参数的数值并将结果作为新对象返回。

### subtract(value: Number|Vec2): Vec2

减去参数的数值并将结果作为新对象返回。

### multiply(value: Number|Vec2): Vec2

将两个分量相乘并将结果作为新对象返回。

### divide(value: Number|Vec2): Vec2

将两个分量相除并将结果作为新对象返回。

### dot(value: Vec2): Number

计算向量的点积。

### reflect(normal: Vec2): Vec2

返回法线向量。

### perpendicular(): Vec2

返回垂直向量的副本。

### toString(): String

将成员组合为字符串，用空格分隔，以便可以再次解析。