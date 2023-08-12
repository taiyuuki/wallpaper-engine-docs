# Shaders on Mobile Devices

[[toc]]

Custom shaders in Wallpaper Engine need to run on DirectX 11 (HLSL 4.0) and OpenGL ES (GLSL 3.00 ES) to support Windows and mobile platforms. Your custom shader code will automatically be modified before being processed by the compiler to facilitate this, but some advanced functions may not be converted and may completely fail on one platform.

This article focuses on guidelines on how to write code compatible with the mobile version of Wallpaper Engine. You will immediately see DirectX 11 shader compile issues when testing your shaders on your computer - however, compilation issues occurring only on OpenGL ES cannot be seen until the wallpaper is being run on a mobile platform.

::: tip
If a shader cannot be compiled on the mobile version of Wallpaper Engine, the effect that it belongs to will be removed automatically and the wallpaper will continue to work without it.
:::

## Language Compatibility

A number of types and functions have been defined/aliased for both languages to make writing code compatible with both platforms easier. If you make sure to use these aliases instead of the HLSL 4.0 native equivalents, there is a good chance your shader will already work on the mobile version of Wallpaper Engine as is.

Use the name in the **Alias** column to refer to the respective type or respective function in HLSL and GLSL automatically. For example, if you want to declare a vector with three components, use **vec3** and it will work in both languages.

### Types

|Alias|HLSL (DirectX)|GLSL (OpenGL ES) |
|-|-|-|
|**vec2**|float2|vec2|
|**vec3**|float3|vec3|
|**vec4**|float4|vec4|
|**mat2**|float2x2|mat2|
|**mat3**|float3x3|mat3|
|**mat4x3**|float4x3|mat4x3|
|**mat4**|float4x4|mat4|

If you need to convert between types, HLSL uses casting while GLSL requires using a constructor. GLSL also often doesn't allow implicit casts, so you should always use explicit type conversions in order to avoid errors on the mobile version of Wallpaper Engine. Use the following macros to cast or construct types respectively:

|Alias|HLSL (DirectX)|GLSL (OpenGL ES) |
|-|-|-|
|**CAST2()**|(float2)|vec2()|
|**CAST3()**|(float3)|vec3()|
|**CAST4()**|(float4)|vec4()|
|**CAST3X3()**|(float3x3)|mat3()|

### Functions

|Alias|HLSL (DirectX)|GLSL (OpenGL ES) |
|-|-|-|
|**texSample2D()**|sampler.Sample()|texture()|
|**texSample2DLod()**|sampler.SampleLevel()|textureLod()|
|**mul(x, y)**|mul(x, y)|((y) * (x))|
|**frac()**|frac()|fract()|
|**atan2()**|atan2()|atan()|
|**mix()**|lerp()|mix()|
|**mod(x, y)**|((x)-(y)*floor((x)/(y)))|mod(x, y)|
|**fmod(x, y)**|fmod(x, y)|(x-y*trunc(x/y))|
|**ddx()**|ddx()|dFdx()|
|**ddy(x)**|ddy(x)|dFdy(-(x))|
|**saturate(x)**|clamp(x, 0.0, 1.0)|saturate(x)|

::: warning
If you notice anything you need that we are missing here, please get in touch with us [here](https://help.wallpaperengine.io/debug/contact) instead of writing your own substitute intrinsic function or alias.

Should you write your own function, your shader may **stop working in the future** when we add an official alias to the list due to duplicate symbols.
:::

### Constants

Since DirectX 11 allows for implicit casts between types, a lot of existing shader code in wallpapers submitted to the Workshop are incompatible with OpenGL ES due to implicit conversions from integers to floats. For example, `float x = 1;` does not compile in GLSL, it would have to be `float x = 1.0;`. Since it is not possible for us to fix every single Workshop item retroactively, Wallpaper Engine will attempt to find all integer constants in a shader and convert them to floats by appending `.0`.

**This means that you cannot use native integers in your code.** If you really need to use integers and you take care to avoid implicit conversions for GLSL compatibility, you can add the following macro to the top of your file and Wallpaper Engine will not perform this conversion on your shader:

```glsl
#define WEMOBILE_DISABLE_INTEGER_CONVERSION
```

Integers are often not required where you would use them in other languages, like loops, and you can just use floats to make your code easily cross-compatible and avoid forgetting about explicit type conversions.

## Shader Variables

The keywords **attribute**, **varying** and **uniform** are used for their respective purposes. In DirectX 11 these variables are converted into buffers internally while in OpenGL ES **in** and **out** will substitute them as required. More about [Shader Variables](/wallpaper-engine-docs/scene/shader/variables).

## Environment Detection

You can write separate code for either platform by checking for the macros **HLSL** and **GLSL** to be defined, like this (note that **#elif** is not supported and using **#else** may lead to issues if we add other APIs in the future):

```glsl
	#ifdef HLSL
	#endif

	#ifdef GLSL
	#endif
```

## Testing OpenGL ES

An Android device is required to test whether your shader will compile for OpenGL ES and GLSL. While Wallpaper Engine supports OpenGL 3.2 on the desktop internally, it is almost completely useless to verify compatibility on Android devices because available desktop OpenGL drivers are not nearly as strict and cannot be configured to operate under the same rules as OpenGL ES.

If you have an Android phone and you notice that your custom effect does not work, you can extract the compilation error and final code it tried to compile. First enable the option **Write Errors to Log** in the general settings of the mobile app and then open your wallpaper at least once. Now return to the general settings and click on **Save Error Log** to export the error log and investigate the compilation error. Remember to turn off logging once you are done to avoid any penalties during load time due to long shader code being logged.

## Fixing Existing Wallpapers / Effects

If you have released a custom effect in the Workshop before and fixed it for mobile compatibility now, it will not be possible to integrate it into everyone's submitted wallpapers through Steam. You can contact us [here](https://help.wallpaperengine.io/debug/contact) and we can add a fixed version of the effect to the program if you notice that an outdated version of your shader is broken on a lot of wallpapers. In that case we could automatically identify your effect in existing wallpapers and replace it with the new code.

This is only possible for effects that have been submitted to the Workshop before and in situations where you didn't radically alter the effect over time, since we will only ship one version and it will take precedence over any version packed into a wallpaper.
