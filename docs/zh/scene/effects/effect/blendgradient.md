---
prev: ../overview.md
---
# Blend Gradient Effect

The **Blend Gradient** effect allows you to blend two images into one another using a *gradient mask*.

Create blend animations it with **SceneScript** or a **Timeline Animation** by modifying the **Blend amount** value from `0.00` until `1.00` over time.

![Blend](/img/effects/Blend_Gradient.gif)

### Effect Settings

* **Blend mode:** This determines how the images will be blended together.
* **Edge Glow:** When enabled, a colored outline is added to the blend animation. You can choose the **Edge color** and **Edge brightness** down in the settings.
* **Transform:** When enabled, allows you to transform the gradient map by changing its angle, scale and offset down below in the settings.
* **Write alpha:** When enabled, allows you to modify the transparency by modifying the *Alpha* value down below in the settings.
* **Blend texture:** The texture that you want to blend to when the **Blend amount** value reaches `1.00`.
* **Gradient mask:** The mask used for the blend animation. Darker areas will reveal the blend texture first.
* **Opacity mask:** Allows you to draw a mask to conditionally enable, disable or lower the intensity of the effect.
* **Gradient scale:** Allows you to smoothen the gradient by increasing the scale of the effect.
* **Blend amount:** The blend amount value is crucial for the effect. Modify it with **SceneScript** or a **Timeline Animation** to create a blend animation. Use values from `0.00` until `1.00`.

::: tip
You can drag and drop an image layer into the **Blend texture** to dynamically use another image layer as a blend texture.
:::