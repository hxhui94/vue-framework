import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import hello from '@/components/HelloFromVux'
import main from '@/page/main'
import home from '@/page/main/home'
import office from '@/page/main/office'
import mine from '@/page/main/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },{
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path:'/home',
          name:'home',
          component:home,
        },
        {
          path:'/office',
          name:'office',
          component:office,
        },
        {
          path:'/mine',
          name:'mine',
          component:mine,
        }
      ]
    },{
      path: '/app',
      component: App
    }
  ]
})
