import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/pages/about-us",
        name: "about-us",
        component: () => import("@/views/pages/AboutUs.vue"),
      },
      {
        path: "/pages/invoice",
        name: "invoice",
        component: () => import("@/views/pages/Invoice.vue"),
      },
      {
        path: "/pages/faq",
        name: "faq",
        component: () => import("@/views/pages/FAQ.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/components/page-layouts/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
