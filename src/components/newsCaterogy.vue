<template>
  <div class="news-category">
    <div class="now">{{ nowTab || '行业动态' }}</div>
    <div v-for="(item, index) in categoryList" :key="index" @click="clickAction(item.btn, item.name)" class="category-item">
      <span class="arrow"></span>
      <span class="name">{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'news-category',
  data () {
    return {
      nowTab: '行业动态',
      categoryList: [
        { name: '行业动态', btn: 'hydt' },
        { name: '凡仓新闻', btn: 'krd' },
        { name: '防护知识', btn: 'fhzs' }
      ]
    }
  },
  computed: {
    // nowTab () {
    //   console.log(this.$route);
    //   let tabName = '行业动态';
    //   if (this.$route.fullPath.indexOf('krd')) {
    //     tabName = '凡仓新闻';
    //   } else if (this.$route.fullPath.indexOf('fhzs')) {
    //     tabName = '防护知识';
    //   } else {
    //     tabName = '行业动态';
    //   }
    //   return tabName;
    // }
  },
  mounted () {
    console.log('mounted', this.$route);
    let tab = '';
    if (this.$route.fullPath.indexOf('krd')>-1) {
      tab = 'krd';
      this.nowTab = '凡仓新闻';
    } else if (this.$route.fullPath.indexOf('fhzs')>-1) {
      tab = 'fhzs';
      this.nowTab = '防护知识';
    } else {
      tab = 'hydt';
      this.nowTab = '行业动态';
    }
    this.$emit('getNewsList', tab);
  },
  components: {

  },
  methods: {
    clickAction (btn, name) {
      console.log('clickAction', btn);
      this.$router.push({path: `/newslist/${btn}`});
      this.nowTab = name;
      this.$emit('getNewsList', btn);
    }
  }
}
</script>
<style scoped>
.now {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  font-size: 26px;
  text-align: center;
  background: #1474ae;
}
.category-item {
  height: 39px;
  line-height: 39px;
  padding-left: 20px;
  border-bottom: 1px dashed #d7d7d7;
}
.category-item .arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-left: 7px solid #1474ae;
  border-bottom: 7px solid transparent;
  margin-right: 7px;
}
.category-item .name {
  font-size: 16px;
  color: #555555;
  cursor: pointer;
}
.category-item .name:hover {
  text-decoration: underline;
}
</style>
