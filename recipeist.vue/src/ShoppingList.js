// Må refaktoriseres ganske masse :) Renaming etc.. feks localstorage key fra "User" til "products".
//lage egne funksjoner som håndterer henting/parsing av objektet etc.

const localStorageKey = "shoppingList"

export const addToList = productToAdd => {
  let container = getShoppingList()

  if (container == undefined || container == null) {
    container = [{ product: productToAdd, quantity: 1 }]
    updateShoppingList(container)
    return
  }

  for (let product in container) {
    if (container[product].product == productToAdd) {
      container[product].quantity++
      updateShoppingList(container)
      return
    }
  }

  container.push({ product: productToAdd, quantity: 1 })
  updateShoppingList(container)
}

export const decrementProductQuantity = productName => {
  let container = getShoppingList()
  let index = findProductIndex(productName)
  if (index < 0) {
    return
  }
  let product = container[index]

  if (product.quantity > 1) {
    product.quantity--
  } else {
    container.splice(index, 1)
  }
  updateShoppingList(container)
}

export const removeItem = productName => {
  let container = getShoppingList()
  let index = findProductIndex(productName)
  if (index < 0) {
    return
  }
  container.splice(index, 1)
  updateShoppingList(container)
}

export const clearShoppingList = () => {
  localStorage.removeItem(localStorageKey)
}

export const getListItemQuantity = productToFind => {
  let container = getShoppingList()
  let index = findProductIndex(productToFind)
  if (index < 0) {
    return
  }
  let product = container[index]

  return product.quantity > 0 ? product.quantity : 0
}

export const getShoppingList = () => {
  return JSON.parse(localStorage.getItem(localStorageKey))
}

const updateShoppingList = container => {
  localStorage.setItem(localStorageKey, JSON.stringify(container))
}

const findProductIndex = productToFind => {
  let container = getShoppingList()
  for (let product in container) {
    if (container[product].product == productToFind) {
      return product
    }
  }
  return -1
}
