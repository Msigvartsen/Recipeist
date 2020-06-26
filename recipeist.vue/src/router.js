import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "./views/Dashboard.vue"
import NotFound from "./views/NotFound.vue"
import RecipeList from "./views/RecipeList.vue"
import IngredientList from "./views/IngredientList.vue"
import ShoppingList from "./views/ShoppingList.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Dashboard },
  { path: "/oppskrifter", component: RecipeList },
  { path: "/oppskrifter/:id", component: () => import("./views/Recipe.vue") },
  { path: "/ingredienser", component: IngredientList },
  {
    path: "/ingredienser/:slug",
    component: () => import("./views/Ingredient.vue")
  },
  {
    path: "/random",
    component: () => import("./views/Random.vue")
  },
  {path: "/shoppinglist", component: ShoppingList},
  { path: "*", component: NotFound }
]

export const router = new VueRouter({
  mode: "history",
  routes
})
