<template>
  <div class="content">
    <div class="category">
      <news-category></news-category>
    </div>
    <div class="detail">
      <div class="title">{{ newsDetail.name }}</div>
      <div class="info">
        <span>作者：{{ newsDetail.author }}</span>
        <span>发表时间：{{ newsDetail.modifyTime | dateFormate }}</span>
      </div>
      <div class="main-content">
        {{ newsDetail.content }}
      </div>
    </div>
  </div>
</template>
<script>
import NewsCategory from '../../components/newsCaterogy'
export default {
  name: 'news-content',
  data () {
    return {
      newsDetail: {
        subTagList: null,
        subTagMap: null,
        id: "10",
        delf: 0,
        createUserId: "z",
        createTime: "2018-11-03T10:16:13.000+0000",
        modifyUserId: "z",
        modifyTime: "2018-11-03T10:16:15.000+0000",
        remark: null,
        name: "正压式消防空气呼吸器行业标准知识介绍（三",
        title: "正压式消防空气呼吸器行业标准知识介绍（三",
        author: "zber",
        content: "为了保证正压式消防空气呼吸器的防护性能，GA 124-2013标准中专门对正压式消防空气呼吸器的结构要求做了明确的规定，今天我们就来详细介绍下有哪些技术要求。正压式消防空气呼吸器结构技术要求： 1.呼吸器的结构应简单紧凑，可在无人帮助的情况下自行佩戴和使用，在狭小的通道通行时呼吸。 2.佩戴者在脱除呼吸器背具而仍然佩戴全面罩时，应能继续从呼吸器上进行呼吸。 3.呼吸器应有防压缩空气中杂质的装置。 4.气瓶外部应有防护套。 5.气瓶瓶阀的安装位置应方便佩戴者开启或关闭瓶阀。 6.压力表在气瓶瓶阀打开后应显示气瓶压力，其安装位置应方便佩戴者观察到压力值。 7.佩戴者可能触摸到的部件表面应无锐利的棱角。 8.气瓶瓶阀与减压器连接、全面罩与供气阀连接应可靠，且不需专用工具，连接处若使用密封件，不应脱落或移位。 9.背具的结构造型应符合人体工程学原理，使佩戴者无局部压感；背具带应能调节长度，扣紧后不应发生滑脱。 10.当气瓶公称容积的总和大于6L时，中压导气管应通过三通输出接头（其中一个应有防护套）与供气阀连接管上的输入接头相连接；或由两根分别带输出接头 的中压导气管中的一根与供气阀连接管上的输入接头相连接，另一根的输出接头应有防护套，输出接头应能自行密封。",
        status: "0",
        topic: "fhzs"
      },
    }
  },
  mounted () {
    this.getNewsDetail(this.$route.params.id)
  },
  components: {
    NewsCategory
  },
  methods: {
    getNewsDetail (_id) {
      console.log('getNewsDetail', _id);
      // 等接口
    }
  }
}
</script>
<style scoped>
.content {
  width: 1200px;
  margin: 10px auto 0;
  overflow: hidden;
}
.category {
  width: 240px;
  float: left;
}
.detail {
  width: 920px;
  float: right;
}
.title {
  font-size: 24px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  color: #555555;
}
.info {
  font-size: 12px;
  text-align: center;
  height: 35px;
  line-height: 35px;
  color: #666666;
  background: #ebebeb;
}
.main-content {
  padding: 25px 0;
  font-size: 16px;
  line-height: 32px;
  text-indent: 32px;
}
</style>
