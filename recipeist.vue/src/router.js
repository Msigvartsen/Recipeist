import Vue from "vue";
import VueRouter from "vue-router"

import Dashboard from "./components/Dashboard.vue";
import NotFound from "./components/NotFound.vue";
import RecipeList from "./components/RecipeList.vue";
import IngredientList from "./components/IngredientList.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard },
  { path: '/recipes', component: RecipeList },
  { path: '/recipes/:id', component: () => import("./components/Recipe.vue") },
  { path: '/ingredients', component: IngredientList },
  { path: '/ingredients/:slug', component: () => import("./components/Ingredient.vue") },
  { path: '*', component: NotFound },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})