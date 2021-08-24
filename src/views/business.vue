<template>
  <div>
    <h1>我的商旅</h1>
    <van-button>我的商旅</van-button>
    <van-button @click="showLoading">显示Loading</van-button>
    <van-button @click="hideLoading">关闭Loading</van-button>
    <van-button @click="mpaasRefreshCall">mpaas刷新</van-button>
    <van-button @click="toMiniProgram">向小程序发消息</van-button>
    <pre v-html="windowhtml"></pre>
    <div class="box"></div>
    <index></index>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Index from '../components/index.vue'
import { showLoadingFun, hideLoadingFun } from '../utils/util'
import { toMiniProgramFun } from '../utils/miniprogram'
export default defineComponent({
  name: 'business',
  components: {
    Index
  },
  setup () {
    document.title = '我的商旅'
    const showLoading = () => {
      showLoadingFun('加载')
      setTimeout(() => {
        hideLoadingFun()
      }, 3000)
    }
    const hideLoading = () => {
      hideLoadingFun()
    }
    const mpaasRefreshCall = () => {
      ready(() => {
        (window as any).AlipayJSBridge.call('getTestInfo', {}, (res: any) => {
          alert(JSON.stringify(res))
        })
      })
    }
    const toMiniProgram = () => {
      // toMiniProgramFun()
      (window as any).myAlert()
      // alert(JSON.stringify(my.getEnv()))
      // my.alert({
      //   content: '啊哈哈哈'
      // })
      // alert(document.getElementsByClassName('aaa')[0].innerHTML)
      // my.getEnv((res: any) => {
      //   console.log(res.miniprogram)
      //   alert(res.miniprogram)
      // })
      // (my as any).postMessage({ sendToMiniProgram: '0' })
    }
    function ready (callback: () => void) {
      const win: any = window
      if (win.AlipayJSBridge) {
        callback && callback()
      } else {
        document.addEventListener('AlipayJSBridgeReady', callback, false)
      }
    }
    return {
      showLoading,
      hideLoading,
      mpaasRefreshCall,
      toMiniProgram
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 700px;
  height: 7000px;
  background: red;
}
</style>
