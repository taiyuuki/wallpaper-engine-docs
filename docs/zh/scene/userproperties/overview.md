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

## 创建具有显示条件的子属性

在某些情况下，你可能希望在某些条件下显示或隐藏其他属性。例如，以我们在上一节中使用的示例为例：你有一个可见性的时钟，每当启用时钟时，你都希望向用户显示一个额外的选项，以便在 24 小时和 12 小时格式之间切换。这有助于整理属性列表，让你可以在需要时有选择地显示属性。这样的话，你就可以创建两个复选框属性:

* *显示时钟*
* *使用 24 小时格式*

对于时钟，你可以在时钟的属性中找到**使用24小时格式**的属性。类似于上一示例中的操作，为它创建新的复选框用户属性。然而在这种情况下，你需要获取该用户属性的**关键字**，并在**条件**输入框中写入一行代码。别担心，它不是很复杂。我们创建的时钟属性的关键字是**show_clock** —— 你可以在属性列表中查找每个属性的关键字。我们现在希望显示条件为：

```js
show_clock.value == true
```

如果时钟不可见，**使用24小时格式**用户属性将没有意义，你最好将其隐藏。这可以显著减少壁纸设置的混乱，使用户更容易配置壁纸。

为了实现这一点，首选创建一个复选框属性*Show Clock*(或者你想使用的任何属性名称)。在下面的代码中，Wallpaper Engine会自动生成 *关键字* `show_clock`。在这个例子中，*"Show Clock"*对应的关键字是`show_clock`。


现在，创建你的相关用户属性。在创建时，你可以在底部配置*显示条件*，你只需要在这里添加以下代码(只需将`show_clock`替换为你的关键字):

```js
show_clock.value == true
```

你可以观看下面的视频了解整个过程：

<video width="100%" controls>
  <source :src="$withBase('/videos/display_condition.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
你还可以使用组合框属性创建显示条件。在这种情况下，你需要将关键字替换为在组合框属性中创建的值。例如：
```
yourproperty.value == "example123"
```
:::