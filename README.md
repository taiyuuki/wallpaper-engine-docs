# Wallpaper Engine 设计人员文档中文版

fork自官方文档：[wallpaper-engine-docs](https://github.com/Wallpaper-Engine-Team/wallpaper-engine-docs)

查看地址：https://taiyuuki.github.io/wallpaper-engine-docs/

翻译远未完成，欢迎大家贡献翻译。

需要翻译的文件位于[仓库](https://github.com/taiyuuki/wallpaper-engine-docs)的docs目录下的zh文件夹内。

如果对已翻译部分有疑议，可以查看docs目录下的en文件夹，文件结构和zh是一样的，或者也可以在本地运行项目，用浏览器打开，在页面的右上角切换语言。

如果你愿意贡献翻译：

* 建议优先翻译scene下的文件，也就是场景壁纸相关的内容。
* 建议优先翻译目录层级较低的文件。
* 请务必保留原文本的Markdown格式，例如标题（\#+空格+标题）、加粗(\*\*双星号\*\*)、斜体(\*单星号\*)、链接（\[abcdefg\](/abc/def/ghi)）、以及代码块、提示块等等。

# 翻译进度

✅表示已翻译，其余表示未翻译。

```list
zh
├─ README.md✅
├─ scene
│    ├─ assets
│    │    ├─ overview.md✅
│    │    └─ sharing.md✅
│    ├─ audiovisualizer
│    │    ├─ albumcover.md✅
│    │    ├─ mediainformation.md✅
│    │    └─ overview.md✅
│    ├─ effects
│    │    ├─ bloom.md✅
│    │    ├─ effect
│    │    │    ├─ advancedfluidsimulation.md
│    │    │    ├─ blend.md
│    │    │    ├─ blendgradient.md
│    │    │    ├─ blur.md
│    │    │    ├─ blurprecise.md
│    │    │    ├─ chromaticaberration.md
│    │    │    ├─ clouds.md
│    │    │    ├─ colorkey.md
│    │    │    ├─ cursorripple.md
│    │    │    ├─ depthparallax.md
│    │    │    ├─ edgedetection.md
│    │    │    ├─ filmgrain.md
│    │    │    ├─ fire.md
│    │    │    ├─ fisheye.md
│    │    │    ├─ godrays.md
│    │    │    ├─ iris.md
│    │    │    ├─ localcontrast.md
│    │    │    ├─ motionblur.md
│    │    │    ├─ nitro.md
│    │    │    ├─ opacity.md
│    │    │    ├─ perspective.md
│    │    │    ├─ pulse.md
│    │    │    ├─ radialblur.md
│    │    │    ├─ reflection.md
│    │    │    ├─ refraction.md
│    │    │    ├─ scroll.md
│    │    │    ├─ shake.md
│    │    │    ├─ shine.md
│    │    │    ├─ skew.md
│    │    │    ├─ spin.md
│    │    │    ├─ sway.md
│    │    │    ├─ swing.md
│    │    │    ├─ tint.md
│    │    │    ├─ transform.md
│    │    │    ├─ twirl.md
│    │    │    ├─ vhs.md
│    │    │    ├─ waterflow.md
│    │    │    ├─ waterripple.md
│    │    │    ├─ waterwaves.md
│    │    │    └─ xray.md
│    │    ├─ introduction.md✅
│    │    └─ overview.md✅
│    ├─ first
│    │    ├─ assets.md✅
│    │    ├─ effects.md✅
│    │    ├─ gettingstarted.md✅
│    │    ├─ properties.md✅
│    │    └─ publishing.md✅
│    ├─ image-preparation
│    │    ├─ character-sheet.md
│    │    ├─ external-editor.md
│    │    └─ foreground-separation.md
│    ├─ lighting
│    │    ├─ introduction.md
│    │    └─ lights.md
│    ├─ overview.md
│    ├─ parallax
│    │    ├─ depthparallax.md
│    │    ├─ introduction.md
│    │    └─ oversized.md
│    ├─ particles
│    │    ├─ component
│    │    │    ├─ children.md
│    │    │    ├─ control_point.md
│    │    │    ├─ emitter.md
│    │    │    ├─ general.md
│    │    │    ├─ initializer.md
│    │    │    ├─ operator.md
│    │    │    └─ renderer.md
│    │    ├─ introduction.md
│    │    └─ tutorial
│    │           ├─ child_system.md
│    │           ├─ control_point.md
│    │           ├─ cursor.md
│    │           └─ spritesheet.md
│    ├─ performance
│    │    ├─ resolution.md
│    │    └─ texture.md
│    ├─ puppet-warp
│    │    ├─ animationmixing.md
│    │    ├─ blendrules.md
│    │    ├─ boneconstraints.md
│    │    ├─ charactersheet.md
│    │    ├─ interactive.md
│    │    ├─ introduction.md
│    │    ├─ inversekinematics.md
│    │    ├─ perspective.md
│    │    └─ texturechannels.md
│    ├─ rgb
│    │    └─ introduction.md
│    ├─ scenescript
│    │    ├─ introduction.md✅
│    │    ├─ reference
│    │    │    ├─ class
│    │    │    │    ├─ AnimationEvent.md✅
│    │    │    │    ├─ AudioBuffers.md✅
│    │    │    │    ├─ CameraTransforms.md✅
│    │    │    │    ├─ CursorEvent.md✅
│    │    │    │    ├─ IAnimation.md✅
│    │    │    │    ├─ IAnimationLayer.md✅
│    │    │    │    ├─ IAssetHandle.md✅
│    │    │    │    ├─ IConsole.md✅
│    │    │    │    ├─ IEffect.md✅
│    │    │    │    ├─ IEffectLayer.md✅
│    │    │    │    ├─ IEngine.md✅
│    │    │    │    ├─ IImageLayer.md✅
│    │    │    │    ├─ IInput.md✅
│    │    │    │    ├─ ILayer.md✅
│    │    │    │    ├─ IMaterial.md✅
│    │    │    │    ├─ IParticleSystem.md✅
│    │    │    │    ├─ IParticleSystemInstance.md✅
│    │    │    │    ├─ IScene.md✅
│    │    │    │    ├─ ISoundLayer.md✅
│    │    │    │    ├─ ITextureAnimation.md✅
│    │    │    │    ├─ IThisPropertyObject.md✅
│    │    │    │    ├─ IVideoTexture.md✅
│    │    │    │    ├─ Mat4.md✅
│    │    │    │    ├─ MediaPlaybackEvent.md✅
│    │    │    │    ├─ MediaPropertiesEvent.md✅
│    │    │    │    ├─ MediaStatusEvent.md✅
│    │    │    │    ├─ MediaThumbnailEvent.md✅
│    │    │    │    ├─ MediaTimelineEvent.md✅
│    │    │    │    ├─ Shared.md✅
│    │    │    │    ├─ Vec2.md✅
│    │    │    │    └─ Vec3.md✅
│    │    │    ├─ event
│    │    │    │    ├─ applyUserProperties.md✅
│    │    │    │    ├─ cursor.md✅
│    │    │    │    ├─ destroy.md✅
│    │    │    │    ├─ init.md✅
│    │    │    │    ├─ media.md✅
│    │    │    │    ├─ resizeScreen.md✅
│    │    │    │    └─ update.md✅
│    │    │    └─ module
│    │    │           ├─ WEColor.md
│    │    │           ├─ WEMath.md
│    │    │           └─ WEVector.md
│    │    ├─ reference.md✅
│    │    ├─ tutorial
│    │    │    ├─ audio.md✅
│    │    │    ├─ basics.md✅
│    │    │    ├─ colors.md✅
│    │    │    ├─ cursor.md✅
│    │    │    └─ timeofday.md✅
│    │    └─ tutorials.md✅
│    ├─ shader
│    │    ├─ headers.md
│    │    ├─ mobile.md
│    │    ├─ overview.md
│    │    ├─ syntax.md
│    │    ├─ tutorials
│    │    │    └─ desaturation.md
│    │    └─ variables.md
│    ├─ timeline
│    │    ├─ animationevents.md
│    │    ├─ combined.md
│    │    ├─ introduction.md
│    │    └─ modes.md
│    └─ userproperties
│           ├─ checkbox.md✅
│           ├─ color.md✅
│           ├─ combo.md✅
│           ├─ overview.md✅
│           ├─ slider.md✅
│           ├─ text.md✅
│           └─ texture.md✅
└─ web
    ├─ api
    │    ├─ icue.md
    │    ├─ propertylistener.md
    │    └─ rgb.md
    ├─ audio
    │    ├─ media.md
    │    └─ visualizer.md
    ├─ customization
    │    ├─ displaycondition.md
    │    ├─ localization.md
    │    └─ properties.md
    ├─ debug
    │    └─ debug.md
    ├─ first
    │    └─ gettingstarted.md
    ├─ overview.md
    └─ performance
              └─ fps.md
``

# 项目运行

安装依赖

```bash
yarn
```

开发模式运行

```bash
yarn docs:dev
```

打包

```bash
yarn docs:build
```
