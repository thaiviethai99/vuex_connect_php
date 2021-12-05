import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../components/AllProduct.vue'
import Create from '../components/CreateProduct.vue'
import Edit from '../components/EditProduct.vue'
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    name: 'create',
    path: '/create',
    component: Create
}, {
    name: 'edit',
    path: '/edit/:id',
    component: Edit
}, ]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router