<template>
  <div>
    <h1>ShoppingList</h1>
    <section v-for="item in list" :key="item.product" class="listItem">
      <p>{{ item.product }}</p>
      <p>{{ item.quantity }}</p>
      <button @click="add(item.product)">Legg til</button>
      <button @click="decrement(item.product)">Fjern</button>
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
    clearList: function () {
      listFunctions.clearShoppingList()
      this.list = []
    },
    add: function (product) {
      listFunctions.addToList(product)
      this.list = listFunctions.getShoppingList()
    },
    decrement: function (product) {
      listFunctions.decrementProductQuantity(product)
      this.list = listFunctions.getShoppingList()
    },
    remove: function (product) {
      listFunctions.removeItem(product)
      this.list = listFunctions.getShoppingList()
    }
  }
}
</script>

<style>
.listItem {
  border: 1px solid black;
  background-color: thistle;
}
</style>
