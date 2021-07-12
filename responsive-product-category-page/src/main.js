import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueKinesis from "vue-kinesis";
// import Root from './App.vue'
// import VueParallaxJs from 'vue-parallax-js'

// add vue-parallax-js to vue


// Vue.use(VueParallaxJs)
const app = createApp(App)

// app.use(VueParallaxJs)
app.use(VueKinesis);
app.mount('#app')
