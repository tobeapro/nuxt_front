import axios from 'axios'
import qs from 'qs'
const host = 'http://localhost:4000/'
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
  }
}
