---
prev: ../tutorials.md
---

# SceneScript基础知识

对于几乎所有的Wallpaper Engine资源和效果，其每个属性都可以使用SceneScript进行控制。在本指南中，我们将展示SceneScript的一些基本功能，让你了解如何开始使用SceneScript。

[[toc]]

在本指南中，我们将使用简单的**文本**图层作为示例。如果你想跟着操作，只需在壁纸中添加**文本**图层即可。

:::tip 关于本指南
以下教程显得非常冗长，因为我们会尝试逐步介绍。它同时照顾了绝对的初学者和高级程序员，但如果你是经验丰富的程序员，只需稍微浏览一下，然后阅读更高级的[SceneScript教程](/wallpaper-engine-docs/scene/scenescript/tutorials)或[SceneScrip语言参考](/wallpaper-engine-docs/scene/scenescript/reference)就足够了。

我们邀请初学者与本指南一起操作并进行一些实验。如果你迷路了，请务必观看我们在每个部分下提供的视频。
:::

## 如何添加SceneScript

在编辑器中选择任何元素时，你都可以在右侧找到对应的属性。可以看到，所有属性旁边都有一个齿轮图标，例如以下截图中的红色箭头指向的位置：

![SceneScript in the User Interface](/wallpaper-engine-docs/img/scenescript/scenescript_ui.png)

当你在属性旁边看到齿轮图标时，这意味着你可以通过单击该图标并选择“绑定脚本”将**SceneScript代码绑定**到该属性。在我们的示例中，我们将为**文本**图层的**文本**属性执行此操作。

## SceneScript的update()函数

单击**绑定脚本**后，你将看到SceneScript编辑器和以下自动生成的代码片段：

```js
'use strict';

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	
	return value;
}
```

`update`函数是大多数情况下SceneScript行为的核心。每次Wallpaper Engine渲染新的一帧时，都会执行它。这意味着，例如，如果用户将 FPS 限制为 30，则该函数每秒执行 30 次。在上面的代码片段中，你可以看到什么都没有发生：函数传递的参数`value`，在不修改它的情况下直接返回。

`update`函数的行为可以分为三个步骤：

1. 初始`value`参数是属性的当前值。
2. 使用自定义的逻辑对`value`进行修改。
3. 将新的`value`返回。

`value`的类型取决于属性类型，在本例中，它是一个`String`，因为我们处理的是**文本**属性。


### 使用SceneScript修改value的值

现在我们开始修改`value`。我们将从一个非常简单的示例开始，并通过SceneScript将**文本**图层的文本`value`更改为`123!!`：

```js{8}
'use strict';

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	value = "123!!";
	return value;
}
```

添加新代码后，按右上角的**确定**进行确认，这将关闭编辑器。

### 执行SceneScript

你不会马上在编辑器中看到任何变动。因为编辑器不会直接执行SceneScript代码。你可以通过顶部的**运行预览**按钮来执行SceneScript代码。然后，你就可以看到文本图层的值被更改为`123!!`。

你可以在以下视频中查看：

<video width="100%" controls >
  <source src="/videos/scenescript_basic.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## SceneScript动态内容

我们前面展示的示例非常基础，使用SceneScript进行静态文本的更改实际上没有意义，因为我们可以直接在编辑器中设置。现在让我们介绍一些动态文本内容。

正如一开始所说，SceneScript像许多其他语言一样基于*ECMAScript*，尤其是*JavaScript*。这意味着，我们可以通过`Date`访问当前计算机的日期和时间。这允许我们动态更改文本层的文本，例如，像在 JavaScript 中一样构建时钟。

为了本教程的简单易懂，我们不会构建一个完整的时钟，而是只显示时钟的秒数。为了实现这一点，我们首先通过编写`let date = new Date();`获取日期对象，`Date`对象含有与日期和时间相关的各种函数，例如`date.getSeconds();`，我们只需通过获取当前秒数并立即将其作为新的值返回，甚至不需要去覆盖`value`的值：

```js
'use strict';

/**
 * @param {String} value - for property 'text'
 * @return {String} - update current property value
 */
export function update(value) {
	let date = new Date();
	return date.getSeconds();
}
```

执行SceneScript代码时，我们的文本层将表示设备时钟的当前秒数。请参阅以下示例视频：

<video width="100%" controls>
  <source src="/videos/scenescript_seconds.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 属性类型

在前面的示例中，我们使用了**文本**属性，该属性的类型是`String`，但其他属性，例如**起点**、**角度**和**比例**呢？

![Vec3 Samples](/wallpaper-engine-docs/img/scenescript/vec3.png)

这三个属性由`x`，`y`，`z`组成。为了处理这些属性，Wallpaper Engine提供了一个名为`Vec3`的新类(`class`)，每当将脚本绑定到这些属性时，都会使用该类。该类包含`x`，`y`，`z`三个值，并允许你在每次`update`函数中访问和修改它们。

