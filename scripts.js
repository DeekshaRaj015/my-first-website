document.addEventListener("DOMContentLoaded", () => {
  const cartImage = document.getElementById("cart-image");
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

  const cartStages = [
    "cart.png",
    "n1.png",
    "n2.png",
    "n3.png",
    "n4.png"
  ];

  let clickCount = 0;

  addToCartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      clickCount++;
      if (clickCount >= cartStages.length) {
        clickCount = 0; 
      }
      cartImage.src = cartStages[clickCount];
    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalDisplay = document.querySelector('.total strong');

  let total = 0;

 
  function updateLocalStorage(cartData) {
    localStorage.setItem('cartItems', JSON.stringify(cartData));
  }

  function getCartFromStorage() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  }

  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const name = productCard.querySelector('.item-name').textContent;
        const price = parseFloat(productCard.querySelector('.item-price').dataset.price);

        const cart = getCartFromStorage();
        cart.push({ name, price });
        updateLocalStorage(cart);

        alert(`${name} added to cart!`);
      });
    });
  }

  if (cartItemsContainer) {
    const cart = getCartFromStorage();
    total = 0;

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)}</p>
      `;
      cartItemsContainer.appendChild(cartItem);

      total += item.price;
    });

    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const scentButtons = document.querySelectorAll(".scent-category button");

    scentButtons.forEach(button => {
      button.addEventListener("click", () => {
        button.classList.toggle("selected");
      });
    });
  });



