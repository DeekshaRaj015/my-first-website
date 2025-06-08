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

