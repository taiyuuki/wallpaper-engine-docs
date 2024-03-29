const en = require('../../app_strings/en.json');
const zh = require('../../app_strings/zh.json');

module.exports = {
	title: 'Wallpaper Engine - Designer Documentation',
	base: '/wallpaper-engine-docs/',
	locales: {
		"/zh/": {
			lang: 'zh',
			title: zh.title,
			description: zh.description,
		},
		'/en/': {
			lang: 'en',
			title: en.title,
			description: en.description,
		},
	},
	themeConfig: {
		logo: '/img/wallpaper_engine_logo_small.png',
		nextLinks: true,
		prevLinks: true,
		locales: {
			'/en/': {
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.language_name,
				label: en.language_name,
				ariaLabel: en.language_name,
				sidebar: {
					'/en/scene/': getSceneSidebar('/en/', en.sidebar_overview, en.sidebar_gettingstarted, en.sidebar_effects, en.sidebar_assets, en.sidebar_properties, en.sidebar_audio, en.sidebar_particles, en.sidebar_animations, en.sidebar_puppetwarp, en.sidebar_parallax, en.sidebar_rgb, en.sidebar_performance, en.sidebar_scenescript,en.sidebar_models, en.sidebar_shaders, en.sidebar_imagepreparation, en.sidebar_lightingandreflections),
					'/en/web/': getWebSidebar('/en/', en.sidebar_web_overview, en.sidebar_web_first, en.sidebar_web_customization, en.sidebar_web_audio, en.sidebar_web_performance, en.sidebar_web_rgb, en.sidebar_web_debug),
					'/': []
				},
				nav: [
					{ text: en.navbar_scene, link: '/scene/overview' },
					{ text: en.navbar_web, link: '/web/overview' }
				]
			},
			'/zh/': {
				searchPlaceholder: zh.searchPlaceholder,
				selectText: zh.language_name,
				label: zh.language_name,
				ariaLabel: zh.language_name,
				sidebar: {
					'/zh/scene/': getSceneSidebar('/zh/', zh.sidebar_overview, zh.sidebar_gettingstarted, zh.sidebar_effects, zh.sidebar_assets, zh.sidebar_properties, zh.sidebar_audio, zh.sidebar_particles, zh.sidebar_animations, zh.sidebar_puppetwarp, zh.sidebar_parallax, zh.sidebar_rgb, zh.sidebar_performance, zh.sidebar_scenescript, zh.sidebar_models, zh.sidebar_shaders, zh.sidebar_imagepreparation, zh.sidebar_lightingandreflections),
					'/zh/web/': getWebSidebar('/zh/', zh.sidebar_web_overview, zh.sidebar_web_first, zh.sidebar_web_customization, zh.sidebar_web_audio, zh.sidebar_web_performance, zh.sidebar_web_rgb, zh.sidebar_web_debug),
					'/': []
				},
				nav: [
					{ text: zh.navbar_scene, link: '/scene/overview' },
					{ text: zh.navbar_web, link: '/web/overview' }
				]
			}
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['vuepress-plugin-redirect', { locales: true }],
		['vuepress-plugin-smooth-scroll'],
		['sitemap', { hostname: 'https://taiyuuki.github.io/wallpaper-engine-docs' }],
		['robots', {
			host: "https://taiyuuki.github.io/wallpaper-engine-docs",
			allowAll: true,
			sitemap: "/sitemap.xml",
			policies: [
				{
					userAgent: '*',
				}
			]
		},
		],
	]
};

function getSceneSidebar(locale, overviewGroup, gettingStartedGroup, effectsGroup, assetsGroup, propertiesGroup, audioGroup, particlesGroup, animationsGroup, puppetwarpGroup, parallaxGroup, rgbGroup, performanceGroup, scenescriptGroup, modelsGroup, shadersGroup, imagePreparationGroup, lightingGroup) {
	return [
		{
			title: overviewGroup,
			collapsable: false,
			children: [
				locale + 'scene/overview',
			]
		},
		{
			title: gettingStartedGroup,
			collapsable: true,
			children: [
				locale + 'scene/first/gettingstarted',
				locale + 'scene/first/effects',
				locale + 'scene/first/assets',
				locale + 'scene/first/properties',
				locale + 'scene/first/publishing',
			]
		},
		{
			title: effectsGroup,
			collapsable: true,
			children: [
				locale + 'scene/effects/introduction',
				locale + 'scene/effects/overview',
				locale + 'scene/effects/bloom'
			]
		},
		{
			title: assetsGroup,
			collapsable: true,
			children: [
				locale + 'scene/assets/overview',
				locale + 'scene/assets/sharing',
			]
		},
		{
			title: propertiesGroup,
			collapsable: true,
			children: [
				locale + 'scene/userproperties/overview',
				locale + 'scene/userproperties/color',
				locale + 'scene/userproperties/slider',
				locale + 'scene/userproperties/checkbox',
				locale + 'scene/userproperties/combo',
				locale + 'scene/userproperties/text',
				locale + 'scene/userproperties/texture',
			]
		},
		{
			title: audioGroup,
			collapsable: true,
			children: [
				locale + 'scene/audiovisualizer/overview',
				locale + 'scene/audiovisualizer/albumcover',
				locale + 'scene/audiovisualizer/mediainformation'
			]
		},
		{
			title: particlesGroup,
			collapsable: true,
			children: [
				locale + 'scene/particles/introduction'
			]
		},
		{
			title: animationsGroup,
			collapsable: true,
			children: [
				locale + 'scene/timeline/introduction',
				locale + 'scene/timeline/combined',
				locale + 'scene/timeline/modes',
				locale + 'scene/timeline/animationevents'
			]
		},
		{
			title: imagePreparationGroup,
			collapsable: true,
			children: [
				locale + 'scene/image-preparation/external-editor',
				locale + 'scene/image-preparation/foreground-separation',
				locale + 'scene/image-preparation/character-sheet',
			]
		},
		{
			title: puppetwarpGroup,
			collapsable: true,
			children: [
				locale + 'scene/puppet-warp/introduction',
				locale + 'scene/puppet-warp/charactersheet',
				locale + 'scene/puppet-warp/animationmixing',
				locale + 'scene/puppet-warp/perspective',
				locale + 'scene/puppet-warp/boneconstraints',
				locale + 'scene/puppet-warp/interactive',
				locale + 'scene/puppet-warp/inversekinematics',
				locale + 'scene/puppet-warp/blendrules',
				locale + 'scene/puppet-warp/texturechannels',
			]
		},
		{
			title: lightingGroup,
			collapsable: true,
			children: [
				locale + 'scene/lighting/introduction',
				locale + 'scene/lighting/lights',
			]
		},
		{
			title: parallaxGroup,
			collapsable: true,
			children: [
				locale + 'scene/parallax/introduction',
				locale + 'scene/parallax/oversized',
				locale + 'scene/parallax/depthparallax'
			]
		},
		{
			title: rgbGroup,
			collapsable: true,
			children: [
				locale + 'scene/rgb/introduction'
			]
		},
		{
			title: performanceGroup,
			collapsable: true,
			children: [
				locale + 'scene/performance/resolution',
				locale + 'scene/performance/texture'
			]
		},
		{
			title: scenescriptGroup,
			collapsable: true,
			children: [
				locale + 'scene/scenescript/introduction',
				locale + 'scene/scenescript/tutorials',
				locale + 'scene/scenescript/reference',
			]
		},
		{
			title: modelsGroup,
			collapsable: true,
			children: [
				locale + 'scene/models/introduction',
				locale + 'scene/models/animation',
				locale + 'scene/models/camera',
				locale + 'scene/models/fog',
				locale + 'scene/models/lighting',
				locale + 'scene/models/shader',
				locale + 'scene/models/attachment',
				locale + 'scene/models/simulation',
			]
		},
		{
			title: shadersGroup,
			collapsable: true,
			children: [
				locale + 'scene/shader/overview',
				locale + 'scene/shader/syntax',
				locale + 'scene/shader/variables',
				locale + 'scene/shader/headers',
				locale + 'scene/shader/mobile',
				locale + 'scene/shader/tutorials/desaturation'
			]
		}
	]
}

function getWebSidebar(locale, introGroup, gettingStartedGroup, customizationGroup, audioGroup, performanceGroup, rgbGroup, debugGroup) {
	return [
		{
			title: introGroup,
			collapsable: false,
			children: [
				locale + 'web/overview',
			]
		},
		{
			title: gettingStartedGroup,
			collapsable: false,
			children: [
				locale + 'web/first/gettingstarted',
			]
		},
		{
			title: customizationGroup,
			collapsable: false,
			children: [
				locale + 'web/customization/properties',
				locale + 'web/customization/displaycondition',
				locale + 'web/customization/localization'
			]
		},
		{
			title: audioGroup,
			collapsable: false,
			children: [
				locale + 'web/audio/visualizer',
				locale + 'web/audio/media',
			]
		},
		{
			title: performanceGroup,
			collapsable: false,
			children: [
				locale + 'web/performance/fps'
			]
		},
		{
			title: rgbGroup,
			collapsable: false,
			children: [
				locale + 'web/api/rgb'
			]
		},
		{
			title: debugGroup,
			collapsable: false,
			children: [
				locale + 'web/debug/debug'
			]
		}
	]
}
