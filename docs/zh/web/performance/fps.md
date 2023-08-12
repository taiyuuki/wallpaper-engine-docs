# FPS Limiter

Performance is very important when it comes to wallpapers and you should make sure that if you render any complex content in your web wallpaper that you utilize an FPS limit. This tutorial will explain how you can read and apply the FPS limit the user has set in the *Performance* tab of the Wallpaper Engine application settings. We recommend you apply the FPS limit from there rather than setting an individual FPS limit on your wallpaper.

## Reading the configured FPS Limit

You can utilize the [wallpaperPropertyListener](/web/api/propertylistener) to retrieve the current FPS limit configured by the user. The event is triggered when your wallpaper is loaded and whenever the user changes the general application configuration.

The `wallpaperPropertyListener` provides the `applyGeneralProperties` event. Inside the `properties` parameter, you will find the value `fps` which contains the current FPS limit as a numeric value. In our example, we'll read the value whenever the event is triggered and store it in a `wallpaperSettings` variable. This way, `wallpaperSettings.fps` will always contain an up-to-date FPS limit.

```js 
var wallpaperSettings = {
    fps: 0
};

window.wallpaperPropertyListener = {
    applyGeneralProperties: function(properties) {
        if (properties.fps) {
            wallpaperSettings.fps = properties.fps;
        }
    },
};
```

## Applying the FPS limit

We recommend drawing and updating your content using `window.requestAnimationFrame`. This function informs the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. You can also implement this with `setInterval`, however for the best and most efficient behavior, you should use the aforementioned `requestAnimationFrame`.

In order to limit the FPS, we have to keep track of the time that passes between each frame. In our example, we will declare two utility variables for this purpose:

```js
var last = performance.now() / 1000;
var fpsThreshold = 0;
```

Next up we will have to define our actual rendering function "`run()`". The top part of the function will be an implementation of the FPS limit using `window.requestAnimationFrame`. At the bottom of the function, you will have to add your wallpaper drawing logic to finalize this example.

```js
function run() {
    // Keep animating
    window.requestAnimationFrame(run);

    // Figure out how much time has passed since the last animation
    var now = performance.now() / 1000;
    var dt = Math.min(now - last, 1);
    last = now;

    // If there is an FPS limit, abort updating the animation if we have reached the desired FPS
    if (wallpaperSettings.fps > 0) {
        fpsThreshold += dt;
        if (fpsThreshold < 1.0 / wallpaperSettings.fps) {
            return;
        }
        fpsThreshold -= 1.0 / wallpaperSettings.fps;
    }

    // FPS limit not reached, draw animation!

    /** Place your wallpaper animation logic here! **/
}
```

To finalize this we need to call the `window.requestAnimationFrame` with the `run()` function as a callback in the `window.onload` event:

```js
window.onload = function() {
    window.requestAnimationFrame(run);
};
```

Since the function will continue calling itself at the very beginning of the `run()` function, the animation will run indefinitely at the provided FPS limit.