<template>
  <div class="company_introduction">
    <section-title title="关于凡仓"></section-title>
    <div class="company_introduction_content">
      <div class="company_introduction_left">
        <h1>认识凡仓</h1>
        <p>{{companyIntro.introduce}}</p>
        <div class="img_list">
          <img v-for="(img, index) in companyIntro.pSelfs" :key="index" :src="img" alt="公司介绍" :class="{margin_left: index!=0}">
        </div>
      </div>
      <div class="company_introduction_right">
        <h1>凡仓资质</h1>
        <div class="company_introduction_right_lunbo">
          <el-carousel height="246px" indicator-position="none" class="lunbo_box">
            <el-carousel-item v-for="(item, ind) in companyIntro.pRights" :key="ind" class="company_introduction_lunbo_item">
              <img :src="item" alt="公司资质">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/block/sectionTitle';
import introductionImg from '@/assets/img/company_introduction.jpg';

export default {
  name: 'company-introduction',
  data () {
    return {
      companyIntro: {},
    }
  },
  props: {

  },
  computed: {

  },
  components: {
    SectionTitle,

  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      this.$get('introduce/detail', {id: 1}).then(res => {
        if (res.success) {
          this.companyIntro = res.obj;
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.company_introduction {
  width: 100%;
  margin-bottom: 20px;
}
.company_introduction .company_introduction_content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
/* 通用标题样式 */
.company_introduction .company_introduction_content h1 {
  font-size: 22px;
  color: #333333;
  font-weight: 400;
}
/* 左侧样式 */
.company_introduction .company_introduction_left {
  width: 760px;
  float: left;
}
.company_introduction .company_introduction_left p {
  width: 100%;
  line-height: 26px;
  margin: 20px 0;
  text-indent: 28px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.company_introduction .company_introduction_left .img_list {
  width: 100%;
}
.company_introduction .company_introduction_left .img_list img {
  width: 170px;
  height: 120px;
}
.company_introduction .company_introduction_left .img_list img.margin_left {
  margin-left: 26px;
}
/* 右侧样式 */
.company_introduction .company_introduction_right {
  width: 380px;
  float: right;

}
.company_introduction .company_introduction_right .company_introduction_right_lunbo {
  width: 380px;
  height: 246px;
  margin-top: 20px;
}
.company_introduction .company_introduction_right .company_introduction_right_lunbo .lunbo_box {
  width: 175px;
  margin: 0 auto;
}
.company_introduction .company_introduction_right .company_introduction_lunbo_item {
  width: 175px;
  height: 100%;
}
.company_introduction .company_introduction_right .company_introduction_lunbo_item img {
  width: 100%;
  height: 100%;
}
</style>


