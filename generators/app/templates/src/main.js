// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import store from './vuex/store'
import * as custom from './assets/js/utils/filter'

import 'lib-flexible/flexible.js'
const adaptive = require('./assets/js/utils/des')

window.adaptive = adaptive;
window['adaptive'].desinWidth = 750;
window['adaptive'].baseFont = 18;
window['adaptive'].maxWidth = 480;
window['adaptive'].init();
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next()
})

const requireComponent = require.context(
	'./components/common',
	false,
	/.(vue)$/
)


requireComponent.keys().forEach(fileName => {

	const componentConfig = requireComponent(fileName)
	const componentName = upperFirst(
		camelCase(
			fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
		)
	)

	Vue.component(
		componentName,
		componentConfig.default || componentConfig
	)
})

Object.keys(custom).forEach(key => {
	Vue.filter(key, custom[key])
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})