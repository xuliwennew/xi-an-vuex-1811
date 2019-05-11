import request from "../common/request"
import {ProductURL} from "../common/urlSchemas"

export default {


   async getProductList () {
     let data = await request.getData(`${ProductURL}get`)
     return data;
   },


   async delProductByWhere(where) {
     let result = await request.deleteData(`${ProductURL}del`,where)
     return result
   },

   async addProductInfo(product){
     let result = await request.postData(`${ProductURL}post`,product)
     let alldata = await this.getProductList()
     return alldata
   }


}
