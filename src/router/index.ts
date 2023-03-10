import Vue from 'vue';
import type { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import KontaktKarte from '../views/KontaktKarte.vue';
import DatenschutzErkl√§rung from '../views/DatenschutzErkl√§rung.vue';
import ImpressumKarte from '../views/ImpressumKarte.vue';

Vue.use(VueRouter);

export const homeRoute = {
  path: '/home',
  name: 'Home',
  component: HomeView,
};
const kontaktRoute = {
  path: '/kontakt',
  name: 'kontakt',
  component: KontaktKarte,
  nameInDerNavigation: 'Kontakt',
  icon: 'mdi-account',
};
const datenschutzRoute = {
  path: '/datenschutz',
  name: 'datenschutz',
  component: DatenschutzErkl√§rung,
  nameInDerNavigation: 'Datenschutz',
  icon: 'mdi-shield',
};
const impressumRoute = {
  path: '/impressum',
  name: 'impressum',
  component: ImpressumKarte,
  nameInDerNavigation: 'Impressum',
  icon: 'mdi-script-text',
};

export const footer: Array<RouteConfig & { nameInDerNavigation: string; icon: string }> = [
  kontaktRoute,
  datenschutzRoute,
  impressumRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [homeRoute, ...footer,
    {
      name: 'CatchAll',
      path: '/:pathMatch(.*)*',
      redirect: homeRoute,
    }],
});

export default router;
