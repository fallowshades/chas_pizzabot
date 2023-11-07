const vegetarian = 'Vegetarian Pizza'
const hawaiian = 'Hawaiian Pizza'
const pepperoni = 'Pepperoni Pizza'

const pizzaPrice = 80

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
)

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15
  } else {
    return 20
  }
}
function checkOrderName(orderName) {
  const pizzaMenu = [vegetarian, hawaiian, pepperoni].map((item) =>
    item.replace(' Pizza', '').toLowerCase()
  )
  console.log(pizzaMenu)
  if (pizzaMenu.includes(orderName.toLowerCase())) {
    return true
  }
  return false
}

function setValues() {
  /*
alert(`Enter the name of the pizza you want to order today.`)
let orderName = prompt(`Enter the name of the pizza you want to order today.`)

let orderQuantity = prompt(`How many of ${orderName} do you want?`)
*/

  // Get the entered quantity

  let orderName = document.getElementById('pizza-type').value
  let orderQuantity = parseInt(document.getElementById('quantity').value)

  if (checkOrderName(orderName)) {
    alert(
      `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
        orderQuantity
      )} kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`
    )
  } else {
    alert('bye')
  }
}
