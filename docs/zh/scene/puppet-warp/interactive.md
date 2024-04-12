# 可交互的操控变形动画

操控变形动画与 *SceneScript* 结合使用可用于创建交互式的壁纸元素。在本教程中，我们将讨论如何能让用户抓取和拖动单个骨骼。

在尝试本教程之前，你应该已经阅读并理解了[操控变形动画介绍](/wallpaper-engine-docs/scene/puppet-warp/introduction)。

## 可交互骨骼

在本指南中，我们将介绍如何创建用户可以拖动和释放的交互式壁纸元素。

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_interactive.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

如果你想跟随本教程或查看完整的示例项目，请点击这里下载：

* [点击这里下载简单的果冻项目示例](/samples/jelly_simple.zip)

### 设置操控变形动画

为此，我们需要将操控变形与 SceneScript 结合使用。我们首先在 **果冻** 对象上创建一个操控变形。几何图形没有任何需要特别注意的地方。对于骨骼设置，我们的基本示例仅包含两个骨骼：一个静态的主要骨骼，表示果冻对象的外部区域，一个位于果冻对象中心的骨骼，为其设置 **骨骼约束** 并使用 **弹簧物理模拟** ：

![Puppet Warp - Interactive Bone Setup](/wallpaper-engine-docs/img/puppet-warp/puppet_warp_interactive_bones.png)

对于中间骨骼的骨骼约束，我们使用 **弹簧物理模拟**，然后开启 **物理平移**，并将其他所有设置维持为默认状态。这意味着我们能够四处移动骨骼（这就是 **物理平移** 的作用），由于是弹簧模拟，因此当鼠标释放时，它将自动恢复为原始状态。

此外，为骨骼设置一个名称也很重要，我们稍后可以在代码中引用它。在我们的示例中，在编辑器中选中它时，将骨骼命名为 MouseBone。

对于骨骼权重，中间骨骼包括物体中间的一小块区域。本例中，绿色区域表示鼠标光标可以拖动的区域，而红色区域表示主要骨骼的不可移动区域：

![Puppet Warp - Interactive Weight Setup](/wallpaper-engine-docs/img/puppet-warp/puppet_warp_interactive_weights.png)

我们不需要为这个例子创建任何动画，因为鼠标交互和它是完全独立的。

### 鼠标拖动的 SceneScript 代码

接下来，我们需要将 SceneScript 代码片段分配给果冻图像层。选择图层，然后单击右上角的齿轮图标，在可见性和锁定图标旁边。你可以复制粘贴下面的代码，通过代码注释可以查看详细信息：

```js
'use strict';

// 设置骨骼可以拖动的最大距离
const DRAG_MAX_DISTANCE = 100;

// 设置可拖动骨骼的名称
const MOUSE_BONE_NAME = 'MouseBone';
 
var activeDragBone;
var isDragging = false;
var dragDelta;
var dragStart;
 
/**
 * @param {Boolean} value - for property 'visible'
 * @return {Boolean} - update current property value
 */
export function update(value) {
	if (isDragging) {
		// 使用鼠标位置计算拖动距离
		var drag = input.cursorWorldPosition.subtract(dragStart);
		var dragDist = drag.length();
		drag = drag.divide(dragDist);
		// 拖动距离不能超过最大距离
		drag = dragStart.add(drag.multiply(Math.min(DRAG_MAX_DISTANCE, dragDist)));
		// 移动骨骼到新计算的拖动距离
		thisLayer.setBoneTransform(activeDragBone, thisLayer.getBoneTransform(activeDragBone).translation(drag.add(dragDelta)));
	}
}
 
/**
 * @param {CursorEvent} event
 */
export function cursorDown(event) {
	var bonePos = thisLayer.getBoneTransform(1).translation();
	var delta = bonePos.copy().subtract(input.cursorWorldPosition);
	var len = delta.length();
	// 如果鼠标距离骨骼位置不超过最大距离，更新拖动位置
	if (len < DRAG_MAX_DISTANCE) {
		dragStart = bonePos;
		dragDelta = delta;
		isDragging = true;
	}
}
 
/**
 * @param {CursorEvent} event
 */
export function cursorUp(event) {
	// 鼠标拖动结束，释放拖动动画
	isDragging = false;
}
 
/**
 * Get bone for mouse movement
 */
export function init() {
	// 获取鼠标可以拖动的骨骼的数字索引，并将其存储在变量中，以便稍后可以使用
	activeDragBone = thisLayer.getBoneIndex(MOUSE_BONE_NAME);
}
```

首先，该代码将鼠标可以拖动的骨骼名称加载到变量中。如果你在设置过程中为骨骼指定了不同的名称，则可以在代码中更改 `MOUSE_BONE_NAME` 的值。

```js
thisLayer.getBoneIndex(MOUSE_BONE_NAME);
```

骨骼的主要动作是在 `update()` 函数中发生的。骨骼在鼠标的位置移动，里面的代码处理所有的动作。

```js
thisLayer.setBoneTransform(activeDragBone, thisLayer.getBoneTransform(activeDragBone).translation(drag.add(dragDelta)));
```

通过使用 `thisLayer.setBoneTransform`，我们可以通过索引访问当前图层的任何骨骼，第二个参数 `thisLayer.getBoneTransform(activeDragBone).translation(drag.add(dragDelta))` 可能看起来有点混乱，但实际上并没有那么复杂。它基本上只是在获取骨骼的位置，然后根据鼠标在壁纸上的位置使用 `.translation()` 函数移动骨骼到新的位置。

当鼠标被释放时，骨骼将返回其原始位置，因为骨骼在操控变形动画中被配置为 **弹簧物理模拟**。这意味着骨骼将自动恢复到其原始位置，而无需额外的代码处理。

::: tip
你可以使用 SceneScript 显示的覆盖所有操控变形动画。Wallpaper Engine 在显示图层前会先在所有图层上执行所有动画，然后再执行每一帧上的任意脚本。
:::

将此代码片段应用于果冻图层后，你可以单击顶部的 **运行预览** 或者应用壁纸，它应该会像上面的预览视频中一样正常工作。请记住，它仅适用了一个。

## 高级可交互操控变形动画

我们还在一个单独的项目中创建了一个更复杂的示例。本例中，果冻有大量的骨骼，这些骨骼都可以拖来拖去。此外，它还包括一个时间轴动画，每当释放鼠标时，SceneScript 都会触发该动画，以模拟骨骼恢复到其原始状态的物理冲击（请参阅下面的视频）。果冻纹理也被制作成具有多种表情的精灵表，这些表情在拖动动画开始时会切换。该示例还包含声音，总体上有点复杂，但如果你想了解我们是如何实现这一点的，可以在以下链接中查看示例项目：

* [Click here to download the advanced jelly project.](/samples/jelly_advanced.zip)

你可以在以下视频中看到高级示例的实际效果：

<video width="100%" controls loop>
  <source :src="$withBase('/videos/puppet_warp_interactive_advanced.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
