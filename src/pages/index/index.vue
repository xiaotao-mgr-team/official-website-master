<template>
  <div class="website_index">
    <!-- <div class="website_index_banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="(item, index) in carouselImgList" :interval="10000" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <search-tool></search-tool> -->
    <div class="website_index_product">
      <div class="website_index_category_list">
        <category-list></category-list>
      </div>
      <div class="website_index_product_detail">
        <product-detail></product-detail>
      </div>
    </div>
    <company-boost></company-boost>
    <company-introduction></company-introduction>
    <company-news></company-news>
  </div>
</template>
<script>
// import SearchTool from '@/components/searchTool';
import CompanyBoost from '@/components/companyBoost';
import CompanyIntroduction from '@/components/companyIntroduction';
import CompanyNews from '@/components/companyNews';
import CategoryList from '@/components/categoryList';
import productDetail from '@/components/productDetail';

export default {
  name: 'website-index',
  data () {
      return {
        // carouselImgList: [
        //   "http://www.zbering.com/data/formal/img/product/hb/1.jpg",
        //   "http://www.zbering.com/data/formal/img/product/hb/2.jpg",
        //   "http://www.zbering.com/data/formal/img/product/hb/3.jpg",
        //   "http://www.zbering.com/data/formal/img/product/hb/4.jpg"
        // ]
      }
  },
  components: {
    // SearchTool,
    CompanyBoost,
    CompanyIntroduction,
    CompanyNews,
    CategoryList,
    productDetail
  },
  props: {

  },
  computed: {

  },
  mounted () {
    window.xx = this;
  },
  methods: {

  }
}
</script>
<style>
.website_index {
  width: 100%;
}
.website_index .website_index_product {
  width: 1200px;
  margin: 20px auto 40px;
  overflow: hidden;
}
.website_index .website_index_category_list {
  float: left;
  width: 240px;
}
.website_index .website_index_product_detail {
  float: left;
  width: 920px;
  margin-left: 40px;
}
</style>

