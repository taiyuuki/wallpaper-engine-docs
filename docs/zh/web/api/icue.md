---
prev: rgb.md
---

# Additional Corsair iCUE functions

Wallpaper Engine also allows you to access specific Corsair iCUE SDK functions directly, though this is specifically limited to iCUE. This is likely not necessary for the large majority of use-cases and the advice in the general [RGB Hardware Support](/web/api/rgb) guide should suffice for most cases.

## Function overview

The following functions are available via the `window.cue` object. Make sure to first check if the `cue` plugin is loaded via the `window.wallpaperPluginListener` as explained in the [RGB Hardware Support](/web/api/rgb) article.

In order to work with this guide, you need to look at the source code of the iCUE C++ SDK in cases where we mention certain files or functions below. A simple web search will usually allow you to find the source code, as it is open source.

### getProtocolDetails

Returns current status and version of iCUE SDK.

**C++ SDK equivalent to `CorsairProtocolDetails` returned after handshake with iCUE.**

```js
window.cue.getProtocolDetails(function (protocolDetails) {});
```

See `CorsairProtocolDetails` in C++ SDK.

`protocolDetails` members:
* sdkVersion
* serverVersion
* sdkProtocolVersion
* serverProtocolVersion
* breakingChanges

### getDeviceCount
Returns the number of recognized iCUE compatible devices on the system.

**C++ SDK equivalent to `CorsairGetDeviceCount();`**

```js
window.cue.getDeviceCount(function (deviceCount) {});
```

### getDeviceInfo
Returns all information specific to a single device.

**C++ SDK equivalent to `CorsairGetDeviceInfo();`**

```js
window.cue.getDeviceInfo(deviceIndex, function (deviceInfo) {});
```

`deviceInfo` members:
* type: see CorsairDeviceType in CUESDK.h
* model: human readable name of the device
* physicalLayout: see CorsairPhysicalLayout in CUESDK.h
* logicalLayout: see CorsairLogicalLayout in CUESDK.h
* ledCount: number of available LEDs
* capsMask: see CorsairDeviceCaps in CUESDK.h

### getLedPositionsByDeviceIndex
Returns all available LED information for specified device.

**C++ SDK equivalent to `CorsairGetLedPositionsByDeviceIndex();`**

```js
window.cue.getLedPositionsByDeviceIndex(function (arrayOfLEDs) {});
```

See `CorsairLedPosition` in C++ SDK.

Members of objects in `arrayOfLEDs` array:

* ledId: CorsairLedId as integer
* ledIdName: CorsairLedId as string
* top: value in mm
* left: value in mm
* width: value in mm
* height: value in mm

### setLedsColorsAsync
Updates all LEDs specified via parameter. List all available LEDs via `getLedPositionsByDeviceIndex` above.

**C++ SDK equivalent to `CorsairSetLedsColorsAsync();`**

```js
window.cue.setLedsColorsAsync(arrayOfLEDColors);
```

Members of objects in `arrayOfLEDColors` array (see `CorsairLedColor` in C++ SDK):
* ledId: CorsairLedId as integer
* r
* g
* b

### setAllLedsColorsAsync
Updates all LEDs for given devices to one specific color.

**C++ SDK equivalent to `CorsairSetLedsColorsAsync();`**

```js
window.cue.setAllLedsColorsAsync(deviceIndexOrArray, LEDColor);
```


Members of `LEDColor` (see `CorsairLedColor` in C++ SDK):
* ledId: CorsairLedId as integer
* r
* g
* b

### setLedColorsByImageData
Updates all LEDs of given devices based on an RGB bitmap provided from an HTML canvas, for example.

```js
window.cue.setLedColorsByImageData(deviceIndexOrArray, encodedImageData, width, height);
```

This function is very similar to `window.wpPlugins.led.setAllDevicesByImageData` as explained in the main [RGB Hardware Support](/web/api/rgb) guide. The main difference is that it requires you to supply a specific `deviceIndexOrArray` as the first parameter.