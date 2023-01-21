import Vue from 'vue';
import type { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UnserUnternehmen from '../views/UnserUnternehmen.vue';
Vue.use(VueRouter);

export const unternehmenRoute = {
  path: '/unternehmen',
  name: 'unternehmen',
  component: UnserUnternehmen,
  nameInDerNavigation: 'Unternehmen',
  icon: 'mdi-account',
};
export const leisungRoute = {
  path: '/leistungen',
  name: 'leistungen',
  component: HomeView,
  nameInDerNavigation: 'Leistungen',
  icon: 'mdi-account',
};
export const zielgruppeRoute = {
  path: '/zielgruppe',
  name: 'zielgruppe',
  component: HomeView,
  nameInDerNavigation: 'Zielgruppe',
  icon: 'mdi-account',
};
export const qualifikationenRoute = {
  path: '/qualifikationen',
  name: 'qualifikationen',
  component: HomeView,
  nameInDerNavigation: 'Qualifikationen',
  icon: 'mdi-account',
};
export const kontaktRoute = {
  path: '/kontakt',
  name: 'kontakt',
  component: HomeView,
  nameInDerNavigation: 'Kontakt',
  icon: 'mdi-account',
};
export const datenschutzRoute = {
  path: '/datenschutz',
  name: 'datenschutz',
  component: HomeView,
  nameInDerNavigation: 'Datenschutz',
  icon: 'mdi-account',
};
export const impressumRoute = {
  path: '/impressum',
  name: 'impressum',
  component: HomeView,
  nameInDerNavigation: 'Impressum',
  icon: 'mdi-account',
};
export const routes: Array<RouteConfig & { nameInDerNavigation: string; icon: string }> = [
  unternehmenRoute,
  leisungRoute,
  zielgruppeRoute,
  qualifikationenRoute,
  kontaktRoute,
  datenschutzRoute,
  impressumRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
