<template>
  <div id="rk">
    <div class="rk-container">
      <header class="rk-header">
        <div class="container">

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
<style>
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
</style>
