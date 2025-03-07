document.addEventListener('DOMContentLoaded', () => {
  const waitingOrdersList = document.getElementById('waitingOrdersList');
  const readyOrdersList = document.getElementById('readyOrdersList');
  const deliveredOrdersList = document.getElementById('deliveredOrdersList');
  let orders = JSON.parse(localStorage.getItem('orders')) || [];

  function displayOrders() {
    waitingOrdersList.innerHTML = '';
    readyOrdersList.innerHTML = '';
    deliveredOrdersList.innerHTML = '';

    orders.forEach(order => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p>Order ID: ${order.id}</p>
        <p>Customer: ${order.customerName}</p>
        <p>Pancake: ${order.selectedPancake}</p>
        <p>Toppings: ${order.toppings.join(', ') || 'None'}</p>
        <p>Extras: ${order.extras.join(', ') || 'None'}</p>
        <p>Delivery: ${order.deliveryMethod}</p>
        <p>Price: ${order.totalPrice}</p>
        <p>Status: 
          <select class="statusSelect" data-id="${order.id}">
            <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>Waiting</option>
            <option value="ready" ${order.status === "ready" ? "selected" : ""}>Ready</option>
            <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
          </select>
        </p>
      `;
      li.classList.add(order.status);

      switch (order.status) {
        case 'waiting':
          waitingOrdersList.appendChild(li);
          break;
        case 'ready':
          readyOrdersList.appendChild(li);
          break;
        case 'delivered':
          deliveredOrdersList.appendChild(li);
          break;
      }
    });
  }

  document.body.addEventListener('change', (event) => {
    if (event.target.classList.contains('statusSelect')) {
      const orderId = event.target.getAttribute('data-id');
      const newStatus = event.target.value;
      const order = orders.find(order => order.id == orderId);
      order.status = newStatus;
      localStorage.setItem('orders', JSON.stringify(orders));
      displayOrders();
    }
  });

  displayOrders();
});