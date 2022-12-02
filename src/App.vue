<!--
 * @Author: Luenci
 * @Date: 2022-11-28 17:55:24
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-02 15:13:48
 * @FilePath: \vue-study\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Headers></Headers>
      </el-header>
      <el-container>
        <el-main>
          <Goods
            v-for="item in goods"
            :key="item.id"
            :title="item.goods_name"
            :price="item.goods_price"
            :image="item.goods_img"
            :isChecked="item.goods_state"
            :id="item.id"
            @stateChange="getState"
          ></Goods>
        </el-main>
      </el-container>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Headers from "@/components/Header/Headers.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";
import axios from "axios";

export default {
  data() {
    return { goods: [] };
  },
  methods: {
    async getGoods() {
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      if (res.status === 200) {
        this.goods = res.list;
      }
    },
    getState(e) {
      // 监听子组件的传值，然后触发的逻辑
      this.goods.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
  },
  created() {
    this.getGoods();
  },
  components: {
    Headers,
    Goods,
    Footer,
  },
};
</script>

<style lang="less"></style>
