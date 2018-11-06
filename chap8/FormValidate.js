var sex = ""

function validationRadio() {
	var male = document.getElementById("male").checked
	var female = document.getElementById("female").checked

	var maleValue = document.getElementById("male").value
	var femaleValue = document.getElementById("female").value

	if (male) {
		sex = maleValue
		console.log("male")
	} 

	if (female) {
		sex = female
		console.log("female")
	}
}

function validationUsernameAndPassword() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	if ((username.length >= 6) && (password.length >= 6) && (sex != "")) {
		console.log("login success")
	} else {
		console.log("failed")
	}
}