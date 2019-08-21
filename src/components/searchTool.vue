<template>
  <div class="search_tool">
    <div class="search_tool_content">
      <div class="left">
        <img :src="SearchToolImg" alt="">
      </div>
      <div class="middle left_border">
        <div class="middle_search_input">
          <input v-model="searchParams.keyWord" placeholder="请输入产品名称" />
          <!-- <select name="searchType" id="" v-model="searchParams.type">
            <option value="product">产品</option>
            <option value="news">资讯</option>
          </select> -->
          <button @click="searchAction">搜  索</button>
        </div>
        <p class="middle_search_keywords">
          {{'关键字：' + keyWords.join('、')}}
        </p>
      </div>
      <div class="right left_border">
        <img :src="Phone" alt="电话标志">
        <span>销售热线：</span>
        <span>{{hotLine}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import SearchToolImg from '@/assets/img/search_tool_left.jpg';
import Phone from '@/assets/img/phone.jpg';

export default {
  name: 'searchTool',
  data () {
    return {
      searchParams: {
        keyWord: '',
        type: 'product'
      },
      SearchToolImg: SearchToolImg,
      Phone: Phone,
      keyWords: ['呼吸器', '防化服', '检测仪', '面罩', '滤毒盒'],
      hotLine: '0513-83504579',
    }
  },
  props: {

  },
  computed: {

  },
  mounted () {

  },
  methods: {
    searchAction () {
      this.$event.$emit('searchEvent', this.searchParams);
    }
  }
}
</script>
<style scoped>
.search_tool {
  width: 100%;
  background-color: #efefef;
  border-bottom: 1px solid #dedede;
}
.search_tool .search_tool_content {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
}
.search_tool .search_tool_content .left_border {
  border-left: 1px solid #cccccc;
}
.search_tool .search_tool_content>div {
  height: 60px;
  padding-left: 20px;
}
.search_tool .search_tool_content .left {
  width: 350px;
  float: left;
}
.search_tool .search_tool_content .middle {
  width: 500px;
  float: left;
  padding: 0 60px;
}
.middle_search_input {
  height: 35px;
  margin-bottom: 5px;
  border: 1px solid #cccccc;
}
.middle_search_keywords {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.middle_search_input input, .middle_search_input select, .middle_search_input button {
  border: none;
  width: 60px;
  height: 33px;
  display: inline-block;
}
.middle_search_input input {
  /* width: 240px; */
  /* 如果存在select则宽度为240px */
  width: 300px;
  height: 32px;
  margin-top: -1px;
  margin-right: -4px;
}
.middle_search_input select {
  margin-right: -4px;
}
.middle_search_input button {
  width: 77px;
  cursor: pointer;
}
.search_tool .search_tool_content .right {
  width: 350px;
  float: left;
  position: relative;
}
.search_tool .search_tool_content .right img {
  position: absolute;
}
.search_tool .search_tool_content .right span {
  display: block;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  color: #000000;
  padding-left: 60px;
}
</style>
