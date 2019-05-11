<template>
    <div>
      <h1>product admin <button @click="add">添加一个商品</button></h1>
      <ul>
         <li v-for="(p,pid) in products">
           {{p.title}}
           <a @click="del(pid)">删除</a>
         </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import productApi from "../apis/productApi"
  export default {
    name: 'product-admin',

    data(){
       return {
         // isLoading:true,
         // products:[]
       }
    },

    computed:{
      ...mapGetters({
        products:"GETPRODUCTS"
      })
    },

    async created(){
       // let data = await productApi.getProductList()
       // console.log(data)
       // this.products = data;

      //修改成从store中获取数据
      this.$store.dispatch("GETPRODUCT")
    },
    methods:{
      async del(id){
        let title = this.products[id].title
        this.products.splice(id,1)
        let data = await productApi.delProductByWhere({title:title})
        console.log(data)
      },
      add(){
        this.$store.dispatch("ADDPRODUCT")

      }
    }
  }
</script>

<style scoped>

</style>
