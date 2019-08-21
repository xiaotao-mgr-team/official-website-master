<template>
  <div class="company_boost">
    <div class="company_boost_content">
      <div v-for="(item, index) in boostData" :key="index" :class="{company_boost_item: true, bg_color_e0: isBg(index), padding_220: isPadding(index)}">
        <img :src="item.img" alt="" :class="{padding_left: isPadding(index)}">
        <span class="company_boost_item_title">{{item.title}}</span>
        <span v-for="(one, index) in item.content" :key="index" class="company_boost_item_detail">{{one}}</span>
      </div>
      <div class="company_boost_center">
        <div class="company_boost_center_con">
          <span class="select_what">选择凡仓</span>
          <span class="select_num">4大理由</span>
          <span class="select_kouhao">品牌造就实力</span>
          <span class="select_kouhao">服务铸就口碑</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import boostData from '../mock/boostData.js'

export default {
  name: 'company-boost',
  data () {
    return {
      boostData: boostData
    }
  },
  props: {

  },
  computed: {

  },
  mounted () {

  },
  methods: {
    isBg (ind) {
      let arg = false;
      if (ind==0 || ind==3) {
        arg = true;
      }
      return arg;
    },
    isPadding (ind) {
      let arg = false;
      if (ind==1 || ind==3) {
        arg = true;
      }
      return arg;
    }
  }
}
</script>
<style scoped>
.company_boost {
  width: 100%;
  background-color: #efefef;
}
.company_boost .company_boost_content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.company_boost .company_boost_content span {
  display: block;
  height: 24px;
  line-height: 24px;
}
.company_boost .company_boost_item {
  width: 600px;
  height: 250px;
  float: left;
  position: relative;
  padding-left: 120px;
}
.company_boost .company_boost_item.padding_220 {
  padding-left: 220px;
}
.company_boost .bg_color_e0 {
  background-color: #e0e0e0;
}
.company_boost .company_boost_item img {
  display: block;
  width: 42px;
  height: 42px;
  position: absolute;
  top: 45px;
  left: 70px;
}
.company_boost .company_boost_item img.padding_left {
  left: 170px;
}
.company_boost .company_boost_item .company_boost_item_title {
  margin-top: 72px;
  font-size: 20px;
  height: 26px;
  line-height: 26px;
  font-weight: 700;
  color: #1474ae;
  margin-bottom: 8px;
}
/* 中间部分样式 */
.company_boost .company_boost_center {
  width: 180px;
  height: 180px;
  position: absolute;
  top: 160px;
  left: 510px;
  background-color: #ffffff;
  transform: rotate(45deg);
}
.company_boost .company_boost_center .company_boost_center_con {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
  padding-top: 30px;
}
.company_boost .company_boost_center .company_boost_center_con span {
  text-align: center;
}
.company_boost span.select_what {
  font-size: 24px;
  color: #000000;
  font-weight: 700;
  height: 30px;
  line-height: 30px;
}
.company_boost span.select_num {
  font-size: 40px;
  color: #DA6900;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
  letter-spacing: 7px;
}
.company_boost span.select_kouhao {
  font-size: 18px;
  color: #9c9c9c;
  height: 22px;
  line-height: 22px;
}
</style>
