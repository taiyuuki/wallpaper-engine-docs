# Display Conditions for Properties

Especially if you add a large number of properties, the property list can quickly become difficult to navigate for your users. Using *display conditions*, you can conditionally hide certain properties and only show them when they are relevant.

For example, let's say you have added a clock to your wallpaper and you want to add two options to your wallpaper: One property to completely disable the clock and one to toggle between a 24 hour and a 12 hour clock system. In that case, it would make sense to hide the 24h option whenever the clock is disabled, as the option becomes irrelevant to the user in that case.

To achieve this, first create the clock property and note down its key. In our example, let's assume property key is `showclock`. After the property exists, create a new property called *24H Clock*. On the property creation page, you will see the option to configure a *display condition*. This allows you to write a JavaScript-compatible `if` condition that decides when a property is visible to a user.

In our case, we want to depend the visibility on the value of `showclock`, so we set the display condition to depend on the `value` of that property being `true`:

```js
showclock.value == true
```

This way, our *24H Clock* property will only be visible whenever the user has also enabled the *Show Clock* property. You can see the implementation and the result in action in the following video:

<video width="80%" style="margin: 0 auto;display: block;" controls loop autoplay>
  <source :src="$withBase('/videos/web_display_condition.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
