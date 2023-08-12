# Shader Variables & Constants

[[toc]]

## Shader Combo Options

Combos can be used to create different permutations for the shader by omitting or changing code before it gets compiled. For example, this is useful to define different render paths that don't need to be able to change at runtime. Or to change the number of iterations in loops, which can drastically improve compile time, since any loops should use a fixed number of iterations.

You can declare a combo as a checkbox or as a combo box with an arbitrary number of options to choose from.

### Combo Checkbox
```glsl
// [COMBO] { "material": "My Combo Name", "combo": "USERCOMBOIDENTIFIER", "type": "options", "default": 0 }
```
* **My Combo Name**: Name of the combo shown in the editor.
* **USERCOMBOIDENTIFIER**: This is the directive define symbol name that will be set, i.e. `#define USERCOMBOIDENTIFIER 0` will be set by Wallpaper Engine for you so you can check for `#if USERCOMBOIDENTIFIER == 0`.
* **"default": 0**: Whether the checkbox is checked by default, use 1 to set it checked.

### Combo Combo Box
```glsl
// [COMBO] { "material": "My Combo Name", "combo": "USERCOMBOIDENTIFIER", "type": "options", "default": 0, "options": { "Option A": 0, "Option B": 1 } }
```
* **My Combo Name**: Name of the combo shown in the editor.
* **USERCOMBOIDENTIFIER**: This is the directive define symbol name that will be set, i.e. `#define USERCOMBOIDENTIFIER 0` will be set by Wallpaper Engine for you so you can check for `#if USERCOMBOIDENTIFIER == 0`.
* **"default" : 0**: Which of the options will be selected by default.
* **"options" : {...}**: This is an object that defines all available options. In this example there are two options named **Option A** and **Option B** with the values **0** and **1** respectively. You can change the names and values as you like and add additional options too. The defined symbol will be set to the value that corresponds to the selected option.

## Shader Constants

A number of global variables exist that are predefined by Wallpaper Engine. All you need to do to use them is declare them at the top of the shader. You can use the **Snippets --> Add Constant** menu to declare them easily.

### General
* **g_Time** (`float`): Time the program has been running in seconds.
* **g_Daytime** (`float`): Current time of day where 0 is 0:00 and 1.0 is 23:59 o'clock.
* **g_PointerPosition** (`vec2`): Normalized cursor position in [0, 1] screenspace.
* **g_TexelSize** (`vec2`): X and Y size of a screen pixel i.e. on a 1080p monitor this is (`vec2`)(1/1920, 1/1080).
* **g_TexelSizeHalf** (`vec2`): Half X and Y size of a screen pixel i.e. on a 1080p monitor this is (`vec2`)(0.5/1920, 0.5/1080).
* **g_Alpha** (`float`): Generic alpha multiplier, should only be used for objects that set this value right before drawing, like the base image layer shader.
* **g_Color** (`vec3`): Generic color multiplier, should only be used for objects that set this value right before drawing, like the base image layer shader.


### View
* **g_EyePosition** (`vec3`): Position of camera in worldspace.
* **g_ViewForward** (`vec3`): Normalized forward direction in worldspace.
* **g_ViewRight** (`vec3`): Normalized right direction in worldspace.
* **g_ViewUp** (`vec3`): Normalized up direction in worldspace.
* **g_OrientationForward** (`vec3`): Object orientation forward in worldspace (for particles).
* **g_OrientationRight** (`vec3`): Object orientation right in worldspace (for particles).
* **g_OrientationUp** (`vec3`): Object orientation up in worldspace (for particles).
* **g_ModelMatrix** (`mat4x4`): Current model matrix.
* **g_ModelMatrixInverse** (`mat4x4`): Current inverse of model matrix.
* **g_ViewProjectionMatrix** (`mat4x4`): Premultiplied view projection matrix.
* **g_ModelViewProjectionMatrix** (`mat4x4`): Premultiplied model view projection matrix.
* **g_ModelViewProjectionMatrixInverse** (`mat4x4`): Premultiplied inverse of model view projection matrix.

### Texture
* **g_Texture0Resolution** (`vec4`): Contains information about the texture bound to sampler 0. XY are the physical size in pixels of the texture, while ZW are the ''mapped'' size (for textures padded with black to the next power of two, the mapped size is smaller than the actual size).
* **g_Texture0Rotation** (`vec4`): Current rotation for sampling, only for sprite sheets.
* **g_Texture0Translation** (`vec2`): Current translation for sampling, only for sprite sheets.

These parameters exist for 8 samplers, 0 until 7, just replace the 0 in the middle of each name.

### Audio
* **g_AudioSpectrum16Left[16]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum16Right[16]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum32Left[32]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum32Right[32]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum64Left[64]** (`float array`): Audio samples in positive range (not normalized). Left channel. From low frequencies at 0 to high frequencies until the end of the array.
* **g_AudioSpectrum64Right[64]** (`float array`): Audio samples in positive range (not normalized). Right channel. From low frequencies at 0 to high frequencies until the end of the array.

