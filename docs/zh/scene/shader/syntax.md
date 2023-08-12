# Shader Syntax Overview

[[toc]]

## Preprocessor

Wallpaper Engine uses a custom preprocessor to cull unused code and introspect a shader before compilation. The preprocessor is not a fullfledged C preprocessor and is lacking, for example, string conversion and concatenation. Conditionals should however work with boolean and logic operators, except for #elif, which isn't supported.

#### The following define directives are applied based on context
* **GLSL**: Shader is being compiled as GLSL.
* **HLSL**: Shader is being compiled as HLSL.
* **HLSL_SM40**: Shader is being compiled for shader model 4.
* **HLSL_GS40**: Current renderer supports shader model 4 geometry shaders.

#### The following directives make it easier to write a shader that supports GLSL and HLSL
* **texSample2D** (sampler, vec2 uvs) -> vec4: Sample a simple 2D texture. First parameter is a sampler constant and the second parameter a vec2 texture coordinate.
* **texSample2DLod** (sampler, vec2 uvs, float lod) -> vec4: Sample a simple 2D texture. First parameter is a sampler constant, the second parameter a vec2 texture coordinate and the third parameter a float to designate which mip maps get sampled.
* **mix**: Mix is the GLSL name for lerp in HLSL and accepted for both in Wallpaper Engine. So you should use **mix** to make the shader fully compatible.
* **frac**: frac is the HLSL name for fract in GLSL. So you should use **frac** to make the shader fully compatible.
* **saturate**: saturate is the HLSL name for clamp(x, 0, 1) in GLSL.
* **atan2**: atan2 is the HLSL name for atan in GLSL. So you should use **atan2** to make the shader fully compatible.
* **ddx**: ddx is the HLSL name for dFdx in GLSL. So you should use **ddx** to make the shader fully compatible.
* **ddy**: ddy is the HLSL name for dFdy in GLSL. So you should use **ddy** to make the shader fully compatible.

## Type Casting

Since shaders are translated into HLSL, it is recommended to use the following casting macros for construction and casting. For example, when you want to cast a 4x4 matrix into 3x3 or when you want to create a vec3 from a single float.

* **CAST2()**: This will call vec2(x) in GLSL and do (float2)x in HLSL.
* **CAST3()**: This will call vec3(x) in GLSL and do (float3)x in HLSL.
* **CAST4()**: This will call vec4(x) in GLSL and do (float4)x in HLSL.
* **CAST3X3()**: This will call mat3(x) in GLSL and do (float3x3)x in HLSL.

## Shader Inputs and Outputs

Wallpaper Engine currently uses the old GLSL syntax based on **attribute**, **varying**, **uniform** and globals like **gl_FragColor**.

* An **attribute** is a hardcoded parameter that is provided by Wallpaper Engine per vertex.
* A varying can be freely defined by you. This is what the vertex shader outputs to the pixel shader and will be linearly interpolated between adjacent vertices of a primitive.
* Final global outputs like **gl_FragColor** are forwarded to the next stage to be immediately used for displaying the result of your shader.

### Vertex Shader
Vertex shaders for image/text layers currently only support the attributes **a_Position** and **a_TexCoord**.

#### Input Attributes
* **a_Position** (`vec3`): The position in object space.
* **a_PositionVec4** (`vec4`)
* **a_Normal** (`vec3`): The normal in object space.
* **a_Tangent4** (`vec4`): The tangent in object space with bitangent sign in w.
* **a_TexCoord** (`vec2`): The basic texture coordinates.
* **a_TexCoordVec3** (`vec3`)
* **a_TexCoordVec4** (`vec4`)
* **a_TexCoordC1** (`vec2`)
* **a_TexCoordVec3C1** (`vec3`)
* **a_TexCoordVec4C1** (`vec4`)
* **a_TexCoordC2** (`vec2`)
* **a_TexCoordVec3C2** (`vec3`)
* **a_TexCoordVec4C2** (`vec4`)
* **a_TexCoordC3** (`vec2`)
* **a_TexCoordVec3C3** (`vec3`)
* **a_TexCoordVec4C3** (`vec4`)
* **a_TexCoordC4** (`vec2`)
* **a_TexCoordVec3C4** (`vec3`)
* **a_TexCoordVec4C4** (`vec4`)
* **a_TexCoordC5** (`vec2`)
* **a_TexCoordVec3C5** (`vec3`)
* **a_TexCoordVec4C5** (`vec4`)
* **a_Color** (`vec4`)

### Fragment Shader

#### Outputs
* **gl_FragColor** (`vec4`): The final output color for a given pixel.