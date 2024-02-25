//input the human words
const input = 'Hi, Human';
//vowels array
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log('i is: ' + i);
       //evaluating caharacters in the human word
    if (input[i] === 'e') { 
        resultArray.push(input[i]);
    }

    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }

    for (let j = 0; j < vowels.length; j++) {
        console.log('j is: ' + j);
         //evaluating if the character in human words is the same/ equal to the vowel character
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

//output array of vowels contained in the human words
console.log(resultArray);
//declaring an array to join the array elements into a string
var resultString = resultArray.join('');
//changing the array string in UpperCase
resultString = resultString.toUpperCase();
console.log(resultString);
