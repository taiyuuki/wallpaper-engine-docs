---
prev: ../../reference.md
---

# SceneScript Class AudioBuffers

提供对左右音频频谱值及其平均值的访问。`left`、`right`以及`average`数组的大小始终与 [engine.registerAudioBuffers(resolution: Number)](/wallpaper-engine-docs/scene/scenescript/reference/class/IEngine)）参数定义的大小相同。它们会每一帧自动更新，因此你可以持续读取此对象的音频电平。

如果你已初始化此对象的频段，例如`16`，则访问`left[0]`、`right[0]`或`average[0]`，将得到低音频率的当前音频电平，这对于检测节拍很有用，这在Wallpaper Engine是很常用的。相应的，访问`left[15]`, `right[15]`或`average[15]`将用于获取高音频率，介于两者之间的则表示特定的频段的电平值。

音量级别通常介于`0.00`到`1.00`之间，但在某些情况下它们也可能达到高于1。如果这对你的用例来说是个问题，你可以利用`Math.min()`对其进行限制.例如：

```js
Math.min(1.00, audioBuffers.average[0]);
```

## 属性

### average: Float32Array

这是左右两个音频通道（`left`和`right`）的算术平均值。

建议使用此属性，除非你需要单独处理自两个音频通道的音频数据。

### left: Float32Array

左侧音频电平构成的数组。

### right: Float32Array

右侧音频电平构成的数组。