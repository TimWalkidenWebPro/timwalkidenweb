import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { motionPlugin} from "@oku-ui/motion";
import './index.css'
createApp(App).use(router).use(motionPlugin).mount('#app')
