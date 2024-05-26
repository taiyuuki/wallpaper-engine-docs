---
prev: ../../reference.md
---

# SceneScript Class ITextLayer

此类提供对文本图层的访问。

## 属性

### text: String

将显示的文本。

### color: Vec3

文字颜色。

### alpha: Number

文字透明度。

### opaquebackground: Boolean

是否为文本添加不透明的背景。

### backgroundcolor: Vec3

设置的背景颜色。

### pointsize: Number

字体大小（单位为磅）。

### font: String

生效字体的文件路径。

### padding: Number

以像素为单位的外间距。这个值会增加字体周围的几何空间，可用于某些特殊效果。

### horizontalalign: String

文本水平对齐方式：left（左对齐）, center（居中对齐）, right（右对齐）。

### verticalalign: String

文本垂直对齐方式：top（顶部对齐）, center（居中对齐）, bottom（底部对齐）。

### anchor: String

动态屏幕锚点：none（无）, center（中）, top（上）, topright（右上）, right（右）, bottomright（右下）, bottom（下）, bottomleft（左下）, left（左）, topleft（左上）.

### limitrows: Boolean

允许的最大行数。

### maxrows: Number

最大行数。

### limitwidth: Boolean

允许的最大宽度。

### maxwidth: Number

最大宽度（单位为像素）。