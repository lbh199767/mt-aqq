<template>
  <div class="search-panel">
      <el-col class="m-header-searchbar">
        <el-col :span="3" class="left">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </el-col>
        <el-col :span='15' class="center">
          <div class="wrapper">
            <el-input v-model='input' placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </div>
          <p class="suggest">
            <a href="#">京东第一温泉度假村</a>
            <a href="#">99旅馆连锁</a>
            <a href="#">尚可优快捷酒店</a>
            <a href="#">7天连锁酒店</a>
          </p>
        </el-col>

      </el-col>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  @import '@/assets/css/public/header/index.scss';
  @import '@/assets/css/public/header/search.scss';
</style>