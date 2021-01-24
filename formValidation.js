var missing = "";
function doClear(){
	document.CustomerForm.firstName.value = "";
	document.CustomerForm.lastName.value = "";
	document.CustomerForm.username.value = "";
	document.CustomerForm.password.value = "";
	document.CustomerForm.passwordConfirm.value = "";
	document.CustomerForm.email.value = "";
	document.CustomerForm.address.value = "";
	document.CustomerForm.city.value = "";
	document.CustomerForm.state.value = "";
	document.CustomerForm.zip.value = "";
	document.CustomerForm.phone1.value = "";
	document.CustomerForm.contactFName.value = "";
	document.CustomerForm.contactLName.value = "";
	document.CustomerForm.contactPhone1.value = "";
	document.CustomerForm.contactRelationship.value = "";
	document.CustomerForm.cardNum.value = "";
	document.CustomerForm.secCode.value = "";
	document.CustomerForm.cardMonth.value = "";
	document.CustomerForm.cardYear.value = "";
	document.CustomerForm.goals.value = "";
	document.CustomerForm.type[0].checked = false;
	document.CustomerForm.type[1].checked = false;
	document.CustomerForm.type[2].checked = false;
	document.CustomerForm.days[0].checked = false;
	document.CustomerForm.days[1].checked = false;
	document.CustomerForm.days[2].checked = false;
	document.CustomerForm.days[3].checked = false;
	document.CustomerForm.days[4].checked = false;
	document.getElementById("package").value = "";
	missing = "";
	return;
}

function doSubmit(){
	if(validateAccountCreation() == false){
	alert(missing);
	return;
	}
	if(validatePersonalInfo() == false){
	alert(missing);
	return;
	}
	if (validateAddress() == false){
	alert(missing);
	return;
	}
	if (validateContact() == false){
	alert(missing);
	return;
	}
	if (validateType() == false){
	alert("Please select what you would like to focus on first.");
	return;
	}
	if (validateSelection() == false){
	alert("Please Select a Package");
	return;
	}
	if (validateCard() == false){
	return;
	}
	if (validateDays() == false){
	alert("Please select how many days a week you can commit.");
	return;
	}
	alert("Your order has been submitted.");
	return;
}

function validateCard(){
	var cardNum = document.CustomerForm.cardNum.value;
	if(cardNum == ""){
		alert("Please enter a valid card number");
		return false;
	}
	if(isNaN(cardNum) == true){
		alert("Please enter a valid card number");
		return false;
	}
	if(cardNum.length < 16){
		alert("Please enter a valid 16 digit card number");
		return false;
	}
	var secCode = document.CustomerForm.secCode.value;
	if(isNaN(secCode) == true){
		alert("Please enter a valid security code");
		return false;
	}
	if(secCode.length < 3){
		alert("Please enter a valid 3 digit security code");
		return false;
	}
	var cardMonth = document.CustomerForm.cardMonth.value;
	if(cardMonth.length < 2){
		alert("Please enter a valid expiration month");
		return false;
	}
	if(isNaN(cardMonth) == true){
		alert("Please enter a valid expiration month");
		return false;
	}
	var cardYear = document.CustomerForm.cardYear.value;
	if(cardYear.length < 2){
		alert("Please enter a valid expiration year");
		return false;
	}
	if(isNaN(cardYear) == true){
		alert("Please enter a valid expiration year");
		return false;
	}
}

function validateSelection(){
	var selection = document.getElementById("package");
	if(selection.value == ""){
	return false;
	}
}

function validateAccountCreation(){
	// email
	var email = document.CustomerForm.email;
	if(email.value == ""){
	missing = "Please enter a valid e-mail address.";
	email.focus();
	return false;
	}
	if(email.value.indexOf("@",0)<0){
	missing = "Please enter a valid email address";
	email.focus();
	return false;
	}
	if(email.value.indexOf(".",0)<0){
	missing = "Please enter a valid email address";
	email.focus();
	return false;
	}
	// user name
	var username = document.CustomerForm.username.value;
	if (username.length == 0){
	missing = "Please enter a username.";
	document.forms.CustomerForm.username.focus();
	return false;
	}
	// password	
	var password = document.CustomerForm.password.value;
	if (password.length == 0){
	missing = "Please enter a password.";
	document.forms.CustomerForm.password.focus();
	return false;
	}
	// confirm password	
	var passwordConfirm = document.CustomerForm.passwordConfirm.value;
	if (passwordConfirm.length == 0){
	missing = "Please enter re-enter your password.";
	document.forms.CustomerForm.passwordConfirm.focus();
	return false;
	}
	if (passwordConfirm != password){
	missing = "Please enter matching passwords.";
	document.forms.CustomerForm.passwordConfirm.focus();
	return false;
	}
	return true;
	}

