import { createRouter, createWebHashHistory } from 'vue-router'

// Import View Page
import MainPage from '../views/MainPage.vue';
import AboutusPage from '../views/AboutusPage.vue';
import ServicePage from '../views/ServicePage.vue';
import DetailservicePage from '../views/DetailservicePage.vue';
import MenuPage from '../views/MenuPage.vue';
import GaleryPage from '../views/GaleryPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SigninPage from '../views/SigninPage.vue';
import RegistPage from '../views/RegistPage.vue';
import OrderPage from '../views/OrderPage.vue';
import ConfirmPage from '../views/ConfirmPage.vue';
import SuccessPage from '../views/SuccessPage.vue';
import BlogPage from '../views/BlogPage.vue';
import DetailblogPage from '../views/DetailblogPage.vue';


// Regist View Page
const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/aboutus',
    name: 'AboutusPage',
    component: AboutusPage
  },
  {
    path: '/packetservice',
    name: 'ServicePage',
    component: ServicePage
  },
  {
    path: '/detailservice',
    name: 'DetailservicePage',
    component: DetailservicePage
  },
  {
    path: '/menucatering',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/galery',
    name: 'GaleryPage',
    component: GaleryPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/aboutus',
    name: 'AboutusPage',
    component: AboutusPage
  },
  {
    path: '/signIn',
    name: 'SigninPage',
    component: SigninPage
  },
  {
    path: '/registration',
    name: 'RegistPage',
    component: RegistPage
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage
  },
  {
    path: '/confirmation',
    name: 'ConfirmPage',
    component: ConfirmPage
  },
  {
    path: '/success',
    name: 'SuccessPage',
    component: SuccessPage
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/detailblog',
    name: 'DetailblogPage',
    component: DetailblogPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
