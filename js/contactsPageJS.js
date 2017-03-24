/************************************************************************************/
/*       																			*/
/*				           This is JS for the Contacts Page                         */
/*       																			*/
/************************************************************************************/
// This function validates the date entered on the contact page before putting out a message to 
// screen to say the form has been submitted
//
// *Could do more validation around months and day values having a max if had more time


// Here I am using an annonymous function to encapsulate the code so that it doesn't pollute (and isn't polluted by) the 
// global variable space. An annoymous function rather than a class based approach to modularisation of the code was chosen
// because no functions need to be returned to enable external access to them. 
var test = function () {

	function prepInput(){
		//create a new JS date object and create variables that represent today
		var d = new Date();
		var day = d.getDate();
		//Month returns a value between 0-11 for month of year
		var month = d.getMonth() + 1;
		var year = d.getFullYear();
		//Get recieved data and get it ready for processing
		var recievedDate = document.getElementById('date').value;
		var recievedDateSplit = recievedDate.split("/");

		return {"day":day};
	}


	function validateYear(){
		var yrRtnVal;
		//If prior to this year, reject
		if (recievedDateSplit[2] < year){
			document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";
			yrRtnVal = true;
		}
		else{
			yrRtnVal = false;
		}
		return yrRtnVal;
	}

	function validateMonth(){
		var mthRtnVal;
		// If this year, but prior month, reject
		if (recievedDateSplit[2] == year && recievedDateSplit[1] < month){
			document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";
			mthRtnVal = true;
		} 
		else{
			mthRtnVal = false;
		}
		return mthRtnVal;
	}

	function validateDay(){
		var dayRtnVal;
	//If this year and this month, but prior day, reject
	if (recievedDateSplit[2] == year && recievedDateSplit[1] == month && recievedDateSplit[0] < day){
		document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
		document.getElementById('formSuccess').innerHTML = "";
	}	
	else{
		dayRtnVal = false;
	}
		return dayRtnVal;
	}

	
	function validateTday(){
		var tDayRtnVal;
		//Need at least a days notice!
		if (recievedDateSplit[2] == year && recievedDateSplit[1] == month && recievedDateSplit[0] == day){
			document.getElementById('formErrorMsg').innerHTML = "  I'll need at least a day, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";
		}
		else{
			tDayRtnVal = false;
		}
		return tDayRtnVal;
	}



	function successfulSubMsg(){
		//Form is OK
		document.getElementById('formSuccess').innerHTML = "   Successfully Submitted";
		document.getElementById('formErrorMsg').innerHTML = "";		
		//Clear form data
		document.getElementById('fname').value = "";
		document.getElementById('lname').value = "";
		document.getElementById('email').value = "";
		document.getElementById('date').value = "";
		document.getElementById('phone').value = "";
	}


	function validateForm(){
		prepInput();
		if (validateYear() && validateMonth() && validateDay() && validateTday()){
			successfulSubMsg();	
		}
}


};