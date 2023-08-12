---
prev: ../../reference.md
---

# SceneScript Class MediaThumbnailEvent

This object describes a media thumbnail event, which will be fired every time the thumbnail image changes, not between tracks using the same thumbnail image.

## Properties

### hasThumbnail: Boolean

Whether a thumbnail image is available.

### primaryColor: Vec3

Primary color of the thumbnail image as normalized RGB vector.

### secondaryColor: Vec3

Secondary color of the thumbnail image as normalized RGB vector.

### tertiaryColor: Vec3

Tertiary color of the thumbnail image as normalized RGB vector.

### textColor: Vec3

Text color guaranteed to have sufficient contrast with primary color. May be secondary or tertiary color when possible.

### highContrastColor: Vec3

Black or white, depending on what has higher contrast with the primary color.
