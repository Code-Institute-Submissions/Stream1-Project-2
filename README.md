# Code Institute Stream 1 Project

## Overview
This site is required for the Code Institute end of Stream 1 (Front end) project. It is to demonstrate an ability to code, test and deploy (to GitHub) a basic website that follows good practice. The website has the dual purpose of covering examination requirements while also illustrating my level of knowledge/competency to prospective employers.


## Functionality of the project
 - The main aspect of the site is the JavaScript photo viewer which enables the user to cycle through photos based on the different locations from which they were taken and the user can enlarge the photos when selected if desired. I deliberately didn't use the bootstrap carousel because I wanted to set myself the JavaScript challenge of producing my own viewer.

- The site also has a dummy 'contact me' form, for which I coded some JavaScript validation to supplement the HTML5 form input field validation, as the HTML5 form date validation as poor cross browser support (https://www.smashingmagazine.com/2015/05/form-inputs-browser-support-issue/), and as such I didn't want to use it.

- The site is highly responsive to different device types. Using Bootstrap's inbuilt device size classes the pages adapt their layout to suit the device they are being viewed on. In addition to this, some of Bootstraps default CSS has been overwritten to make site text and images responsive to different device types, extending the default responsiveness Bootstrap provides.

- The site takes advantage of HTML5 inbuilt form validation to ensure the data is submitted in the correct format.



## Project Coding
#### Technologies used
- HTML
- CSS
	- [Bootstrap](http://getbootstrap.com/)
- JavaScript 
- Jasmine (https://jasmine.github.io/)

#### Coding concepts used/followed
- **JavaScript concepts:**
The different sections of JavaScript are modularised by encapsulating the associated functions and variables within an outer module/function. Where external access is needed to the encapsulated JavaScript functions (on the contact page), the code uses JavaScript closure and returns the required functions. This approach ensures better maintainability of code within each module, ensures the global variable space isn't polluted and keeps the modules variables/functions safe from variable pollution from other code.


#### 3rd party code used:
- I used the image model viewer from W3C (https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img), although I have heavily adapted it. The original was designed for one photo to be launched, I have developed it to use different arrays enabling the use of previous/next selectors and locations to be chosen.

- I used a default bootstrap responsive menu, although I have adapted it from its default design to make it more responsive. In this site the text shown on the menu will change size depending on the viewing device. In addition, where applicable, I changed the default Bootstrap div elements as HTML5 semantic elements for improved usability.


#### Justification of approach
- I decided to use JavaScript rather than jQuery as I wished to understand some of the underlying language that supports the jQuery library, rather than start using jQuery immediately.

- I decided not to use AngularJS for this project because this is a such small site, and also with the exception of bootstrap (used as I wanted to develop a responsive site quickly), I wanted to build a site that illustrated I have grasped the fundamentals.

## How was the project deployed
The project has been managed locally and deployed to GitHub on a regular basis, with the current site able to be viewed via GitHub Pages.

## How was the project tested

### Testing code quality
I validated the HTML used through https://validator.w3.org

The functional and responsiveness testing carried out is outlines in the accompanying documentation.

Where possible Jamine was just to test individual JavaScript functions and the tests can be viewed within the js_testing directory within the project repository.