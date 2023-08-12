# Tutorial: Shader Programming Desaturation

## Adding New Effect
Make sure you have enabled the [Asset Creation](/wallpaper-engine-docs/scene/assets/sharing) options in the editor!

* Click on **Add Effect** on the right.
* Click on **New** at the bottom of the dialog.
* Enter a new name for the effect (in this example: *"Desaturate"*) and click OK.

<video width="100%" controls loop autoplay>
  <source src="/videos/shader_new.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Editing the Shader

Click on **Edit** next to the fragment shader to open the shader editor. You will be presented with a default shader that does nothing but can be used as a starting point.

Add a new line of code just before **albedo** is returned to add a basic desaturation function:

```glsl
albedo.rgb = CAST3(dot(vec3(0.11, 0.59, 0.3), albedo.rgb));
```

This code will take the current color of the image, make a *dot product* with a constant vector (the `0.11, 0.59, 0.3` constants are typically used to determine luminosity) and then turn the single resulting float into a vec3 by using the **CAST3** function. The fragment shader should now look like this:

```glsl
uniform sampler2D g_Texture0; // {"material":"framebuffer","label":"ui_editor_properties_framebuffer","hidden":true}

varying vec4 v_TexCoord;

void main() {
	vec4 albedo = texSample2D(g_Texture0, v_TexCoord.xy);
	albedo.rgb = CAST3(dot(vec3(0.11, 0.59, 0.3), albedo.rgb));
	gl_FragColor = albedo;
}
```
You can now click on **OK** on the right and you will already see that the image becomes fully desaturated through this new effect.

## Making the effect configurable

To make the effect a bit more useful, we'll add a slider to control how much the image will be desaturated. This can later also be combined with user properties or SceneScript for additional use-cases. Use the **Snippets** menu to create a new float slider.

Rename the slider variable and change the label, like this:

```glsl
uniform float u_DesaturationAmount; // {"material":"Amount","default":1,"range":[0,1]}
```
Now add the new slider value to the code. Using the GLSL **mix** function we can blend between the original and desaturated color like this:

```glsl
albedo.rgb = mix(albedo.rgb, CAST3(dot(vec3(0.11, 0.59, 0.3), albedo.rgb)),	u_DesaturationAmount);
```

Click on **OK** in the shader editor and you should immediately see the slider appear below the shader edit buttons. Your new effect now has a slider that allows you to tweak the amount of desaturation easily and you can even bind a script or a user property to it.

You can see the steps from this section in the following video, including the finished effect:

<video width="100%" controls loop autoplay>
  <source src="/videos/shader_desaturation_tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>