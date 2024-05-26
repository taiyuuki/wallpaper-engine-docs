---
prev: ../../reference.md
---

# SceneScript Class ITextLayer

This class provides access to functions specific to text layers.

## Properties

### text: String

The text that will be displayed.

### color: Vec3

The text color.

### alpha: Number

The opacity of the text.

### opaquebackground: Boolean

Adds an opaque background to the text.

### backgroundcolor: Vec3

Sets the background color.

### pointsize: Number

Size of the font in points.

### font: String

File path of the active font.

### padding: Number

Padding in pixels. This increases the geometry around the font characters and may be useful for certain effects.

### horizontalalign: String

Horizontal text alignment: left, center, right.

### verticalalign: String

Vertical text alignment: center, top, bottom.

### anchor: String

Dynamic screen anchor: none, center, top, topright, right, bottomright, bottom, bottomleft, left, topleft.

### limitrows: Boolean

Enable row limit.

### maxrows: Number

Max number of rows.

### limitwidth: Boolean

Enable width limit.

### maxwidth: Number

Max width in pixels.