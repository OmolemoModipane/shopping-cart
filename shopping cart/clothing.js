const product = [
  {
    id: 0,
    image: "style/1.jpg",
    title: "Ruffle sleeve dress",
    price: 280,
  },
  {
    id: 1,
    image: "style/2.jpg",
    title: "Flower Knitwear",
    price: 350,
  },
  {
    id: 2,
    image: "style/3.jpg",
    title: " White Cardigan",
    price: 350,
  },
  {
    id: 3,
    image: "style/4.jpg",
    title: "Silver Bag",
    price: 500,
  },
  {
    id: 4,
    image: "style/5.jpg",
    title: "Bodycon Dress",
    price: 180,
  },
  {
    id: 5,
    image: "style/6.jpg",
    title: "Silver Boots",
    price: 600,
  },
  {
    id: 6,
    image: "style/8.jpg",
    title: " Women's Cargo Denims",
    price: 300,
  },
  {
    id: 6,
    image: "style/9.jpg",
    title: "Women's Stripe Shirt",
    price: 200,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img></div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>R ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your bag is empty";
    document.getElementById("total").innerHTML = "R " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "R " + total + ".00";
        return (
          `<div class='cart-item'>
            
              <p style='font-size:12px;'>${title}</p>
              
              <h2 style='font-size: 15px;'>R ${price}</h2>` +
          "<i class= 'fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
