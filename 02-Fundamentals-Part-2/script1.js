function GetReverseNumber(number) {

    let reverseNumber = 0;

    while (number > 0) {
        let a = number % 10;
        reverseNumber = (reverseNumber * 10) + a;
        number = Math.floor(number / 10);
    }

    return reverseNumber;
}

console.log("Reverse Number for 1234 : " + GetReverseNumber(1234));
console.log("Reverse Number for 123456789 : " + GetReverseNumber(123456789));