function expandBurger() {
  var burger = document.querySelector(".burger-links");
  if (burger.classList.contains("burger-expand")) {
    burger.classList.add("burger-shrink");
  } else if (burger.classList.contains("burger-shrink")) {
    burger.classList.remove("burger-shrink");
  }
  burger.classList.toggle("burger-expand");
  console.log(burger);
}

var mainItems = [];
var starterItems = [];
var dessertItems = [];
var cartItems = [];

function appendItem(name, src, price, array) {
  array.push({ name: name, src: src, price: price });
}

appendItem("Thali", "assets/main/thali.jpg", 12, mainItems);
appendItem("Pizza", "assets/main/pizza.jpeg", 14, mainItems);
appendItem("Pasta", "assets/main/pasta.jpg", 15, mainItems);
appendItem("Burger", "assets/main/burger.jpg", 16, mainItems);

appendItem(
  "Blueberry Muffin",
  "assets/snacks/blueberry-muffin.jpg",
  6,
  starterItems
);
appendItem("Patties", "assets/snacks/patties.jpg", 7, starterItems);
appendItem("Pumpkin Soup", "assets/snacks/pumpkin-soup.jpg", 7, starterItems);
appendItem("Samosa", "assets/snacks/samosa.jpg", 4, starterItems);

appendItem("Kaju", "assets/desserts/kaju.jpg", 5, dessertItems);
appendItem("Ladoo", "assets/desserts/ladoo.jpg", 4, dessertItems);
appendItem("Milk Peda", "assets/desserts/milk-peda.jpg", 6, dessertItems);
appendItem("Rasgulla", "assets/desserts/rasgulla.jpg", 7, dessertItems);

const starterMenuItems = document.querySelector("#starter .menu-items");
const mainMenuItems = document.querySelector("#main .menu-items");
const dessertMenuItems = document.querySelector("#dessert .menu-items");
const cartContent = document.querySelector(".cart-content");
const cart = document.querySelector(".cart");
const svg = document.querySelector("svg");
const payment = document.querySelector(".payment");
const overlay = document.querySelector(".overlay");
const totalElement = document.querySelector(".payment-content span");

function insertItems(array, object) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    object.innerHTML +=
      '<div class="item" onclick="addToCart(\'' +
      element.src +
      "','" +
      element.name +
      "','" +
      element.price +
      '\')"><div class="overlay"><i class="fas fa-plus"></i></div><img src=' +
      element.src +
      ' alt=""><div class="item-title"><h4>' +
      element.name +
      "</h4><p>$" +
      element.price +
      "</p></div></div>";
  }
}

insertItems(mainItems, mainMenuItems);
insertItems(starterItems, starterMenuItems);
insertItems(dessertItems, dessertMenuItems);

// SHOPPING CART

function addToCart(src, name, price) {
  cartItems.push({ src: src, name: name, price: price, id: cartItems.length });
  console.log(cartItems);

  cart.style.display = "block";

  cartContent.innerHTML +=
    '<div class="cart-item"><img src=' +
    src +
    "> <h2>" +
    name +
    "</h2><h2>$" +
    price +
    "</h2><button onclick=removeItem(" +
    cartItems.length +
    ")>X</button></div>";
}

function removeItem(id) {
  console.log(cartItems);

  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];

    if (element.id === id) {
      cartItems.splice(index, 1);
    }
  }

  cartContent.innerHTML = "";

  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    cartContent.innerHTML +=
      '<div class="cart-item"><img src=' +
      element.src +
      "> <h2>" +
      element.name +
      "</h2><h2>$" +
      element.price +
      "</h2><button onclick=removeItem(" +
      element.id +
      ")>X</button></div>";
  }
}

function transformCart() {
  cart.classList.toggle("grow-cart");
  cart.classList.toggle("shrink-cart");

  if (cart.classList.contains("grow-cart"))
    svg.style.transform = "rotate(0deg)";
  else svg.style.transform = "rotate(180deg)";
}

function checkout() {
  payment.style.display = "flex";
  var total = 0;

  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    total += parseInt(element.price);
  }
  totalElement.innerHTML = total;
}

function hideCheckout(event) {
  if (event.target === overlay) payment.style.display = "none";
}
