var missing = "";
function doClear(){
	document.userInfo.firstName.value = "";
	document.userInfo.ageGroup[0].checked = false;
	document.userInfo.ageGroup[1].checked = false;
	document.userInfo.ageGroup[2].checked = false;
	document.userInfo.ageGroup[3].checked = false;
	document.userInfo.expWorkingOut[0].checked = false;
	document.userInfo.expWorkingOut[1].checked = false;
	document.userInfo.expWorkingOut[2].checked = false;
	document.userInfo.timeFrame[0].checked = false;
	document.userInfo.timeFrame[1].checked = false;
	document.userInfo.timeFrame[2].checked = false;
	document.userInfo.timeFrame[3].checked = false;
	document.userInfo.workout[0].checked = false;
	document.userInfo.workout[1].checked = false;
	document.userInfo.workout[2].checked = false;
	missing = "";
	return;
}

function doSubmit(){
	if(checkName() == false){
	alert(missing);
	return;
    }
	if(validateAgeGroup() == false){
	alert(missing);
	return;
    }
	if(validateExp() == false){
	alert(missing);
	return;
    }
	if(validateTimeFrame() == false){
	alert(missing);
	return;
    }
	if(validateWorkOutPref() == false){
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
const validateAgeGroup = () =>{
    if (document.userInfo.ageGroup[0].checked)
	    return true;
	if (document.userInfo.ageGroup[1].checked)
	    return true;
	if (document.userInfo.ageGroup[2].checked)
	    return true;
	if (document.userInfo.ageGroup[3].checked)
	    return true;
    else{
        missing = "Please select your age group";
	    return false;
	}
}
const validateExp = () =>{
    if (document.userInfo.expWorkingOut[0].checked)
	    return true;
	if (document.userInfo.expWorkingOut[1].checked)
	    return true;
	if (document.userInfo.expWorkingOut[2].checked)
	    return true;
    else{
        missing = "Please select your experience with working out";
	    return false;
	}
}
const validateTimeFrame = () =>{
    if (document.userInfo.timeFrame[0].checked)
	    return true;
	if (document.userInfo.timeFrame[1].checked)
	    return true;
	if (document.userInfo.timeFrame[2].checked)
	    return true;
	if (document.userInfo.timeFrame[3].checked)
	    return true;
    else{
        missing = "Please select the time frame you wish to work with";
	    return false;
	}
}
const validateWorkOutPref = () =>{
    if (document.userInfo.workout[0].checked)
	    return true;
	if (document.userInfo.workout[1].checked)
	    return true;
	if (document.userInfo.workout[2].checked)
	    return true;
    else{
        missing = "Please select your desired work out preference";
	    return false;
	}
}