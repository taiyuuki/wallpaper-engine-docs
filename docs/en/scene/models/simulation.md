# Physics Simulations

Aside from only relying on animations, you can also add physics simulations to the bones of your model. Wallpaper Engine provides a set of presets that you can use to quickly and easily achieve this. See the following example, where each tail bone was provided with a simple **Bouncy position** simulation preset with varying levels of responsiveness.

<video width="100%" controls loop>
  <source :src="$withBase('/videos/model_physics.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

To get started, select your model and click on **Configure model**. Navigate to the **Constraints** tab at the top. You can now select the bones that you want to animate from the list or by clicking on them in the model preview on the right.

In the case of our dog model, we want each of the three tail bones to move along with the movement of the character but return to their initial position once the movement of the model has stopped. For this purpose, the **Bouncy position** preset is perfectly suited, as it will do exactly that. We add this preset to all the tail bones and adjust the **Responsiveness** as needed.

If you have a different use-case, be sure to try all the different presets. You can turn the model in the preview by holding the mouse button to see how the simulated bones behave. You can also play animations below the simulation options to see how the simulation and animations mix.

For advanced simulation setups, you can switch to **Advanced** mode to create your own fine-tuned simulations.

::: tip TIP
Bones which have an active simulation are highlighted in blue in the model preview on the right, so you can easily identify which bones have simulated movements.
:::