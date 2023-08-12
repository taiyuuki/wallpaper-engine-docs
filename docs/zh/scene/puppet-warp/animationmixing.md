# Multiple Animations per Puppet

You can apply multiple animations to your puppet warp characters and objects. This offers some advantages over just using one animation, mainly that you can apply different timings on different movements. If you have worked through our [Puppet Warp Introduction Guide](/scene/puppet-warp/introduction), you may have noticed how we animated all body parts within one animation. This can look good in many cases, but you may want your character to move certain body parts less or more frequently than other parts.

For example, you may have a general idle stance for your character and want them to move their arm every 30 seconds. Rather than building one massive animation that contains all these bits and pieces, you can just use multiple smaller animations and Wallpaper Engine will merge them into one for you.

For the samurai model that we have used across our advanced puppet warp tutorials, we created the following 4 animations:

* A general idle animation
* An animation for the cape
* An animation for the head
* An animation for the sword

We have added them all to the same puppet and when turning them on, you can see how they are merged together seamlessly:

<video width="100%" controls>
  <source src="/videos/puppet_warp_multiple_animations.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Let's have a closer look at the sword animation. You can see how we have create an animation that spans across 100 frames and around 4 seconds. We have then only animated the first few frames of the animation and left the rest in their original stance. Next up, we select the animation after adding it to the puppet and reduce the animation rate to around one third of the original speed, making the animation a bit longer than 12 seconds.

<video width="100%" controls>
  <source src="/videos/puppet_warp_multiple_animations_sword.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

We have repeated this process with different animation rates for the cape and the head movement, resulting in the character movement appearing to be much more natural, as it is not repeating in the same manner over and over again in a short amount of time.