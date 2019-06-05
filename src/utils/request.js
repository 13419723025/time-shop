import axios from 'axios'

//创建一个axios的实例
const instance = axios.create({
    baseURL: 'https://api.cat-shop.penkuoer.com', // 网络请求的基础地质
    timeout: 5000,
  });
  
export function get(url,config){
    return instance.get(url,config)
} 


export function post(url,data,config){
    return instance.post(url,data,config)
}