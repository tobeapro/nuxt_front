<template>
  <div class="news">
    <div class="news-item" v-for="(item,index) in list" :key="index">
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
