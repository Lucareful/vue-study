<!--
 * @Author: Luenci
 * @Date: 2022-11-30 14:11:59
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-01 11:19:37
 * @FilePath: \vue-study\src\components\Test.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="test-container">
    <h4>Test 组件的 ip 地址为: {{ ip }}</h4>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      message: "hello test Vue.js",
      ip: "",
    };
  },
  methods: {
    show() {
      console.log("调用了 Test 组件的 Show 方法！");
    },
    initInfo() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        const result = JSON.parse(xhr.responseText);
        this.ip = result.ip;
      });
      xhr.open("GET", "https://forge.speedtest.cn/api/location/info");
      xhr.send();
    },
  },
  beforeCreate() {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
  },
  created() {
    console.log(this.message);
    this.initInfo();
  },
  mounted() {
    console.log(this.info);
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: pink;
  height: 200opx;
  h4 {
    color: darkred;
  }
}
</style>
