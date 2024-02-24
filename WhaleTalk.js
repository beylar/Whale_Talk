

const input = 'Hi, Human';
const vowels = ['a','e','i','o','u'];
const resultArray = [];
for (let i=0; i< input.length; i++){
    console.log('i is: '+ i);
    //some logics are not well connected
    if (input[i] === vowels['e']){
        resultArray.push(input[i]);
    }
    if (input[i] === vowels['u']){
        resultArray.push(input[i]);
    }
    for (let j=0; j<input.length; j++){
        console.log('j is: '+j);
        if (input[i] === vowels[j]){
            console.log(resultArray.push());

        }
    }
}

console.log(resultArray);
var resultString = resultArray.join()
resultString.toUpperCase();
console.log(resultString);