import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Hello from '@/components/Hello'
import first from '@/components/firstcomponent'
import second from '@/components/secondcomponent'
import third from '@/components/thirdcomponent'

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
		{
			path: '/first',
			name: 'first',
			component: first
		}, {
			path: '/second',
			name: 'second',
			component: second
		}, {
			path: '/third',
			name: 'third',
			component: third
		}
  ]
})
