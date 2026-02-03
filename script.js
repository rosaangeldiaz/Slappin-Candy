let cart = [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  alert(name + " added to cart!");
  console.log(cart);
}