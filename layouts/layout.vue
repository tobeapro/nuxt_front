<template>
  <div id="rk">
    <div class="rk-container">
      <header class="rk-header">
        <div class="container">
          <div class="user-info">
            <span class="user-detail">
              {{info.name}}
              <img class="user-avatar" :src="info.avatar" />
            </span>
            <ul>
              <li>
                首页
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main class="container">
        <div class="rk-main">
          <nuxt/>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  asyncData ({}){
    return api.getInfo('admin').then(res=>{
      return {info: res.data}
    })
  },
  data () {
    return {
      info:{
        name:'',
        avatar:''
      }
    }
  },
  created () {
    api.getInfo('admin').then(res=>{
      this.info = res.data
    })
  }
}
</script>
<style>
@import '~/assets/css/github.css';
@import '~/assets/css/github-markdown.css';
  *{
    margin:0;
    padding:0;
  }
  html{
    background-color:#ecf5ff;
  }
  .container{
    margin:0 auto;
    width:100%;
    max-width:960px;
    height:100%;
    background-color:#fff;
  }
  .rk-header{
    position:fixed;
    z-index:10;
    top:0;
    width:100%;
    height:60px;
    background-color:#fff;
    box-shadow: 0 2px 10px #aaa;
  }
  .rk-main{
    margin-top:80px;
    min-height:calc(100vh - 100px);
  }
  .user-info{
    display:flex;
    height:60px;
    justify-content: space-between;
    align-items: center;
  }
  .user-detail{
    line-height:40px;
    font-weight:bold;
  }
  .user-avatar{
    float:left;
    margin-right:20px;
    width:40px;
    height:40px;
  }
</style>
