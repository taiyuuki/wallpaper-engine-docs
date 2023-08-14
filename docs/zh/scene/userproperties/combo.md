# 组合框用户属性

组合框属性将为用户提供一个下拉菜单，其中包含预定义选项。壁纸的用户能够选择其中之一，然后会将选中的那一项展示出来。组合框与 SceneScript 结合使用也非常有用，我们将在文档的[SceneScript部分](/wallpaper-engine-docs/scene/scenescript/introduction)介绍此高级用法。

这里的示例将向你展示如何让用户能够选择壁纸的多个选项之一。我们将使用三种天气选项：雨、雪和雾。根据用户的选择，只有一种类型的天气效果是可见的。我们从基本背景图像开始，并通过左侧的**添加组件**按钮给壁纸添加三种天气效果。

## 创建组合框

首先我们选择第一个稍后将添加到组合框选择中的图层，然后单击右上角可见性选项旁边的齿轮图标（由眼睛图标表示）。单击**绑定用户属性**，然后单击添加属性：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_bind_property.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

在菜单中选择属性类型为**组合框**，将属性重命名一个合理的名称，例如我们示例中将其命名为**Weather**（天气）。然后添加你希望用户能够从中进行选择的所有选项，在我们的例子中，分别是**Sanw**（雪），**Rain**（雨）和**Fog**（雾）。你还需要为它们分别输入一个唯一的值，本例中我们分别使用0、1和2，这个值是什么并不重要，但在高级方案中（例如，使用自定义**SceneScript**代码），我们可以使用这些值。以下视频显示了该过程：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_create.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

你现在可以关闭这两个对话框。第一个选项 ***Snow*** 将默认处于选中状态，当前选择的图层现在将与默认的 ***Snow*** 选项相关联。

## 关联其他图层

现在选择下一个图层 ***Rain***，然后和之前一样绑定用户属性。这次我们将选择现有的天气属性，然后从下拉菜单中选择 ***Rain***。这会将雨的图层与对应的选项相关联。关闭对话框后，雨效果将立即消失，因为默认选项是 ***Snow***：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_link_rain.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

对 ***Fog*** 图层重复相同的操作：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_link_fog.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 在壁纸浏览器中查看

保存并应用壁纸后，在Wallpaper Engine主界面的**已安装**选项卡中选中该壁纸，你将在右侧找到组合框属性，并且可以动态调整天气：

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/property_combo_finished.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
