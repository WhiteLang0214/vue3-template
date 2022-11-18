import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/layout.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/index.vue")
        }
      ]
    }
  ],
  // 是否应该禁止尾部斜杠。默认为假
  strict: false,
  // 页面滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router;