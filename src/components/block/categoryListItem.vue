<template>
  <div class="category_list_item">
    <div class="category_list_item_title">{{subList.name}}</div>
    <div v-for="(item, index) in subList.productList" :key="index" :class="{category_list_item_con: true}" @click="getProductDetail(item.id)">{{item.title}}</div>
  </div>
</template>
<script>
import arrowImg from '@/assets/img/website_index_arrow.jpg';

export default {
  name: 'category-list-item',
  data () {
    return {
      arrowImg: arrowImg
    }
  },
  props: {
    subList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getProductDetail (_id) {
      this.$event.$emit('getProductDetail', _id);
    }
  }
}
</script>
<style scoped>
.category_list_item .category_list_item_title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 48px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #1474AE;
  background: url(../../assets/img/website_index_arrow.jpg) no-repeat 20px 14px;
}
.category_list_item .category_list_item_title:hover {
  background: url(../../assets/img/website_index_arrow_active.jpg) no-repeat 20px 14px;
  color: #1474AE;
}
.category_list_item .category_list_item_con {
  font-size: 13px;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px dotted #dedede;
  padding-left: 60px;
  cursor: pointer;
  background: url(../../assets/img/website_index_arrow.jpg) no-repeat 30px 7px;
}
.category_list_item .category_list_item_con:hover {
  color: #000000;
  /* background: url(../../assets/img/website_index_arrow_active.jpg) no-repeat 30px 7px; */
}
</style>
