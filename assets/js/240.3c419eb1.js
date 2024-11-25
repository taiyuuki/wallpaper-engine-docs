(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{603:function(t,v,r){"use strict";r.r(v);var s=r(26),_=Object(s.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"实时照明和反射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实时照明和反射"}},[t._v("#")]),t._v(" 实时照明和反射")]),t._v(" "),r("p",[t._v("Wallpaper Engine 支持 2D 场景的实时照明和反射。这需要在图像图层的材质设置中启用 "),r("strong",[t._v("光照")]),t._v(" 或 "),r("strong",[t._v("反射")]),t._v(" 选项。这两个功能可以很好地协同工作，但通常来说，如果你希望它们尽可能少的影响性能，那就尽量不要同时启用它们。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/wallpaper-engine-docs/img/pbr/pbr_mouse.gif",alt:"Real-time lighting and reflections"}})]),t._v(" "),r("h2",{attrs:{id:"生成法线贴图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成法线贴图"}},[t._v("#")]),t._v(" 生成法线贴图")]),t._v(" "),r("p",[t._v("为了使 2D 图像获得带有深度感的照明和反射，我们需要使用法线贴图。法线贴图是游戏开发中的一种常用方案，它可以使平面纹理具有三维感。Wallpaper Engine 附带一个法线贴图生成器，可以让你轻松为图像图层生成法线贴图。")]),t._v(" "),r("p",[t._v("首先，选择要应用实时照明或反射的图像图层。如果角色或对象具有自己独立的图层，效果会最好，我们强烈建议你使用 "),r("a",{attrs:{href:"/wallpaper-engine-docs/scene/image-preparation/foreground-separation"}},[t._v("前景分隔")]),t._v(" 将角色或对象与背景分离，然后再继续。")]),t._v(" "),r("p",[t._v("选择要为其创建法线贴图的图层后，在右侧向下滚动，然后单击底部 "),r("strong",[t._v("材质")]),t._v(" 部分中的 "),r("strong",[t._v("照明和反射")]),t._v(" 。然后，启用 "),r("strong",[t._v("照明")]),t._v(" 或 "),r("strong",[t._v("反射")]),t._v(" 选项（或两者都启动），这样就会显示额外的选项，包括法线贴图生成器。")]),t._v(" "),r("p",[t._v("单击 "),r("strong",[t._v("法线贴图")]),t._v(" 部分中的 "),r("strong",[t._v("生成")]),t._v(" 按钮打开法线贴图生成器。默认选项在大多数情况下就已经足够好用，但你可以根据自己的需求进行调整以更好的匹配特定对象。下面是所有选项的详细说明。")]),t._v(" "),r("h4",{attrs:{id:"形状"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#形状"}},[t._v("#")]),t._v(" 形状")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("模糊")]),t._v("： 模糊法线贴图的整体形状，我们建议在大多数情况下将其保持在较高的模糊值，以避免产生锯齿状边缘。")]),t._v(" "),r("li",[r("strong",[t._v("深度")]),t._v("： 控制 3D 效果在对象外边缘的感知强度。在大多数情况下，你可以将其保持为最大值。")]),t._v(" "),r("li",[r("strong",[t._v("指数")]),t._v("： 指数控制对象表面积的指向程度。对于像身体之类的，最好设置较高的指数，看起来更圆润。对于无生命的例如金字塔形之类的物体，指数设为 1 就足够了。在大多数情况下，使用默认值就是一个很好的解决方案。")]),t._v(" "),r("li",[r("strong",[t._v("阈值")]),t._v("： 控制形状到对象中心的距离，在大多数情况下，你可以将其保持为最大值，但你也可以降低阈值以使形状的外部区域更加明显和突兀。")])]),t._v(" "),r("h4",{attrs:{id:"细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[t._v("#")]),t._v(" 细节")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("模糊")]),t._v("： 通常，你可能会希望设一个较低的值以保留表面结构，但应用一点模糊以减少锯齿感也是有意义的。")]),t._v(" "),r("li",[r("strong",[t._v("深度")]),t._v("： 控制对象表面细节的强度，将其设置为 0 会导致所有表面细节消失。在大多数情况下，它可以保持其最大值。")]),t._v(" "),r("li",[r("strong",[t._v("反转")]),t._v("： 反转对象细节的方向，即反转对象感知的前景和背景内容。")])]),t._v(" "),r("p",[r("strong",[t._v("观看以下视频了解目前为止的所有步骤")]),t._v("：")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_generate.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("h2",{attrs:{id:"照明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#照明"}},[t._v("#")]),t._v(" 照明")]),t._v(" "),r("p",[t._v("为你的图层启用 "),r("strong",[t._v("照明")]),t._v(" 选项后，你会注意到图像立即变暗了。这是因为默认情况下，你的场景没有任何光源。你需要将适当的光源添加到场景中并相应地进行调整。为此，请单击编辑器顶部的 "),r("strong",[t._v("编辑")]),t._v("，然后选择 "),r("strong",[t._v("添加光源")]),t._v("。你可以像移动编辑器中的任何其他对象一样四处移动光源。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("请记住，光源只会对启用了 "),r("strong",[t._v("照明")]),t._v(" 选项的图像图层产生影响，就是我们在上一节中所做的事情。")])]),t._v(" "),r("p",[t._v("现在，我们只需将两个光源添加到场景中，并使用颜色选择器直接从壁纸中选取颜色，以便灯光颜色与图像内容相匹配。你可以在以下视频中看到此过程：")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_light.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("p",[t._v("请记住，出于性能原因，Wallpaper Engine 将每个场景的最大光源数限制为 "),r("strong",[t._v("四个")]),t._v("。你应该仅在需要时使用独立的光源。你应该调整场景的环境照明，而不是使用许多单独的灯光来照亮场景，有关详细信息，请参阅下一节。")]),t._v(" "),r("h3",{attrs:{id:"调整环境照明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调整环境照明"}},[t._v("#")]),t._v(" 调整环境照明")]),t._v(" "),r("p",[t._v("你还需要考虑 Wallpaper Engine 添加到场景中的环境照明。Wallpaper Engine 添加到场景中的环境照明可以在左侧的 "),r("strong",[t._v("场景")]),t._v(" 选项中进行配置。打开场景选项并根据需要调整环境照明，我们将环境色更改为稍白的色调以使其更亮一点，但你可以在此处选择任何你想要的颜色，为你的整个场景提供某种类型的光照。")]),t._v(" "),r("p",[r("strong",[t._v("你要考虑的另一件重要事情是")]),t._v("： 默认情况下，Wallpaper Engine 的场景后面以及周围的背景色是灰色的。通常这无关紧要，但是启用反射率和照明后，当用户选择壁纸对齐选项时，背景颜色可能会变得可见，这样背景颜色就会影响编辑器中场景的照明。")]),t._v(" "),r("p",[t._v("在处理照明和反射时，请务必调整 "),r("strong",[t._v("场景")]),t._v(" 选项中的 "),r("strong",[t._v("背景颜色")]),t._v(" 选项以匹配你的图像或直接将其设置为黑色（颜色代码 #000000）。")]),t._v(" "),r("p",[t._v("你可以在以下视频中看到这两个步骤：")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_ambient_light.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("h2",{attrs:{id:"表面材质"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#表面材质"}},[t._v("#")]),t._v(" 表面材质")]),t._v(" "),r("p",[t._v("现在我们已经在场景中添加了光照，但很明显，光线在某些地方被过度反射了，例如示例角色的脸上：")]),t._v(" "),r("video",{attrs:{width:"100%",controls:"",autoplay:"",loop:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_skin_reflection.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("p",[t._v("这可以通过在角色的图像图层中添加 "),r("strong",[t._v("金属贴图")]),t._v(" 来解决，就在我们在本教程最开始添加的 "),r("strong",[t._v("法线贴图")]),t._v(" 下方。点击 "),r("strong",[t._v("金属贴图")]),t._v(" 部分的 "),r("strong",[t._v("绘制")]),t._v(" 按钮即可。")]),t._v(" "),r("p",[r("strong",[t._v("金属贴图")]),t._v(" 可以让我们绘制哪些区域有 "),r("strong",[t._v("金属一样的光泽")]),t._v("，哪些区域没有。由于我们的示例角色穿着闪亮的盔甲，我们首先将整个面具的值绘制在 120 - 150 左右，以使其整体闪耀。然后，我们继续绘制角色的脸部和所有的布料区域，值为 0。这样可以消除这些区域的任何金属外观。")]),t._v(" "),r("p",[t._v("然后，我们用一个很高的值 255 绘制我们想要突出闪耀的区域，例如角色的剑和盾牌。这些元素看起来非常闪亮而有金属感，而脸部的反射则要小得多。")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_metallic.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("p",[r("strong",[t._v("请注意")]),t._v("： 如果将金属贴图留空，你会在贴图列表下方找到一个额外的 "),r("strong",[t._v("金属")]),t._v(" 滑块。如果你的角色或物体整体都是金属或不是金属，你可以相应地调整这个滑块值，而不是花时间绘制整个贴图。")]),t._v(" "),r("h2",{attrs:{id:"粗糙度贴图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#粗糙度贴图"}},[t._v("#")]),t._v(" 粗糙度贴图")]),t._v(" "),r("p",[t._v("在上一步添加了金属贴图后，结果已经相当不错了。我们还可以创建 "),r("strong",[t._v("粗糙度贴图")]),t._v(" 进一步改善曲面的外观。粗糙度贴图会影响光的散射，"),r("strong",[t._v("本质上它定义了反射的模糊程度")]),t._v("。你可以对金属表面使用 10 - 50 范围内的较低值，对反射性较低的内容（例如布料和皮肤）设置为 200 及以上的较高值。对于粗糙度贴图，我们 "),r("strong",[t._v("不建议")]),t._v(" 使用 0 附近的非常低的值或 255 附近的非常高的值，因为这些值往往会导致失真，虽然它们也许在非常抽象的概念上很有用。")]),t._v(" "),r("p",[t._v("在我们的例子中，粗糙度贴图看起来与金属贴图非常相似，但它能让我们进一步调整图像局部的反射效果。我们首先给面具绘制70左右的值，给皮肤和布料元素绘制200左右的值，对于我们想要有强烈光泽的区域，我们给其绘制10-50范围内的值，例如角色的头盔和剑。请参阅以下视频，了解我们是如何为角色绘制蒙版的，我们将向你展示添加到图像层的蒙版，以及最终结果。")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_roughness.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("p",[r("strong",[t._v("请注意")]),t._v("： 如果将粗糙度贴图留空，你会在贴图列表下方找到一个额外的 "),r("strong",[t._v("粗糙度")]),t._v(" 滑块。你也可以调整这个滑块的值，而不是花时间绘制整个贴图。")]),t._v(" "),r("h2",{attrs:{id:"反射贴图最后的调整"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#反射贴图最后的调整"}},[t._v("#")]),t._v(" 反射贴图最后的调整")]),t._v(" "),r("p",[t._v("除了前面的贴图之外，你还可以添加 "),r("strong",[t._v("反射贴图")]),t._v("。反射贴图通常不是必需的，你可以完全忽略它，但在某些边界情况下，调整某些部分的反射会很有用。你也可以通过降低蒙版列表下方的 "),r("strong",[t._v("反射率")]),t._v(" 滑块来减少整体的反射。")]),t._v(" "),r("p",[t._v("在我们的示例中，你会注意到头盔顶部的装饰有轻微的反光。我们来给它添加一个反射贴图，首先我们将整个贴图绘制为白色（值为 255），以确保之前创建的反射保持原样。然后，我们将该值设置为 0，并将头盔装饰涂成黑色，保存反射贴图，此时再观察头盔的装饰会发现，之前存在的轻微光芒现在已经完全消失了。")]),t._v(" "),r("video",{attrs:{width:"100%",controls:""}},[r("source",{attrs:{src:t.$withBase("/videos/pbr_reflection.mp4"),type:"video/mp4"}}),t._v("\n  Your browser does not support the video tag.\n")]),t._v(" "),r("h2",{attrs:{id:"后续步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),r("p",[t._v("如果你已创建好法线贴图并根据需要绘制了其他材质贴图，那么壁纸上的照明应该已经看起来相当不错了。但是，此时场景中的所有光线都是静态的，请务必查看我们的高级照明技巧指南，了解照明更加复杂的用法以及交互方式：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/wallpaper-engine-docs/scene/lighting/lights"}},[t._v("高级照明指南")])])])])}),[],!1,null,null,null);v.default=_.exports}}]);