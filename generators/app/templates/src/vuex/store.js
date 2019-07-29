import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import require from '../assets/js/requeire';
import toast from '../assets/js/utils/toast';

const SET_PAGE_SCROLL_POSITION = 'SET_PAGE_SCROLL_POSITION';

const store = new Vuex.Store({
  state: {},
  actions: {
    // 初始化
    async init({
      dispatch
    }) {
      await dispatch('update', await require.init())
    },

    // 更新init
    async update({
      commit
    }, data) {
      commit('update', data)
    },

  },
  mutations: {
    update(state, user) {},
  },
  getters: {}
})

export default store