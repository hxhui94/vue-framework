<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import Tabbar from './common/Tabbar'
  export default {
      components: {
        Tabbar
      },
    name: "mainPage",

  //监听路由变化切换tab
    watch:{
      $router(to,from){
        for(let i=0;i<this.tabbar.length;i++){
          if(this.tabbar[i].link===to.path){
            this.tabbar[i].active=true;
          }else{
            this.tabbar[i].active=false;
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
