<template>
  <div class="list">
    <div class="category">
      <news-category @getNewsList="getList"></news-category>
    </div>
    <div class="news-list">
      <div class="news-item" v-for="(news, index) in newsList" :key="index">
        <div class="date">
          <div class="top">{{ news.modifyTime | dateHandleYM }}</div>
          <div class="bottom">{{ news.modifyTime | dateHandleD }}</div>
        </div>
        <div class="content">
          <h3 class="title" @click="goToDetail(news.id)">{{ news.name }}</h3>
          <div class="detail">{{ news.content }}</div>
        </div>
      </div>
      <el-pagination 
        background 
        layout="total,prev,pager,next" 
        :total="paginationObj.rowCount" 
        :page-size="paginationObj.pageSize"
        @current-change="handleCurrentChange"
        style="text-align: right; margin-bottom: 50px;"></el-pagination>
    </div>
  </div>
</template>
<script>
import NewsCategory from '../../components/newsCaterogy'
export default {
  name: 'news-list',
  data () {
    return {
      nowTab: 'hydt',
      newsList: [],
      paginationObj: {},
      searchParams: {
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  mounted () {

  },
  components: {
    NewsCategory
  },
  methods: {
    getList (data) {
      this.nowTab = data;
      this.getNewsList();
    },
    getNewsList () {
      this.$get(`news/list?topic=${this.nowTab}`, this.searchParams).then(res => {
        if (res.success) {
          this.newsList = res.obj.datas;
          this.paginationObj = Object.assign({}, res.obj.pagination);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    handleCurrentChange (e) {
      this.searchParams.currentPage = e;
      this.getNewsList()
    },
    goToDetail (_id) {
      console.log(_id)
      this.$router.push({ path: `/newsdetail/${_id}` })
    }
  }
}
</script>
<style scoped>
.list {
  width: 1200px;
  margin: 10px auto 0;
  overflow: hidden;
}
.category {
  width: 240px;
  padding-bottom: 100px;
  float: left;
}
.news-list {
  width: 920px;
  float: right;
}
.news-item {
  overflow: hidden;
  margin-bottom: 25px;
}
.date {
  width: 124px;
  float: left;
}
.news-item:hover .top {
  background: #1474ae;
}
.news-item:hover .bottom {
  color: #1474ae;
}
.top {
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  background: #aeaeae;
}

.bottom {
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 32px;
  color: #555555;
  background: #e6e6e6;
}
.content {
  width: 754px;
  float: right;
  padding-bottom: 26px;
  border-bottom: 1px dashed #dedede;
}
.title {
  height: 26px;
  line-height: 26px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
}
.title:hover {
  color: #1474ae;
}
.detail {
  margin-top: 12px;
  line-height: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
