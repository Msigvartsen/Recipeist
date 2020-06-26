export const addToList = (productToAdd, quantity) => {
  let container = JSON.parse(localStorage.getItem("user"))

  if (container == undefined || container == null) {
    let products = [{ product: productToAdd, quantity: quantity }]
    localStorage.setItem("user", JSON.stringify(products))
    console.log("Created new list")
    return
  }

  for (let product in container) {
    console.log("Productname: ",container[product].product)
    if (container[product].product == productToAdd) {
      container[product].quantity = quantity
      localStorage.setItem("user", JSON.stringify(container))
      console.log("Item already exists")
      return
    }
  }
  container.push({ product: productToAdd, quantity: quantity })
  console.log("pushed new item")
  localStorage.setItem("user", JSON.stringify(container))
}


export const removeFromList = (product, quantity) => {
  let items = JSON.parse(localStorage.getItem("user"))
  items.products
}

export const getProductsInList = () => {
  let products = JSON.parse(localStorage.getItem("user")).products
  return products
}
