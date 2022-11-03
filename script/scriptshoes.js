let shoesArr = JSON.parse(localStorage.getItem("obj"));
let x = document.createElement("img");
x.setAttribute("src", shoesArr.image);
let imageofProd = document.querySelector("#cartImage");
imageofProd.append(x);
let headProd = document.querySelector("#prodNameHead1");
headProd.innerText = shoesArr.name;
// console.log(headProd);
let y = document.querySelector("#itemDetails");
// y.append(headProd);
let prodPrice = document.createElement("p");
prodPrice.id = "priceOfProduct";
// let review=document.createElement("div")
// review.setAttribute("id","review");
// let stars=document.createElement("div");
// stars.innerText="*****"
// let writeReview=document.createElement("p");
// writeReview.innerText="Write A Review";
// review.append(stars,writeReview);
let installments = document.createElement("p");
installments.innerText = `Or 4 interest-free installments of 24.50 with
                             Klarna or AfterPay`;
let onliNe = document.createElement("p");
onliNe.innerText = "OnlineExclusive";
let breakLine = document.createElement("hr");
let colorProd = document.createElement("p");
colorProd.innerText = "Color : Motif";
colorProd.id = "colorProd";
let sizeDiv = document.createElement("p");
sizeDiv.innerText = "Size*";
let size = document.createElement("div");
size.setAttribute("id", "size");
let s1 = document.createElement("div");
s1.innerText = "S";
// s1.id="sachin";
let s2 = document.createElement("div");
s2.innerText = "M";
let s3 = document.createElement("div");
s3.innerText = "L";
let s4 = document.createElement("div");
s4.innerText = "XL";
size.append(s1, s2, s3, s4);
let quantity = document.createElement("div");
quantity.innerText = "Qty*";
let qty = document.createElement("div");
qty.setAttribute("id", "quantity1");
let selectTag = document.createElement("select");
selectTag.setAttribute("id", "quantity");
let option1 = document.createElement("option");
option1.innerText = "1";
let option2 = document.createElement("option");
option2.innerText = "2";
let option3 = document.createElement("option");
option3.innerText = "3";
let option4 = document.createElement("option");
option4.innerText = "4";
selectTag.append(option1, option2, option3, option4);
qty.append(selectTag);
let belowbutton = document.createElement("div");
belowbutton.setAttribute("id", "belowCart");
let reg = document.createElement("a");
reg.innerText = "Add to Registry";
let wishList = document.createElement("a");
wishList.innerText = "Add to WishList";
let divReg = document.createElement("div");
divReg.append(reg);
let divwish = document.createElement("div");
divwish.append(wishList);
belowbutton.append(divReg, divwish);
let buttonBasket = document.createElement("button");
buttonBasket.innerText = "ADD TO BASKET";
buttonBasket.id = "basketcart";
let breakLine2 = document.createElement("hr");
let breakLine3 = document.createElement("hr");
let prodDetails = document.createElement("div");
prodDetails.setAttribute("id", "prodDetails");
let pdH = document.createElement("h2");
pdH.innerText = "ProductDetails";
let stylepara = document.createElement("p");
stylepara.innerText = "style No. 4120212060043; Color Code: 069";
let bullets = document.createElement("ul");
bullets.id = "ulProdDetails";
let insidebullets1 = document.createElement("li");
insidebullets1.innerText = "Viscose, rayon; polyester lining";
let insidebullets2 = document.createElement("li");
insidebullets2.innerText = "Side zip";
let insidebullets3 = document.createElement("li");
insidebullets3.innerText = "Machine wash";
let insidebullets4 = document.createElement("li");
insidebullets4.innerText = "Imported";
bullets.append(insidebullets1, insidebullets2, insidebullets3, insidebullets4);
prodDetails.append(pdH, stylepara, bullets);
prodPrice.innerText = `$` + shoesArr.price;
y.append(
  prodPrice,
  installments,
  onliNe,
  breakLine,
  colorProd,
  sizeDiv,
  size,
  quantity,
  qty,
  buttonBasket,
  belowbutton,
  breakLine2,
  prodDetails,
  breakLine3
);
let sizeselect = document.querySelectorAll("#size>div");
// console.log(sizeselect);
for (let i = 0; i < sizeselect.length; i++) {
  sizeselect[i].addEventListener("click", background);
  function background() {
    sizeselect[i].style.border = "3px solid blue";
  }
}
// add to basket
let login1 = JSON.parse(localStorage.getItem("loginObj")) || [];
// console.log(login1.length);
if (login1.length > 0) {
  document.querySelector("#basketcart").addEventListener("click", sendData);
  function sendData() {
    let arrayforBasket =
      JSON.parse(localStorage.getItem("objarrayforBasket")) || [];
    // console.log(shoesArr);
    alert("Added To Cart");
    window.location.reload();
    arrayforBasket.push(shoesArr);
    localStorage.setItem("objarrayforBasket", JSON.stringify(arrayforBasket));
  }
}
const home_productContainers = [
  ...document.querySelectorAll(".home_product-container"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
home_productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
document.querySelector("#basketcart").addEventListener("click", function () {
  if (login1.length == 0) {
    alert("Please login first");
    basketLogin();
  }
});
document.querySelector("button").addEventListener("click", basketLogin);
function basketLogin() {
  document.querySelector(".bg_modal").style.display = "flex";
}















