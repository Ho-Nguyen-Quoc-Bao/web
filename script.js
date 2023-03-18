// Get the login and register forms
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

// Get the register link and add a click event listener to show the register form
var registerLink = document.getElementById("register-link");
registerLink.addEventListener("click", function(event) {
	event.preventDefault();
	loginForm.style.display = "none";
	registerForm.style.display = "block";
});

//THÊMMMMMMMMMMMM
var loginLink = document.getElementById("login-link");
loginLink.addEventListener("click", function(event) {
	event.preventDefault();
	loginForm.style.display = "block";
	registerForm.style.display = "none";
});


// // Get the login form and add a submit event listener
// loginForm.addEventListener("submit", function(event) {
// 	event.preventDefault();
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;
// 	var remember = document.getElementById("remember").checked;

// 	// Check if the username and password are correct
// 	if (username === "username" && password === "password") {
// 		alert("You are now logged in!");

// 		// If the remember me checkbox is checked, save the username and password in local storage
// 		if (remember) {
// 			localStorage.setItem("username", username);
// 			localStorage.setItem("password", password);
// 		}
// 	} else {
// 		alert("Sai username hoặc password. Vui lòng thử lại.");
// 	}
// });
// QUA TRANG MỚI KHI NHẤN VÀO OK

loginForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var remember = document.getElementById("remember").checked;

	// Check if the username and password are correct
	if (username === "admin" && password === "admin") {
		var result = confirm("Đăng nhập thành công !");
        if (result) {
            window.location.href = "https://ho-nguyen-quoc-bao.github.io/nhac/";
        }
		// If the remember me checkbox is checked, save the username and password in local storage
		if (remember) {
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
		}
	} else {
		alert("Sai username hoặc password. Vui lòng thử lại.");
	}
});

//KIỂM TRA FORM ĐĂNG KÝ
// Get the register form and add a submit event listener
registerForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var newUsername = document.getElementById("new-username").value;
	var newPassword = document.getElementById("new-password").value;
	var confirmPassword = document.getElementById("confirm-password").value;

	// Check if the new password and confirm password fields match
	if (newPassword !== confirmPassword) {
		alert("Mật khẩu không trùng khớp. Vui lòng thử lại.");
	} else {
		alert("Bạn đã đăng ký thành công !");

		// Save the new username and password in local storage
		localStorage.setItem("username", newUsername);
		localStorage.setItem("password", newPassword);

		// Hide the register form and show the login form
		registerForm.style.display = "none";
		loginForm.style.display = "block";
	}
});

// Check if the username and password are saved in local storage and fill in the login form
var savedUsername = localStorage.getItem("username");
var savedPassword = localStorage.getItem("password");
if (savedUsername && savedPassword) {
	document.getElementById("username").value = savedUsername;
	document.getElementById("password").value = savedPassword;
	document.getElementById("remember").checked = true;
}

// // Get the login form and add a submit event listener
// loginForm.addEventListener("submit", function(event) {
// 	event.preventDefault();
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;
// 	var remember = document.getElementById("remember").checked;

// 	// Kiểm tra tài khoản và mật khẩu
// 	if (username === "quocbao" && password === "123") {
// 		alert("Đăng nhập thành công!");
// 		if (remember) {
// 			localStorage.setItem("username", username);
// 			localStorage.setItem("password", password);
// 		}
// 	} else {
// 		alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
// 	}
// });

// JavaScript
//HIỂN THỊ MẬT KHẨU
var passwordInput = document.getElementById("password");
var showPasswordCheckbox = document.getElementById("show-password-checkbox");

showPasswordCheckbox.addEventListener("change", function() {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});





