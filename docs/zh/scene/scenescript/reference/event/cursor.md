---
prev: ../../reference.md
---

# Cursor事件

SceneScript提供了多个鼠标事件，可以让你利用鼠标移动和鼠标点击交互。参数都是一个[CursorEvent](/wallpaper-engine-docs/scene/scenescript/reference/class/CursorEvent)对象，它还包含额外的事件数据。

所有鼠标事件都只能在标记为 **实（Solid）** 的对象上工作。

[[toc]]

## cursorEnter

这个事件函数将在鼠标进入对象的边界时被调用。

```js
export function cursorEnter(event: CursorEvent) {

}
```

## cursorLeave

这个事件函数将在鼠标离开对象的边界时被调用。

```js
export function cursorLeave(event: CursorEvent) {

}
```

## cursorMove

在对象上移动鼠标时会调用此事件函数。

```js
export function cursorMove(event: CursorEvent) {

}
```

## cursorDown

在对象上按下鼠标时会调用此事件函数。

```js
export function cursorDown(event: CursorEvent) {

}
```

## cursorUp

在对象上释放鼠标时会调用此事件函数。

```js
export function cursorUp(event: CursorEvent) {

}
```

## cursorClick

这个事件函数将在鼠标按下和释放时被调用。该事件触发在`cursorUp`和`cursorDown`事件之后。

```js
export function cursorClick(event: CursorEvent) {

}
```