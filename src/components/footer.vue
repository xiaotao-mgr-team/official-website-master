<template>
    <div class="index_footer">
      <div class="index_footer_content">
        <div class="index_footer_left">copyright &copy; 2016-2020 All rights reserved 海安凡仓科技有限公司 苏ICP备17009838号</div>
        <!-- <div class="index_footer_right">
          <span><a href="">站长统计</a></span>
          <span class="border"><a href="">网站地图</a></span>
          <span class="border"><a href="">产品画册</a></span>
        </div> -->
      </div>
    </div>
</template>
<script>
export default {
    name: 'website-footer',
    data () {
        return {

        }
    },
    props: {

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
.index_footer {
  width: 100%;
  background-color: #252525;
  height: 56px;
  overflow: hidden;
}
.index_footer .index_footer_content {
  width: 1200px;
  margin: 0 auto;
}
.index_footer .index_footer_left {
  float: left;
  width: 1000px;
  height: 56px;
  line-height: 56px;
  color: #cccccc;
  font-size: 12px;
}
.index_footer .index_footer_right {
  float: right;
  width: 180px;
  overflow: hidden;
}
.index_footer .index_footer_right span {
  display: block;
  height: 16px;
  float: right;
  padding: 0 5px;
  margin-top: 21px;
}
.index_footer .index_footer_right span.border {
  border-right: 1px solid #cccccc;
}
.index_footer .index_footer_right a {
  display: block;
  color: #cccccc;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  text-decoration: none;
}
</style>
