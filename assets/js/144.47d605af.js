(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{504:function(e,a,t){"use strict";t.r(a);var s=t(26),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"scenescript-media-integration-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scenescript-media-integration-events"}},[e._v("#")]),e._v(" SceneScript Media Integration Events")]),e._v(" "),t("p",[e._v("SceneScript offers multiple media integration events that allow you to access information about currently playing music or videos on the system. This will only be available for media players that integrate with the global Windows media system. Some media players require this feature to be turned on first.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("Please note")]),e._v(" "),t("p",[e._v("Some media data is not available in certain audio players. Always build your wallpapers in a way that they do not break when the feature is disabled or if certain data points are unavailable.")])]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#mediastatuschanged"}},[e._v("mediaStatusChanged")])]),t("li",[t("a",{attrs:{href:"#mediaplaybackchanged"}},[e._v("mediaPlaybackChanged")])]),t("li",[t("a",{attrs:{href:"#mediapropertieschanged"}},[e._v("mediaPropertiesChanged")])]),t("li",[t("a",{attrs:{href:"#mediathumbnailchanged"}},[e._v("mediaThumbnailChanged")])]),t("li",[t("a",{attrs:{href:"#mediatimelinechanged"}},[e._v("mediaTimelineChanged")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"mediastatuschanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mediastatuschanged"}},[e._v("#")]),e._v(" mediaStatusChanged")]),e._v(" "),t("p",[e._v("This event function will be called when the media integration is turned on or off by the user in the app settings. The event parameter is a "),t("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/MediaStatusEvent"}},[e._v("MediaStatusEvent")]),e._v(". You can utilize this to adapt your wallpaper for users who choose not to use this feature at all.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mediaStatusChanged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MediaStatusEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"mediaplaybackchanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mediaplaybackchanged"}},[e._v("#")]),e._v(" mediaPlaybackChanged")]),e._v(" "),t("p",[e._v("This event function will be called when the users starts, stops or pauses media playback. The event parameter is a "),t("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPlaybackEvent"}},[e._v("MediaPlaybackEvent")]),e._v(". You can use the class constants to check for the appropriate state. For example: "),t("code",[e._v("event.state == MediaPlaybackEvent.PLAYBACK_PLAYING")]),e._v(", see the "),t("code",[e._v("MediaPlaybackEvent")]),e._v(" class for more information.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mediaPlaybackChanged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MediaPlaybackEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"mediapropertieschanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mediapropertieschanged"}},[e._v("#")]),e._v(" mediaPropertiesChanged")]),e._v(" "),t("p",[e._v("This event function will be called when the properties of the currently playing media change. It contains text information such as the song title, artist name, album name and more. All information are supplied by the "),t("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/MediaPropertiesEvent"}},[e._v("MediaPropertiesEvent")]),e._v(" parameter.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mediaPropertiesChanged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MediaPropertiesEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"mediathumbnailchanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mediathumbnailchanged"}},[e._v("#")]),e._v(" mediaThumbnailChanged")]),e._v(" "),t("p",[e._v("This event function will be called when the thumbnail of the currently playing media changes. The event parameter is a "),t("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/MediaThumbnailEvent"}},[e._v("MediaThumbnailEvent")]),e._v(" and also contains additional information, such as primary, secondary and tertiary colors used in the album art which you can utilize in your wallpaper.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mediaThumbnailChanged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MediaThumbnailEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"mediatimelinechanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mediatimelinechanged"}},[e._v("#")]),e._v(" mediaTimelineChanged")]),e._v(" "),t("p",[e._v("This event function will be called when the current time of the playing media changes. The event parameter is a "),t("a",{attrs:{href:"/wallpaper-engine-docs/scene/scenescript/reference/class/MediaTimelineEvent"}},[e._v("MediaTimelineEvent")]),e._v(". "),t("strong",[e._v("Please note:")]),e._v(" Not all media players support this feature, make sure your wallpaper also works fine when this function is never called.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mediaTimelineChanged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" MediaTimelineEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);