<template>
  <div class="list">
    <h2 class="subtitle">
      project
    </h2>
    <div class="article">
      <div class="article-item" v-for="(item,index) in list" :key="index">
        <h5>{{item.title}}</h5>
        <div class="content" v-html="item.contentHtml">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  layout: 'layout',
  asyncData ({}){
    return api.getArticles('admin').then(res=>{
      return {list: res.list}
    })
  },
  data () {
    return {
      list:[]
    }
  },
  created(){
    api.getArticles('admin').then(res=>{
      return {list: res.list}
    })
  }
}
</script>
<style>

</style>
