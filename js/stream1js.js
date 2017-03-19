

//Disable next/previous buttons until a selection is made
document.getElementById("nextPhoto").disabled = true;
document.getElementById("previousPhoto").disabled = true;


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

//Initialise Count for array iteration
var count = 0;


myImg.onclick = function(){

	//Ensures the modal only gets launched when picture in viewer
	if (document.getElementById("nextPhoto").disabled === false){

		//Set the model to become visable (and take up screen)
    	document.getElementById('myModal').style.display = "block";
    	//Set the viewable photo to be the photo within designated array variable 
    	//whichGallery in position of count
    	document.getElementById("currentPhoto").src = whichGallery[count].src;
    	document.getElementById("caption").innerHTML = whichGallery[count].alt;
	}
};


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    document.getElementById('myModal').style.display = "none";
};


// When the user clicks on Next Photo, show next photo
nextPhoto.onclick = function() { 
	//cycle to next photo
  	count = count +1;

	//If reached end of array, go back to start
	if (count === whichGallery.length){
		count=0;
	}

	//Update Gallary with new image and new text
	document.getElementById("myImg").src=whichGallery[count].src;
	document.getElementById("myImg").alt=whichGallery[count].alt;

};

//function to enable use of next and previous buttons
function enableNextPrev(){
	document.getElementById("nextPhoto").disabled = false;
	document.getElementById("previousPhoto").disabled = false;
}



// When the user clicks on Next Photo, show next photo
previousPhoto.onclick = function() { 

	//If reached end of array, go back to start of Array
	//Array starts at 0, so -1 required off length value
	if (count === 0){
		count=(whichGallery.length -1);
	}
	else{
		//cycle to previous photo
	  	count = count -1;
	}

	//Update Gallary with new image and new text
	document.getElementById("myImg").src=whichGallery[count].src;
	document.getElementById("myImg").alt=whichGallery[count].alt;

};


// Sets view to Swanage photo array
swanage.onclick = function() { 
	//reset count in case value is higher than current array (if previous album bigger)
	count = 0;
	whichGallery = swanageGallery;
	//refactoring potential
	//initialising view to this view on this click (rather than needing a second button click to start new photots apearing)
	document.getElementById("myImg").src = whichGallery[count].src;
    document.getElementById("myImg").alt = whichGallery[count].alt;	
	//console.log(whichGallery);
	//console.log(whichGallery[0]);
	enableNextPrev();
};

// Sets view to Fleet photo array
fleet.onclick = function() { 
	//reset count in case value is higher than current array (if previous album bigger)
	count = 0;	
	whichGallery = fleetGallery;
	//refactoring potential
	document.getElementById("myImg").src = whichGallery[count].src;
    document.getElementById("myImg").alt = whichGallery[count].alt;	
	//console.log(whichGallery);	
	//console.log(whichGallery[0]);
	enableNextPrev();
};

// Sets view to Caesars Camp photo array
caesarsCamp.onclick = function() { 
	//reset count in case value is higher than current array (if previous album bigger)
	count = 0;	
	whichGallery = caesarsCampGallery;
	//refactoring potential
	document.getElementById("myImg").src = whichGallery[count].src;
    document.getElementById("myImg").alt = whichGallery[count].alt;	
	//console.log(whichGallery);	
	//console.log(whichGallery[0]);
	enableNextPrev();
};
