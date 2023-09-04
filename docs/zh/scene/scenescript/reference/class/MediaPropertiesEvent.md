---
prev: ../../reference.md
---

# SceneScript Class MediaPropertiesEvent


该对象描述当 Windows 中当前播放的媒体属性发生更改时触发的事件。它的成员属性取决于触发事件的应用程序。通常只有歌曲名称、歌手以及媒体类型是可用的，其他数据也许都不可用。你的壁纸应选择性地支持这些属性，即使没有提供任何数据，也不应该造成任何问题。

## 属性

### title: String

正在播放的媒体的标题（歌名）。

### artist: String

正在播放的媒体的艺术家名称（歌手名）。

### contentType: String

媒体的类型，可以是音乐、视频或图像。

### albumTitle: String

**可选：** 正在播放的媒体专辑名称

### subTitle: String

**可选：** 正在播放的媒体副标题

### albumArtist: String

**可选：** 正在播放的媒体专辑艺术家

### genres: String

**可选：** 用逗号分割的正在播放的媒体的标签、风格列表。
