import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../components/About.vue";
import First from "../components/First";
import Bar from "../components/Bar";
import Test from "../components/Test";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/bar',//重定向
    // components: {Bar},
  },
  {
    path: '/about',
    name:'about',
    component: About
  },
  {
    path:'/bar/first',
    component:First,
    children:[
      {
        path:'/bar/first/:id',
        name:'test',
        component:Test,
      }
    ]


  },
  {
    path:'/bar',
    component:Bar,
  }
]

const router = new VueRouter({
  routes
})

export default router
