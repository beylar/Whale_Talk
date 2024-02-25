const input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log('i is: ' + i);

    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }

    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }

    for (let j = 0; j < vowels.length; j++) {
        console.log('j is: ' + j);

        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

console.log(resultArray);
var resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);
