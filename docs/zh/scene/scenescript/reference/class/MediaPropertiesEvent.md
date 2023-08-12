---
prev: ../../reference.md
---

# SceneScript Class MediaPropertiesEvent

This object describes a media properties event that will be fired when the currently playing media session in Windows changes. The available members depend on the application firing the event. Typically only title, artist and contentType will be available, all other data points may be unavailable. Your wallpaper should only support these optionally and it should not break if any of the data points are not supplied.

## Properties

### title: String

Title of the currently playing media.

### artist: String

Artist of the currently playing media.

### contentType: String

The type of media, can either be music, video or image.

### albumTitle: String

**Optional:** Album title of the currently playing media.

### subTitle: String

**Optional:** Subtitle of the currently playing media.

### albumArtist: String

**Optional:** Album artist of the currently playing media.

### genres: String

**Optional:** Comma separated list of genres describing the currently playing media.