function validatePersonalInfo(){
	// first name
	var firstName = document.CustomerForm.firstName.value;
	if (firstName.length == 0){
	missing = "Please enter your first name.";
	document.forms.CustomerForm.firstName.focus();
	return false;
	}
	var lastName = document.CustomerForm.lastName.value;
	if (lastName.length == 0){
	missing = "Please enter your last name.";
	document.forms.CustomerForm.lastName.focus();
	return false;
	}
	var phone = document.CustomerForm.phone1.value;
	if (phone.length == 0){
	missing = "Please enter your phone number.";
	document.forms.CustomerForm.phone1.focus();
	return false;
	}
	if (phone.length != 10){
	missing = "Please enter a 10 digit phone number.";
	document.forms.CustomerForm.phone1.focus();
	return false;
	}
	if(isNaN(phone)){
	missing = "Please enter a a valid 10 digit phone number! No characters.";
	document.forms.CustomerForm.phone1.focus();
	return false;
	}
	return true;
}

function validateAddress(){
	var address = document.CustomerForm.address.value;
	if (address.length == 0){
	missing = "Please enter your address.";
	document.forms.CustomerForm.address.focus();
	return false;
	}
	var city = document.CustomerForm.city.value;
	if (city.length == 0){
	missing = "Please enter your city.";
	document.forms.CustomerForm.city.focus();
	return false;
	}
	var state = document.CustomerForm.state.value;
	if (state.length == 0){
	missing = "Please enter your state.";
	document.forms.CustomerForm.state.focus();
	return false;
	}
	var zip = document.CustomerForm.zip.value;
	if (zip.length == 0){
	missing = "Please enter your zip code.";
	document.forms.CustomerForm.zip.focus();
	return false;
	}
	if (zip.length != 5){
	missing = "Please enter a 5 digit zipcode.";
	document.forms.CustomerForm.zip.focus();
	return false;
	}
	if (isNaN(zip)){
	missing = "Please enter a numerical zipcode.";
	document.forms.CustomerForm.zip.focus();
	return false;
	}
	return true;
}

function validateContact(){
	// contacts first name
	var contactFirstName = document.CustomerForm.contactFName.value;
	if (contactFirstName.length == 0){
	missing = "Please enter your contacts first name.";
	document.forms.CustomerForm.contactFName.focus();
	return false;
	}
	// contacts last name
	var contactLastName = document.CustomerForm.contactLName.value;
	if (contactLastName.length == 0){
	missing = "Please enter your contacts last name.";
	document.forms.CustomerForm.contactLName.focus();
	return false;
	}
	// Reelation to the user
	var contactRelation = document.CustomerForm.contactRelationship.value;
	if (contactRelation.length == 0){
	missing = "Please enter your relation to the contact.";
	document.forms.CustomerForm.contactRelationship.focus();
	return false;
	}
	// contact phone
	var contactPhone = document.CustomerForm.contactPhone1.value;
	if (contactPhone.length == 0){
	missing = "Please enter your contact's phone number.";
	document.forms.CustomerForm.contactPhone1.focus();
	return false;
	}
	if (contactPhone.length != 10){
	missing = "Please enter your contacts 10 digit phone number.";
	document.forms.CustomerForm.contactPhone1.focus();
	return false;
	}
	if(isNaN(contactPhone)){
	missing = "Please enter a a valid 10 digit phone number! No characters.";
	document.forms.CustomerForm.contactPhone1.focus();
	return false;
	}
}

function validateType(){
	if (document.CustomerForm.type[0].checked){
	return true;
	}
	if (document.CustomerForm.type[1].checked){
	return true;
	}
	if (document.CustomerForm.type[2].checked){
	return true;
	}
	else{
	return false;
	}
}

function validateDays(){
	if (document.CustomerForm.days[0].checked){
	return true;
	}
	if (document.CustomerForm.days[1].checked){
	return true;
	}
	if (document.CustomerForm.days[2].checked){
	return true;
	}
	if (document.CustomerForm.days[3].checked){
	return true;
	}
	if (document.CustomerForm.days[4].checked){
	return true;
	}
	else{
	return false;
	}
}