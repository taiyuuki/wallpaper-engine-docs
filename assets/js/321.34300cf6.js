(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{683:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"update事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update事件"}},[t._v("#")]),t._v(" update事件")]),t._v(" "),a("p",[t._v("这个事件函数将在所有脚本的每一帧中被调用一次。事件函数的参数"),a("code",[t._v("value")]),t._v("是脚本对应属性的当前值。"),a("code",[t._v("value")]),t._v("的类型取决于脚本对应的属性类型。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The initial value of the property this script is assigned to.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Wallpaper Engine会尝试将任何数字返回值转换为"),a("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3"}},[t._v("Vec2")]),t._v("和"),a("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/Vec3"}},[t._v("Vec3")]),t._v("。例如，如果"),a("code",[t._v("比例")]),t._v("属性绑定的函数返回值为"),a("code",[t._v("2")]),t._v("，Wallpaper Engine会将值转换为"),a("code",[t._v("Vec3(2, 2, 2)")]),t._v("，以便它与"),a("code",[t._v("比例")]),t._v("属性的类型相匹配。")]),t._v(" "),a("p",[t._v("你还可以选择不返回任何值，这样属性将不会被修改。")]),t._v(" "),a("h2",{attrs:{id:"关于帧率的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于帧率的注意事项"}},[t._v("#")]),t._v(" 关于帧率的注意事项")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("update()")]),t._v("函数将在每一帧当中被调用，假如用户在Wallpaper Engine的设置中使用了高帧率，在相同时间内它将会被调用更多的次数。如果你要确保"),a("code",[t._v("update()")]),t._v("函数中的任何动画都能够按正常速度工作，请使用"),a("code",[t._v("engine.frametime")]),t._v("来标准化你的动画速度。")]),t._v(" "),a("p",[t._v("例如，如果你要想向上移动对象，请使用"),a("code",[t._v("engine.frametime")]),t._v("作为基准，然后将其乘以一个速度系数作为动画的速度。在以下示例中，我们使用"),a("code",[t._v("100")]),t._v("作为速度系数，你可以根据需要修改这个值：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frametime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);