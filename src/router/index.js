import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '../views/RestaurantView.vue';
import MenuView from '../views/MenuView.vue';
import ProductsView from '../views/ProductsView.vue';
import NewsView from '../views/NewsView.vue';
import ReviewsView from '../views/ReviewsView.vue';
import FindUsView from '@/views/FindUsView.vue';

const routes = [
  { path: '/', component: RestaurantView },
  { path: '/menu', component: MenuView },
  { path: '/products', component: ProductsView },
  { path: '/news', component: NewsView },
  { path: '/reviews', component: ReviewsView },
  { path: '/map', component: FindUsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
