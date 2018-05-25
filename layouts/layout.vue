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
            <ul class="nav-ul">
              <li class="nav-li" v-for="(item,index) in menuList" :key="index">
                <a :href="item.url" :class="{'active': menuActive === item.url}">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div class="rk-main">
          <nuxt/>
          <div class="to-top" :class="{'active':topStatus}" @click="toTop">
            <p>回到顶部</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import user from '~/assets/img/user.png'
import api from '~/assets/api.js'
export default {
  asyncData ({}){
    return api.getInfo('admin').then(res=>{
      return { info: res.data }
    })
  },
  computed: {
    menuActive () {
      return '/'+this.$route.path.split('/')[1]
    }
  },
  created () {
    api.getInfo('admin').then(res=>{
      this.info = res.data
    })
  },
  mounted () {
    window.addEventListener('scroll',this.scrollFun)
  },
  beforeDestory () {
    window.removeEventListener('scroll',this.scrollFun)
  },
  data () {
    return {
      info:{
        name:'',
        avatar:user
      },
      menuList:[
        {name:'首页',url:"/"},
        {name:'博文',url:"/blog"},
        {name:'CNode',url:"/cnode"},
        {name:'新闻',url:"/news"},
        {name:'AC杂文',url:"/acfun"}
      ],
      topStatus: false
    }
  },
  methods: {
    scrollFun () {
      if(window.scrollY > 300) {
        this.topStatus = true
      } else {
        this.topStatus = false
      }
    },
    toTop () {
      let timer = setInterval(function(){
        window.scrollTo(0,window.scrollY*0.9)
        if(window.scrollY<=50){
          window.scrollTo(0,0)
          clearInterval(timer)
        }
      },10)
    }
  }
}
</script>
<style>
@import '~/assets/css/github.css';
@import '~/assets/css/github-markdown.css';
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
  .nav-li{
    display:inline-block;
  }
  .nav-li a{
    text-decoration: none;
    padding:4px 12px;
    color:#000;
    border-radius: 4px;
  }
  .nav-li a.active{
    color:#fff;
    background-color:#000;
  }
  .to-top{
    transition: all .2s linear;
    position:fixed;
    right:-60px;
    bottom:60px;
    padding:6px 10px;
    width:16px;
    font-size:14px;
    color:#aaa;
    background-color:#fff;
    border:1px solid #ddd;
    border-radius: 4px;
    cursor:pointer;
  }
  .to-top:hover{
    color:#fff;
    background-color: #1c99ff;
  }
  .to-top.active{
    right:6px;
  }
</style>
