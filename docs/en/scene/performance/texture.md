# Texture Optimization

Reducing the memory required to display images will improve the performance and compatibility of wallpapers. Some systems may have a limited amount of VRAM (graphics card memory). If a wallpaper exceeds the graphics card memory, it can make the whole desktop unusable and sluggish on some systems. As a general guideline, we recommend using around 300 MB VRAM or less for great performance. Using less than 500 MB is also still acceptable but you should try and not exceed this limit for optimal performance.

## Checking Texture Memory Usage

You can check the currently required texture memory in the editor by clicking on **View** in the top menu row and then enabling the **Show Stats** option. The stats will then be displayed in the scene window in the **Active texture memory** row.

![Scene Stats](/wallpaper-engine-docs/img/performance/Stats.png)

## Keep Texture Resolutions Low

The first step in optimizing your project is to reduce the overall size of textures you import. You should make sure the background image itself is only as big as you really need it to be, typically it should be exactly the size of a common screen resolution such as 1920x1080 (Full HD) or 3840x2160 (4K UHD). See our [Project Resolution Guide](/performance/resolution) for more infos.

Additionally, when using image layers, always make sure they are as small as needed. Wallpaper Engine will automatically suggest that you crop imported image layers to a resolution that is *as small as possible* for that layer. This will also automatically re-adjust the position of the layer to account for the space that was removed. We strongly recommend you make use of this functionality, especially on high-resolution wallpapers (4K UHD and larger), this can significantly reduce the VRAM usage:

![Crop Imported Layers](/wallpaper-engine-docs/img/performance/Cropping.png)

By default, Wallpaper Engine also adds a padding to each cropped image layer. This is to account for image effects that go beyond the object itself. The padding also uses a bit of VRAM, so if you know you will not use any effects that go beyond the initial size of the layer, you can also set it to 0 (or if you need more padding, increase it as needed).

## Optimize Texture Format

Graphics cards do not support rendering of common image formats like JPEG and PNG, so Wallpaper Engine has to convert them into a compatible format first. In video memory these images are decompressed which means they require significantly more memory than the original file size.

By default, when importing a new image into an existing wallpaper, Wallpaper Engine will suggest to use no compression (*"RGBA8888"*). However, different compression methods called *DXT5* (*"Good Performance"*) and *DXT1* (*"High Performance"*) can be displayed by graphics cards and will occupy only a quarter of memory compared to an uncompressed image.

The first background image is always imported without compression to provide the highest quality and simplify the process, but you can always re-import it later and then choose a different compression if you like.

::: tip
No one likes low-quality wallpapers but the compressions in Wallpaper Engine are hardly noticeable for many use-cases. We suggest you simply give the compression methods a try - it's not as bad as it sounds and especially on more complex wallpapers, it can significantly boost the performance!
:::

You can choose the compression method when importing a new image:

![Import Texture Compression](/wallpaper-engine-docs/img/performance/Import_compression.png)

### Optimizing an Existing Layer

If you want to apply DXT5 compression to an existing layer, you can do so easily. Select your layer and scroll down to the **Advanced Texture Settings** button on the right-hand side. Click on the button, then next to the **Albedo** texture, click on the cogwheel icon and select **Texture Properties**. Now look for the **Format** option and change it to **DXT5**. Accordingly, you should see a reduction in the **Video memory** statistic above. See a video of this process here:

<video width="100%" controls autoplay loop>
  <source src="/videos/texture_format_change.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Further Optimize DXT5 and DXT1 Textures

Compressed DXT5 and DXT1 textures need to have a resolution of a power of two *(1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192 etc.)* to be displayed by your computer. Wallpaper Engine will quietly take care of this in the background and add invisible pixels to fill in the missing pixels. However, the amount of memory required increases (though it will always be better than using an uncompressed image).

In the following example a normal 1920 x 1080 image was imported as DXT5. It has to be padded to a resolution of 2048 x 2048, because that's the next power of two for 1920 and 1080. As you can see, there are a ton of black pixels in the example, half of the memory used is practically wasted.

![Texture Padding](/wallpaper-engine-docs/img/performance/Power_of_two_padding.png)

You should consider reducing the height of the image to 1024, then Wallpaper Engine can create a 2048 x 1024 texture instead, that's only half the memory that was needed before.

Of course this means that your actual image has a smaller resolution as well, so you need to decide if and how this trade-off works for you. You can scale the layer in Wallpaper Engine to correct for this reduction in size by 1.055 (which is 1080 / 1024):

![Texture Padding](/wallpaper-engine-docs/img/performance/Fix_optimized_scale.png)

::: tip
If you optimized the background image like this, check your project resolution in the editor by clicking on **Edit** in the menu bar at the top and then **Project Settings**. You can verify and change project resolution there, if it is misconfigured, your image might be cut off unintentionally.
:::













