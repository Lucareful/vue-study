<!--
 * @Author: Luenci
 * @Date: 2022-11-28 17:55:24
 * @LastEditors: Luenci
 * @LastEditTime: 2022-11-30 16:28:40
 * @FilePath: /demo-frist/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->

<template>
  <div>
    <div class="app-container">
      <h1>APP 根组件 {{ countFromSon }}</h1>
      <hr />
      <Test></Test>
      <hr />
      <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <Left></Left>
        <Right @numchange="getNumCount"></Right>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Test from "@/components/Test.vue";

export default {
  data() {
    return {
      countFromSon: 0,
    };
  },
  methods: {
    getNumCount(val) {
      this.countFromSon = val;
    },
  },
  components: {
    Left,
    Right,
    Test,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
