const url =` https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`

fetch(url).then((data) =>{
    return data.json();
}).then((completData) =>{
    // console.log(completData)
    let data1=""
    completData.map((value) =>{
        data1+=`<div class="card">
        <img src="${value.imgSrc}" alt="Lago di Braies">
  
        <!-- A div with card__details class to hold the details in the card  -->
        <div class="card__details">
  
                <!-- Span with tag class for the tag -->
                <div class="left">
                    <span class="tag">${value.name}</span>
                    <br>
                      <span>$${value.price}/-</span>
                
                </div>
                <div class="right">
                <img id="plus" src="image/Group 4.png" alt="">

                </div>
        </div>
    </div>`
    document.getElementById("mainContent").innerHTML =data1

    })
})


function takeOrder(order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating order processing
        const isOrderSuccessful = Math.random() < 0.8; // 80% chance of success
  
        if (isOrderSuccessful) {
          const deliveryTime = Math.floor(Math.random() * 60) + 1; // Random delivery time between 1 and 60 minutes
          resolve(deliveryTime);
        } else {
          reject("Order failed. Please try again.");
        }
      }, 2500);
    });
  }
  
  function orderPrep(order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating food preparation
        const isFoodReady = Math.random() < 0.9; // 90% chance of food being ready
  
        if (isFoodReady) {
          resolve(order);
        } else {
          reject("Food preparation failed. Please try again.");
        }
      }, 1500);
    });
  }
  
  function payOrder(order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating food delivery
        const isDeliverySuccessful = Math.random() < 0.85; // 85% chance of successful delivery
  
        if (isDeliverySuccessful) {
          resolve(order);
        } else {
          reject("Delivery failed. Please try again.");
        }
      }, 1000);
    });
  }
  
  // Chain the promises for a food order
  takeOrder("Burger")
    .then(orderPrep)
    .then(payOrder)
    .then((order) => {
     alert("thankyou for eating with us today!")
    })
    .catch((error) => {
      console.log("Error:", error);
    });