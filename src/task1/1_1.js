process.openStdin().addListener('data', reverseString);

function reverseString(data) {
    let inputString = data.toString().trim();
    let textArray = inputString.split('');
    let reversedString = textArray.reverse().join('');
    process.stdout.write(inputString + " " + reversedString + "\n");
}