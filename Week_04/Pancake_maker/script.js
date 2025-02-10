const cakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");

const displayPrice = document.querySelector("#totalPriceDisplay");
const displayPriceBanner = document.querySelector("#totalPrice");

let basePrice = parseInt(cakeType.value);

// Update price when pancake type is changed
cakeType.addEventListener("change", () => {
  basePrice = parseInt(cakeType.value);
  updatePrice();
});

// Update price when toppings/extras are selected
toppings.forEach((input) => input.addEventListener("change", updatePrice));
extras.forEach((input) => input.addEventListener("change", updatePrice));

function updatePrice() {
  let total = basePrice;

  toppings.forEach((input) => {
    if (input.checked) total += parseInt(input.value);
  });

  extras.forEach((input) => {
    if (input.checked) total += parseInt(input.value);
  });

  displayPrice.textContent = `${total}€`;
  displayPriceBanner.textContent = `${total}€`;

  displayPriceBanner.classList.add("animate");
  setTimeout(() => displayPriceBanner.classList.remove("animate"), 2000);

}
