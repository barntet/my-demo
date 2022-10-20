import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index.ts';

createApp(App).use(router).use(Antd).use(ElementPlus).mount('#app');
