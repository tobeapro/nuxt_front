import axios from 'axios'
import qs from 'qs'
let host = 'http://localhost:4000/'
if(process.env.NODE_ENV === 'development') {
  host = 'http://localhost:4000/'
} else if(process.env.NODE_ENV === 'production') {
  host = 'http://118.25.177.196:4000/'
}
export default {
  getInfo: (name) => {
    return new Promise((resolve,reject)=>{
      axios.post(host+'front_manage/api/getInfo',qs.stringify({name:name})).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getArticles: (name) => {
    return new Promise((resolve,reject)=>{
      axios.post(host+'front_manage/api/getArticles',qs.stringify({name:name})).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getCnodeList: () => {
    return new Promise((resolve,reject)=>{
      axios.get('https://cnodejs.org/api/v1/topics?page=1').then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getCodeDetail: (id) => {
    return new Promise((resolve,reject)=>{
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  getNewsList: () => {
    return new Promise((resolve,reject)=>{
      axios.get(host + 'front_manage/api/getNews').then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}