让我们在一个简单的示例中探讨这一点。我们单击**起点**属性旁边的齿轮图标，然后和之前一样选择**绑定脚本**。现在，我们可以通过覆盖`y`来修改元素的位置。在下面的示例中，我们只覆盖`y`的值，保留其他值不变：

```js{8}
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = 200;
	return value;
}
```

同时需要注意的是，Wallpaper Engine在`update`函数上面的注释中自动填充类型提示：`@param {Vec3}`，这样你就始终可以知道你收到的类型以及将返回的类型是什么。

如果我们现在保存此代码，然后再次使用**运行预览**，你将看到目标对象移动到了在SceneScript代码中定义的新位置。在以下视频中查看此过程：

<video width="100%" controls>
  <source src="/videos/scenescript_vec3_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 使用SceneScript移动、转动和缩放对象

让我们在前面的示例中添加一个更动态的移动对象的方式，而不是仅仅将其放置在场景中的随机位置。有多种方法可以解决这个问题，我们在这里展示一个例子。

我们将首先从一个不太理想的方案开始，然后在下一步中修正为更好的方案。解决此问题的一种方案是从任意值开始，例如`500`，然后不断递增。Wallpaper Engine提供了一个全局对象`engine`，你可以在代码的任意位置访问该对象。它有一个`engine.runtime`对象，用于保存壁纸的当前运行时间。

在我们的示例中，我们希望向上移动对象。我们给`value.y`设置一个起始高度，然后让它增加`engine.runtime`乘以100，这样我们的对象在运行时间的每一秒都会移动100像素：

```js{8}
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = 500 + (engine.runtime * 100);
	return value;
}
```

观看以下视频查看输出结果：

<video width="100%" controls>
  <source src="/videos/scenescript_vec3_basic_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

如你所见，我们的对象现在将无限向上浮动，这并不是很好。另一个需要注意的重要事项是，如果经过足够长的时间，`engine.runtime`的值最终将变回0，因此从长远来考虑，这也不是一个很可靠的方案。

现在，我们要做的事情是，将示例中的`engine.runtime`装到一个`正弦函数`中，这意味着该值将无限在正弦波 -1 和 +1 之间不断上下移动。

为此，我们可以使用`Math`全局对象，你可能已经从类似`JavaScript`的语言中知道了这一点：

```js{8}
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = 500 + (Math.sin(engine.runtime) * 100);
	return value;
}
```

乍一看可能令人困惑，但本质上这是在利用`Math.sin(engine.runtime) * 100`不断创建从 -100 到 +100 的值，然后将我们的`y`值从400**平滑地**上下移动到600。

观看以下视频查看结果：

<video width="100%" controls>
  <source src="/videos/scenescript_vec3_sine_movement.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 调试SceneScript

如果你对脚本的行为感到困惑或遇到任何错误，请务必查看默认情况下位于编辑器窗口底部的**日志**选项卡。在脚本执行期间，任何错误和警告都将打印在那里。

每当场景行为与预期不符时，我们建议采用的方法是使用`console.log()`函数。此函数允许你打印任何变量的值，这有助于了解应用程序的行为。

请确保在发布壁纸之前从代码中删除了所有的`console.log()`，因为日志文件的调用可能会对性能产生负面影响。请参考以下代码片段，从我们前面的代码示例中打印`value.y`的值到编辑器日志：

```js{11}
'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = 500 + (Math.sin(engine.runtime) * 100);

	// TODO: REMOVE BEFORE PUBLISHING
	console.log(value.y);

	return value;
}
```

如果你现在使用编辑器中的**运行预览**功能，你将看到每当调用`update()`函数时，Wallpaper Engine是如何连续打印编辑器日志中的值。请观看以下视频，了解实际操作：

<video width="100%" controls>
  <source src="/videos/scenescript_vec3_sine_debug.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
通常，在编辑器中调试SceneScript代码的行为就足够了。但在某些情况下，你可能希望在将壁纸应用于桌面时对其进行调试。在这种情况下，你可以在Wallpaper Engine设置的**常规**选项卡中将**日志级别**设置为**详细**。这样Wallpaper Engine将记录位于`wallpaper_engine`目录中的Wallpaper Engine日志文件中的所有`console.log()`调用，默认情况下你可以在此处找到该文件：

C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\log.txt
:::

## 更多关于SceneScript

如果你完成了本页的学习，那么你应该对SceneScript的基础知识有了很好的了解。请务必查看[SceneScript语言参考](/wallpaper-engine-docs/scene/scenescript/reference)，以大致了解SceneScript提供的所有类、全局变量、事件和模块。

此外，请查看我们的[SceneScript教程](/wallpaper-engine-docs/scene/scenescript/tutorials)，了解SceneScript的一些特定和高级用例。