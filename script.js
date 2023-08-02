// login
function loginFun() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  if (email === "admin@admin.com" && password === "123456") {
    alert("Login successful!");
  } else {
    alert("Invalid email or password.");
  }
}