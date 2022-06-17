let total = document.querySelector("#payment-section-total")

let subtotal = document.querySelector("#payment-section-subtotal")

total.innerText = localStorage.getItem("total")

subtotal.innerText = localStorage.getItem("subtotal")

const btn = document.querySelector(".payment-btn")

btn.addEventListener("click", function () {
  const country = document.querySelector("#country").value
  const firstName = document.querySelector("#first").value
  const lastName = document.querySelector("#last").value
  const street = document.querySelector("#street").value
  const addres = document.querySelector("#address").value
  const city = document.querySelector("#city").value
  const post = document.querySelector("#postcode").value
  const phone = document.querySelector("#phone-payment").value
  if (country == "" || firstName == "" || street == "" || post == "") {
    alert("Please Fill The Address")
  } else {
    let objOfPaymentData = {
      name: firstName + " " + lastName,
      street: street,
      city: city,
      post: post,
      country: country,
      phone: phone,
    }
    localStorage.setItem("objOfPaymentData", JSON.stringify(objOfPaymentData))
    window.location.reload()
    location.href = "paymentInput.html"
  }
})
