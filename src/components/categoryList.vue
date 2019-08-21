<template>
  <div class="category_list">
    <div class="category_list_img">
      <img :src="categoryListImg" alt="">
    </div>
    <div class="category_list_title">凡仓劳保用品分类</div>
    <category-list-item v-for="(item, index) in categoryList" :key="index" :sub-list="item"></category-list-item>
  </div>
</template>
<script>
import categoryListItem from '@/components/block/categoryListItem';
import categoryListImg from '@/assets/img/website_index_cpzx.jpg';
export default {
  name: 'category-list',
  data () {
    return {
      categoryList: [],
      categoryListImg: categoryListImg,

    }
  },
  props: {

  },
  computed: {

  },
  components: {
    categoryListItem,

  },
  mounted () {
    this.getCategoryList();
  },
  methods: {
    getCategoryList () {
      this.$get('product/list').then(res => {
        this.categoryList = res.obj || [];
        let activeProductId;
        for (let i = 0, len = this.categoryList.length; i < len; i++) {
          if (this.categoryList[i].productList && this.categoryList[i].productList.length>0) {
            activeProductId = this.categoryList[i].productList[0].id;
            break
          }
        }
        this.$event.$emit('categoryList', activeProductId);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.category_list .category_list_img {
  width: 240px;
  height: 66px;
}
.category_list .category_list_img img {
  width: 100%;
  height: 100%;
}
.category_list .category_list_title {
  height: 46px;
  line-height: 46px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  background-color: #1474ae;
  padding-left: 20px;
  margin-top: 15px;
}
</style>
