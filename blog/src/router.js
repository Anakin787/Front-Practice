import { createWebHashHistory, createRouter } from "vue-router";
import list from './components/list.vue'
import home from './components/home.vue'
import detail from './components/detail.vue'
import Author from './components/Author.vue'

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
    path: "/detail/:id",
    component: detail,
    children:[ //특정 페이지 안에서 route를 나누고 싶을때 nested routes쓴다.
      {
      path:"Author",
      component:Author
      }
    ]
  }
];

//이게 메인
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router; 