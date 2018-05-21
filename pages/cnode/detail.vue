<template>
  <div class="cnode">
    <div class="cnode-detail-title">{{detail.title}}</div>
    <div class="cnode-detail-author">
      <span>作者:{{detail.author.loginname}}</span>
      <span class="time">创建于:{{new Date(detail.create_at).toLocaleDateString()}}</span>
    </div>
    <div class="markdown-body" v-html="detail.content"></div>
    <ul class="cnode-comment">
      <li class="cnode-comment-content" v-for="(item,index) in detail.replies" :key="index">
        <img :src="item.author.avatar_url" />
        <div>
          <div class="info"><span class="author">{{item.author.loginname}}</span>{{new Date(item.create_at).toLocaleString()}}</div>
          <div v-html="item.content"></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '~/assets/api.js'
export default {
  layout: 'layout',
  transition: 'page',
  data () {
    return {
      detail:{
        title:'',
        author:{
          login_name:''
        },
        content:'',
        replies:[]
      }
    }
  },
  created () {
    const id = this.$route.query.id
    this.$nextTick(()=>{
      this.getCnodeDetail(id)
    })
  },
  methods:{
    getCnodeDetail (id) {
      api.getCodeDetail(id).then(res=>{
        this.detail = res.data
      })
    }
  }
}
</script>
<style>
.markdown-text{
  padding:10px 20px;
  color:#fff;
}
.markdown-text a{
  color:#80bd01;
  text-decoration: none;
}
.markdown-text code,.markdown-text table{
  color:#666;
}
.markdown-text a:hover{
  text-decoration: underline;
}
.cnode-detail-title{
  padding:16px 0;
  color:#d2d8ba;
  font-size:20px;
  text-align: center;
}
.cnode-detail-author{
  padding:0 10px;
  text-align:right;
  line-height:30px;
}
.cnode-detail-author .time{
  margin-left:10px;
  color:#808080;
}
.cnode-comment{
  border-top:1px solid #666;
}
.cnode-comment-content{
  display:flex;
  align-items: center;
  border-bottom:1px solid #666;
}
.cnode-comment-content img {
  width:40px;
  height:40px;
  padding:10px;
}
.cnode-comment-content .info{
  margin-top:10px;
  font-size:14px;
  color:#aaa;
}
.cnode-comment-content .info .author{
  margin-right:10px;
  color:#808080;
}
.cnode-comment-content .markdown-text{
  padding:6px 0;
  font-size:14px;
}
</style>
