<template>
  <div class="company_news">
    <section-title title="新闻资讯" :sectionTitleImg="newsTitleImg"></section-title>
    <div class="company_news_content">
      <div class="company_news_left">
        <div class="company_news_left_tab">
          <div v-for="(tab, index) in tabList" :key="index" @mouseover="selectTab(tab)" :class="{company_news_tab_item: true, active_tab: index==currentTab}">
            <span @click="geToNewsList(tab.btn)">{{tab.name}}</span>
          </div>
        </div>
        <div class="company_news_left_list">
          <div class="company_news_list_item" v-for="(item, index) in currentTabList" :key="index">
            <div class="news_item_sort">{{['A', 'B', 'C', 'D', 'E'][index]}}</div>
            <div class="news_item_content">
              <div class="news_item_content_info">
                <!-- <a :href="item.url || ''">{{item.title}}</a> -->
                <a href="javascript: void(0)" @click="goToNewsDetail(item.id)">{{item.name}}</a>
                <!-- <span @click="goToNewsDetail(item.id)">{{item.name}}</span> -->
                <span>{{item.modifyTime | dateFormate}}</span>
              </div>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="company_news_right">
        <video :src="videoUrl" width="550" height="350" controls="controls"></video>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/block/sectionTitle';
import newsTitleImg from '@/assets/img/website_index_news.jpg';

export default {
  name: 'company_news',
  data () {
    return {
      videoUrl: 'http://wms.zbering.com/data/formal/video/ship.mp4',
      tabList: [
        {
          name: '行业动态',
          btn: 'hydt',
          url: 'https://www.baidu.com'
        },
        {
          name: '凡仓新闻',
          btn: 'krd',
          url: 'https://www.baidu.com'
        },
        {
          name: '防护知识',
          btn: 'fhzs',
          url: 'https://www.baidu.com'
        }
      ],
      newsList: [], // 凡仓新闻列表
      hangyeList: [], // 行业动态列表
      protectList: [], // 防护知识列表
      currentTabList: [],
      currentTab: 1,
      newsTitleImg: newsTitleImg
    }
  },
  props: {

  },
  computed: {

  },
  components: {
    SectionTitle,

  },
  async mounted () {
    this.currentTabList = await this.getNewsList();
  },
  methods: {
    // 去往新闻列表
    geToNewsList (tab) {
      console.log('geToNewsList', tab)
      this.$router.push({path: `/newslist/${tab}`})
    },
    // 去往新闻详情
    goToNewsDetail (_id) {
      console.log('goToNewsDetail', _id)
    },
    getNewsList () {
      return this.$get('news/list?topic=krd', {}).then(res => {
        if (res.success) {
          this.newsList = res.obj.datas;
          return res.obj.datas;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getHydtList () {
      return this.$get('news/list?topic=hydt', {}).then(res => {
        if (res.success) {
          this.hangyeList = res.obj.datas;
          return res.obj.datas;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getProtectList () {
      return this.$get('news/list?topic=fhzs', {}).then(res => {
        if (res.success) {
          this.protectList = res.obj.datas;
          return res.obj.datas;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    async selectTab (val) {
      switch (val.name) {
        case '行业动态':
          if (this.hangyeList.length==0) {
            this.currentTabList = await this.getHydtList();
          } else {
            this.currentTabList = this.hangyeList;
          }
          this.currentTab = 0;
          break;
        case '凡仓新闻':
          if (this.newsList.length==0) {
            this.currentTabList = await this.getNewsList();
          } else {
            this.currentTabList = this.newsList;
          }
          this.currentTab = 1;
          break;
        case '防护知识':
          if (this.protectList.length==0) {
            this.currentTabList = await this.getProtectList();
          } else {
            this.currentTabList = this.protectList;
          }
          this.currentTab = 2;
          break;
        default:
          if (this.newsList.length=0) {
            this.currentTabList = await this.getNewsList();
          } else {
            this.currentTabList = this.newsList;
          }
          break;
      }
    }
  }
}
</script>
<style scoped>
.company_news {
  width: 100%;
  margin-bottom: 20px;
}
.company_news .company_news_content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 左侧tab按钮样式 */
.company_news .company_news_left_tab {
  width: 140px;
  float: left;
  border: 1px solid #dbdbdb;
  margin-right: 40px;
}
.company_news .company_news_left_tab .company_news_tab_item {
  width: 100%;
  height: 116px;
  line-height: 116px;
  text-align: center;
  cursor: pointer;
}
/* 当前选中的tab */
.company_news .company_news_left_tab .company_news_tab_item.active_tab {
  background-color: #1474ae;
}
.company_news .company_news_left_tab .company_news_tab_item.active_tab span {
  color: #ffffff;
}
.company_news .company_news_left_tab .company_news_tab_item span {
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
}
/* 中间资讯列表样式 */
.company_news .company_news_left_list {
  width: 420px;
  float: left;
}
.company_news .company_news_left_list .company_news_list_item {
  overflow: hidden;
  margin-bottom: 20px;
}
.company_news .company_news_left_list .company_news_list_item:last-child {
  margin-bottom: 0;
}
/* 新闻前的编号 */
.company_news .company_news_left_list .news_item_sort {
  float: left;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #c1c1c1;
  font-size: 16px;
  font-weight: bold;
  background-color: #efefef;
  margin-right: 20px;
  margin-top: 7px;
}
.company_news .company_news_left_list .news_item_content {
  float: left;
  width: 360px;
}
/* 新闻第一行 */
.company_news .company_news_left_list .news_item_content_info {
  overflow: hidden;
}
/* 新闻第一行标题 */
.company_news .company_news_left_list .news_item_content_info>a {
  display: block;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
  text-decoration: none;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.company_news .company_news_left_list .news_item_content_info>a:hover {
  text-decoration: underline;
}
/* 新闻第一行日期 */
.company_news .company_news_left_list .news_item_content_info>span {
  display: block;
  width: 105px;
  overflow: hidden;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
  float: right;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}
/* 新闻第二行内容 */
.company_news .company_news_left_list .news_item_content>p {
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 右侧视频样式 */
.company_news .company_news_right {
  float: right;
  width: 550px;
  height: 350px;
}
</style>
