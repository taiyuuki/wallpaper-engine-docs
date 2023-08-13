# 用户属性介绍

Wallpaper Engine允许你通过将**用户属性**添加到项目中，使壁纸的某些部分可由用户自行配置。当用户在**已安装**选项卡中选择壁纸时，这些用户属性将显示在右侧。在本指南中，我们将解释如何创建和使用属性以及每种属性类型所代表的内容。高级用户还可以将用户属性集成到 SceneScript 代码中，这将在文档的 [SceneScript部分](/wallpaper-engine-docs/scene/scenescript/introduction)中进行了说明。

## 用户属性

Wallpaper Engine支持以下几种用户属性类型。单击其中任何一个以查看有关其工作原理的详细说明：

* [**颜色**](/wallpaper-engine-docs/scene/userproperties/color) (`color`)：颜色选择器
* [**滑块**](/wallpaper-engine-docs/scene/userproperties/slider) (`slider`)：滑块可以让用户在指定范围内选择一个数字。
* [**复选框**](/wallpaper-engine-docs/scene/userproperties/checkbox) (`bool`)：打开或关闭的复选框
* [**组合框**](/wallpaper-engine-docs/scene/userproperties/combo) (`combo`)：一个下拉选择器，其中每个元素都有一个文本和一个隐藏值
* [**文本框**](/wallpaper-engine-docs/scene/userproperties/text) (`textinput`)：输入文本字段。
* [**纹理**](/wallpaper-engine-docs/scene/userproperties/texture) (`texture`)：允许用户将纹理替换为自定的图片或视频。

选中壁纸后，用户属性将显示在右侧：

![User Properties](/wallpaper-engine-docs/img/tutorials/scene_properties.jpg)

你可以随时查看、编辑、创建新属性，方式是：在Wallpaper Engine编辑器中，点击顶部的**编辑**菜单并选择**更改项目设置**。