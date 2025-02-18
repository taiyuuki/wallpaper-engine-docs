# 前景分离

Wallpaper Engine 中的前景分离功能可以让你相对轻松地将图像分成多个独立的部分，而无需使用任何第三方图像编辑工具。当你的基础图像的前景中有一个或多个角色、对象，并且希望将前景对象视为独立图层时，这特别有用。这有助于将效果应用于角色，还可以让你将组件放置在前景对象和背景图像之间。

Wallpaper Engine 中的前景分离适用于大多数图像，但在某些情况下，你可能仍需要手动调整，甚至完全依靠第三方图像编辑工具。

## 前景分离介绍

在本指南中，我们将展示如何将角色与图像分离并将其转换为自己的图层。在下面的示例中，我们使用前景分离将示例图像转换为两层：一层用于图像前景中的人物，另一层用于图像背景中的风景。在更复杂的方案中，可以在同一基础图像上多次使用前景分隔，例如，如果图像上有多个角色或对象，则要将其各自转换为独立图层。

![Foreground Separation](/wallpaper-engine-docs/img/foreground-separation/foreground_separation.gif)

正如你所看到的，这个角色已经通过前景分离被剪掉了。背景留下了一个自动填充的模糊区域。虽然在某些情况下该区域可能会变得可见，但在大多数情况下是不明显的，因为颜色是由背景图像决定的，使它们能够很好地与图像融为一体。

#### 前景分离的优点

在最基本的形式中，这种将前景对象分成不同层的做法可以让你在不影响背景的情况下将效果应用于前景角色（例如，用于模拟呼吸的 **摇动** 效果往往会溢出到背景中）。它还使你能够将其他组件放置在前景图层和背景图层之间。我们在下面的视频中展示了这一点，我们通过在图层之间移动它来将 **烟** 组件放置在角色和背景之间：

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/foreground_layering.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

前景分离也可以作为你创建[操控变形动画](/wallpaper-engine-docs/scene/puppet-warp/introduction)的第一步。

## 如何使用前景分离

首先将图像导入 Wallpaper Engine 编辑器，然后右键它，将鼠标悬停在 **图像编辑** 上，然后选择 **前景分离**。这样，你将在编辑器中看到前景分隔窗口。

## 绘制模式

你可以使用两种模式来绘制角色的轮廓。我们要展示的第一个选项是 **画笔模式**。这两种模式都是实现前景分离的可行工具，请务必阅读后续内容，然后决定采用哪种模式。

首先，通过单击前景分隔窗口中的 **画笔符号** 来使用画笔模式，如以下视频所示：

<video width="100%" controls autoplay loop>
  <source :src="$withBase('/videos/foreground_separation_mode.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 画笔模式

使用画笔模式时，两个核心功能是左侧的 **标记前景** 和 **标记背景** 按钮。在背景和前景之间切换，可以将图像的不同部分标记为前景角色或不属于角色的背景区域。通常，只需一种画笔就足以将整个区域标记为前景或背景。**擦除** 功能则可以将某个区域标记为**中性**，应用程序会自动判断应将其视为背景还是前景的一部分。

::: danger 非常重要
除非绝对必要，否则不要试图去精准地绘制轮廓边缘的微小细节。你只需绘制角色和背景的粗糙区域即可。Wallpaper Engine 会自动尝试检测前景对象的轮廓。

请观看下面的视频实践以了解这一点。
:::

以下是展示如何提取角色的示例视频。请注意，尽管前景画笔只绘制了角色的中间区域，但第一笔画的大圈已经相对很好地选择了角色轮廓。某些区域，例如剑尖到角色的中间区域以及右侧的背景区域，需要专门标记为背景的一部分。

**当画笔从“标记前景”切换为“标记背景”时，请一定要注意。**

<video width="100%" controls>
  <source :src="$withBase('/videos/foreground_separation.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

使用顶部 **视图** 部分中的控件，可以单独查看**前景**和**背景**并来回切换。在完成角色分离之前，你应该确保这两个图层都符合你的期望，否则就无法撤销前景分离过程，只能从头开始。

### 多边形模式

作为上述 **画笔模式** 的替代方法，你还可以使用多边形绘制功能来创建角色的轮廓。你可以通过单击左侧的 **多边形** 图标来启用它。

在 **多边形模式** 中，你可以在角色周围设置点，以定义其粗略轮廓。确保在你的角色周围画一个完整的圆圈，换句话说你设置的最后一个点需要连接到你创建的第一个点，以完成围绕你的角色一整圈。与 **画笔模式** 不同，你应该密切关注角色的轮廓以获得良好的效果。

首先，在角色轮廓的任意位置设置一个点，然后沿着角色的轮廓行点。你可以单击鼠标中键来删除点，也可以单击现有线来插入新点，还可以移动现有点以调整其位置。

以下视频展示了使用 **多边形模式** 提取的与上一节中相同的图像：

<video width="100%" controls>
  <source :src="$withBase('/videos/foreground_separation_polygon.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

::: tip
如果你的角色由多个独立部分组成，你还可以绘制多个独立的多边形。
:::

### 其他控制措施

如上一节所述，通常情况下，只需要在前景视图和背景视图之间切换，就足够帮助你确保分离符合你的预期，否则你可能需要将更多区域标记为背景或前景。你可以调整 **蒙版容差** 和 **平滑** 值，以确保所选内容尽可能与你的角色或对象匹配。增加蒙版容差将略微扩展选定的前景区域，而减小容差将使所选内容与对象更紧密地联系在一起。

此外，你还可以降低或提高选项底部的 **质量** 设置。这可以显著改变当前的选择，越早设置该项就对你越有帮助。但请记住，提高质量会显著增加 Wallpaper Engine 重新计算蒙版所需的时间。

如果你觉得用画笔描边后的频繁触发重新计算很麻烦或者在系统花费了太长的时间，你也可以关闭左下角的 **自动重新计算** 功能，然后通过左下角的 **重新计算** 按钮来手动触发重新计算。

#### 最大限度地提高准确性

如果你处理角色或对象有着非常精细的轮廓，则可能需要调整设置以获得最大精度。你可以通过以下调整来最大限度地提高前景分离算法的准确性：

* **蒙版容差**： 0
* **平滑**： 0
* **质量**： 2

如果你仍然发现前景分离的结果存在问题，你还可以通过将 Wallpaper Engine 连接的外部图像编辑器来对自动前景分离进行细微调整。之后，你可以手动编辑图像图层的 **反照率纹理**。有关详细信息，请参阅以下指南：

* [外部图像编辑器的快速访问](/wallpaper-engine-docs/scene/image-preparation/external-editor)
