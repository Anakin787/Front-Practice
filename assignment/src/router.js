import { createWebHistory, createRouter } from "vue-router";
import admin from './components/admin.vue'
import stat from './components/stat.vue'
import login from './components/login.vue'

const routes = [
    {
        path: "/admin",
        component: admin, //위에서 import해야 첨부가능
    },
    {
        path: "/stat",
        component: stat,
    },
    {
        path: "/login",
        component: login,
    },
];

//이게 메인
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 