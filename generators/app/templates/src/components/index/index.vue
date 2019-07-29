<template>
<div class="wrap">
  <base-card></base-card>
</div>
</template>
<script>
// base
import Vue from "vue";
import require from "../../assets/js/requeire.js";
// document
import token from "../../assets/js/token";
import getCookie from "../../assets/js/getCookie";
import toast from "../../assets/js/utils/toast.js";

import {
  mapState,
  mapMutations,
  mapActions
} from "vuex";


export default {
  name: "index",
  data() {
    return {};Ï
  },
  mounted() {},
  methods: {
   
    ...mapActions(["init"])
  },
  computed: {
    ...mapState([])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$text-color: #333;
$bgc: #cfddff;

.wrap {
    width: 100%;
    font-family: "PingFangSC-Regular";
    position: relative;
    min-height: 100%;
    max-width: 750px;
}
</style>
