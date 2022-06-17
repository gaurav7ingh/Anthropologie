// this is for getting total and subtotal

let total = document.querySelector("#payment-section-total")

let subtotal = document.querySelector("#payment-section-subtotal")

total.innerText = localStorage.getItem("total")

subtotal.innerText = localStorage.getItem("subtotal")

// this section is for getting the value of address from previous page

const name = document.querySelector("#address-putting>li:nth-child(1)")
const street = document.querySelector("#address-putting>li:nth-child(2)")
const city = document.querySelector("#address-putting>li:nth-child(3)")
const post = document.querySelector("#address-putting>li:nth-child(4)")
const phone = document.querySelector("#address-putting>li:nth-child(5)")

let objOfPaymentData = JSON.parse(localStorage.getItem("objOfPaymentData"))

name.innerText = objOfPaymentData.name
street.innerText = objOfPaymentData.street
city.innerText = objOfPaymentData.city
post.innerText = objOfPaymentData.post
phone.innerText = objOfPaymentData.phone

// this is the data for card input

let validInput = [
  {
    card: "1234567890098712",
    cvv: "123",
    exp: "2025-06",
  },
  {
    card: "1234567890123412",
    cvv: "456",
    exp: "2025-06",
  },
  {
    card: "2222222222222212",
    cvv: "789",
    exp: "2025-06",
  },
  {
    card: "1111111111111111",
    cvv: "100",
    exp: "2025-06",
  },
]
const form = document.querySelector("#forCardInfo")
const btn = document.querySelector(".payment-btn")

btn.addEventListener("click", fun)

function fun() {
  let y = String(form.cardNumber.value)
  if (y.length == 16) {
    let flagForCard = false
    let user = validInput.filter(function (element) {
      if (element.card == form.cardNumber.value) {
        flagForCard = true
        return element
      }
    })
    if (flagForCard) {
      user.forEach(function (element) {
        if (
         element.exp == form.monthExp.value &&
         element.cvv == form.cvv.value
        ) {
          alert("OTP SENT TO YOUR NUMBER")
          window.location.reload()
          location.href = "OTP.html"
        } else {
          alert("Invalid")
        }
      })
    } else {
      alert("Please Check Your Card Number")
    }
  }else{
    alert("Plese Enter a Correct Card Number")
  }
}

