<template>
  <div class="tabberWarp" >
    <div class="warp">
      <Item :txt='item1.txt' :page='item1.page' @change='getVal' v-for='item1 in tabbarDes':sel='selected' :key="item1.txt">
        <img :src="item1.normalImg" slot='normalImg'>
        <img :src="item1.activeImg" slot='activeImg'>
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Item from './Item.vue'
  export default{
    components:{
      Item
    },
    data:function(){
      return{
        selected:'skin',
        tabbarDes:[
          {
            txt:'表情',
            page: 'home',
            normalImg:require('../../assets/logo.png'),
            activeImg:require('../../assets/logo.png')
          },
          {
            txt:'皮肤',
            page:'office',
            normalImg:require('../../assets/logo.png'),
            activeImg:require('../../assets/logo.png')
          },
          {
            txt:'词库',
            page:'mine',
            normalImg:require('../../assets/logo.png'),
            activeImg:require('../../assets/logo.png')
          }
        ]
      }
    },
    methods:{
      getVal:function(res){
        console.log("aaa")
        this.selected = res;
      }
    }
  }
</script>
<style type="text/css">
  .warp{
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
  }
  .warp img{
    width: 20px;
    height: 20px;
  }
  .tabberWarp img{
    margin-top: 10px;
    margin-bottom: 5px;

  }
  .tabberWarp{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
  }
</style>
