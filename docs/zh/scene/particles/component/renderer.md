---
prev: ../introduction.md
---

# 粒子系统 - 渲染器

粒子系统至少需要一个渲染器才能运行。有四种不同类型的渲染器可用：

[[toc]]

以下视频展示了当粒子在快速涡旋中移动时，所有四个渲染器的行为。记住，这只是一个示例，每个渲染器都适配于特定的用例。

<video width="auto" style="margin:0 auto;display:block;" controls loop autoplay>
  <source :src="$withBase('/videos/particle_system_renderer.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 精灵

这是在大多数情况下的 **默认** 渲染器。它使用配置好的方向将粒子渲染到屏幕上。

## 精灵拖尾

此渲染器将根据粒子的速度拉伸粒子。

* **长度：** 长度乘以速度，计算粒子的理论长度。
* **最大长度：** 粒子在非常高的速度下可以达到的最大长度。

## 绳索

此渲染器在生成的每个粒子之间绘制一条线。

**细分：** 每行中的细分数。数字越大，拐角越平滑，但会降低系统性能。

## 绳索拖尾

此渲染器沿每个粒子的路径绘制一条线。它消耗的性能相对昂贵，但允许你沿着粒子绘制平滑的线条，这在复杂的运动场景中很有用，例如上面视频中的涡旋示例。