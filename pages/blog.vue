<template>
  <div class="list">
    <!-- <h2 class="subtitle">
      project
    </h2> -->
    <div class="article">
      <div class="article-item" v-for="(item,index) in list" :key="index">
        <div class="article-title">
          <div>{{item.title}}</div>
          <div class="collapse" :class="{'active':viewIndex===index}" @click.stop="changeIndex(index)">
            <i class="top"></i>
            <i class="bottom"></i>
          </div>
        </div>
        <div class="article-content" v-show="viewIndex===index">
          <div class="article-time">
            <img src="~/assets/img/date.png" />
            <span>{{new Date(item.create_time).toLocaleDateString()}}</span>
          </div>
          <div  class="markdown-body" v-html="item.contentHtml"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  layout: 'layout',
  transition: 'page',
  asyncData ({}){
    return api.getArticles('admin').then(res=>{
      let list = res.list.sort((now,next)=>{
        return  new Date(next.create_time).getTime() - new Date(now.create_time).getTime() 
      })
      return {list: list}
    })
  },
  data () {
    return {
      list:[],
      viewIndex:null
    }
  },
  methods:{
    changeIndex(index){
      if(this.viewIndex===index){
        this.viewIndex=null
        return
      }
      this.viewIndex=index
    }
  }
}
</script>
<style>
.article-item{
  margin-bottom:4px;
  background-color:#fff;
}
.article-title{
  position:relative;
  padding-left:12px;
  line-height:50px;
  font-size:20px;
  font-weight:bold;
  color:#fff;
  background:linear-gradient(to right,#04a0fb,#078dec);
}
.article-content{
  padding:10px 20px;
}
.article-title .collapse{
  position:absolute;
  right:10px;
  top:10px;
  padding:10px 0 10px 10px;
  width:30px;
  transition: all .2s linear;
  cursor:pointer;
}
.collapse.active{
  top:12px;
  transform: rotate(90deg);
}
.collapse .top,.collapse .bottom{
  display:block;
  width:20px;
  height:5px;
  background-color:#fff;
  border-radius: 6px;
}
.collapse .top{
  transform:rotate(30deg) translateX(-4px);
}
.collapse .bottom{
  transform:rotate(-30deg) translateX(-4px);
}
.article-content .article-time{
  display:flex;
  align-items: center;
  height:40px;
}
.article-content .article-time img{
  margin-right:10px;
  width:26px;
  height:26px;
}
</style>
