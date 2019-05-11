import Vue from "vue"
import VueRouter from "vue-router"
import productAdmin from "../pages/productAdmin"


Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {path:"/",component:productAdmin}
  ]
})

export default router
