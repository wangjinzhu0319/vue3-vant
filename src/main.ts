import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.scss'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'
import { Button, Toast } from 'vant'

const app = createApp(App)

app.use(Button).use(Toast)

app.use(store).use(router).mount('#app')
