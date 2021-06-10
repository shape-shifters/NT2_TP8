import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './componentes/Formulario/index.vue'
import Punto2 from './componentes/Punto2.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/punto2', component: Punto2 }
    ]
})