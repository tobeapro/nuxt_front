<template>
  <div class="not-found">
    <div class="not-found-text">
      404
    </div>
    <button class="rk-button" @click="()=>{this.$router.push('/')}">返回首页</button>
  </div>
</template>
<script>
export default {
  name: 'notFound',
  data () {
    return {

    }
  }
}
</script>
<style>
.not-found{
  padding-top:20vh;
  height:100vh;
  text-align: center;
  background-color:#fff;
}
.not-found-text{
  margin-bottom:20px;
  font-size:30px;
  font-weight:bold;
}
</style>
