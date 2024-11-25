(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{495:function(e,t,r){"use strict";r.r(t);var a=r(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"scenescript-class-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scenescript-class-vec2"}},[e._v("#")]),e._v(" SceneScript Class Vec2")]),e._v(" "),r("p",[e._v("Utility class which holds a 2 dimensional value pair: "),r("code",[e._v("x")]),e._v(" and "),r("code",[e._v("y")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"x-number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x-number"}},[e._v("#")]),e._v(" x: Number")]),e._v(" "),r("p",[e._v("Value of first component.")]),e._v(" "),r("h3",{attrs:{id:"y-number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#y-number"}},[e._v("#")]),e._v(" y: Number")]),e._v(" "),r("p",[e._v("Value of second component.")]),e._v(" "),r("h2",{attrs:{id:"constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors"}},[e._v("#")]),e._v(" Constructors")]),e._v(" "),r("h3",{attrs:{id:"constructor-x-number-y-number-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor-x-number-y-number-vec2"}},[e._v("#")]),e._v(" constructor(x: Number, y: Number): Vec2")]),e._v(" "),r("p",[e._v("Constructor that sets x and y respectively.")]),e._v(" "),r("h3",{attrs:{id:"constructor-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor-vec2"}},[e._v("#")]),e._v(" constructor(): Vec2")]),e._v(" "),r("p",[e._v("Empty constructor sets all components to 0.")]),e._v(" "),r("h3",{attrs:{id:"constructor-value-number-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor-value-number-vec2"}},[e._v("#")]),e._v(" constructor(value: Number): Vec2")]),e._v(" "),r("p",[e._v("Sets both x and y members to parameter value.")]),e._v(" "),r("h3",{attrs:{id:"constructor-value-string-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor-value-string-vec2"}},[e._v("#")]),e._v(" constructor(value: String): Vec2")]),e._v(" "),r("p",[e._v("Will parse the first two numbers from the string and set x and y respectively.")]),e._v(" "),r("h3",{attrs:{id:"constructor-value-vec3-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor-value-vec3-vec2"}},[e._v("#")]),e._v(" constructor(value: Vec3): Vec2")]),e._v(" "),r("p",[e._v("Will use x and y from value and set members respectively.")]),e._v(" "),r("h2",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),r("h3",{attrs:{id:"length-number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#length-number"}},[e._v("#")]),e._v(" length(): Number")]),e._v(" "),r("p",[e._v("Returns length of the vector.")]),e._v(" "),r("h3",{attrs:{id:"lengthsqr-number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lengthsqr-number"}},[e._v("#")]),e._v(" lengthSqr(): Number")]),e._v(" "),r("p",[e._v("Returns squared length of the vector. This is more efficient, so if you only need a binary comparison, use this.")]),e._v(" "),r("h3",{attrs:{id:"normalize-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#normalize-vec2"}},[e._v("#")]),e._v(" normalize(): Vec2")]),e._v(" "),r("p",[e._v("Normalizes the vector and returns the result as a new object.")]),e._v(" "),r("h3",{attrs:{id:"copy-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copy-vec2"}},[e._v("#")]),e._v(" copy(): Vec2")]),e._v(" "),r("p",[e._v("Makes a copy.")]),e._v(" "),r("h3",{attrs:{id:"add-value-number-vec2-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-value-number-vec2-vec2"}},[e._v("#")]),e._v(" add(value: Number|Vec2): Vec2")]),e._v(" "),r("p",[e._v("Adds parameter to both components and returns result as a new object.")]),e._v(" "),r("h3",{attrs:{id:"subtract-value-number-vec2-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subtract-value-number-vec2-vec2"}},[e._v("#")]),e._v(" subtract(value: Number|Vec2): Vec2")]),e._v(" "),r("p",[e._v("Subtracts parameter to both components and returns result as a new object.")]),e._v(" "),r("h3",{attrs:{id:"multiply-value-number-vec2-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiply-value-number-vec2-vec2"}},[e._v("#")]),e._v(" multiply(value: Number|Vec2): Vec2")]),e._v(" "),r("p",[e._v("Multiplies both components with parameter and returns result as a new object.")]),e._v(" "),r("h3",{attrs:{id:"divide-value-number-vec2-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#divide-value-number-vec2-vec2"}},[e._v("#")]),e._v(" divide(value: Number|Vec2): Vec2")]),e._v(" "),r("p",[e._v("Divides both components by parameter and returns result as a new object. Does not check for zero division.")]),e._v(" "),r("h3",{attrs:{id:"dot-value-vec2-number"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dot-value-vec2-number"}},[e._v("#")]),e._v(" dot(value: Vec2): Number")]),e._v(" "),r("p",[e._v("Computes dot product with vector value.")]),e._v(" "),r("h3",{attrs:{id:"reflect-normal-vec2-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reflect-normal-vec2-vec2"}},[e._v("#")]),e._v(" reflect(normal: Vec2): Vec2")]),e._v(" "),r("p",[e._v("Returns reflection vector along normal. Make sure that normal is normalized.")]),e._v(" "),r("h3",{attrs:{id:"perpendicular-vec2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#perpendicular-vec2"}},[e._v("#")]),e._v(" perpendicular(): Vec2")]),e._v(" "),r("p",[e._v("Returns perpendicular copy of the vector.")]),e._v(" "),r("h3",{attrs:{id:"tostring-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tostring-string"}},[e._v("#")]),e._v(" toString(): String")]),e._v(" "),r("p",[e._v("Concatenates components with a space in-between so that it can also be parsed again.")])])}),[],!1,null,null,null);t.default=s.exports}}]);