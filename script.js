document.getElementById("switchToRegister").addEventListener("click", function () {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const loginNumberOrEmail = document.getElementById("loginNumberOrEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (
    userData &&
    (loginNumberOrEmail === userData.number || loginNumberOrEmail === userData.email) &&
    loginPassword === userData.password
  ) {
    alert("Login berhasil!");
  } else {
    alert("Login gagal! Periksa nomor/email dan password Anda.");
  }
});