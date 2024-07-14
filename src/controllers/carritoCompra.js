let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  let cartList = document.getElementById("cartList");
  if (cartList) {
    cartList.innerHTML = "";
    if (cart.length === 0) {
      cartList.innerHTML = "<li>El carrito se encuentra vacío</li>";
    } else {
      cart.forEach((product, index) => {
        cartList.innerHTML += `<li>${product.name} - $${product.price} x ${product.quantity} <button onclick="removeFromCart(${index})">Quitar</button></li>`;
      });
    }
  }
}

displayCart();

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function addToCart(product) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === product.name) {
      cart[i].quantity += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({ name: product.name, price: product.price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("añadido");
}

export { displayCart, removeFromCart, clearCart, addToCart };
