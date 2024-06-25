import { createApp } from 'vue';
import App from './App.vue';
import { i18n, loadLocaleMessages } from './i18n';
import './main.css';

const app = createApp(App);
app.use(i18n);

loadLocaleMessages(i18n.global.locale).then(() => {
  app.mount('#app');
});
