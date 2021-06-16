import { createApp } from 'vue'
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus';
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
