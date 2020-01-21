describe ('fizzBuzz', function() {             //use empty brackets even when it takes no arguments with JS
var fizzBuzz
  describe ('is divisible by 3', function() {
    it ('returns true if number is divisible by 3', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.isDivisibleBy3(3)).toBeTruthy();

    });
  });

  describe ('is not divisible by 3', function() {
    it ('returns false if number is not divisible by 3', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.isDivisibleBy3(4)).toBeFalsy();

    });
  });

  describe ('is divisible by 5', function() {
    it ('returns true if number is divisible by 5', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.isDivisibleBy5(5)).toBeTruthy();

    });
  });

  describe ('is not divisible by 5', function() {
    it ('returns false if number is not divisible by 5', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.isDivisibleBy5(4)).toBeFalsy();

    });
  });

  describe ('displays fun word when appropriate', function() {
    it ('shows FIZZ when number is divisible by 3', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.fizzBuzzDisplay(9)).toEqual('FIZZ');

    });
    
    it ('shows BUZZ when number is divisible by 5', function() {
      fizzBuzz = new FizzBuzz();

      expect(fizzBuzz.fizzBuzzDisplay(10)).toEqual('BUZZ');

    });
  });

});  