<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>

</template>

<script>
import { Group, Cell } from 'vux'
import Tabbar from './../page/common/Tabbar'
export default {
  components: {
    Group,
    Cell,
    Tabbar
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
