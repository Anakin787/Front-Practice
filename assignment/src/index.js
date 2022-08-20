import Vue from 'vue';
import VueRouter from 'vue-router';
import admin from "./admin.vue";
import statistic from "./statistic.vue";

Vue.use(VueRouter);
const router =new VueRouter({ // eslint-disable-line no-unused-vars
    mode:'history',
    routes:[{
        path:'/',
        redirect:'/home'
    },{
        path: "/admin",
        component: admin
    },{
        path: "/statistic",
        component: statistic
    }]
});
    