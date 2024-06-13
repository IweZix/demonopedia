import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomePage.vue';
import Search from '../views/SearchPage.vue';
import About from '../views/AboutPage.vue';
import NotFound from '@/views/NotFoundPage.vue';
import Personnage from '@/views/PersonnagePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/personnage/:id',
    name: 'Personnage',
    component: Personnage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