### Light
* **g_LightAmbientColor** (`vec3`): Constant lighting selected in editor for 3D scenes.
* **g_LightSkylightColor** (`vec3`): Constant lighting selected in editor for 3D scenes.
* **g_LightsColorRadius[4]** (`vec4`): Light data for 4 point lights in the scene, needs to be unpacked like in generic2.frag.
* **g_LightsPosition[4]** (`vec3`): Light positions for 4 point lights in the scene, see generic2.vert.

## Shader Texture Sampling

You can add additional texture sampler to your effect. They can be hidden and linked to internal render targets or default texture, you can make them visible and allow users to import a texture or you can make them paintable and allow users to paint an opacity mask or a flow map in the editor.

### Define New Texture
```glsl
uniform sampler2D g_Texture0; // { "material": "texturekey", "label": "Texture name in editor" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.

### Hidden Texture
Making a texture hidden will prevent the user from changing it.

```glsl
uniform sampler2D g_Texture0; // { "material": "texturekey", "label": "Texture name in editor", "default": "util/noise", "hidden":true }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"default" : "util/noise"**: The default texture to load if the user hasn't specified a different one.
* **"hidden" : true**: Hides the texture in the editor.

To declare a hidden texture, add the option **"hidden"** and set it to **true**. Additionally you want to specify a default texture or render target. In this example the stock noise texture is used.

### Visible Texture
A visible texture can be changed by the user.
```glsl
uniform sampler2D g_Texture0; // {"material": "texturekey", "label": "Texture name in editor", "default": "util/white" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"default" : "util/white"**: The default texture to load if the user hasn't specified a different one.

### Visible Texture With Painting
There are three different paint modes: **opacity**, **rgb** and **flow**
#### Opacity
```glsl
uniform sampler2D g_Texture0; // { "material": "texturekey", "label": "Texture name in editor", "mode": "opacitymask", "combo": "OPACITYMASK", "paintdefaultcolor": "0 0 0 1" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode" : "opacitymask"**: Sets the texture up to be painted in grayscale with a single channel to read from.
* **"combo" : "OPACITYMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.
* **"paintdefaultcolor" : "0 0 0 1"**: Defines what color should be applied when the user begins to paint a new texture.

#### RGB
```glsl
uniform sampler2D g_Texture0; // { "material": "texturekey", "label": "Texture name in editor", "mode": "rgbmask", "combo": "RGBMASK", "paintdefaultcolor": "1 0 0 1" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode" : "rgbmask"**: Sets the texture up to be painted in rgb.
* **"combo" : "RGBMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.
* **"paintdefaultcolor" : "1 0 0 1"**: Defines what color should be applied when the user begins to paint a new texture.

#### Flow Mask
```glsl
uniform sampler2D g_Texture0; // {"material": "texturekey", "label": "Texture name in editor", "mode": "flowmask", "combo": "FLOWMASK" }
```
* **g_Texture0**: The sampler number. Should be a sampler between 0 and 7.
* **"material" : "texturekey"**: A unique key to allow overwriting and identifying the texture easily, just needs to be a unique name.
* **"label" : "Texture name in editor"**: The name for the texture that will be shown in the editor if it's not hidden.
* **"mode" : "flowmask"**: Sets the texture up to be painted with directional information in R and G channels. B is not used.
* **"combo" : "FLOWMASK"**: Defines a combo that will be set to 1 if the user has painted something or selected a texture and set to 0 if no texture is bound.

:::  tip
You can convert the flow color to a direction by performing the following conversion:
```glsl
vec2 flowMask = (flowColors.rg - vec2(0.498, 0.498)) * 2.0;
```
This is necessary because the integer idle flow color is `127, 127`.
:::

## Shader User Variables

You can define uniforms that will show up in the editor as various controls like sliders, a color picker or a UV position picker. This also allows you to bind user properties or scripts to a variable and use that as an input to your shader.

In the Shader editor, you can click on **Snippets** and then **Add Variable** via the menu at the top and choose any of the variables to let the editor automatically insert the required code.

::: tip
Make sure all of your variables begin with the prefix **u_**. This guarantees that no future update will break your shader! We might add global constants in the future and using u_ as a prefix will ensure that there won't be any conflicts!
:::

### Slider
```glsl
uniform float u_userNewSlider; // {"material":"My new slider","default":0,"range":[0,1]}
```
* **u_userNewSlider**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new slider"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":0**: This is the default value for the slider.
* **"range":[0,1]**: This is the minimum and maximum value of the slider.

### Color
```glsl
uniform vec3 u_userNewColor; // {"material":"My new color","type":"color","default":"1 1 1"}
```
* **u_userNewColor**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new color"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":"1 1 1"**: This is the default color, in this case it's white.

### UV Picker
```glsl
uniform vec2 u_userNewPosition; // {"material":"My new position","position":true,"default":"0.5 0.5"}
```
* **u_userNewPosition**: This is the name of the variable. Make sure to rename it to anything that makes sense for you.
* **"material":"My new position"**: You can enter the visible name for the variable here, this is what you will see in the editor.
* **"default":"0.5 0.5"**: This is the default position, in this case it's right in the center.
