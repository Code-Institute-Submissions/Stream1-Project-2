describe("Contact Page Testing", function() {

  /*
    I needed to take the functions out of the contacts module to test, so it isn't a 
    verbatim version of the code being tested
  */


    /*
    //Why doesn't thiw work??
    it("should return date obj", function() {
      expect(actualDate()).toBe({day: 24, month: 3, year: 2017});
    });
    */



  describe("Validating the year", function() {

    
    it("should return 'valid' if the recieved year (1st arg) is greater than current year", function() {
      expect(validateYear(2018, 2017)).toBe("valid");
    });

    it("should return 'same' if the recieved year is less same as the current year", function() {
      expect(validateYear(2017, 2017)).toBe("same");
    });

    // Cannot set inner HTML so errors, how to test
    //Inner HTML issue
    /* it("should return 'invalid' if the recieved year (1st arg) is less than current year", function() {
      expect(validateYear(2016, 2017)).toBe("invalid");
    }); */

  });


  describe("Validating the month", function() {
  
    var isYearValid;

    /*
    //Inner HTML issue
    it("should return 'invalid' if the recieved month is greater than 12", function() {
      expect(validateMonth(13, 01)).toBe("invalid");
    });
    */

    /*
    //Inner HTML issue
    var isYearValid = "same";
    it("should return 'invalid' if isYearValid is 'same' and the recieved month is less than the current month", function() {
      expect(validateMonth(01, 02)).toBe("invalid");
    });
    */

    /*
    it("should return 'same', if isYearValid is 'same' and the recieved month is equal to the current month", function() {
      isYearValid = "same";
      expect(validateMonth(11, 11)).toBe("same");
    });
    */

    it("should return 'valid' if the recieved month is greater than the current month", function() {
      expect(validateMonth(02, 01)).toBe("valid");
    });
  });



  describe("Validating the Day", function() {
    
    /*
    //Inner HTML issue
    it("should return 'same', if isMonthValid is 'same' and the recieved day is equal to the current day", function() {
      isMonthValid = "same";
      expect(validateDay(11, 11)).toBe("invalid");
    });
    */    

    /*
    //Inner HTML issue
    it("should return 'invalid', if isMonthValid is 'same' and the recieved day is less than the current day", function() {
      isMonthValid = "same";
      expect(validateDay(09, 11)).toBe("invalid");
    });
    */

  });

});
