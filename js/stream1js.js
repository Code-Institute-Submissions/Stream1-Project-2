
/************************************************************************************/
/*       																			*/
/*				           This is JS for the Contacts Page                         */
/*       																			*/
/************************************************************************************/
// This function validates the date entered on the contact page before putting out a message to 
// screen to say the form has been submitted
//
// *Could do more validation around months and day values having a max if had more time

function validateForm(){
	//create a new JS date object and create variables that represent today
	var d = new Date();
	var day = d.getDate();
		//Month returns a value between 0-11 for month of year
	var month = d.getMonth() + 1;
	var year = d.getFullYear();

	//Get recieved data and get it ready for processing
	var recievedDate = document.getElementById('date').value;
	var recievedDateSplit = recievedDate.split("/");

	//If prior to this year, reject
	if (recievedDateSplit[2] < year){
		document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
		document.getElementById('formSuccess').innerHTML = "";
	}
	//OR If this year, but prior month, reject
	else if (recievedDateSplit[2] == year && recievedDateSplit[1] < month){
		document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
		document.getElementById('formSuccess').innerHTML = "";
	} 
	//OR If this year and this month, but prior day, reject
	else if (recievedDateSplit[2] == year && recievedDateSplit[1] == month && recievedDateSplit[0] < day){
		document.getElementById('formErrorMsg').innerHTML = "  Date in the past, please re-enter";
		document.getElementById('formSuccess').innerHTML = "";
	}	
	//Need at least a days notice!
	else if (recievedDateSplit[2] == year && recievedDateSplit[1] == month && recievedDateSplit[0] == day){
		document.getElementById('formErrorMsg').innerHTML = "  I'll need at least a day, please re-enter";
		document.getElementById('formSuccess').innerHTML = "";
	}
	else{
		//Form is OK
		document.getElementById('formSuccess').innerHTML = "   Successfully Submitted";
		document.getElementById('formErrorMsg').innerHTML = "";		
	}
}


/************************************************************************************/
/*       																			*/
/*	  			             This is JS for the Media Page                          */
/*       																			*/
/************************************************************************************/
//create the Swanage gallery array
var swanageGallery = [{
		src: "img/Swanage/Swanage1.jpg",
		alt:"Swanage Pic1"
	},

	{
		src: "img/Swanage/Swanage2.jpg",
		alt:"Swanage Pic2"
	},

	{
		src: "img/Swanage/Swanage3.jpg",
		alt:"Swanage Pic3"
	}
]; 

//create the Fleet Gallery array
var fleetGallery = [{
		src: "img/Fleet/FleetPond1.jpg",
		alt:"Fleet Pic1"
	},

	{
		src: "img/Fleet/FleetPond2.jpg",
		alt:"Fleet Pic2"
	},

	{
		src: "img/Fleet/FleetPond3.jpg",
		alt:"Fleet Pic3"
	}

]; 


//create the Caesars Camp gallery array
var caesarsCampGallery = [{
		src: "img/CaesarsCamp/CaesarsCamp1.jpg",
		alt:"Caesars Camp Pic1"
	},

	{
		src: "img/CaesarsCamp/CaesarsCamp2.jpg",
		alt:"Caesars Camp Pic2"
	},

	{
		src: "img/CaesarsCamp/CaesarsCamp3.jpg",
		alt:"Caesars Camp Pic3"
	}
]; 


//Disable next/previous buttons until a selection is made
if (document.getElementById("nextPhotoBtnLg")){
	document.getElementById("nextPhotoBtnLg").disabled = true;
	document.getElementById("previousPhotoBtnLg").disabled = true;
}

if (document.getElementById("nextPhotoBtnSm")){
	document.getElementById("nextPhotoBtnSm").disabled = true;
	document.getElementById("previousPhotoBtnSm").disabled = true;
}


//Set flag to manage state of next/previous buttons (rather than executing) 
//command to set disabled to false every mouse click. See function 
// getInitialPhotoVals() for clarity.
var previousNextButtonsDisabled = "Yes";


//Initialise Count for array iteration in the Global domain, so 
//that it can be referenced by all functions that need it
var count = 0;


