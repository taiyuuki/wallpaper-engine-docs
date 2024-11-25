(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{713:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"audio-visualization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio-visualization"}},[t._v("#")]),t._v(" Audio Visualization")]),t._v(" "),s("p",[t._v("Wallpaper Engine allows you to process audio volume levels for the left and right audio channel and use that to visualize audio that is being played on the user's system. Each channel splits the audio frequencies into 64 parts. Each part represents a frequency range for the audio: Low frequencies represent bass while high frequencies represent treble sound ranges.")]),t._v(" "),s("p",[t._v("Utilizing these volume levels allows you to build various types of audio visualization, from full-on bar audio visualizers, to making certain elements on your wallpaper react to the beat of music (by only looking at low frequency ranges, as they usually represent the beat of audio being played).")]),t._v(" "),s("h2",{attrs:{id:"creating-an-audio-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-audio-listener"}},[t._v("#")]),t._v(" Creating an audio listener")]),t._v(" "),s("p",[t._v("In order to get started with an audio visualizer, you have to register a listener function in JavaScript that will supply the audio volume levels to you. Wallpaper Engine provides the "),s("code",[t._v("window.wallpaperRegisterAudioListener")]),t._v(" function for this purpose, it expects a callback function that you also need to create.")]),t._v(" "),s("p",[t._v("You should call the "),s("code",[t._v("wallpaperRegisterAudioListener")]),t._v(" function once. Please note: Don't register the audio listener within the "),s("code",[t._v("window.onload")]),t._v(" event (or any similar events), this is unreliable and can lead to Wallpaper Engine missing certain events. When in doubt, call this function at the end of your "),s("code",[t._v("body")]),t._v(" tag.")]),t._v(" "),s("p",[t._v("In the example below, we're also creating an empty "),s("code",[t._v("wallpaperAudioListener(audioArray)")]),t._v(" function that is handed as a callback parameter to the "),s("code",[t._v("wallpaperRegisterAudioListener")]),t._v(". The function will later contain your custom logic for the audio handling. The name for that function is up to you, but it must have parameter that takes the audio volume levels as an array.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wallpaperAudioListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("audioArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle audio input here")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wallpaperRegisterAudioListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wallpaperAudioListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("wallpaperAudioListener")]),t._v(" function will now be called when new audio samples arrive, which occurs roughly 30 times per second.")]),t._v(" "),s("h2",{attrs:{id:"processing-the-audio-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing-the-audio-samples"}},[t._v("#")]),t._v(" Processing the audio samples")]),t._v(" "),s("p",[t._v("The actual audio data is included in the "),s("code",[t._v("audioArray")]),t._v(" that we have created as a parameter to our "),s("code",[t._v("wallpaperAudioListener")]),t._v(" function above. This array has a fixed length of 128.")]),t._v(" "),s("p",[t._v("Array elements "),s("strong",[t._v("0 until 63")]),t._v(" contain volume levels for the "),s("strong",[t._v("left channel")]),t._v(".\nArray elements "),s("strong",[t._v("64 until 127")]),t._v(" contain the volume levels for the "),s("strong",[t._v("right channel")]),t._v(".")]),t._v(" "),s("p",[t._v("The lower array elements for each channel represent bass frequencies, so at array index 0, you will find the lowest bass sounds for the left channel and at array element 64, you will find the bass sounds for the right audio channel. The higher up you go in the array, the higher the audio frequencies will get, so array indices closest to 64 will contain treble audio volume levels for the left channel and array indices closest to array index 127 will contain the treble audio volume levels for the right channel.")]),t._v(" "),s("p",[t._v("Each array will generally contain a floating point value from 0.00 to 1.00. 0.00 means that the specific frequency is currently not playing any sound and 1.00 means that the frequency is playing at its maximum volume. However, due to the technical implementation, it can be that in very few cases, the numbers may be much greater than 1.0 For this reason, we recommend limiting the volume values to 1.00 with the help of "),s("code",[t._v("Math.min()")]),t._v(". See the sample project below for a concrete example.")]),t._v(" "),s("h2",{attrs:{id:"audio-visualization-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio-visualization-example"}},[t._v("#")]),t._v(" Audio visualization example")]),t._v(" "),s("video",{attrs:{width:"100%",loop:"",autoplay:""}},[s("source",{attrs:{src:t.$withBase("/videos/web_audio_visualizer.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),s("p",[t._v("In the following example, we are providing a very basic full implementation of the audio visualizer previewed above. You can easily copy-paste this into an empty "),s("code",[t._v(".html")]),t._v(" file, import it into Wallpaper Engine and it should work straight away. We don't recommend placing all scripts, styles and HTML content into one file normally, however, for the sake of this tutorial, it's easiest to see it all in one place.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html, body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100vw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("AudioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" audioCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" audioCanvasCtx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wallpaperAudioListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("audioArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clear the canvas and set it to black")]),t._v("\n            audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(0,0,0)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Render bars along the full width of the canvas")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" barWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" halfCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Begin with the left channel in red")]),t._v("\n            audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(255,0,0)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Iterate over the first 64 array elements (0 - 63) for the left channel audio data")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" halfCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an audio bar with its hight depending on the audio volume level of the current frequency")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" barWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now draw the right channel in blue")]),t._v("\n            audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb(0,0,255)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Iterate over the last 64 array elements (64 - 127) for the right channel audio data")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" halfCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" audioArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an audio bar with its hight depending on the audio volume level")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using audioArray[191 - i] here to inverse the right channel for aesthetics")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("191")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" barWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the audio canvas once the page has loaded")]),t._v("\n        audioCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AudioCanvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting internal canvas resolution to user screen resolution")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (CSS canvas size differs from internal canvas size)")]),t._v("\n        audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the 2D context of the canvas to draw on it in wallpaperAudioListener")]),t._v("\n        audioCanvasCtx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register the audio listener provided by Wallpaper Engine.")]),t._v("\n        window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wallpaperRegisterAudioListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wallpaperAudioListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The HTML and JavaScript example above contains detailed comments that should help you understand it. Let's have a closer look at some of the details, though:")]),t._v(" "),s("h3",{attrs:{id:"normalizing-the-browser-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normalizing-the-browser-styles"}},[t._v("#")]),t._v(" Normalizing the browser styles")]),t._v(" "),s("p",[t._v("First, the CSS rules in the "),s("code",[t._v("<style>")]),t._v(" block allow the canvas to fit on any resolution and any aspect ratio. You should always make sure that your wallpaper works on any type of screen resolution and aspect ratio, it's bad practice to only consider one resolution in your work and it usually only takes a few minor tweaks to ensure it works fine for all users.")]),t._v(" "),s("p",[t._v("In this example, we're resetting the default "),s("code",[t._v("margin")]),t._v(" and "),s("code",[t._v("padding")]),t._v(" on the body to 0 and hide any "),s("code",[t._v("overflow")]),t._v(" (which shouldn't be necessary but it can be a good way to prevent scroll bars appearing in some edge cases). Next up, we set the canvas to be equal to the full width and height of the user's viewport.")]),t._v(" "),s("h3",{attrs:{id:"javascript-based-normalization-and-initialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-based-normalization-and-initialization"}},[t._v("#")]),t._v(" JavaScript-based normalization and initialization")]),t._v(" "),s("p",[t._v("For our JavaScript code, it's important that we avoid the "),s("code",[t._v("window.onload")]),t._v(" function and any similar window events, at least when it comes to the Wallpaper Engine specific code as it can lead to issues with the event system. Since we avoid the "),s("code",[t._v("onload")]),t._v(" event call, it's very important that our JavaScript code is loaded after the HTML body has been rendered already, since our JavaScript directly accesses our canvas. Placing JavaScript at the inside-end of the "),s("code",[t._v("body")]),t._v(" tag is perfectly valid, so we recommend this approach.")]),t._v(" "),s("p",[t._v("If you have never worked with "),s("code",[t._v("canvas")]),t._v(" elements, it's important to know that they use an internal resolution for rendering and a secondary resolution for its size in HTML / CSS, so it's best to specifically set the canvas height and width to the window height and width with JavaScript, which we're doing in the following two lines of our JavaScript code:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naudioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("At the very end of our JavaScript code sample, we call the "),s("code",[t._v("wallpaperRegisterAudioListener")]),t._v(" function which causes the "),s("code",[t._v("wallpaperAudioListener")]),t._v(" to be executed whenever new audio data comes in. As noted above, it's important that this call is not placed inside any "),s("code",[t._v("window")]),t._v(" events such as "),s("code",[t._v("window.onload")]),t._v(", you should structure your HTML so that your JavaScript is loaded last and does not depend on "),s("code",[t._v("window")]),t._v(" events.")]),t._v(" "),s("p",[t._v("The function will draw the left audio channel in red and the right audio channel in blue (in reverse order for aesthetical purpose only). The key part of the code can be found here:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" halfCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an audio bar with its hight depending on the audio volume level of the current frequency")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    audioCanvasCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barWidth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audioCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" barWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The height of the audio bars is determined by the volume level of the frequency that is currently being iterated over in the "),s("code",[t._v("for")]),t._v(" loop. Let's assume the user has a 1920x1080 screen resolution. If the height of the window is 1080 and the volume level for the current frequency (stored in "),s("code",[t._v("audioArray[i]")]),t._v(") is 0.50, the bar for this specific frequency will be drawn with a height of 540 pixels (1080 * 0.50). This logic is repeated for all audio frequencies, each time Wallpaper Engine supplies a new set of audio data.")]),t._v(" "),s("p",[t._v("You may have noticed that we have also wrapped the "),s("code",[t._v("audioArray[i]")]),t._v(" into "),s("code",[t._v("Math.min(audioArray[i], 1);")]),t._v(". This is to ensure the audio levels are limited to 1.00 at their peak. Most values will never go above 1.00, but due to the nature of the implementation, in rare cases this might spike above 1.0 which can cause your wallpaper to render incorrectly.")]),t._v(" "),s("p",[t._v("Of course this is a very basic example and you can change the type of visualization drastically, as you can create much more than just simple audio bars with this type of data. You can also try and add some interpolation between each calls to the "),s("code",[t._v("wallpaperAudioListener")]),t._v(" function to smoothen the audio bar movement and make it less erratic, but in these cases you should consider adding an "),s("a",{attrs:{href:"/web/performance/fps"}},[t._v("FPS limit")]),t._v(" to your wallpaper.")]),t._v(" "),s("h2",{attrs:{id:"audio-visualizer-problem-solving"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#audio-visualizer-problem-solving"}},[t._v("#")]),t._v(" Audio Visualizer Problem Solving")]),t._v(" "),s("p",[t._v("To conserve performance, Wallpaper Engine will not send audio data to your wallpaper unless you actually load a "),s("code",[t._v("wallpaperAudioListener")]),t._v(" in the code of your wallpaper. Wallpaper Engine will add the following line to the auto-generated "),s("code",[t._v("project.json")]),t._v(" once it detects a properly registered audio listener in the editor preview:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"supportsaudioprocessing"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("This should happen automatically after you import a JavaScript file that is loaded within your main HTML file, however, if you are editing your files on the go, you may need to specifically use the "),s("code",[t._v("Save")]),t._v(" functionality in the editor to force Wallpaper Engine to update your "),s("code",[t._v("project.json")]),t._v(".")]),t._v(" "),s("p",[t._v("As a last resort, you can also manually add that line to the "),s("code",[t._v("project.json")]),t._v(", though if your code is set up properly, this should not be necessary. You can access the "),s("code",[t._v("project.json")]),t._v(" by clicking on "),s("strong",[t._v("Edit")]),t._v(" at the top of the editor and then selecting "),s("strong",[t._v("Open in Explorer")]),t._v(" to view your project files.")]),t._v(" "),s("p",[t._v("If you continue to have issues with your visualizers, we recommend setting up a debugger connection for Wallpaper Engine as outlined in the following tutorial, this way you can debug the JavaScript code more effectively and check the incoming audio levels you receive:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/web/debug/debug"}},[t._v("Web Wallpaper Debugging")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);