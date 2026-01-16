import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
if (navEntries.length && navEntries[0]!.type === 'reload') {
  sessionStorage.clear()
}

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
