# Creating a Web Wallpaper

In order to import a web-based wallpaper project, first place your main HTML file in a folder next to all files that are required for your wallpaper. Wallpaper Engine reads all files from the selected directory and all subdirectories which can cause the process to freeze if you accidentally import a lot of unrelated files. 

::: danger Important
Be sure to place your HTML file and all relevant files in a dedicated project folder before starting the import.
:::

Once you have set up a project directory, simply drag and drop the main HTML file into the **Create Wallpaper** button in the Wallpaper Engine editor. This will start the import process and copy all your files into the Wallpaper Engine project directory. Be aware that this makes a copy of your files and places it in the `wallpaper_engine\projects\myprojects\` directory. You can view and edit the copied files by clicking on **Edit** and then **Open in Explorer** at the top of the Wallpaper Engine editor.

<video width="100%" controls loop autoplay>
  <source src="/videos/web_new_project.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You will also notice that Wallpaper Engine creates a `project.json` file in the main directory of your web project. This file contains some project-specific configurations, such as a list of all of your [user properties](/web/customization/properties).

You can publish your wallpaper by clicking on **Workshop** at the top of the editor menu and then **Share wallpaper on Workshop**. Going through this process again while using the same Wallpaper Engine project will cause an update to your existing wallpaper to be published to all users. 

## Before Getting Started

When creating a web-based wallpaper, avoid loading any important wallpaper files from the web unless absolutely necessary. You should bundle any images, HTML, CSS and JavaScript files (including JavaScript frameworks) alongside your wallpaper so that all files are loaded locally. This ensures that your wallpaper does not break if a user is temporarily offline or if the server hosting your files is not reachable for any reason.

You should also make sure that your wallpaper scales well across different resolutions and aspect ratios, web wallpapers should dynamically scale across any type of screen, be sure to also check ultra-wide resolutions with less common aspect rations such as 21:9.