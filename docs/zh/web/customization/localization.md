# Property Translation

You can create translations for your properties and property values to make your web wallpaper more accessible to a global audience. Wallpaper Engine will dynamically load the appropriate language according to the language configured in the **General** tab of the Wallpaper Engine settings.

It is a little advanced as it requires you to access the `project.json` that Wallpaper Engine automatically generates into your project directory, so make sure to not break any JSON syntax while you edit it.

To translate properties, open up the `project.json` and add a new object `localization` next to `properties`. This object holds members with the shorthand notation for each language (check the files in the `locale` directory in the `wallpaper_engine` installation directory for all currently available languages).

Next up, you need to change all property labels and property option labels into tokens that start with `ui_`. For example, in the combo property below, we have changed the title of the property to `"ui_backgroundcolor"` and the labels to `"ui_background_color_red"`, `"ui_background_color_green"` and `"ui_background_color_blue"`.

::: tip 
Make sure to all labels start with `ui_`, otherwise Wallpaper Engine will not recognize them as translatable tokens.
:::

In the next step, we have created three blocks for translations in the aforementioned new `localization` object:

One block for English (`en-us`), one for German (`de-de`) and one for Simplified Chinese (`zh-chs`). In the final step, add the translations for each string for each language and save the `project.json`. The changes should become visible the next time you apply the wallpaper in the **Installed** tab of the app (a restart of the user interface may be necessary to load new translations).

```json{13,17,21,26}
{
    "file" : "index.html",
    "general" : 
    {
        "properties" : 
        {
            "backgroundcolor" : 
            {
                "index" : 0,
                "options" : 
                [
                    {
                        "label" : "ui_background_color_red",
                        "value" : "255 0 0"
                    },
                    {
                        "label" : "ui_background_color_green",
                        "value" : "0 255 0"
                    },
                    {
                        "label" : "ui_background_color_blue",
                        "value" : "0 0 255"
                    }
                ],
                "order" : 100,
                "text" : "ui_backgroundcolor",
                "type" : "combo",
                "value" : "255 0 0"
            },
        },
        "localization" : 
        {
            "en-us" :
            {
                "ui_backgroundcolor" : "Background color",
                "ui_background_color_red" : "Red",
                "ui_background_color_green" : "Green",
                "ui_background_color_blue" : "Blue"
            },
            "de-de" :
            {
                "ui_backgroundcolor" : "Hintergrundfarbe",
                "ui_background_color_red" : "Rot",
                "ui_background_color_green" : "Grün",
                "ui_background_color_blue" : "Blau"
            },
            "zh-chs" :
            {
                "ui_backgroundcolor" : "背景颜色",
                "ui_background_color_red" : "红色",
                "ui_background_color_green" : "绿色",
                "ui_background_color_blue" : "蓝色"
            }
        },
    },
    "title" : "Test Project",
    "type" : "web"
}
```