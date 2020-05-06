import Vue from "vue";
import VueRouter from "vue-router"

import NotFound from "./components/NotFound.vue";
import RecipeList from "./components/RecipeList.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/recipes', component: RecipeList },
  { path: '/recipes/:id', component: () => import("./components/Recipe.vue") },
  { path: '*', component: NotFound },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})