//IF needed so only looks for myImg when on media page
if (document.getElementById("myImg")){
	//Event handler for myImg
	myImg.onclick = function(){
		//Ensures the modal only gets launched when picture in viewer
		if (document.getElementById("nextPhotoBtnLg").disabled === false){
			//Set the model to become visable (and take up screen)
    		document.getElementById('myModal').style.display = "block";
    		//Set the viewable photo to be the photo within designated array variable 
    		//whichGallery in position of count
    		document.getElementById("currentPhoto").src = whichGallery[count].src;
    		document.getElementById("caption").innerHTML = whichGallery[count].alt;
		}
	};
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//IF needed so only looks for myImg when on media page
if (document.getElementById("span")){
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    document.getElementById('myModal').style.display = "none";
	};
}


//Updates Gallary with new image and new text
function updateGallary(){
	document.getElementById("myImg").src=whichGallery[count].src;
	document.getElementById("myImg").alt=whichGallery[count].alt;
}



//Enable use of next and previous buttons by enabling them
function enableNextPrev(){

	//Enable the next/previous buttons
	if (document.getElementById("nextPhotoBtnLg")){
		document.getElementById("nextPhotoBtnLg").disabled = false;
		document.getElementById("previousPhotoBtnLg").disabled = false;
	}

	if (document.getElementById("nextPhotoBtnSm")){
		document.getElementById("nextPhotoBtnSm").disabled = false;
		document.getElementById("previousPhotoBtnSm").disabled = false;
	}
}


//Function to set the selected Gallary's array references to 0
function getInitialPhotoVals(){
	//reset count in case value is higher than current 
	//array (if previous album bigger)
	count = 0;	
	document.getElementById("myImg").src = whichGallery[count].src;
    document.getElementById("myImg").alt = whichGallery[count].alt;	
}


//A function which prepares selected Gallary's references and, if 
//required, enables the Gallary buttons
function initialiseGallary(){
	//Gets initial photo/text ready for viewer, then 
	getInitialPhotoVals();
	if (previousNextButtonsDisabled === "Yes"){
		enableNextPrev();
		previousNextButtonsDisabled = "No";
	}
}



//Function for when the user clicks on 'Next Photo' the next photo is shown
function previousPhotoBtnFunc() { 

	//If reached end of array, go back to start of Array
	//Array starts at 0, so -1 required off length value
	if (count === 0){
		count=(whichGallery.length -1);
	}
	else{
		//cycle to previous photo
	  	count = count -1;
	}

	updateGallary();
}


// When the user clicks on Next Photo, show next photo
function nextPhotoBtnFunc() { 
	//cycle to next photo
  	count = count +1;

	//If reached end of array, go back to start
	if (count === whichGallery.length){
		count=0;
	}
	updateGallary();
}


//Function for when the user clicks on 'Next Photo' the next photo is shown
//IF needed so only looks for myImg when on media page
if (document.getElementById("previousPhotoBtnLg")){
	previousPhotoBtnLg.onclick = previousPhotoBtnFunc;
	previousPhotoBtnSm.onclick = previousPhotoBtnFunc;
}


//IF needed so only looks for myImg when on media page
if (document.getElementById("nextPhotoBtnLg")){
	// When the user clicks on Next Photo, show next photo
	nextPhotoBtnLg.onclick = nextPhotoBtnFunc;
	nextPhotoBtnSm.onclick = nextPhotoBtnFunc;
}


// Sets view to Swanage photo array and initialises it
function swanageBtnFunc() { 
	whichGallery = swanageGallery;
	initialiseGallary();
}

// Sets view to Fleet photo array and initialises it
function fleetBtnFunc() { 
	whichGallery = fleetGallery;
	initialiseGallary();
}

// Sets view to Caesars Camp photo array and initialises it
function caesarsCampBtnFunc() { 
	whichGallery = caesarsCampGallery;
	initialiseGallary();
}

// Event handlers being assigned named functions, this is to help
// reduce amount of duplicate code as both buttons per location
// are initiating same function.

//IF needed so only looks for myImg when on media page
if (document.getElementById("swanageBtnLg")){
	swanageBtnLg.onclick = swanageBtnFunc;
	swanageBtnSm.onclick = swanageBtnFunc;
	fleetBtnLg.onclick = fleetBtnFunc;
	fleetBtnSm.onclick = fleetBtnFunc;
	caesarsCampBtnLg.onclick = caesarsCampBtnFunc;
	caesarsBtnSm.onclick = caesarsCampBtnFunc;	
}

