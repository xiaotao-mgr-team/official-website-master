<template>
  <div class="website_tab">
    <div v-for="(tab, index) in tabList" :key="index" @click="activeTab(index)" :class="{tab_components_item: true, active: index==currentIndex}">
        {{tab}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'website-tab',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabList: {
      type: Array,
      default: () => {
        return ['产品介绍', '使用说明', '常见问题', '相关下载'];
      }
    }
  },
  methods: {
    activeTab (ind) {
      this.currentIndex = ind;
      this.$emit('activeTab', ind);
    }
  }
}
</script>
<style scoped>
.website_tab {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: #ebebeb;
  border: 1px solid #dedede;
}
.website_tab .tab_components_item {
  width: 150px;
  height: 48px;
  display: block;
  float: left;
  text-align: center;
  line-height: 50px;
  color: #333333;
  font-size: 18px;
  cursor: pointer;
  border-right: 1px solid #dedede;
}
.website_tab .tab_components_item.active {
  background-color: #ffffff;
  height: 48px;
  border-top: 3px solid #1474AE;
}
</style>
