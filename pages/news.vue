<template>
  <div class="news">
    <ul class="news-nav">
      <li class="news-nav-item" v-for="(item,index) in list" :key="index" :title="item.title">
        <a :href="'#'+item._id">{{index+1}}·{{item.title}}</a>
      </li>
    </ul>
    <div class="news-item" v-for="(item,index) in list" :key="index" :id="item._id">
      <div class="news-item-title">
        {{item.title}}
      </div>
      <div class="news-item-date">
        {{item.date}}
      </div>
      <div class="news-item-content" v-html="item.content"></div>
    </div>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  layout: 'layout',
  transition: 'page',
  asyncData ({}){
    return api.getNewsList().then(res=>{
      return {list: res.data}
    })
  },
  data () {
    return {
      list:[]
    }
  },
  methods:{

  }
}
</script>
<style>
.news-nav{
  transition: all .2s linear;
  position:fixed;
  right:0;
  top:50%;
  padding:10px;
  width:100px;
  transform: translateY(-50%);
  background-color:#1c99ff;
  opacity:.4;
  border-radius: 6px;
}
.news-nav:hover{
  width:300px;
  opacity:1;
}
.news-nav-item{
  font-size:12px;
}
.news-nav-item a{
  display: block;
  line-height:26px;
  text-decoration: none;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  color:#fff;
}
.news-nav-item a:hover{
  text-decoration: underline;
}
.news-item{
  margin-bottom:20px;
  padding-bottom:20px;
  border-bottom:1px solid #ddd;
}
.news-item-title{
  padding:16px 0;
  font-size:30px;
  font-weight:bold;
  text-align: center;
}
.news-item-date{
  padding-right:16px;
  color:#888;
  text-align: right;
}
.news-item-content{
  padding:6px 12px;
}
.news-item-content p{
  text-indent: 2em;
  line-height:26px;
}
.news-item-content p.otitle{
  margin:16px 0;
}
</style>
