<!--
 * @Author: Luenci
 * @Date: 2022-11-29 14:50:26
 * @LastEditors: Luenci
 * @LastEditTime: 2022-11-30 18:16:58
 * @FilePath: /demo-frist/src/components/Right.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="right-container">
    <h2>我是 right---{{ count }}</h2>
    <h3>从好兄弟的接受信息 {{ msgFromBro }}</h3>
    <button @click="add()">+1</button>
    <hr />
  </div>
</template>

<script>
import eventBus from "./evnetBus.js";

export default {
  data() {
    return {
      count: 0,
      msgFromBro: "",
    };
  },
  methods: {
    add() {
      this.count += 1;
      // 修改数据时，通过 $emit() 触发自定义事件
      this.$emit("numchange", this.count);
    },
  },
  created() {
    // 为 bus 绑定自定义事件
    eventBus.on("share", (val) => {
      this.msgFromBro = val;
      console.log(val);
    });
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: olivedrab;
  min-height: 250px;
  flex: 1;
}
</style>
