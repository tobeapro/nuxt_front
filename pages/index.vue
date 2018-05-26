<template>
  <div class="home">
    <div class="home-menu" :style="{top:'-'+ activeIndex*100+'%'}">
      <section class="home-item">
        <div class="out-box">
          <div class="bad-egg">
            <div class="head">
              <div class="hair" style="position:relative;">
                <i class="hair-1" style="position:absolute;transform:rotate(60deg);left:22px;top:-20px;width:100px;height:100px;border-left:4px solid #000;border-radius:46%;"></i>
                <i class="hair-2" style="position:absolute;transform:rotate(28deg);left:16px;top:8px;width:200px;height:100px;border-top:4px solid #000;border-radius:50%;">
                  <i style="position:absolute;transform:rotate(-30deg);top:13px;left:9px;width:24px;height:4px;background-color:#000;border-radius:6px;"></i>
                  <i style="position:absolute;transform:rotate(-16deg);top:7px;left:30px;width:8px;height:2px;background-color:#000;border-radius:6px;"></i>
                </i>
                <i class="hair-3" style="position:absolute;transform:rotate(70deg);left:40px;top:-12px;width:100px;height:100px;border-left:4px solid #000;border-radius:46%;">
                </i>
                <i class="hair-4" style="position:absolute;transform:rotate(80deg);left:60px;top:-4px;width:100px;height:100px;border-left:4px solid #000;border-radius:50%;"></i>
              </div>
              <div class="face" style="position:relative;width:110px;height:100px;border:4px solid #000;border-radius:46px;background-color:#fff">
                <div class="brow" style="position:absolute;top:26px;left:20px;">
                  <i style="position:relative;float:left;width:14px;height:16px;border-top:4px solid #000;border-radius:16px;" >
                    <i style="position:absolute;top:-2px;left:-1px;width:3px;height:3px;background-color:#000;border-radius:0 2px 2px 2px;"></i>
                    <i style="position:absolute;top:-2px;right:-1px;width:3px;height:3px;background-color:#000;border-radius:0 2px 2px 2px;"></i>
                  </i>
                  <i style="position:relative;float:right;margin-left:28px;width:14px;height:16px;border-top:4px solid #000;border-radius:16px;" >
                    <i style="position:absolute;top:-2px;left:-1px;width:3px;height:3px;background-color:#000;border-radius:0 2px 2px 2px;"></i>
                    <i style="position:absolute;top:-2px;right:-1px;width:3px;height:3px;background-color:#000;border-radius:0 2px 2px 2px;"></i>
                  </i>
                </div>
                <div class="eyes" style="position:absolute;top:40px;left:24px;">
                  <i style="position:absolute;left:0;top:0;width:8px;height:8px;">
                    <i class="eye" style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:8px;height:8px;background-color:#000;border-radius:50%"></i>
                  </i>
                  <i style="position:absolute;left:40px;top:0;width:8px;height:8px;">
                    <i class="eye" style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:8px;height:8px;background-color:#000;border-radius:50%"></i>
                  </i>
                </div>
                <div class="mouse" style="position:absolute;top:40px;left:50%;transform:translateX(-50%)">
                  <div style="position:relative;width:20px;height:20px;border-bottom:3px solid #000;border-radius:50%;">
                    <i style="position:absolute;left:-1px;bottom:-1px;width:2px;height:8px;background-color:#fff;"></i>
                    <i style="position:absolute;right:-1px;bottom:-1px;width:2px;height:8px;background-color:#fff;"></i>
                  </div>
                </div>
                <div class="cheek" style="position:absolute;width:100%;top:60px;left:50%;transform:translateX(-50%)">
                  <div style="position:relative;float:left;margin-left:8px;width:16px;height:14px;background-color:#ff8a8a;border-radius:50%;">
                    <i style="position:absolute;left:5px;top:3px;transform:rotate(10deg);width:2px;height:8px;background-color:#555;border-radius:2px;"></i>
                    <i style="position:absolute;left:9px;top:3px;transform:rotate(10deg);width:2px;height:8px;background-color:#555;border-radius:2px;"></i>
                  </div>
                  <div style="position:relative;float:right;margin-right:10px;width:16px;height:14px;background-color:#ff8a8a;border-radius:50%;">
                    <i style="position:absolute;left:5px;top:3px;transform:rotate(10deg);width:2px;height:8px;background-color:#555;border-radius:2px;"></i>
                    <i style="position:absolute;left:9px;top:3px;transform:rotate(10deg);width:2px;height:8px;background-color:#555;border-radius:2px;"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="home-item" style="width:100%;height:100%;background-color:#bbb;">

      </section>
      <section class="home-item" style="width:100%;height:100%;background-color:#ccc;">

      </section>
      <section class="home-item" style="width:100%;height:100%;background-color:#ddd;">

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
      isScroll: true
    }
  },
  methods: {
    scrollSwitch (event) {
      if(this.isScroll){
        this.isScroll = false
        setTimeout(() => {
          this.isScroll = true
        },500)
        if(event.type==='DOMMouseScroll'){
          if(event.detail>0&&this.activeIndex<3){
            this.activeIndex+=1
          }else if(event.detail<0&&this.activeIndex>0){
            this.activeIndex-=1
          }
        }else{
          if(event.deltaY>0&&this.activeIndex<3){
            this.activeIndex+=1
          }else if(event.deltaY<0&&this.activeIndex>0){
            this.activeIndex-=1
          }
        }
      }
    }
  },
  mounted () {
    if(navigator.userAgent.indexOf("Firefox")>0){
      window.addEventListener('DOMMouseScroll',this.scrollSwitch)
    }else{
      window.addEventListener('mousewheel',this.scrollSwitch)
    }
  }
}
</script>

