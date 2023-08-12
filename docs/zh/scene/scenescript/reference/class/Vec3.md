---
prev: ../../reference.md
---

# SceneScript Class Vec3

Utility class which holds a 3 dimensional value pair: `x`, `y` and `z`.

## Properties

### x: Number

Value of first component.

### y: Number

Value of second component.

### z: Number

Value of third component. 

## Constructors

### constructor(x: Number, y: Number, z: Number): Vec3

Constructor that sets x, y and z respectively.

### constructor(): Vec3

Empty constructor sets all components to 0.

### constructor(value: Number): Vec3

Sets x, y and z members to parameter value.

### constructor(x: Number, y: Number): Vec3

Constructor that sets x and y respectively and sets z to 0.

### constructor(value: String): Vec3

Will parse the first three numbers from the string and set x, y and z respectively.

### constructor(value: Vec2): Vec3

Will use x and y from value and set z to 0.

## Functions

### length(): Number

Returns length of the vector.

### lengthSqr(): Number

Returns squared length of the vector. This is more efficient, so if you only need a binary comparison, use this.

### normalize(): Vec3

Normalizes the vector and returns the result as a new object.

### copy(): Vec3

Makes a copy.

### add(value: Number|Vec3): Vec3

Adds parameter to all three components and returns result as a new object.

### subtract(value: Number|Vec3): Vec3

Subtracts parameter to all three components and returns result as a new object.

### multiply(value: Number|Vec3): Vec3

Multiplies all three components with parameter and returns result as a new object.

### divide(value: Number|Vec3): Vec3

Divides all three components by parameter and returns result as a new object. Does not check for zero division.

### dot(value: Vec3): Number

Computes dot product with vector value.

### reflect(normal: Vec3): Vec3

Returns reflection vector along normal. Make sure that normal is normalized.

### cross(value: Vec3): Vec3

Returns cross product between this and value as a new object.

### toString(): String

Concatenates components with a space in-between so that it can also be parsed again. 