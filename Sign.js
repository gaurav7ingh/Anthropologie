document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".bg_modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", close);

function close() {
  document.querySelector(".bg_modal").style.display = "none";
}

let arr = JSON.parse(localStorage.getItem("userData")) || [];

let login = JSON.parse(localStorage.getItem("loginObj")) || [];

if (login.length > 0) {
  document.querySelector("#signIn_signUp button").innerText = login[0].email;
  let btn = document.createElement("p");

  btn.innerText = "Logout";

  document.querySelector("#signIn_signUp").append(btn);
}

document
  .querySelector("#signinform")
  .addEventListener("submit", function (event) {
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
      alert("Login Successful");
      // let signName = (document.querySelector("#signIn_signUp>button").innerText = email);

      login.push(userObjsignin);
      localStorage.setItem("loginObj", JSON.stringify(login));
      // document.querySelector("#signIn_signUp button").append(email);

      window.location.reload();
      close();
    } else {
      alert("Email Or Password Wrong");
    }
  });
// console.log(arr);
function checkfunction(email, password) {
  let fill2 = arr.filter(function (elem) {
    return email === elem.email && password === elem.password;
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
    if (mobile.length == 10) {
      if (checksignup(mobile) == true) {
        userArr.push(userObj);
        alert("Your account has been created");
        localStorage.setItem("userData", JSON.stringify(userArr));
        window.location.reload();
        close_creat();
      } else {
        alert("Account alredy exist");
      }
    } else {
      alert("Mobile Number Should be 10 digit");
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

// logout

document
  .querySelector("#signIn_signUp>p")
  .addEventListener("click", function () {
    // localStorage.getItem("loginObj")
    alert("Logout Successful")
    localStorage.removeItem("loginObj");
    window.location.reload();
  });
