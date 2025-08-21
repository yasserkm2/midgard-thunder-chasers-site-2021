function validateEmail(email) {
	"use strict";
	var val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return val.test(String(email).toLowerCase());
}

function validateAndCalculate() {
	"use strict";
	var email = document.forms.mainform.emailM.value;
	var edition = document.forms.mainform.edition.value;
	var edition_cost = 0;
	var quantity = document.forms.mainform.quantity.value;

	if (edition == "Hardcover (€16.73)") {
		edition_cost = 16.73;
	} else if (edition == "Paperback (€9.86)") {
		edition_cost = 9.86;
	} else if (!edition == "") {
		alert("There is no such edition.");
		return false;
	}

	var total = quantity * edition_cost; /* Written in between if statements so that it can get the value of edition_cost. If I place it before hand it does not work correctly. */

	if ((email === "") || (edition === "") || (quantity === "")) {
		alert("Please check your inputs and try again.");
		return false;
	} else if (!validateEmail(email)) {
		alert("The Email is not vaild.");
		return false;
	} else if ((email) && (edition) && (quantity)) {
		alert("Total Cost: €" + total + ".");
		return true;
	}
}

/* Contact Us */
function validateNumber(number) {
	"use strict";
	var val = /^\d{8}$/;
	return val.test(number);
}

function validateForm() {
	"use strict";
	var name = document.forms.contactusform.name.value;
	var email = document.forms.contactusform.email.value;
	var number = document.forms.contactusform.number.value;
	var message = document.forms.contactusform.message.value;

	if ((name === "") || (email === "") || (number === "") || (message === "")) {
		alert("Note: ALL inputs are Mandatory, please amend your entries and try again.");
		return false;
	} else if (!validateEmail(email)) {
		alert("The Email is not vaild.");
		return false;
	} else if (!validateNumber(number)) {
		alert("The Phone Number is not vaild.");
		return false;
	} else if ((name) && (email) && (number) && (message)) {
		alert("Submitted. Thank you for reaching out.");
		return true;
	}
}