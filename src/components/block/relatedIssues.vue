<template>
  <div class="related_issues">
    <img v-for="(img, index) in relatedIssuesImgList" :key="index" :src="img" alt="">
  </div>
</template>
<script>
export default {
  name: 'related-issues',
  data () {
    return {

    }
  },
  props: {
    relatedIssuesImgList: {
      type: Array,
      default: () => []
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
.related_issues {

}
.related_issues img {
  width: 100%;
}
</style>
