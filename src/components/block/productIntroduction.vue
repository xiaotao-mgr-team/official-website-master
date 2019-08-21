<template>
  <div class="product_intro">
    <img v-for="(img, index) in productIntroImgList" :key="index" :src="img" alt="">
  </div>
</template>
<script>
export default {
  name: 'product-introduction',
  data () {
    return {

    }
  },
  props: {
    productIntroImgList: {
      type: Array,
      default: () => {
        return []
      }
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
.product_intro {

}
.product_intro img {
  width: 100%;
}
</style>
