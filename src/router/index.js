import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Account from '../views/Account.vue'
import NotFound from '../views/NotFound.vue'
import Shop from '../views/Shop.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
