---
prev: ../../reference.md
---

# SceneScript Class IThisPropertyObject 

You can access this interface through the global object `thisObject` anywhere in your SceneScript code to access the object this script belongs to.

For example, if you assign a script to the origin property, then `thisObject` will be an [ILayer](/scene/scenescript/reference/class/ILayer) inside that script. If you assign a script to the visibility of an effect, thisObject will be an [IEffect](/scene/scenescript/reference/class/IEffect). Effectively, the type of `thisObject` is dynamic and the auto completion system will dynamically show any static and dynamic properties, like material properties defined in a shader. 
