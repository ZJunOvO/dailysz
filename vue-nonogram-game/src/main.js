import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import App from './App.vue'
import './styles/theme.css'

// 导入页面组件
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import Settings from './views/Settings.vue'

// 路由配置
const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/game/:size?', 
    name: 'Game',
    component: Game,
    props: route => ({ size: parseInt(route.params.size) || 5 })
  },
  { 
    path: '/settings', 
    name: 'Settings',
    component: Settings 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')