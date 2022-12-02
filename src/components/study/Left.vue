<!--
 * @Author: Luenci
 * @Date: 2022-11-29 14:50:26
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-01 11:34:08
 * @FilePath: \vue-study\src\components\Left.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="left-container">
    <h2>我是left</h2>
    <button @click="resetNum()">重置子组件的值为0</button>
    <hr />
    <Mycount :init="9" ref="comCount"></Mycount>
    <hr />
    <button @click="send()">点我传递信息给我的好兄弟</button>
  </div>
</template>

<script>
import eventBus from "./evnetBus.js";

export default {
  data() {
    return { str: "luenci 兄弟组件传值" };
  },
  methods: {
    send() {
      // 通过 eventBus 发送数据
      eventBus.emit("share", this.str);
    },
    resetNum() {
      console.log(this.$refs.comCount);
      this.$refs.comCount.count = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: yellow;
  min-height: 250px;
  flex: 1;
}

h2 {
  color: aqua;
}

// 当使用第三方组件库的时候，如果有修改第三方组件的默认样式需求，需要 /deep/
// 父组件中直接改造子组件的样式
:deep(h5) {
  color: green;
}
</style>
