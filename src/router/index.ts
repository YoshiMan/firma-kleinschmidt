import Vue from 'vue';
import type { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';
import UnserUnternehmen from '../views/UnserUnternehmen.vue';
import UnsereLeistungen from '../views/UnsereLeistungen.vue';
import UnsereZielgruppe from '../views/UnsereZielgruppe.vue';
import UnsereQualifikationen from '../views/UnsereQualifikationen.vue';
import KontaktKarte from '../views/KontaktKarte.vue';
import DatenschutzErklärung from '../views/DatenschutzErklärung.vue';
import ImpressumKarte from '../views/ImpressumKarte.vue';

Vue.use(VueRouter);

const unternehmenRoute = {
  path: '/unternehmen',
  name: 'unternehmen',
  component: UnserUnternehmen,
  nameInDerNavigation: 'Unternehmen',
  icon: 'mdi-account',
};
const leisungRoute = {
  path: '/leistungen',
  name: 'leistungen',
  component: UnsereLeistungen,
  nameInDerNavigation: 'Leistungen',
  icon: 'mdi-account',
};
const zielgruppeRoute = {
  path: '/zielgruppe',
  name: 'zielgruppe',
  component: UnsereZielgruppe,
  nameInDerNavigation: 'Zielgruppe',
  icon: 'mdi-account',
};
const qualifikationenRoute = {
  path: '/qualifikationen',
  name: 'qualifikationen',
  component: UnsereQualifikationen,
  nameInDerNavigation: 'Qualifikationen',
  icon: 'mdi-account',
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
  component: DatenschutzErklärung,
  nameInDerNavigation: 'Datenschutz',
  icon: 'mdi-account',
};
const impressumRoute = {
  path: '/impressum',
  name: 'impressum',
  component: ImpressumKarte,
  nameInDerNavigation: 'Impressum',
  icon: 'mdi-account',
};

export const navigation: Array<RouteConfig & { nameInDerNavigation: string; icon: string }> = [
  unternehmenRoute,
  leisungRoute,
  zielgruppeRoute,
  qualifikationenRoute,
];

export const footer: Array<RouteConfig & { nameInDerNavigation: string; icon: string }> = [
  kontaktRoute,
  datenschutzRoute,
  impressumRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...navigation, ...footer,
    {
      name: 'CatchAll',
      path: '/:pathMatch(.*)*',
      redirect: unternehmenRoute,
    }],
});

export default router;
