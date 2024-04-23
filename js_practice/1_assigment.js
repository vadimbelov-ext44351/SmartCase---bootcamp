//spaw variables
 let firstVariable = 'a';
 let secondVariable = 'b';
 let storedVariable;

 console.log(firstVariable,secondVariable);

 storedVariable = firstVariable;
 firstVariable = secondVariable;
 secondVariable = storedVariable;

 console.log(firstVariable,secondVariable);