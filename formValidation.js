var missing = "";
function doClear(){
	document.userInfo.firstName.value = "";
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
	if(checkName() == false){
	alert(missing);
	return;
	}
}

const checkName = () => {
    let name = document.userInfo.nameInput;
    if(name.value == ""){
        missing = "Please enter your name";
        name.focus();
        return false;
    }
    else
        return true;
}