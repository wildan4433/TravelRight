let userData = null;


document.getElementById("switchToLogin").addEventListener("click", function () {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const number = document.getElementById("registerNumber").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const repassword = document.getElementById("registerRepassword").value;


  if (password !== repassword) {
    alert("Password dan Re-password tidak cocok!");
    return;
  }

  userData = { number, email, password };
  alert("Pendaftaran berhasil!");

  document.getElementById("registrationForm").reset();
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});