import { createWebHistory, createRouter } from "vue-router";
import list from './components/list.vue'
import home from './components/home.vue'
import detail from './components/detail.vue'

const routes = [
  {
    path: "/list",
    component: list, //위에서 import해야 첨부가능
  },
  {
    path: "/",
    component: home,
  },
  {
    path: "/detail/:id(\\d+)",
    component: detail,
  }
];

//이게 메인
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 