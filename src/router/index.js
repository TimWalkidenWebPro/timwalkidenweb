import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioProfile from "../views/portfolioProfile.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio/:slug',
    name: 'portfolio-profile',
    component: PortfolioProfile
  },
  /*{
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import(
      "../views/NotFound"
    )
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
