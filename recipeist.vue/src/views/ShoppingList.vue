<template>
  <div>
    <h1>ShoppingList</h1>
    <p>{{ message }}</p>
    <p v-for="item in list" :key="item.product">
      {{ item.product }} <span>{{ item.quantity }}</span>
    </p>
    <button @click="clearList">Tøm handleliste</button>
  </div>
</template>

<script>
import { clearShoppingList } from "../ShoppingList"

export default {
  data() {
    return { message: "Hello", list: [] }
  },
  async mounted() {
    this.list = JSON.parse(localStorage.getItem("user"))
  },
  methods: {
    clearList: () => clearShoppingList()
  }
}
</script>
