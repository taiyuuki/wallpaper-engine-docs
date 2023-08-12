---
prev: ../../reference.md
---

# SceneScript Event resizeScreen

This function will be called every time the wallpaper resizes because of a change to the current screen resolution.

The parameter `size` is a `Vec2` object that contains the new resolution, where `size.x` is the new width and `size.y` is the new height.

```js
export function resizeScreen(size: Vec2) {

}
```

