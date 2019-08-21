<template>
  <div class="section_title">
    <!-- <h1>{{title}}</h1> -->
    <div class="section_title_content">
      <div class="section_title_content_title" :style="{width: 40 * title.length + 'px'}">
        {{title}}
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'section-title',
  props: {
    title: {
      type: String,
      default: '关于凡仓'
    },
    sectionTitleImg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.section_title {
  width: 100%;
  /* background-color: aquamarine; */
}
/* .section_title h1 {
  width: 1200px;
  margin: 0 auto;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
} */
.section_title .section_title_content {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
}
.section_title .section_title_content .section_title_content_title {
  height: 66px;
  line-height: 66px;
  font-size: 40px;
  text-align: center;
  color: #000000;
  margin: 27px auto;
  border-bottom-style: double;
}
</style>

