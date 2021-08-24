<template>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // setup () {
  //   var oHead = document.getElementsByTagName('HEAD')[0]
  //   var oScript = document.createElement('script')
  //   oScript.type = 'text/javascript'
  //   oScript.src = 'https://appx/web-view.min.js'
  //   oScript.className = 'aaa'
  //   oHead.appendChild(oScript)
  // }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
