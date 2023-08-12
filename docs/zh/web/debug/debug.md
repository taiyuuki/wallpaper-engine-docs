# Web Wallpaper Debugging

If you are running into any unintended behavior or are simply in the middle of developing your wallpaper, it may be useful to utilize the debugging capabilities of a web browser. Wallpaper Engine's internal browser is based on the *Chromium Embedded Framework (CEF)*, so you should use **Google Chrome** for this purpose.

Setting debugging up is quite simple. First open up the Wallpaper Engine settings and navigate to the **General** tab. Towards bottom, you will find the option **CEF devtools port** where you can enter a web port of your choice. We recommend using port 8080 but if you have any tools utilizing that port already, you can try another port.

Next up, open up your browser and type `localhost:8080` (or whatever port you have used instead of `8080`) into it. You will be presented with a page that gives you an overview over files that can be debugged. Click on the main file of your wallpaper and you should immediately see a debugging preview in your browser, as if you are browsing the web page. You can use the inspect tools as you can with other apps, which is especially useful for reading console output and debugging individual page elements that make up your wallpaper. Keep in mind that you will always need to go back to the main `localhost:8080` page whenever you reload the wallpaper in Wallpaper Engine, as the page you are debugging changes internally.

You can find a video below showcasing this process.

<video width="100%" controls loop autoplay>
  <source :src="$withBase('/videos/web_debugging.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
