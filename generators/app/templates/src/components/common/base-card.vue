<template>
    <div class="wrap-card">
        <span>Hello I am components Card </span>
        <span>{{price | centToYuan}}</span>
    </div>
</template>
<script>
import Vue from "vue";
Vue.filter("centToYuan");

export default {
    name: 'base-card',
    data() {
        return {
            price: 999,
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.wrap-card {
    width: 100%;
    height: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>