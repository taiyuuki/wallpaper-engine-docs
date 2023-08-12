# Media Integration

Wallpaper Engine allows you to access information about currently playing music and videos from certain media players, including streaming platforms like Spotify or Tidal. Any application that provides track information through Windows' global media session will work. This feature may have to be enabled in the application playing the content first.

You can typically access a low resolution album cover image, the title and artist of the currently playing content. Some applications may provide additional information, like play time/duration.

## Available media integration listeners

There are several event listeners available to access different type of information, they only get triggered once that specific part of the currently playing media changes. You should ensure that you are registering your listeners immediately, not after a timeout or in `window.onload`. When in doubt, register your listeners at the end of your `body` tag.

The following event listeners are available:

### MediaStatusListener
This event function will be called when the media integration is turned on or off by the user in the app settings. You can utilize this to adapt your wallpaper for users who choose not to use this feature at all.

#### Properties
**enabled**: Boolean
Whether the user has currently enabled the media integration option.
```js
function wallpaperMediaStatusListener(event) {
}
window.wallpaperRegisterMediaStatusListener(wallpaperAudioListener);
```

### MediaPropertiesListener
This event function will be called when the properties of the currently playing media change. It contains text information such as the song title, artist name, album name and more.

#### Properties
**title**: String
Title of the currently playing media.

**artist**: String
Artist of the currently playing media.

**subTitle**: String
Optional sub title of the currently playing media.

**albumTitle**: String
Optional album title of the currently playing media.

**albumArtist**: String
Optional album artist of the currently playing media.

**genres**: String
Optional comma separated list of genres describing the currently playing media.

**contentType**: String
The type of media, can either be `music`, `video` or `image`.

```js
function wallpaperMediaPropertiesListener(event) {
}
window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);
```

### MediaThumbnailListener
This event function will be called when the thumbnail of the currently playing media changes. It contains the thumbnail of the album art and additional information, such as primary, secondary and tertiary colors used in the album art which you can utilize in your wallpaper. The thumbnail string can be set as `src` parameter of an `img` element like this: `document.getElementById('mediaThumbnail').src = event.thumbnail;`

#### Properties
**thumbnail**: String
Base64 encoded PNG string of the current album cover.

**primaryColor**: String
Primary color of the thumbnail image.

**secondaryColor**: String
Secondary color of the thumbnail image.

**tertiaryColor**: String
Tertiary color of the thumbnail image.

**textColor**: String
Text color guaranteed to have sufficient contrast with primary color. May be secondary or tertiary color when possible.

**highContrastColor**: String
Black or white, depending on what has higher contrast with the primary color.

```js
function wallpaperMediaThumbnailListener(event) {
}
window.wallpaperRegisterMediaThumbnailListener(wallpaperMediaThumbnailListener);
```

### MediaPlaybackListener
This event function will be called when the users starts, stops or pauses media playback. You can use the class constants to check for the appropriate state. For example: `event.state == window.wallpaperMediaIntegration.playback.PLAYING`.

#### Properties
**state**: Number
The current state of the media session. This can be one of three values:

* `window.wallpaperMediaIntegration.PLAYBACK_PLAYING` - Media is actively playing on the system.
* `window.wallpaperMediaIntegration.PLAYBACK_PAUSED` - Media was previously playing, but playback was (temporarily) paused by the user.
* `window.wallpaperMediaIntegration.PLAYBACK_STOPPED` - Media playback is completely stopped.

```js
function wallpaperMediaPlaybackListener(event) {
}
window.wallpaperRegisterMediaPlaybackListener(wallpaperMediaPlaybackListener);
```

### MediaTimelineListener
This event function will be called when the current time of the playing media changes. **Please note:** Not all media players support this feature, make sure your wallpaper also works fine when this function is never called.

#### Properties
**position**: Number
The current position of the track in seconds.

**duration**: Number
The total duration of the track in seconds.

```js
function wallpaperMediaTimelineListener(event) {
}
window.wallpaperRegisterMediaTimelineListener(wallpaperMediaTimelineListener);
```

## Album cover and title example

In the following example, we will display the album cover art along with the title and artist information centered on the page. You can copy and paste the script into a new file named `index.html` and import it in Wallpaper Engine for testing purposes. Normally you would separate .html and .js files, but for this example we are using an embedded JavaScript script to keep it simple.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<style>
			body { margin:0; padding:0; }
			html, body { width:100%; height:100%; overflow:hidden; }
			.container { height:100vh; width:100vw; display: flex; justify-content: center; align-items: center; }
			.box { width: 40vw; height: 30vh; display: flex; }
			.textBox { display: flex; flex-direction: column; justify-content: center; }
			#albumCoverArt { margin-right: 5vw; }
			#trackTitle { font-size: 3vh; margin-bottom: 2vh; font-family: sans-serif; }
			#artist { font-size: 2vh; font-family: sans-serif; }
		</style>
	</head>
	<body>
		<div class="container">
			<div class="box">
				<img id="albumCoverArt"/>
				<div class="textBox">
					<div id="trackTitle" class="text"></div>
					<div id="artist" class="text"></div>
				</div>
			</div>
		</div>
		<script>
		let albumCoverArt = null;
		let trackTitle = null;
		let artist = null;

		function wallpaperMediaPropertiesListener(event) {
			// Update title and artist labels
			trackTitle.textContent = event.title;
			artist.textContent = event.artist;
		}

		function wallpaperMediaThumbnailListener(event) {
			// Update album cover art
			albumCoverArt.src = event.thumbnail;
			document.body.style['background-color'] = event.primaryColor;
			trackTitle.style.color = event.textColor;
			artist.style.color = event.textColor;
		}

		// Find all required elements
		albumCoverArt = document.getElementById('albumCoverArt');
		trackTitle = document.getElementById('trackTitle');
		artist = document.getElementById('artist');

		// Register the media property listener provided by Wallpaper Engine.
		window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);

		// Register the media thumbnail listener provided by Wallpaper Engine.
		window.wallpaperRegisterMediaThumbnailListener(wallpaperMediaThumbnailListener);
		</script>
	</body>
</html>
```
