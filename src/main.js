
//Main App imports

import { createApp } from 'vue';
import App from './App.vue';

//FontAwesome Imports

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './icons'

//Creation and mounting

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
