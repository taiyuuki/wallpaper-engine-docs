# Wallpaper Engine 设计人员文档中文版

fork自官方文档：[wallpaper-engine-docs](https://github.com/Wallpaper-Engine-Team/wallpaper-engine-docs)

查看地址：https://taiyuuki.github.io/wallpaper-engine-docs/zh/

在线地址访问不了的，可以下载本地版：[Github下载地址](../../releases) ，[度盘下载](https://pan.baidu.com/s/1Mb6EHdVV1GOQAT27CqpKuQ?pwd=de80)

提取码：de80

# 翻译进度

翻译暂时告一段落，目前已经基本完成场景壁纸的翻译，3D模型和着色器编程部分我个人不打算翻译，剩下的就是等待官方文档的更新了。

✅表示已翻译，❎表示官方文档尚未创建的内容，其余表示未翻译。

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
│    │    │    ├─ advancedfluidsimulation.md✅
│    │    │    ├─ blend.md✅
│    │    │    ├─ blendgradient.md✅
│    │    │    ├─ blur.md✅
│    │    │    ├─ blurprecise.md✅
│    │    │    ├─ chromaticaberration.md✅
│    │    │    ├─ clouds.md✅
│    │    │    ├─ colorkey.md✅
│    │    │    ├─ cursorripple.md✅
│    │    │    ├─ depthparallax.md✅
│    │    │    ├─ edgedetection.md✅
│    │    │    ├─ filmgrain.md✅
│    │    │    ├─ fire.md✅
│    │    │    ├─ fisheye.md✅
│    │    │    ├─ godrays.md✅
│    │    │    ├─ iris.md✅
│    │    │    ├─ localcontrast.md✅
│    │    │    ├─ motionblur.md✅
│    │    │    ├─ nitro.md✅
│    │    │    ├─ opacity.md✅
│    │    │    ├─ perspective.md✅
│    │    │    ├─ pulse.md✅
│    │    │    ├─ radialblur.md✅
│    │    │    ├─ reflection.md✅
│    │    │    ├─ refraction.md✅
│    │    │    ├─ scroll.md✅
│    │    │    ├─ shake.md✅
│    │    │    ├─ shine.md✅
│    │    │    ├─ skew.md✅
│    │    │    ├─ spin.md✅
│    │    │    ├─ sway.md✅
│    │    │    ├─ swing.md✅
│    │    │    ├─ tint.md✅
│    │    │    ├─ transform.md✅
│    │    │    ├─ twirl.md✅
│    │    │    ├─ vhs.md✅
│    │    │    ├─ waterflow.md✅
│    │    │    ├─ waterripple.md✅
│    │    │    ├─ waterwaves.md✅
│    │    │    └─ xray.md✅
│    │    ├─ introduction.md✅
│    │    └─ overview.md✅
│    ├─ first
│    │    ├─ assets.md✅
│    │    ├─ effects.md✅
│    │    ├─ gettingstarted.md✅
│    │    ├─ properties.md✅
│    │    └─ publishing.md✅
│    ├─ image-preparation
│    │    ├─ character-sheet.md✅
│    │    ├─ external-editor.md✅
│    │    └─ foreground-separation.md✅
│    ├─ lighting
│    │    ├─ introduction.md✅
│    │    └─ lights.md✅
│    ├─ models
│    │    ├─ animation.md
│    │    ├─ attachment.md
│    │    ├─ camera.md
│    │    ├─ fog.md
│    │    ├─ introduction.md
│    │    ├─ lighting.md
│    │    ├─ shader.md
│    │    └─ simulation.md
│    ├─ overview.md✅
│    ├─ parallax
│    │    ├─ depthparallax.md✅
│    │    ├─ introduction.md✅
│    │    └─ oversized.md✅
│    ├─ particles
│    │    ├─ component✅
│    │    │    ├─ children.md❎
│    │    │    ├─ control_point.md❎
│    │    │    ├─ emitter.md✅
│    │    │    ├─ general.md✅
│    │    │    ├─ initializer.md❎
│    │    │    ├─ operator.md❎
│    │    │    └─ renderer.md✅
│    │    ├─ introduction.md✅
│    │    └─ tutorial
│    │           ├─ child_system.md❎
│    │           ├─ control_point.md❎
│    │           ├─ cursor.md❎
│    │           └─ spritesheet.md❎
│    ├─ performance
│    │    ├─ resolution.md✅
│    │    └─ texture.md✅
│    ├─ puppet-warp
│    │    ├─ animationmixing.md✅
│    │    ├─ attachments.md✅
│    │    ├─ blendrules.md✅
│    │    ├─ blendshapes.md✅
│    │    ├─ boneconstraints.md✅
│    │    ├─ charactersheet.md✅
│    │    ├─ interactive.md✅
│    │    ├─ introduction.md✅
│    │    ├─ inversekinematics.md✅
│    │    ├─ perspective.md✅
│    │    └─ texturechannels.md✅
│    ├─ rgb
│    │    └─ introduction.md✅
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
│    │    │           ├─ WEColor.md✅
│    │    │           ├─ WEMath.md✅
│    │    │           └─ WEVector.md✅
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
│    │    ├─ animationevents.md✅
│    │    ├─ combined.md✅
│    │    ├─ introduction.md✅
│    │    └─ modes.md✅
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
```

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
