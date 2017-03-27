# Code Institute Stream 1 Project

## Overview
This code is for a site that is required for the Code Institute end of Stream 1 (Front end) project). It is to demonstrate an ability to code, test and deploy (to GitHub) a basic website that follows good practice. The website has the dual purpose of covering examination requirements while also illustrating my level of knowledge/competency to prospective employers.


## Functionality of the project
 - The main aspect of the site is the JavaScript photo viewer, which enables the user to cycle through photos based on the different locations from which they were taken, with the functionality to enlarge the photos when selected if desired. I deliberately didn't use the bootstrap carousel because I wanted to set myself the JavaScript challenge of producing my own.

- The site also has a dummy 'contact me' form, for which I coded some JavaScript validation to supplement the HTML5 form input field validation, as the HTML5 form date validation as poor cross browser support*, and as such I didn't want to use it.

- The site is highly responsive to different device types. Using Bootstraps inbuilt device size classes the pages adapt their layout to suit the device they are being viewed on. In addition to this, some of Bootstraps default CSS has been overwritten to additionally make site text and images responsive to different device types, extending the default responsiveness Bootstrap provides.

- The site takes advantage of HTML5 inbuilt form validation to ensure the data is submitted in the correct format.

*https://www.smashingmagazine.com/2015/05/form-inputs-browser-support-issue/


## Project Coding
#### Technologies used
- HTML
- CSS
	- [Bootstrap](http://getbootstrap.com/)
- JavaScript 
- Jasmine (https://jasmine.github.io/)

#### Coding concepts used
- JavaScript concepts
The different sections of JavaScript are modularised by encapsulating associated functions and variables within an outer module/function. Where external access is needed to the encapsulated JavaScript functions (on the media page), the code uses JavaScript closure and returns the required function, giving access the one function that is externally required. This approach ensures better maintainability of code within each module, ensures the global variable space isn't polluted and keeps the modules variables safe from variable pollution from other code.

- Model/View/Controller
I have split out the data (photo arrays) from code as I wished to following the MVC principle of splitting out the View (HTML/CSS), the Model/Data (photo arrays) and Controller (JavaScript logic).

#### None self-developed code used:
- I used the model image model viewer from W3C (https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img), although I have heavily adapted it. The original was for one photo to be launched, I developed that use different arrays, have previous/next selectors and different locations to be selected.

- I used a bootstrap responsive menu, although I have adapted from its default to make it more responsive, as the text shown on the menu will change size depending on viewing device.


#### Justification of approach
- I decided to use JavaScript rather tha jQuery as I wished to understand some of the underlying language that supports the jQuery library, rather than start using jQuery immediately.

- I decided not to use AngularJS for this project because this is a small site, and with the exception of bootstrap (as I wanted to develop a responsive site quickly), I wanted to build a site that had been handwritten. Although I have not used AngularJS, I have adhered to the MVC principle on which AngularJS is based.

## How was the project deployed
The project has been managed locally and deployed to GitHub on a regular basis, with the current site able to be viewed via GitHub Pages.

## How was the project tested
The project has been manually tested across different browsers types, different browser sizes and on different devices. The JavaScript has been tested through Jasmine (the Jasmine test files are within the GitHub repo).
