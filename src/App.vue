<template>
  <div id="app">
    <div class="app_index_banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="(item, index) in carouselImgList" :interval="10000" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <search-tool></search-tool>
    <router-view/>
    <website-link></website-link>
    <website-footer></website-footer>
  </div>
</template>

<script>
import SearchTool from '@/components/searchTool';
import websiteFooter from '@/components/footer';
import websiteLink from '@/components/linkUs';
export default {
  name: 'App',
  data () {
    return {
      carouselImgList: [
        "http://wms.zbering.com/data/formal/img/product/hb/1.jpg",
        "http://wms.zbering.com/data/formal/img/product/hb/2.jpg",
        "http://wms.zbering.com/data/formal/img/product/hb/3.jpg",
        "http://wms.zbering.com/data/formal/img/product/hb/4.jpg"
      ]
    }
  },
  components: {
    SearchTool,
    websiteFooter,
    websiteLink,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0; 
  font-size: 14px;
  color: #555555;
  box-sizing: border-box;
}

</style>
