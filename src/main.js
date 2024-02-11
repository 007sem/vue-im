
import { createApp } from 'vue'
import App from './App.vue'
import './style/base.less'
import router from "@/routes"



const app = createApp(App)

app.use(router)
app.mount('#app')
