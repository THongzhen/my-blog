import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue";
import First from "../views/First";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/first'//重定向
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default:Home,
    },
    children:[
        {
          path: '/about',
          name:'about',
          component: About
        },
      {
        path:'/first',
        component:First
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
