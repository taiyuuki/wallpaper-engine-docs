# Asset Creation & Sharing

Asset creation and sharing is meant for advanced users to share wallpaper components with new users or for your own purposes. If you want to create an asset for others to re-use in their wallpapers, you first have to enable the asset creation options in the editor. These are hidden by default to avoid that they confuse new users when trying to publish a wallpaper.

## Enable Asset Creation

You can enable asset creation and sharing in the **View** menu by clicking **Enable Asset Creation**. This will enable a few extra buttons throughout the editor that allow you to create new effects and share elements from your wallpaper.

![Enable Asset Creation](/img/assets/Enable.png)

## Sharing Effect or Layer Assets

There will now be a new share option right above the wallpaper share option in the *Workshop* menu. Use the **Share Assets on Workshop** to upload your assets.

![Sharing on Workshop](/img/assets/Share_on_workshop.png)

You can choose between **layers** and **effects** from this menu. If you decide to share layers, you can select multiple layers from your current project that will be uploaded - including any dependencies they have to other assets, like textures, shaders, child particles etc. Just make sure you select all layers that you want to share.

If you decide to share an effect, you can choose a single of your custom effects. Unless you already created a new effect, this menu will be empty.

![Share Menu](/img/assets/Share_menu.png)

If you're sharing multiple layers, you can share them as an asset pack. This option will allow the user to only import one of those layers into their wallpaper and not all at once. This is useful if you want to create a bunch of similar particle effects, for example, but the user is expected to only import one or a few of them and not all together.

![Asset Pack](/img/assets/Asset_pack.png)

## Sharing Scripts

Besides layers and effects, you can also share individual scripts after enabling asset creation. To share a script, open the script editor for the script that you have created already and go to the **Workshop** menu. From there, select **Share Script on Workshop**. From here you will find the familiar Workshop sharing menu to share your script.

![Share Script](/img/assets/Share_script.png)

## Creating New Effects

Enabling asset sharing will also enable the option to create news effects in the **add effects** overview. You can click on thew **New** button to create a new shader effect and you will get started off with a basic shader that does not do anything other than passing through the original image. You can use this blank shader to get started on your own shader.

Alternatively, you can also click on any existing effect and then use the **Duplicate** button. That allows you to create a copy of an existing effect and make changes to it - saving you a ton of work and allowing you to tweak small details of existing effects. If you want to make changes to an existing effect, this makes it a lot easier to create a variation of one.

![Create Effect](/img/assets/Create_effect.png)

::: tip
If you are interested in creating new effects, check out the [shader tutorial on desaturation](/scene/shader/tutorials/desaturation.md) to get started on a new effect and be sure to read the rest of the *Shader Programming* section of this documentation!
:::
