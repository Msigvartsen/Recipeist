// Må refaktoriseres ganske masse :) Renaming etc.. feks localstorage key fra "User" til "products".
//lage egne funksjoner som håndterer henting/parsing av objektet etc.

export const addToList = productToAdd => {
  let container = JSON.parse(localStorage.getItem("user"))

  if (container == undefined || container == null) {
    let products = [{ product: productToAdd, quantity: 1 }]
    localStorage.setItem("user", JSON.stringify(products))
    return
  }

  for (let product in container) {
    if (container[product].product == productToAdd) {
      container[product].quantity++
      localStorage.setItem("user", JSON.stringify(container))
      return
    }
  }

  container.push({ product: productToAdd, quantity: 1 })
  localStorage.setItem("user", JSON.stringify(container))
}

export const decrementProductQuantity = productName => {
  let container = JSON.parse(localStorage.getItem("user"))
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
  localStorage.setItem("user", JSON.stringify(container))
}

export const removeItem = productName => {
  let container = JSON.parse(localStorage.getItem("user"))
  let index = findProductIndex(productName)
  if (index < 0) {
    return
  }
  container.splice(index, 1)
  localStorage.setItem("user", JSON.stringify(container))
}

export const getProducts = () => {
  return JSON.parse(localStorage.getItem("user"))
}

export const clearShoppingList = () => {
  localStorage.removeItem("user")
}

export const getListItemQuantity = productToFind => {
  let container = JSON.parse(localStorage.getItem("user"))
  let index = findProductIndex(productToFind)
  if (index < 0) {
    return
  }
  let product = container[index]

  return product.quantity > 0 ? product.quantity : 0
}

const findProductIndex = productToFind => {
  let container = JSON.parse(localStorage.getItem("user"))
  for (let product in container) {
    if (container[product].product == productToFind) {
      return product
    }
  }
  return -1
}
