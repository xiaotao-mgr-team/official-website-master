<template>
    <div class="product_summary" @click="goProductDetail">
        <div>
            <!-- <img :src="productInfo.url" alt=""> -->
            <img :src="commonImg" alt="">
        </div>
        <p>{{productInfo.name}}</p>
    </div>
</template>
<script>
import commonImg from '../assets/img/product_summary.jpg';

export default {
    name: 'productSummary',
    data () {
        return {
            commonImg: commonImg,
        }
    },
    computed: {

    },
    props: {
        productInfo: {
            type: Object,
            default: () => {
                return {
                    url: 'xxx',
                    name: '凡仓600半面罩防毒面具 喷漆 化工 消防防毒面具'
                }
            }
        }
    },
    mounted () {

    },
    methods: {
        // 点击产品概要，进入详情页面
        goProductDetail () {
            console.log('点击产品概要，进入详情页面', this.productInfo);
        }
    }
}
</script>
<style scoped>
.product_summary {
    width: 280px;
    cursor: pointer;
}
.product_summary div {
    width: 100%;
    height: 278px;
    border: 1px solid #1474AE;
    margin-bottom: 10px;
}
.product_summary div img {
    width: 100%;
    height: 100%;
}
.product_summary p {
    width: 100%;
    text-align: center;
    line-height: 20px;
    color: #555;
}
</style>
