<template>
  <div class="use_intro">
    <img v-for="(img, index) in useIntroImgList" :key="index" :src="img" alt="">
  </div>
</template>
<script>
export default {
  name: 'use-introduction',
  data () {
    return {

    }
  },
  props: {
    useIntroImgList: {
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
.use_intro {

}
.use_intro img {
  width: 100%;
}
</style>
