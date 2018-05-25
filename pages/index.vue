<template>
  <div class="home">
    <div class="home-menu" :style="{top:'-'+ activeIndex*100+'%'}">
      <section style="width:100%;height:100%;background-color:#aaa;">

      </section>
      <section style="width:100%;height:100%;background-color:#bbb;">

      </section>
      <section style="width:100%;height:100%;background-color:#ccc;">

      </section>
      <section style="width:100%;height:100%;background-color:#ddd;">

      </section>
    </div>
    <div class="scroll-menu">
      <i class="scroll-item" @click="activeIndex=0" :class="{active:activeIndex===0}"></i>
      <i class="scroll-item" @click="activeIndex=1" :class="{active:activeIndex===1}"></i>
      <i class="scroll-item" @click="activeIndex=2" :class="{active:activeIndex===2}"></i>
      <i class="scroll-item" @click="activeIndex=3" :class="{active:activeIndex===3}"></i>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'layout',
  data () {
    return {
      activeIndex:0,
    }
  },
  methods: {
    scrollSwitch ($event) {
      // if(this.activeIndex===0||this.activeIndex===3){
      //   return
      // }
      console.log($event)
    }
  },
  mounted () {
    window.addEventListener('scroll',this.scrollSwitch)
  }
}
</script>

<style>
::-webkit-scrollbar{
  display:none;
}
.home{
  position:relative;
  margin-top:-20px;
  height:calc(100vh - 60px);
  overflow:hidden;
}
.home-menu{
  transition:all .2s ease-out;
  position:absolute;
  top:0;
  width:100%;
  height:100%;
}
.scroll-menu{
  position:fixed;
  right:20px;
  top:50%;
  transform: translateY(-50%);
}
.scroll-menu .scroll-item{
  display:block;
  margin:10px 0;
  width:14px;
  height:14px;
  border-radius: 50%;
  background-color:#555;
  cursor:pointer;
}
.scroll-menu .scroll-item.active{
  background-color:#fff;
  border:2px solid #000;
}
</style>
