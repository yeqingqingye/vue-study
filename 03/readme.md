## class和vue的:class 能共存，vue的class的优先级比本身class高
## 绑定class一共有3中方式（也可以把数据绑定在计算属性上 不一定一点要绑在data里面）
- 1-直接向给元素绑定属性那样直接动态绑定class  eg: :class='aa' 不用判断真假
- 2-向class绑定一个对象，来动态的切换class eg: :class='{active:isActive}' isActive为true 则显示 isActive为false 则不显示,如果是多个的话 就直接往对象里面写,当数据发生变化时
- 3-向class来动态绑定一个数组 数组里面的值就是vue里面动态的数据

## v-for迭代循环
- 能够循环数组 (item,index) in item
- 能够循环对象 (item in obj)
- 数组中能够触发视图更新的方法: push pop shift unshift splice sort reverse
- 对于动态添加一条的数组或者对象 这vue不是响应式的 所以需要有 vm.$set(要加的数组/对象，key/index , 值);
- 如果想要显示一个数组的过滤的或者排序的版本 而不改变原来的数据 可以用计算出来的属性来代替数组（computed）在计算属性不合适的情况下 也可以用methods定义一个方法 来代替当前数组

## keydown / keyup
- keydown是键盘按下触发 vue的input中v-model的值是你按下之前的值
- keyup是键盘抬起时触发 vue的input中v-model的值是你按下之后的值