<style>
@keyframes eye {
  0% {height:8px}
  90% {height:8px}
  100% {height:2px}
}
.eye{
  position:absolute;
  animation:eye 1.6s infinite;
  width:8px;
  height:8px;
  background-color:#000;
  border-radius:50%
}
.hair-1:after{
  content:'';
  position:absolute;
  transform: rotate(-20deg);
  top:2px;
  left:10px;
  width:40px;
  height:10px;
  background-color:#fff;
}
.hair-2:before{
  content:'';
  position:absolute;
  transform: rotate(24deg);
  top:18px;
  left:2px;
  width:4px;
  height:40px;
  border-radius:4px;
  background-color:#000;
}
.hair-2:after{
  content:'';
  position:absolute;
  transform: rotate(16deg);
  top:0px;
  left:60px;
  width:160px;
  height:30px;
  background-color:#fff;
}
.hair-3:before{
  content:'';
  position:absolute;
  transform: rotate(-40deg);
  top:-10px;
  left:-12px;
  width:100px;
  height:14px;
  background-color:#fff;
  border-radius:10px;
}
.hair-3:after{
  content:'';
  position:absolute;
  transform:rotate(18deg);
  top:29px;
  left:-1px;
  width:3px;
  height:3px;
  background-color:#000;
  border-radius:1px;
}
.hair-4:after{
  content:'';
  position:absolute;
  transform: rotate(-50deg);
  top:-30px;
  left:-20px;
  width:100px;
  height:40px;
  background-color:#fff;
  border-radius:2px;
  overflow:hidden;
}
::-webkit-scrollbar{
  display:none;
}
.home{
  position:relative;
  margin-top:-20px;
  height:calc(100vh - 60px);
  background-color:#fff;
  overflow:hidden;
}
.home-menu{
  transition:all .2s ease-out;
  position:absolute;
  top:0;
  width:100%;
  height:100%;
}
.home-item{
  width:100%;
  height:100%;
  overflow:hidden;
}
.out-box{
  position:relative;
  width:100%;
  height:100%;
  min-height:400px;
}
.bad-egg{
  position:absolute;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
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
