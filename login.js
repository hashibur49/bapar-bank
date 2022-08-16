document.getElementById("btn-login").addEventListener("click", function () {
  //   console.log("button clicked.");
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   console.log(email);
  // step 3 : get passowrod
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "abc@gmail.com" && password === "123") {
    window.location.href = "bank.html";
  } else {
    alert("Please enter email: abc@gmail.com Password: 123 ");
  }
});
