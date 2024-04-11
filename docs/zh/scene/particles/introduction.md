# 粒子系统介绍

Wallpaper Engine 提供了**粒子编辑器**，让你创建复杂甚至交互式的粒子系统，还可以根据自己的喜好对其进行微调。

粒子系统由大量小图像组成，用于构建某些效果，如火、雨或落叶等移动的物体。你可以通过精灵图来渲染粒子图像、控制它们的创建方式以及它们的移动方式。甚至可以使用鼠标与它们交互，还可以使它们具有音频响应性。

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/particle_system_editor.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

Wallpaper Engine 让你可以在编辑器中预装的粒子系统上进行构建，也可以从头开始创建全新的粒子系统。在本文档中，我们将解释粒子系统是如何构建的，以及哪些组件构成了粒子系统，我们会通过几个示例来展示。

## 粒子系统组件

每个粒子系统都由不同的组件组成，这些组件控制壁纸的某些特性。如果你是刚刚接触粒子系统，那么最好在设置粒子系统时打开文档作为参考，以便查阅每个设置的作用。

| Component            | Description   |
|----------------------|---------------|
| [常规](/wallpaper-engine-docs/scene/particles/component/general) | 定义粒子在屏幕上的渲染方式、使用的纹理以及粒子的数量。 |
| [渲染器](/wallpaper-engine-docs/scene/particles/component/renderer) | 让你为粒子定义特殊的渲染器。例如，根据粒子的速度拉伸的渲染器。 |
| [发射器](/wallpaper-engine-docs/scene/particles/component/emitter) | 定义如何生成粒子。 |
| [初始化器](/wallpaper-engine-docs/scene/particles/component/initializer) | 定义在粒子的初始属性，例如大小、速度和颜色。 |
| [运算符](/wallpaper-engine-docs/scene/particles/component/operator) | 运算符会随时间对例子状态进行更改，其初始值由**初始化器**决定。 |
| [子项](/wallpaper-engine-docs/scene/particles/component/children) | 即子粒子系统，它是完全独立的粒子系统，你可以将它们连接到当前粒子系统，并在指定的时间生成。**这是一个可选项** |
| [控制点](/wallpaper-engine-docs/scene/particles/component/control_point) | 控制点是粒子系统或壁纸中可以与之交互的特殊点，包括鼠标光标。**这是一个可选项** |