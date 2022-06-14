document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".bg_modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", close);

function close() {
  document.querySelector(".bg_modal").style.display = "none";
}

let arr = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();
  let userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  let email = document.querySelector("#email").value;
  if (checkfuncion(email) == true) {
    alert("Sign up Successul");
    arr.push(userObj);
    localStorage.setItem("userData", JSON.stringify(arr));
    close();
  } else {
    alert("alredy registered");
  }
});

function checkfuncion(email) {
  let fill = arr.filter(function (elem) {
    return email === elem.email;
  });
  if (fill.length > 0) {
    return false;
  } else {
    return true;
  }
}
