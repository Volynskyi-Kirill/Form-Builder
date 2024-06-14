import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Card from 'primevue/card'
import Slider from 'primevue/slider'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('Card', Card)
app.component('Slider', Slider)
app.component('Toast', Toast)
app.mount('#app')
