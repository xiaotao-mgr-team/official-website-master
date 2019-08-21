<template>
  <div class="website_link">
    <div class="website_link_content">
      <div class="website_link_logo">
        <img :src="linkLogoImg" alt="公司Logo">
      </div>
      <div class="website_link_link">
        <div class="website_link_url">
          <div v-for="(bl, index) in linkList" :key="index" class="website_link_url_item">
            <span class="website_link_url_title">{{bl.title}}</span>
            <span v-for="(de, ind) in bl.links" :key="ind" class="website_link_url_con">
              <a :href="de.url">{{de.name}}</a>
            </span>
          </div>
        </div>
        <div class="website_link_code">
          <div v-for="(item, index) in codeList" :key="index" class="website_link_code_item">
            <div class="website_link_code_img">
              <img :src="item.url" :alt="item.name">
            </div>
            <div class="website_link_code_name">{{item.name}}</div>
          </div>
        </div>
        <!-- <div class="website_link_friend">
          <div class="website_link_friend_title">友情链接：</div>
          <div class="website_link_friend_a">
            <a v-for="(friend, num) in friendLinkList" :key="num" :href="friend.url" target="_blank">{{friend.name}}</a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import linkLogoImg from '@/assets/img/website_link_logo.jpg';
import linkCodeImg from '@/assets/img/weixin_code.jpg';

export default {
    name: 'website-link',
    data () {
        return {
            linkList: [
                {
                    title: '资讯中心',
                    links: [
                        {name: '行业动态', url: '#'},
                        {name: '防护知识', url: '#'}
                    ]
                },
                {
                    title: '服务中心',
                    links: [
                        {name: '合作加盟', url: '#'},
                        {name: '如何购买', url: '#'}
                    ]
                },
                {
                    title: '沟通中心',
                    links: [
                        {name: '关于我们', url: '#'},
                        {name: '联系我们', url: '#'}
                    ]
                },
            ],
            codeList: [
                {name: '扫描关注微信', url: linkCodeImg},
                // {name: '扫描关注微博', url: linkCodeImg},
            ],
            friendLinkList: [
              { name: '百度中文网', url: 'https://www.baidu.com' },
              { name: '京东商城', url: 'https://www.jd.com/' },
              { name: '博客园', url: 'https://www.cnblogs.com/' },
              { name: '淘宝网', url: 'https://www.taobao.com' },
              { name: '博客园', url: 'https://www.cnblogs.com/' },
              { name: '网易新闻', url: 'https://www.163.com/' },
              { name: '百度中文网', url: 'https://www.baidu.com' },
              { name: '新浪新闻', url: 'https://www.sina.com.cn/' },
              { name: '凤凰网', url: 'https://www.ifeng.com/' },
              { name: '百度中文网', url: 'https://www.baidu.com' },
              { name: '新浪新闻', url: 'https://www.sina.com.cn/' },
              { name: '慕课网', url: 'https://www.imooc.com/' },
              { name: '博客园', url: 'https://www.cnblogs.com/' },
              { name: '新浪新闻', url: 'https://www.sina.com.cn/' },
            ],
            linkLogoImg: linkLogoImg,

        }
    },
    props: {
      isIndex: { // 是否是首页
        type: Boolean,
        default: false
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
}
</script>
<style scoped>
.website_link {
    width: 100%;
    background-color: #333333;
}
.website_link .website_link_content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.website_link .website_link_content>div {
    float: left;
}
/* 左侧公司Logo部分样式 */
.website_link .website_link_logo {
    /* width: 240px; */
    width: 120px;
    /* height: 280px; */
    height: 120px;
    margin-top: 10px;
}
.website_link .website_link_logo img {
    width: 100%;
    height: 100%;
}
/* ---- */
.website_link .website_link_link {
    /* width: 960px; */
    /* 公司logo尺寸为240x280时宽度为960px */
    width: 1080px;
    padding-top: 10px;
}
/* 中间Link部分样式 */
.website_link .website_link_url {
    width: 720px;
    padding-left: 50px;
    float: left;
}
.website_link .website_link_url .website_link_url_item {
    width: 200px;
    float: left;
}
.website_link .website_link_url span {
    display: block;
    text-align: left;
}
.website_link .website_link_url .website_link_url_title {
    color: #ffffff;
    font-size: 16px;
    padding: 10px 0 20px;
}
.website_link .website_link_url a {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    color: #cccccc;
    text-decoration: none;
}

/* 右侧二维码部分样式 */
.website_link .website_link_code {
    /* width: 240px; */
    /* 公司logo尺寸为240x280时宽度为240px */
    width: 360px;
    float: right;
}
.website_link .website_link_code .website_link_code_item {
    width: 100px;
    margin-left: 20px;
    /* float: left; */ 
    /* 两个二维码时左浮动 */
    float: right;
}
.website_link .website_link_code .website_link_code_img {
    width: 100px;
    height: 100px;
}
.website_link .website_link_code .website_link_code_img img {
    width: 100%;
    height: 100%;
}
.website_link .website_link_code .website_link_code_name {
    text-align: center;
    color: #cccccc;
    height: 30px;
    line-height: 30px;
}
.website_link .website_link_friend {
    float: left;
    width: 100%;
    height: 100px;
    margin-left: 50px;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #464646;
}
.website_link .website_link_friend .website_link_friend_title {
    color: #ffffff;
    float: left;
    width: 70px;
    height: 20px;
    line-height: 20px;
}
.website_link .website_link_friend .website_link_friend_a {
    float: left;
    width: 840px;
    max-height: 120px;
    overflow: hidden;
}
.website_link .website_link_friend .website_link_friend_a a {
    color: #cccccc;
    text-decoration: none;
    padding: 0 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    margin-bottom: 4px;
}
.website_link .website_link_friend .website_link_friend_a a:hover {
    text-decoration: underline;
}
</style>
