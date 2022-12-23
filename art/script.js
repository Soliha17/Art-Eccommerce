// Code for mobile header

const menuBtn = document.querySelector(".menu-img");
const menuList = document.querySelector(".menu-list-group");
const closeBtn = document.querySelector(".close-btn");
const body = document.querySelector("body");
menuBtn.onclick = () => {
  menuList.style.display = "block";
  menuBtn.classList.add("menu-style");
  body.classList.add("dark-bg");
  body.style.overflow = "hidden";
};
closeBtn.onclick = () => {
  menuList.style.display = "none";
  menuBtn.classList.remove("menu-style");
  body.classList.remove("dark-bg");
};

// shopping
let products = [
  {
    id: 1,
    tag: "Компоoзиция шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 2,
    tag: "Композиция шаров на день рoождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 3,
    tag: "Композиция шаров на дeень рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 4,
    tag: "Композиция шаров на день рождeения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 5,
    tag: "Композиция шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 6,
    tag: "Композиция шароoв на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 7,
    tag: "Композиия шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 8,
    tag: "Композиця шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 9,
    tag: "Композиция шаров на ден рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 10,
    tag: "Композиция шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 11,
    tag: "Композиция шаров на день рждения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 12,
    tag: "Композиция шаов на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },

  {
    id: 13,
    tag: "Композиция шаров на день рждения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 14,
    tag: "Композиция шаров на день рождени",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 15,
    tag: "Композция шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 16,
    tag: "Композиция шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
  {
    id: 17,
    tag: "Композиция шаров на деньрождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },

  {
    id: 18,
    tag: "Композици шаров на день рождения",
    price: 1450,
    delPrice: 1540,
    inCart: 0,
  },
];
const carts = document.querySelectorAll(".add");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".basket-group span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  // console.log("clicked is", product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".basket-group span").textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".basket-group span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem(
      "totalCost",
      (cartCost + product.price) * product.inCart
    );
  } else {
    localStorage.setItem("totalCost", product.price * product.inCart);
  }
}
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
// console.log(cartItems);
function displayCart() {
  let productContainer = document.querySelector(".products");
  let totalContainer = document.querySelector(".detail-product");
  let lastSum = document.querySelector(".last-sum");
  // console.log(lastSum);
  let totalContainerS = totalContainer.innerHTML;
  // console.log(totalContainerS.length);
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += `
      <div class="product">
        <div class="product-img"><img src="./images/mask.png"></div>
        <div class="product-right">
          <div class="tag-group">
            <span>${item.tag}</span>
            <div class="product__btn-group">
            <button onclick="minus(${item.id})" class="oshir">-</button>
            <p>${item.inCart}</p>
            <button onclick="plus(${item.id})" >+</button>
            </div>
          </div>
          <div class="price-group">
            <p>${item.price}p</p>
            <span>${item.delPrice}p</span>
          </div>
          <div class="product__close-img"><img src="./icons/close-icon.svg" onclick="removeCartItem(${index})"></div>
        </div>
      </div>
      `;
    });
    if (totalContainerS.length == "") {
      totalContainer.innerHTML += `
      <div class="total">
      <div class="total-top">
      <h2>Детали заказа</h2>
          <div><p>Колличество</p><span>1 шт</span></div>
          <div><p>Сумма</p><span class="last-sum">${cartCost},00p</span></div>
        </div>
        <div class="total-bottom">
          <input type="text" placeholder="Ваш номер телефона"/>
          <button>Заказать</button>
        </div>
      </div>
      `;
    }
  }
}

function minus(index) {
  Object.values(cartItems).map((item) => {
    if (index === item.id && item.inCart > 0) {
      item.inCart--;
    }
  });
  displayCart();
}

function plus(index) {
  Object.values(cartItems).map((item) => {
    if (index === item.id) {
      item.inCart++;
    }
  });
  displayCart();
}

// function removeCartItem(index) {
//   // console.log(cartItems);
//   const result = Object.values(cartItems);
//   // console.log(result);
//   for (let i = 0; i < result.length; i++) {
//     if (index === i) {
//       console.log(result[i]);
//       // setItems(result[i])
//       console.log(cartItems);
//       // displayCart(cartItems)
//       cartItems={}
//       setItems(cartItems)
//     }
//   }
//   // displayCart();
// }

onLoadCartNumbers();
displayCart();
