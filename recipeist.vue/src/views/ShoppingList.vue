<template>
  <div>
    <h1>ShoppingList</h1>
    <section v-for="item in list" :key="item.product" class="listItem">
      <p>{{ item.product }}</p>
      <p>{{ item.quantity }}</p>
      <button @click="add(item.product, item.quantity++)">Legg til</button>
      <button @click="decrement(item.product, item.quantity > 1 ? item.quantity-- : (item.quantity = 0))">Fjern</button>
      <button @click="remove(item.product)">Slett</button>
    </section>
    <button @click="clearList">Tøm handleliste</button>
  </div>
</template>

<script>
import * as listFunctions from "../ShoppingList"

export default {
  data() {
    return { list: [] }
  },
  async mounted() {
    this.list = listFunctions.getShoppingList()
  },
  methods: {
    clearList: () => listFunctions.clearShoppingList(),
    add: (product, quantity) => listFunctions.addToList(product),
    decrement: (product, quantity) => listFunctions.decrementProductQuantity(product),
    remove: product => listFunctions.removeItem(product)
  }
}
</script>

<style>
.listItem {
  border: 1px solid black;
  background-color: thistle;
}
</style>
