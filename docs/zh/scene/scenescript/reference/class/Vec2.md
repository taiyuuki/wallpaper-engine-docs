---
prev: ../../reference.md
---

# SceneScript Class Vec2

Utility class which holds a 2 dimensional value pair: `x` and `y`.

## Properties

### x: Number

Value of first component.

### y: Number

Value of second component.

## Constructors

### constructor(x: Number, y: Number): Vec2

Constructor that sets x and y respectively.

### constructor(): Vec2

Empty constructor sets all components to 0.

### constructor(value: Number): Vec2

Sets both x and y members to parameter value.

### constructor(value: String): Vec2

Will parse the first two numbers from the string and set x and y respectively.

### constructor(value: Vec3): Vec2

Will use x and y from value and set members respectively.

## Functions

### length(): Number

Returns length of the vector.

### lengthSqr(): Number

Returns squared length of the vector. This is more efficient, so if you only need a binary comparison, use this.

### normalize(): Vec2

Normalizes the vector and returns the result as a new object.

### copy(): Vec2

Makes a copy.

### add(value: Number|Vec2): Vec2

Adds parameter to both components and returns result as a new object.

### subtract(value: Number|Vec2): Vec2

Subtracts parameter to both components and returns result as a new object.

### multiply(value: Number|Vec2): Vec2

Multiplies both components with parameter and returns result as a new object.

### divide(value: Number|Vec2): Vec2

Divides both components by parameter and returns result as a new object. Does not check for zero division.

### dot(value: Vec2): Number

Computes dot product with vector value.

### reflect(normal: Vec2): Vec2

Returns reflection vector along normal. Make sure that normal is normalized.

### perpendicular(): Vec2

Returns perpendicular copy of the vector.

### toString(): String

Concatenates components with a space in-between so that it can also be parsed again. 