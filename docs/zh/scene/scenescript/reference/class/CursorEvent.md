---
prev: ../../reference.md
---

# SceneScript Class CursorEvent

Provides information about the cursor position during [cursor events](/scene/scenescript/reference/event/cursor).

::: warning
This class is only fully compatible with 2D wallpapers, the `Z` position is currently not used.
:::

## Properties

### worldPosition: Vec3

Position in absolute world coordinates.

### localPosition: Vec3

Position relative to the object. For example, for image layers `localPosition.x` will be in the range of `0` to `thisLayer.size.x` and `localPosition.y` will be in the range of `0` to `thisLayer.size.y`.

### hitBox: String?

Name of the puppet warp hit box that was clicked, only usable on image layers with puppet warp.