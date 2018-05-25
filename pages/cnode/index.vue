<template>
  <div class="container">
    <div class="cnode">
      <ul class="cnode-list">
        <li class="cnode-item" v-for="(item,index) in list" :key="index">
          <span class="avatar">
            <img :src="item.author.avatar_url" />
          </span>
          <span>
            <p class="title" @click="viewDetail(item.id)">
              {{item.title}}
            </p>
            <p class="author">
              作者:{{item.author.loginname}}——创建于:{{new Date(item.create_at).toLocaleDateString()}}
            </p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  layout: 'layout',
  transition: 'page',
  // asyncData ({}){
  //   return api.getCnodeList().then(res=>{
  //     return {list: res.data}
  //   })
  // },
  data () {
    return {
      list:[]
    }
  },
  created () {
    this.getCnodeList()
  },
  methods:{
    getCnodeList () {
      api.getCnodeList().then(res=>{
        this.list = res.data
      })
    },
    viewDetail (id) {
      this.$router.push(`/cnode/detail?id=${id}`)
    }
  }
}
</script>
<style>
  .cnode-list .cnode-item{
    display:flex;
    align-items: center;
    border-bottom:1px solid #666;
  }
  .cnode-item .avatar img{
    margin:10px;
    display:block;
    width:40px;
    height:40px;
  }
  .cnode-item .title{
    font-size:16px;
    line-height:30px;
  }
  .cnode-item .author{
    color:#fff;
    font-size:14px;
  }
  .cnode-item .title:hover{
    cursor:pointer;
    text-decoration: underline;
  }
</style>
