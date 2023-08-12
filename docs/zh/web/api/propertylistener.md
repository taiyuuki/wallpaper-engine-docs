# Reference for "wallpaperPropertyListener"

Wallpaper Engine provides a `wallpaperPropertyListener` on the global `window` object which you can use to react to different events. This page gives an overview of all events that are provided by Wallpaper Engine, you can simply create a `wallpaperPropertyListener` with all the callbacks you need for your wallpaper.

::: danger Important
Always make sure to initialize `window.wallpaperPropertyListener` as a global object outside of any events, otherwise it might miss some important property update events when the wallpaper is loaded.
:::

### applyUserProperties

The `applyUserProperties` is triggered whenever a user changes a property that you have added to your wallpaper or when the wallpaper is first loaded. The event only contains properties that have changed their value, so it's important to always check if a property is included like in the example below (`yourproperty` should be replaced with the actual key of your property). Check out the [user property guide](/web/customization/properties) for more information.

```js
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.yourproperty) { // Don't forget to check if the property is included in the event
            // Checkbox / boolean example, change this as needed for your property type
            if (properties.yourproperty.value == true) {
                // Do something if your property is true
            } else {
                // Do something if your property is false
            }
        }
    },
};
```

### applyGeneralProperties

The `applyGeneralProperties` event is triggered whenever a user changes Wallpaper Engine's main settings. It's mainly useful to retrieve the FPS limit configured by the user and allows you to set an FPS limit on your web wallpaper according to the general application settings of the user. Click here to learn more about [setting an FPS limit for web wallpapers](/web/performance/fps).

```js 
window.wallpaperPropertyListener = {
    applyGeneralProperties: function(properties) {
        if (properties.fps) {
            // Add logic to limit your wallpaper to the new FPS settings
        }
    },
};
```

### setPaused

The `setPaused` event is not strictly needed as Wallpaper Engine will fully freeze the process that renders the wallpaper but you may still want to react to pause or unpause events in certain scenarios.

```js
window.wallpaperPropertyListener = {
    setPaused: function(isPaused) {
        if (isPaused) {
            // Do something when paused
        } else {
            // Do something when unpaused
        }
    },
};
```

### userDirectoryFilesAddedOrChanged

This event can be used whenever you use a user property of the type `directory` with `fetchall` mode enabled. The event will include all full file paths to files that have been **added** or **changed** by the user (mainly to mass import images into the wallpaper).

```js
window.wallpaperPropertyListener = {
    userDirectoryFilesAddedOrChanged: function(propertyName, changedFiles) {
        // Do something with the list of added files here
    },
};
```

### userDirectoryFilesRemoved

This event can be used whenever you use a user property of the type `directory` with `fetchall` mode enabled. The event will include all full file paths to files that have been **removed** by the user.

```js
window.wallpaperPropertyListener = {
    userDirectoryFilesRemoved: function(propertyName, removedFiles) {
        // Do something with the list of removed files here
    },
};
```