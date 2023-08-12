# Shader Headers

[[toc]]

## common.h

This basic header contains some useful utilities and may be included in both fragment and vertex shaders.

### Constants
* **M_PI** 3.14159265359
* **M_PI_HALF** 1.57079632679
* **M_PI_2** 6.28318530718
* **SQRT_2** 1.41421356237
* **SQRT_3** 1.73205080756

### Functions
* **hsv2rgb** (vec3) -> vec3: Converts a HSV color to an RGB color. Both are normalized.
* **rgb2hsv** (vec3) -> vec3: Converts a RGB color to an HSV color. Both are normalized.
* **rotateVec2** (vec2, r) -> vec2: Rotates a directional vector by r radians.
* **greyscale** (vec3) -> float: Converts a color to a greyscale value.

## common_fragment.h

This header contains utilities that may be used in fragment shaders only.

### Functions
* **DecompressNormal** (vec4) -> vec3: Decompresses a normal map that was compiled in DXT5n format. Internally, the alpha channel is being used to increase the precision of the normal vector.
* **DecompressNormalWithMask** (vec4) -> vec4: Decompresses a normal map that was compiled in DXT5n format with a low precision alpha mask. Internally, the alpha channel is being used to increase the precision of the normal vector.
* **ConvertSampleR8** (vec4) -> float: This samples a single channel 8bit texture where the alpha channel is used in Dx9 while the red channel is used in Dx10/11 and OpenGL.
* **ConvertTexture0Format** (vec4) -> vec4: Depending on the format bound to the texture on sampler 0, this will return a greyscale image with alpha channel for RG88 format, a white image with alpha channel for R8 and a fully colored image with alpha channel for RGBA8888 format. Useful if the user is expected to be able to bind any of those formats with priority on the usability of the alpha channel.

## common_vertex.h

This header contains utilities that may be used in vertex shaders only.

### Functions
* **BuildTangentSpace** (vec3 normal, vec4 signedTangent) -> mat3: Builds tangent space matrix from a normal vector and a tangent vector with a sign in w for the direction of the bitangent.
* **BuildTangentSpace** (mat3 modelTransform, vec3 normal, vec4 signedTangent) -> mat3: Builds world space tangent space matrix from a normal vector and a tangent vector with a sign in w for the direction of the bitangent.

## common_blending.h

You can use this header to add a **Blendmode** combo box to your shader.

### Add Required Combo Option
The following combo option must be added for this to work:

```glsl
// [COMBO] {"material":"ui_editor_properties_blend_mode","combo":"BLENDMODE","type":"imageblending","default":0}
```

### Use Blending
Then you will be able to apply blending to a **vec3 colorA** and a **vec3 colorB** variable like this:

```glsl
colorA = ApplyBlending(BLENDMODE, colorA, colorB, blend);
```

* The blend mode **BLENDMODE** is the combo value and must be placed as the first parameter, always. The internal function ignores this parameter, but it had to stick for backward compatibility. This can't be changed because it will not compile anymore if the compiler would have to sort it out.
* The fourth parameter **blend** controls the amount of blending where 0 will not modify **colorA** and 1 will fully apply **colorB** according to the selected blend mode.

