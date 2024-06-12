function handleSubscribe(event) {
    event.preventDefault();

    /* fetch value by id name */
    let email = document.getElementById('email').value;

    /* creating message */
    let confirmPara = document.createElement('p');
    confirmPara.innerText = `Subscription successful for ${email}`;
    // console.log(confirmPara);

    /* pushing to the html */
    let data = document.getElementById('submitted-data');
    data.appendChild(confirmPara);
}




/* Show all project */

const cardsContainer = document.querySelector('.item-cards-container');

const seeMoreBtn = document.getElementById('see-more-cards-btn');

const additionalCards = [
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 4.7</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`,
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 5.0</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`,
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 4.7</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`,
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 5.0</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`,
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 4.7</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`,
    `<div class="card">
    <img src="./src/dummy-food.png" alt="">
    <div class="card-desc">
      <h2>Dummy Food</h2>
      <div class="rating">⭐ 5.0</div>
      <button class="add-to-cart">Add To Cart</button>
      <div class="price">$15.00</div>
    </div>
  </div>`
];



let additionalCardsShown = false;   // flag for tracking


function toggleAdditionalCards() {
    if (additionalCardsShown) { 
        for (let i = 0; i < additionalCards.length; i++) {
            cardsContainer.removeChild(cardsContainer.lastElementChild);
        }

        seeMoreBtn.textContent = 'See More Products';
    }
    else {

        for (let i = 0; i < additionalCards.length; i++) {
            cardsContainer.innerHTML += additionalCards[i];
        }
        seeMoreBtn.textContent = 'See Less';
    }
    additionalCardsShown = !additionalCardsShown;
}

seeMoreBtn.addEventListener('click', toggleAdditionalCards);
