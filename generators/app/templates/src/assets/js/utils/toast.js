import Vue from 'vue';
import {Alert, Confirm, Toast} from 'wc-messagebox';
import 'wc-messagebox/style.css';

Vue.use(Toast)

export default function (text) {

  let vm = new Vue();
  let options = {
    position: 'center',
    duration: '1500'
  }

  vm.$toast(text, options)
}
