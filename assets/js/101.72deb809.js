(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{462:function(e,t,o){"use strict";o.r(t);var a=o(26),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"limb-animations-with-inverse-kinematics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limb-animations-with-inverse-kinematics"}},[e._v("#")]),e._v(" Limb Animations with Inverse Kinematics")]),e._v(" "),o("p",[e._v("Wallpaper Engine supports inverse kinematics animations for puppet warp models. This approach allows you to define sensible movement ranges for a character's joints and Wallpaper Engine will dynamically animate the movement of entire limbs.")]),e._v(" "),o("p",[e._v("You should have read and understood the "),o("a",{attrs:{href:"/wallpaper-engine-docs/scene/puppet-warp/introduction"}},[e._v("Puppet Warp Introduction Guide")]),e._v(" before attempting this tutorial.")]),e._v(" "),o("h2",{attrs:{id:"basic-introduction-to-inverse-kinematics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-introduction-to-inverse-kinematics"}},[e._v("#")]),e._v(" Basic Introduction to Inverse Kinematics")]),e._v(" "),o("p",[e._v("We generally recommend using "),o("a",{attrs:{href:"/wallpaper-engine-docs/scene/puppet-warp/charactersheet"}},[e._v("character sheets")]),e._v(" when using inverse kinematics for the best visual result. However, you can also use inverse kinematics for simple puppet warp animations. For this introductory guide, we will use a simple stick figure to explain the core idea of inverse kinematics in its most basic form.")]),e._v(" "),o("h3",{attrs:{id:"creating-bones-for-inverse-kinematics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-bones-for-inverse-kinematics"}},[e._v("#")]),e._v(" Creating Bones for Inverse Kinematics")]),e._v(" "),o("p",[e._v("In order to get started with inverse kinematics, start creating the geometry for your puppet warp layer as you would with any ordinary puppet warp animation. The first important part for inverse kinematics comes in the skeleton setup where you need to specify the bones of your model.")]),e._v(" "),o("p",[e._v("In our example, we have a simple stickman figure that we use to showcase a basic inverse kinematics setup. We start by placing the "),o("strong",[e._v("root bone")]),e._v(" in the torso area. We now extend from the torso to the hip joints of our character at the top end of the legs. Make sure that each leg gets an individual bone, this is important because both legs need to be able to move independently. We follow this up by creating a bone at the knees and the feet.")]),e._v(" "),o("p",[e._v("Now repeat this by creating a bone in the upper chest area. Extend from this bone to the left and righter shoulder and extend to the arm joints and hand joints.")]),e._v(" "),o("p",[e._v("Add any additional bones that may be necessary for your character, such as a head bone.")]),e._v(" "),o("h3",{attrs:{id:"enabling-inverse-kinematics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enabling-inverse-kinematics"}},[e._v("#")]),e._v(" Enabling Inverse Kinematics")]),e._v(" "),o("p",[e._v("Inverse kinematics is typically only enabled for the last bone of each respective limb. For example, for an arm, you would select the last hand bone and for a leg, you would select the bone that represents the foot. Select these last bones and click on "),o("strong",[e._v("Edit Constraints")]),e._v(" on the right-hand side. From the "),o("strong",[e._v("Simulation preset")]),e._v(" option, select "),o("strong",[e._v("Inverse kinematics arm / leg")]),e._v(". You may further tweak this by changing the "),o("strong",[e._v("Mode")]),e._v(" option to "),o("strong",[e._v("Advanced")]),e._v(", though in many cases it should be fine to just use the simple version. You can further adjust this at a later time.")]),e._v(" "),o("p",[e._v("Watch the skeleton setup in the following video:")]),e._v(" "),o("video",{attrs:{width:"100%",controls:"",loop:""}},[o("source",{attrs:{src:e.$withBase("/videos/ik_bones.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),o("h3",{attrs:{id:"adjusting-the-forward-position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-forward-position"}},[e._v("#")]),e._v(" Adjusting the Forward Position")]),e._v(" "),o("p",[e._v("After your inverse kinematics limbs have been configured, you need to make some additional tweaks to the inverse kinematics bones, otherwise you may experience unusual movements and flailing of individual limbs.")]),e._v(" "),o("p",[e._v("In the puppet warp skeleton settings, select the inverse kinematics bones of your character and move the "),o("strong",[e._v("Angle")]),e._v(" alignment so that the "),o("strong",[e._v("red arrow faces the direction of the limb")]),e._v(". For example, in our case we turn the angle so that it faces the direction of the hands. Repeat this process for all relevant limbs as shown in the following video:")]),e._v(" "),o("video",{attrs:{width:"100%",controls:"",loop:""}},[o("source",{attrs:{src:e.$withBase("/videos/ik_angle.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),o("h2",{attrs:{id:"basic-inverse-kinematics-animation-sample"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-inverse-kinematics-animation-sample"}},[e._v("#")]),e._v(" Basic Inverse Kinematics Animation Sample")]),e._v(" "),o("p",[e._v("Now that we have finished our basic puppet warp setup, we can create an animation for our character model. Create a new animation and configure a desired animation length. Since we will showcase a looped animation, we also enable the "),o("strong",[e._v("Wrap loop frames")]),e._v(" option. This allows us to create complex animations and Wallpaper Engine will always let all parts of the animation finish where they started for a smooth animation loop.")]),e._v(" "),o("p",[e._v("In our example, we grab the root bone of our character and drag it lower, this will cause our character to animate the legs and arms into a squatting position. We then move the timeline slider to the center of the animation timeline. Again, we do not move the slider to the end because we enabled the "),o("strong",[e._v("Wrap loop frames")]),e._v(" option, so Wallpaper Engine will finish the rest of the animation for us and we do not need to define the end position again. We now move the root bone of our character upwards and this will automatically move all inverse kinematics limbs according to their configuration. You will notice that the legs remain stationary until they are overstretched and only leave the ground once the entire chain of bones is stretched out fully. This results in a realistic jump motion that involves all limbs, you can watch the full process and the end result in this video:")]),e._v(" "),o("video",{attrs:{width:"100%",controls:"",loop:""}},[o("source",{attrs:{src:e.$withBase("/videos/ik_simple_animation.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),o("h3",{attrs:{id:"animations-using-target-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#animations-using-target-controllers"}},[e._v("#")]),e._v(" Animations using Target Controllers")]),e._v(" "),o("p",[e._v("Our previous jumping animation example is a bit oversimplified to quickly showcase the limb movements of inverse kinematics. Generally, you do not animate the bones directly, but rather utilize the "),o("strong",[e._v("target controllers")]),e._v(" that appear in the animation overview.")]),e._v(" "),o("p",[o("strong",[e._v("Target controllers appear as square-shaped")]),e._v(" rather than round points, so you can differentiate them easily. Target controllers affect the position of the entire limb they belong to, they allow you to easily animate an entire limb according to the inverse kinematic configuration for that limb. You can also overstretch the target controller and it will automatically align the limb as if you physically pulled on it.")]),e._v(" "),o("p",[e._v("See a simple example of this in the following video and note how only the square-shaped target controller is animated and not the bones of the arm themselves:")]),e._v(" "),o("video",{attrs:{width:"100%",controls:"",loop:""}},[o("source",{attrs:{src:e.$withBase("/videos/ik_target_controllers.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),o("h3",{attrs:{id:"adjusting-orientation-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-orientation-controllers"}},[e._v("#")]),e._v(" Adjusting Orientation Controllers")]),e._v(" "),o("p",[e._v("You may have noticed that Wallpaper Engine will show you additional points leading to the center of your limbs with inverse kinematics. These so-called orientation controllers decide what direction a limb will twist. You can reposition them to adjust at which point a limb will twist in the corresponding direction. You can do this before starting your animations but you can also move them during the animation itself. Watch the following video to get an idea of how orientation controllers change the behavior of the inverse kinematics animation:")]),e._v(" "),o("video",{attrs:{width:"100%",controls:"",loop:""}},[o("source",{attrs:{src:e.$withBase("/videos/ik_orientation_controller.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")])])}),[],!1,null,null,null);t.default=i.exports}}]);