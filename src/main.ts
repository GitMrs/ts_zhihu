import { createApp } from 'vue';
import Router from './router';
import Store from './store';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);
app.use(Router);
app.use(Store);
app.mount('#app')
