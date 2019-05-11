import Vue from "vue"
import Vuex from "vuex"
import productApi from "../apis/productApi"

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    products:[] //database
  },
  actions:{
    async GETPRODUCT(store){
      let data = await productApi.getProductList()
      store.commit("GETPRO",data)
    },
    async ADDPRODUCT(store,product){
      let data = await productApi.addProductInfo({})
      console.log(data)
      store.commit("ADDPRO",data)
    }
  },
  mutations:{
    GETPRO(state,payload){
       state.products = payload
    },
    ADDPRO(state,payload){
       console.log(payload)
       state.products = payload
    }
  },
  getters:{
    GETPRODUCTS(state){
      return state.products
    }
  }
})


export default store
