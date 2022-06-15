document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".bg_modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", close);

function close() {
  document.querySelector(".bg_modal").style.display = "none";
}

let arr = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("#signinform").addEventListener("submit", function () {
  event.preventDefault();
  document.querySelector("#signIn_signUp>button").innerText = "";
  let userObjsignin = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  // console.log(email, password);
  if (checkfunction(email, password) == true) {
    alert("Sign up Successul");
    document.querySelector("#signIn_signUp>button").innerText = email;

    close();
  } else {
    alert("Something wrong");
  }
});
// console.log(arr);
function checkfunction(email, password) {
  let fill2 = arr.filter(function (elem) {
    return email == elem.email && password == elem.password;
  });
  if (fill2.length > 0) {
    return true;
  } else {
    return false;
  }
}

// ------------sign Up------------------------

document.querySelector("#signUp").addEventListener("click", function () {
  event.preventDefault();
  document.querySelector(".bg_modal_creat").style.display = "flex";
});
document.querySelector(".close_creat").addEventListener("click", close_creat);

function close_creat() {
  document.querySelector(".bg_modal_creat").style.display = "none";
}

let userArr = JSON.parse(localStorage.getItem("userData")) || [];
document
  .querySelector("#signupform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let userObj = {
      email: document.querySelector("#email_creat").value,
      mobile: document.querySelector("#mobile_creat").value,
      password: document.querySelector("#password_creat").value,
    };
    let mobile = document.querySelector("#mobile_creat").value;
    if (checksignup(mobile) == true) {
      userArr.push(userObj);
      alert("account created succesfully");
      localStorage.setItem("userData", JSON.stringify(userArr));
      close_creat();
    } else {
      alert("Account alredy exist");
    }
  });

function checksignup(mobile) {
  let fill = userArr.filter(function (elem) {
    return mobile === elem.mobile;
  });
  if (fill.length > 0) {
    return false;
  } else {
    return true;
  }
}
