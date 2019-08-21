<template>
  <div class="product_detail">
    <div v-if="isSearch" class="base_info">
      <div class="base_info_img">
        <div class="base_info_img_big">
          <img :src="productInfo.imgUrl" alt="">
        </div>
        <div class="base_info_img_small">
          <img v-for="(img, index) in productInfo.smallPUrl" :key="index" :src="img" alt="" :class="{margin_right: index!=3}" @mouseover="showNowImg(img)">
        </div>
      </div>
      <div class="base_info_detail">
        <p>{{productInfo.title || '暂无'}}</p>
        <div v-for="(per, ind) in productInfo.remark" :key="ind" class="base_info_detail_item">
          <span class="title">{{per.key}}</span>
          <span class="content">{{per.value}}</span>
        </div>
        <!-- 该部分html及css暂时隐藏 -->
        <!-- <div class="base_info_link">
          <div><img :src="wangwang" alt="">联系购买</div>
          <div><img :src="qq" alt="">在线咨询</div>
        </div> -->
      </div>
    </div>
    <div v-if="isSearch" class="tab_components">
      <!-- <website-tab :tab-list="tabList" @activeTab="activeTab"></website-tab> -->
      <el-tabs type="border-card">
        <el-tab-pane label="产品介绍">
          <product-introduction :productIntroImgList="productInfo.bigPUrl"></product-introduction>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      抱歉！未搜索到您需要的产品...
    </div>
  </div>
</template>
<script>
import wangwang from '@/assets/img/wangwang.gif';
import qq from '@/assets/img/qq.gif';
import WebsiteTab from '@/components/block/tab';
import ProductIntroduction from '@/components/block/productIntroduction';
import UseIntroduction from '@/components/block/useIntroduction';
import RelatedIssues from '@/components/block/relatedIssues';
import ResourseDownload from '@/components/block/resourseDownload';

export default {
  name: 'product-detail',
  data () {
    return {
      productInfo: {  // 页面顶部产品信息
        imgUrl: '',
        smallPUrl: [],
        productDetail: [  // 产品属性
          {name: '防护等级', value: 'KN100，过滤效率 >= 99.97%'},
          {name: '防护等级', value: 'KN95，过滤效率 >= 95.0%'},
          {name: '防护等级', value: 'KN90，过滤效率 >= 90.0%'},
          {name: '防护范围', value: '可防护0.075微米以上的非油性颗粒污染物（包括粉尘、烟、雾、微生物）'},
          {name: '选用范围', value: '适用于雾霾，面粉加工厂，矿厂（矿物加工粉尘），棉花加工，五金铸造，汽车尾气中产生的粉尘颗粒物'}
        ],
      },
      wangwang: wangwang,
      qq: qq,
      tabList: ['产品介绍', '使用说明', '常见问题', '相关下载'],
      currentIndex: 0,
      // 产品介绍tab
      productIntroImgList: [],
      // 使用说明tab
      useIntroImgList: [],
      // 常见问题tab
      relatedIssuesImgList: [],
      isSearch: true
    }
  },
  props: {

  },
  computed: {
  },
  components: {
    WebsiteTab,
    ProductIntroduction,
    UseIntroduction,
    RelatedIssues,
    ResourseDownload
  },
  mounted () {
    window.kk = this;
    this.$event.$on('getProductDetail', data => {
      this.getDetailAction(data);
    })
    this.$event.$on('categoryList', (data) => {
      this.getDetailAction(data);
    })
    this.$event.$on('searchEvent', data => {
      console.log('收到，查找', data)
      this.searchAction(data.keyWord)
    })
  },
  methods: {
    showNowImg (img) {
      this.productInfo.imgUrl = img;
    },
    activeTab (ind) {
      this.currentIndex = ind;
    },
    getDetailAction (_id) {
      this.$get('bgr/product/detail/' + _id).then(res => {
        let remarkArr = res.obj.remark.split('\n');
        remarkArr.forEach((remark, index) => {
          let arr = remark.split('：');
          remarkArr[index] = {key: arr[0], value: arr[1]}
        });
        res.obj.remark = remarkArr;
        this.productInfo = Object.assign({}, this.productInfo, res.obj);
      }).catch(err => {
        console.log(err);
      })
    },
    searchAction (val) {
      this.$get('bgr/product/list', {title: val}).then(res => {
        console.log('xxxxx',res)
        if (res.obj && res.obj.datas && res.obj.datas.length>0) {
          this.isSearch = true;
          this.productInfo = Object.assign({}, res.obj.datas[0]);
        } else {
          this.isSearch = false;
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
/* 顶部基础信息样式 */
.product_detail {
  margin-top: 50px;
}
.product_detail .base_info {
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
}
/* 基础信息左侧图片样式 */
.product_detail .base_info .base_info_img {
  float: left;
  width: 385px;
  margin-right: 25px;
}
/* 基础信息左侧上方大图样式*/
.product_detail .base_info .base_info_img .base_info_img_big {
  width: 100%;
  height: 385px;
  border: 1px solid #c8c8c8;
  margin-bottom: 10px;
}
.product_detail .base_info .base_info_img .base_info_img_big img {
  width: 100%;
  height: 100%;
}
/* 基础信息左侧下方小图样式*/
.product_detail .base_info .base_info_img .base_info_img_small {
  width: 100%;
  overflow: hidden;
}
.product_detail .base_info .base_info_img .base_info_img_small img {
  display: block;
  float: left;
  width: 85px;
  height: 85px;
  border: 1px solid #c8c8c8;
}
.product_detail .base_info .base_info_img .base_info_img_small img.margin_right {
  margin-right: 15px;
}
/* 基础信息右侧属性样式*/
.product_detail .base_info .base_info_detail {
  float: right;
  width: 510px;
}
/* 基础信息右侧属性标题样式*/
.product_detail .base_info .base_info_detail>p {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 20px;
}
/* 基础信息右侧属性条目样式*/
.product_detail .base_info .base_info_detail .base_info_detail_item {
  line-height: 25px;
  overflow: hidden;
}
.product_detail .base_info .base_info_detail .base_info_detail_item .title {
  display: block;
  float: left;
  width: 70px;
  color: #999999;
}
.product_detail .base_info .base_info_detail .base_info_detail_item .content {
  display: block;
  float: left;
  width: 440px;
}
/* 基础信息右侧按钮样式*/
/* .product_detail .base_info .base_info_detail .base_info_link {
  margin-top: 60px;
  overflow: hidden;
}
.product_detail .base_info .base_info_detail .base_info_link>div {
  width: 150px;
  height: 50px;
  float: left;
  background-color: #1474ae;
  font-size: 18px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  margin-right: 70px;
  cursor: pointer;
}
.product_detail .base_info .base_info_detail .base_info_link img {
  position: relative;
  top: 3px;
  right: 5px;
} */
</style>
