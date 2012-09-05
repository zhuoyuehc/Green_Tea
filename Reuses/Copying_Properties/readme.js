通过复制属性(copying properties)实现继承分为浅复制和深度复制两种：
浅复制(shallow_copy)实现比较简单，仅遍历父对象的成员并将其复制出来。
深度复制(deep_copy)意味着属性检查，如果即将复制的属性是一个对象或一个数组，它将会递归遍历该属性并且还会将该属性中的元素复制出来。

这种复制模式比较简单且得到了广泛运用。
如Firebug中具有一个名为extend()的方法，该方法就实现浅复制
而jQuery库中的extend()则可创建深度复制的副本。
YUI3提供了一个名为Y.clone()的方法也可创建深度复制的副本，并且还通过将函数绑定到子对象以复制出函数。
复制模式没有涉及任何原型，仅与对象以及它们自身的属性相关


混入(mix-in)模式则是对属性复制实现继承的思想做进一步的扩展。
mix-in模式并不是复制一个完整的对象，而是从多个对象中复制任意的成员并将这些组合成一个新的对象