//trimStart
let greeting = ' Hello world! ';
greeting = greeting.trimStart();

console.log(greeting);
//trimEnd
greeting = ' Hello world! ';
greeting = greeting.trimEnd();

console.log(greeting);
//concat
greeting = 'Hello';
greeting = greeting.concat(' world!');

console.log(greeting);
//replace
greeting = 'Hello continent!';
greeting = greeting.replace('continent', 'world');

console.log(greeting);

//Regular Expression
//find a fox
const forest = 'Tree Tree Bush fOx Tree';
let regex = /fox/i;
const foundedFox = regex.exec(forest);

console.log(foundedFox);
//get email
const emails = 'johnDoe@email.com John123Doe@email.com John.123Doe@email.com'
regex = /[J][a-z]{3}\.\d{3}\D[a-z]{2}@email.com/;
const foundedEmail = regex.exec(emails);

console.log(foundedEmail);
//get tel number
const numbers = '1.333.333 7777.55.88 66.66.55 420.269.742'
regex = /\d{3}\.\d{3}\.\d{3}/;
const foundedNumbers = regex.exec(numbers);

console.log(foundedNumbers);