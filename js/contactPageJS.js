
/* Creating a module (through the use of function scope) called 'contact' to encapsulate the 
   associated functions and variables, thus eliminating the risk of variable/function pollution 
   in the global scope. In addition it has benefit of grouping all associated code for easier 
   maintainability.
*/

var contact = (function (){

	/* Module level variables to enable status of date
	   components to be tracked by all functions*/
	var isYearValid;
	var isMonthValid;
	var isDayValid;


	//Creating a new JS date object, then variables, that represent today
	function actualDate(){
		var d = new Date();
		var day = d.getDate();
		return {
			"day" : d.getDate(),
			//Month returns a value between 0-11 for month of year
			"month" : d.getMonth() + 1,			
			"year" : d.getFullYear(),			
		};
	}
	

	/*
	HTML Issue
	//Getting, and breaking down, input date reading for subsequent processing
	function receivedDate(){
		var receivedDate = document.getElementById('date').value;
		var receivedDateSplit = receivedDate.split("/");
		return {
			"day" : receivedDateSplit[0],
			"month" : receivedDateSplit[1],
			"year" : receivedDateSplit[2],
		};
	}
	*/

	//Validating year, 'same' value is required for subsequent processing/comparison
	function validateYear(receivedYear, currentYear){
		var yrRtnVal;

		//If in the future all good
		if (receivedYear > currentYear){
			yrRtnVal = "valid";
		}
		//Need to flag same year as month & day validation required
		else if (receivedYear == currentYear){
			yrRtnVal = "same";
		}
		else{
			yrRtnVal = "invalid";
			document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";
		}
		return yrRtnVal;
	}



	//Validating month, 'same' value is required for subsequent processing/comparison
	//additional validation put in to prevent month value of over 12 being deemed valid
	function validateMonth(receivedMonth, currentMonth){
		var mthRtnVal;

		//HTML5 form validation can't cater for this, so if month over 12, reject 
		if (receivedMonth > 12){
			mthRtnVal = "invalid";
			document.getElementById('formErrorMsg').innerHTML = "  Month value incorrect, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";						
		}
		//If in the future all good
		else if (isYearValid == "same" && receivedMonth < currentMonth){
			mthRtnVal = "invalid";
			document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";			
		} 
		//Need to flag same year as month & day validation required
		else if (isYearValid == "same" && receivedMonth == currentMonth){
			mthRtnVal = "same";
		} 
		else{
			mthRtnVal = "valid";
		}
		return mthRtnVal;
	}


	//Validating day, checks that day is not from past and also has functionality to check that 
	//enough notice has been given.
	function validateDay(recivedDay, currentDay){
		var dayRtnVal;

		//If its a valid day, have they given enough notice (set to same day at mo)
		if (isMonthValid == "same"  && recivedDay == currentDay){
				document.getElementById('formErrorMsg').innerHTML = "  I'll need at least a day, please re-enter";
				document.getElementById('formSuccess').innerHTML = "";
				dayRtnVal = "invalid";
			}

		//If in the future all good, else reject
		else if (isMonthValid == "same" && recivedDay < currentDay){
			dayRtnVal = "invalid";
			document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
			document.getElementById('formSuccess').innerHTML = "";			
		} 

		else{
			dayRtnVal = "valid";
		}

		return dayRtnVal;
	}

	//Grouping of all cosmetic form actions post successful sumbit	
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


	// Returning a single function from this module/function called (well, assigned to the variable 
	// called) 'contact', this enables access to the validate form function outside of the scope of 
	// this module. Without passing it back, it could not be invoked.
	return {validateForm: function(){
		//Nested to be more efficient, no point in executing subsequent function(s) if error detected
		isYearValid = validateYear(receivedDate().year, actualDate().year);
		//console.log("isYearValid: " +isYearValid);
		if (isYearValid == "same" || isYearValid == "valid"){
			isMonthValid = validateMonth(receivedDate().month, actualDate().month);
			//console.log("isMonthValid: " +isMonthValid);
			if (isMonthValid  == "same" || isMonthValid  == "valid"){
				isDayValid = validateDay(receivedDate().day, actualDate().day);
				//console.log("isDayValid: " +isDayValid);
				if (isDayValid == "valid"){
					//console.log("Form is fine");
					successfulSubMsg();
				}
			}
		}
	}};

})();
