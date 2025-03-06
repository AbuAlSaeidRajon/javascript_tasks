document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#pancakeForm");
    const displayPrice = document.querySelector("#totalPriceDisplay");
    const displayPriceBanner = document.querySelector("#totalPrice");
    const orderSummary = document.querySelector("#orderSummary");
    const summaryText = document.querySelector("#summaryText");
    const confirmOrder = document.getElementById("confirmOrder");
  
    let basePrice = 5;
    let toppings = [];
    let extras = [];
  
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    form.addEventListener("change", (event) => {
      if (event.target.matches("#type")) {
        basePrice = parseInt(event.target.selectedOptions[0].dataset.price);
      } else if (event.target.matches(".topping")) {
        handleSelection(event.target, toppings);
      } else if (event.target.matches(".extra")) {
        handleSelection(event.target, extras);
      } else if (event.target.matches(".delivery")) {
        updatePrice();
      }
      updatePrice();
    });
  
    document.getElementById("seeOrder").addEventListener("click", displayOrderSummary);
  
    confirmOrder.addEventListener("click", () => {
      const customerName = document.getElementById("customerName").value;
      const pancakeType = document.getElementById("type").selectedOptions[0].textContent;
      const deliveryMethod = document.querySelector(".delivery:checked").parentNode.textContent.trim();
      const totalPrice = displayPrice.textContent;
  
      const order = {
        id: Date.now(),
        customerName,
        selectedPancake: pancakeType,
        toppings: toppings.map(topping => topping.name),
        extras: extras.map(extra => extra.name),
        deliveryMethod,
        totalPrice,
        status: "waiting"
      };
  
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      alert("Order confirmed!");
    });
  
    function handleSelection(target, array) {
      const item = {
        name: target.parentNode.textContent.trim(),
        price: parseInt(target.dataset.price)
      };
      if (target.checked) {
        array.push(item);
      } else {
        const index = array.findIndex(i => i.name === item.name);
        if (index !== -1) {
          array.splice(index, 1);
        }
      }
    }
  
    function updatePrice() {
      let total = basePrice;
  
      toppings.forEach(item => total += item.price);
      extras.forEach(item => total += item.price);
  
      const deliveryMethod = document.querySelector(".delivery:checked");
      total += parseInt(deliveryMethod.dataset.price);
  
      displayPrice.textContent = `${total}€`;
      displayPriceBanner.textContent = `${total}€`;
  
      displayPriceBanner.classList.add("animate");
      setTimeout(() => displayPriceBanner.classList.remove("animate"), 2000);
    }
  
    function displayOrderSummary() {
      const customerName = document.getElementById("customerName").value;
      const pancakeType = document.getElementById("type").selectedOptions[0].textContent;
      const selectedDelivery = document.querySelector(".delivery:checked").parentNode.textContent.trim();
  
      let summary = `Customer Name: ${customerName}<br><br>`;
      summary += `Pancake Type: ${pancakeType}<br><br>`;
      summary += `Toppings: ${toppings.map(topping => topping.name).join(", ") || "None"}<br><br>`;
      summary += `Extras: ${extras.map(extra => extra.name).join(", ") || "None"}<br><br>`;
      summary += `Delivery Method: ${selectedDelivery}<br><br>`;
      summary += `Total Price: ${displayPrice.textContent}`;
  
      summaryText.innerHTML = summary;
    }
  });