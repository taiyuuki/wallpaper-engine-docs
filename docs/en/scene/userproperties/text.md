# Text Input User Property

A **Text Layer** in Wallpaper Engine allows you to enter any type of free text, including emoji characters. With the help of a text input property, you can allow users to enter a custom text on your wallpaper.

First, create a new text layer through the **Add Asset** menu on the left-hand side. Select your text layer and next to the **Text** option, click on **Bind User Property**. Select **Add Property** to create a new user property of the **Text** type. You will be asked to enter a **Title** which will later be visible to your users. In our example, we'll name it **Center Text** though you should find a fitting name for your use-case. We also add a default value, which is what will be displayed when a user uses the wallpaper for the first time.

This already suffices to set up a customizable text field. After confirming the user property, you can click on **File** in the upper left corner and then select **Apply Wallpaper**. You will now find a text input with your default value in the properties list of your wallpaper. Typing in new text will change the visible text on the wallpaper in real time.

You can see the full process for this in the following video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/property_textinput.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
