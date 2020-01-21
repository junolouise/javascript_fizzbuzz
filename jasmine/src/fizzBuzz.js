function FizzBuzz() {

}
FizzBuzz.prototype.isDivisibleBy3 = function(number) {
  if (number % 3 === 0) {
    return true ;
  } else {
    return false ;
  }
};

FizzBuzz.prototype.isDivisibleBy5 = function(number) {
  if (number % 5 === 0) {
    return true ;
  } else {
    return false ;
  }
};

FizzBuzz.prototype.fizzBuzzDisplay = function(number) {
  if ((this.isDivisibleBy5(number)) && (this.isDivisibleBy3(number))) {
    return 'FIZZBUZZ' ;
    } else if (this.isDivisibleBy3(number)) {
      return 'FIZZ';
    } else if (this.isDivisibleBy5(number)) {
      return 'BUZZ' ;
    } else {
      return number ;
  };
  

};
