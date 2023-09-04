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

## Creating sub-properties with display conditions
In some cases, you may want to show additional properties only under certain conditions. For example, you may have a clock in your wallpaper and you want to give users the ability to hide the clock and change between a 24 hour and 12 hour format. In this case, you might create two checkbox properties:

* *Show Clock*
* *Use 24h format*

Since the *"Use 24h format"* user property does not make sense on its own, it's best that you hide it if the clock is disabled. This can significantly reduce clutter in your wallpaper settings, making it easier for users to configure your wallpaper.

To implement this, first create the *Show Clock* checkbox property (or whatever user property name makes sense in your wallpaper). Take note of the *Key* that Wallpaper Engine automatically generates below your user property name. In the case of *"Show Clock"*, the key would be `show_clock`.

Now, create your related user properties. During the creation, you can configure a *display condition* at the bottom of the creation form. All you need to do is to add the following code there (just replace `show_clock` with the key of your user property):

```js
show_clock.value == true
```

You can see the entire process in this video:

<video width="100%" controls>
  <source src="/videos/display_condition.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
You can also create display conditions for combo properties with a dropdown list of options. In that case, you would need to replace the `true` keyword with a value that you have created in the combo property. For example:

```
yourproperty.value == "example123"
```
:::