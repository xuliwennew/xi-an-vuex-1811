import Axios from "axios"
import querystring from "querystring"


class AxiosRequest {
  getData(){

  }

  postData(){

  }

  deleteData(){

  }

  putData(){

  }
}


class FetchRequest {

  async getData(url){
    let response = await fetch(url)
    let data = await response.json()
    return data
  }

  async postData(url,data){
    let strData = querystring.encode(data)
    console.log(strData)
    let resp = await fetch(url,{
      method:"POST",
      body:strData,
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })

    return await resp.json()
  }

  async deleteData(url,data){

    //a=1&b=2
    let strWhere  = `title=${data.title}`

    let res = await fetch(url,{
      method:"delete",
      body:strWhere,
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })

    return await res.json()
  }

  putData(){

  }

}

/**
 * ajax的工厂
 * @param tool
 * @returns {*}
 * @constructor
 */
function AjaxFactory(tool){
  switch (tool) {
    case "A":
      return new AxiosRequest()
      break;
    case "F":
      return new FetchRequest()
      break;
    default:
      return new FetchRequest()
      break;
  }
}


export default AjaxFactory()
