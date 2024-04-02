import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

createApp(App)
.use(Vue3PersianDatetimePicker, {
  name: 'CustomDatePicker',
  props: {
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'jYYYY-jMM-jDD',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false,
    //...
    //... And whatever you want to set as default.
    //...
  }
})
.use(store).use(router).mount('#app')
