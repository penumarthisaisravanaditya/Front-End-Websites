// === NAVIGATION ===
const nav = document.querySelector('.nav');
const openBtn = document.querySelector('#tablet ion-icon[name="list-outline"]');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

// === ADD TO CART ===
document.addEventListener('DOMContentLoaded', () => {
  const cartIcons = document.querySelectorAll('.cart');

  cartIcons.forEach(cartIcon => {
    cartIcon.addEventListener('click', () => {
      const productCard = cartIcon.closest('.pro');
      const name = productCard.querySelector('.des h5').innerText;
      const priceText = productCard.querySelector('.des h4').innerText;
      const image = productCard.querySelector('img').getAttribute('src');

      const price = parseFloat(priceText.replace('$', ''));

      const product = {
        name,
        price,
        image
      };

      // Get current cart or initialize
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add new product
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`✅ ${name} added to cart!`);
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('addToCartBtn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const name = document.getElementById('productName')?.innerText;
      const priceText = document.getElementById('productPrice')?.innerText;
      const image = document.getElementById('productImage')?.src;

      if (!name || !priceText || !image) {
        alert("❌ Product information missing.");
        return;
      }

      const price = parseFloat(priceText.replace('$', ''));

      const product = { name, price, image };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`✅ "${name}" added to cart!`);
      // Optional: redirect to cart
      // window.location.href = "cart.html";
    });
  }
});
