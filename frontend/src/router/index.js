import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index.vue'
import History from '@/pages/history.vue'
import Content from '@/pages/content.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/history',
            name: 'History',
            component: History
        },
        {
            path: '/:id',
            name: 'View Paste',
            component: Content
        }
    ]
})