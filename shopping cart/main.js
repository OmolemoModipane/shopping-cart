function openForm() {
  document.getElementById("newsLetter").style.display = "block";
}

function closeForm() {
  document.getElementById("newsLetter").style.display = "none";
}

let shopping = document.querySelector(".shopping");
let closeCart = document.querySelector("closeCart");
let list = document.querySelector(".list");
let = document.querySelector(".cartList");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let bag = document.querySelector(".bag");

shopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "1.jpg",
    price: 350,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "2.jpg",
    price: 350,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "3.jpg",
    price: 350,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "4.jpg",
    price: 350,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "5.jpg",
    price: 350,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "6.jpg",
    price: 350,
  },
];

let cartList = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
       <img src="style/${value.image}"/>`;
    list.appendChild(newDiv);
  });
}
