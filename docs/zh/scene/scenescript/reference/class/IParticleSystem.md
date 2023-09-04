---
prev: ../../reference.md
---

# SceneScript Class IParticleSystem

该类提供访问粒子系统，让你可以修改它们的播放状态。

## 属性

### instance: IParticleSystemInstance

可供修改的实例，更多信息参见 [IParticleSystemInstance](/wallpaper-engine-docs/scene/scenescript/reference/class/IParticleSystemInstance) 。

## 函数

### play(): void

如果播放已经结束，则恢复或重新播放粒子效果。

### pause(): void

暂停粒子效果。

### stop(): void

停止并立即清除所有现有粒子。

### isPlaying(): Boolean

检查是否还有粒子正在发射或模拟。

### emitParticles(count: Number?): void

立即发射指定数量的粒子，不管粒子系统是否处于停止或暂停。