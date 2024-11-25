(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{439:function(e,t,a){"use strict";a.r(t);var s=a(26),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"particle-systems-emitters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#particle-systems-emitters"}},[e._v("#")]),e._v(" Particle Systems - Emitters")]),e._v(" "),a("p",[e._v("The emitter of a particle system determines the way in which new particles are created. Your particle system needs at least one emitter to function.")]),e._v(" "),a("p",[e._v("There are two types of emitters:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Sphere Random:")]),e._v(" Spawns particles in a circular sphere around the origin of your particle system.")]),e._v(" "),a("li",[a("strong",[e._v("Box Random:")]),e._v(" Spawns particles in a rectangle around the origin of your particle system.")])]),e._v(" "),a("p",[e._v("While different emitter types offer certain unique settings, the vast majority of emitter settings are shared across all emitter types.")]),e._v(" "),a("h3",{attrs:{id:"offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[e._v("#")]),e._v(" Offset")]),e._v(" "),a("p",[e._v("Defines an offset for each direction at which the particles spawn, relative to the particle system position.")]),e._v(" "),a("h3",{attrs:{id:"directions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directions"}},[e._v("#")]),e._v(" Directions")]),e._v(" "),a("p",[e._v("Defines the direction in which particles spawn around the origin of your particle system. A value of "),a("code",[e._v("1")]),e._v(" represents the value of "),a("code",[e._v("Distance Max")]),e._v(" that you can configure further down.")]),e._v(" "),a("p",[e._v("Setting "),a("code",[e._v("Y")]),e._v(" to "),a("code",[e._v("2")]),e._v(" would mean the height of the emitter is double the max distance. Setting it to "),a("code",[e._v("0")]),e._v(" would mean the emitter has no height, all particles spawn in a straight horizontal line. The same logic applies to "),a("code",[e._v("X")]),e._v(" in respect to horizontal values and "),a("code",[e._v("Z")]),e._v(" for depth values (in 3D wallpapers).")]),e._v(" "),a("h3",{attrs:{id:"sign-sphere-random-emitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-sphere-random-emitter"}},[e._v("#")]),e._v(" Sign (Sphere Random Emitter)")]),e._v(" "),a("p",[e._v("This setting allows you to force positive or negative values for the spawn location of your particles for the given axis. Valid values are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("0")]),e._v(": Default, both positive and negative values are possible.")]),e._v(" "),a("li",[a("code",[e._v("1")]),e._v(": Only positive values are possible.")]),e._v(" "),a("li",[a("code",[e._v("-1")]),e._v(": Only negative values are possible.")])]),e._v(" "),a("p",[e._v("For example: By setting "),a("code",[e._v("X")]),e._v(" to "),a("code",[e._v("-1")]),e._v(", all "),a("code",[e._v("X")]),e._v(" values will be negative, meaning the particles will spawn to the left of the particle system only. See the following visualization with different X / Y combinations in the upper left corner:")]),e._v(" "),a("video",{staticStyle:{margin:"0 auto",display:"block"},attrs:{width:"90%",controls:"",loop:"",autoplay:""}},[a("source",{attrs:{src:e.$withBase("/videos/particle_system_sign.mp4"),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),a("h3",{attrs:{id:"distance-min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distance-min"}},[e._v("#")]),e._v(" Distance Min")]),e._v(" "),a("p",[e._v("The minimum distance at which particles spawn from the center of the particle system.")]),e._v(" "),a("h3",{attrs:{id:"distance-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distance-max"}},[e._v("#")]),e._v(" Distance Max")]),e._v(" "),a("p",[e._v("The maximum distance at which particles spawn from the center of the particle system. You can further tweak this value by adjusting the multiplier in the "),a("code",[e._v("Directions")]),e._v(" option above.")]),e._v(" "),a("h3",{attrs:{id:"control-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-point"}},[e._v("#")]),e._v(" Control point")]),e._v(" "),a("p",[e._v("Allows you to attach the emitter position to a control point. See the "),a("RouterLink",{attrs:{to:"/wallpaper-engine-docs/scene/particles/component/control_point.html"}},[a("strong",[e._v("Control point")])]),e._v(" section for more details.")],1),e._v(" "),a("h3",{attrs:{id:"rate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rate"}},[e._v("#")]),e._v(" Rate")]),e._v(" "),a("p",[e._v("The number of particles that spawn per second. The maximum number of particles is defined in the "),a("strong",[e._v("System")]),e._v(" settings of the particle system.")]),e._v(" "),a("h3",{attrs:{id:"duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[e._v("#")]),e._v(" Duration")]),e._v(" "),a("p",[e._v("The lifetime of the emitter in seconds. The default value of "),a("code",[e._v("0")]),e._v(" means the emitter will never disappear. A value of "),a("code",[e._v("10")]),e._v(" means the emitter will stop emitting new particles after 10 seconds but existing particles will continue to exist until they disappear according to their setup.")]),e._v(" "),a("p",[e._v("You can restart the emitter only by restarting the entire particle system via SceneScript. You can invoke the "),a("code",[e._v("stop()")]),e._v(" and "),a("code",[e._v("play()")]),e._v(" functions on your particle system via "),a("RouterLink",{attrs:{to:"/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystem.html"}},[e._v("SceneScript")]),e._v(" if needed for your custom needs.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Please note")]),e._v(" "),a("p",[e._v("In the Wallpaper Engine editor, the particle system will always be visible indefinitely, you can only visualize this when applying and previewing the wallpaper.")])]),e._v(" "),a("h3",{attrs:{id:"instantaneous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantaneous"}},[e._v("#")]),e._v(" Instantaneous")]),e._v(" "),a("p",[e._v("The number of particles which are created instantly when the particle system is created. Further particles will be spawned according to the configuration of the particle system. Keep the overall maximum number of particles in mind, you can configure this in the "),a("strong",[e._v("System")]),e._v(" settings of the particle system.")]),e._v(" "),a("h3",{attrs:{id:"limit-to-one-per-frame"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-to-one-per-frame"}},[e._v("#")]),e._v(" Limit to one per frame")]),e._v(" "),a("p",[e._v("When enabled, the emitter only spawns one particle per frame. This means that the FPS limit configured by the user may have an impact on the number of particles.")]),e._v(" "),a("h3",{attrs:{id:"speed-min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-min"}},[e._v("#")]),e._v(" Speed Min")]),e._v(" "),a("p",[e._v("The minimum particle speed in conjunction with a movement "),a("strong",[e._v("Operator")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"speed-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-max"}},[e._v("#")]),e._v(" Speed Max")]),e._v(" "),a("p",[e._v("The maximum particle speed in conjunction with a movement "),a("strong",[e._v("Operator")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"audio-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio-response"}},[e._v("#")]),e._v(" Audio response")]),e._v(" "),a("p",[e._v("Setting this to "),a("code",[e._v("Center")]),e._v(" means that the particle system will be audio responsive to the left and right audio channel at the same time. The emitter will only be active when audio is playing.")]),e._v(" "),a("h3",{attrs:{id:"exponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exponent"}},[e._v("#")]),e._v(" Exponent")]),e._v(" "),a("p",[e._v("Exponential power of the audio response to bias the response towards lower or higher values. By increasing this value, you will reduce how strongly low audio volume will affect the emitter.")]),e._v(" "),a("h3",{attrs:{id:"bounds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bounds"}},[e._v("#")]),e._v(" Bounds")]),e._v(" "),a("p",[e._v("The bounds control at what points the audio response starts and stops. If the audio bounds are configured to be 0 and 1, then the audio effect will slowly fade. A more sudden effect can be achieved by making the bounds more narrow. For example, if you set the audio bounds to 0.8 and 1, the audio responsiveness will only take effect for volume levels between 0.8 and 1 which makes the audio effect more sudden and limits it to the upper range of volume levels.")]),e._v(" "),a("h3",{attrs:{id:"frequency-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequency-max"}},[e._v("#")]),e._v(" Frequency max")]),e._v(" "),a("p",[e._v("The highest audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 1 if you want the emitter to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).")]),e._v(" "),a("h3",{attrs:{id:"frequency-min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequency-min"}},[e._v("#")]),e._v(" Frequency min")]),e._v(" "),a("p",[e._v("The lowest audio frequency that the effect reacts to. The values go from 0 to 15, where 0 is bass sounds and 15 higher frequency treble sounds. For example, set this to 0 if you want the emitter to only react to the beat of music being played (as the beat is usually reflected by lower bass frequencies).")])])}),[],!1,null,null,null);t.default=i.exports}}]);