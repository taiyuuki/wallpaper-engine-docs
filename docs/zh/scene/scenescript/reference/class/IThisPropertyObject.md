---
prev: ../../reference.md
---

# SceneScript Class IThisPropertyObject 


你可以通过全局对象 `thisObject` 在 SceneScript 代码的任何位置访问它。

例如，如果您将一个脚本绑定在`起点`属性上，则 `thisObject` 将是一个 [ILayer](/wallpaper-engine-docs/scene/scenescript/reference/class/ILayer)。实际上，`thisObject` 的类型是动态的，编辑器的自动补全系统将动态的提示它的静态、动态属性，例如在着色器中定义的材质属性。
