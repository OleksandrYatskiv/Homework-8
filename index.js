console.log('Numbers from 10 to 20');
numbersFrom10To20 = 10;

do {
    console.log(numbersFrom10To20);
    numbersFrom10To20++;
} while (numbersFrom10To20 <= 20);

console.log('Squares from 10 to 20');
squaresFrom10To20 = 10;

do {
    console.log(Math.pow(squaresFrom10To20, 2));
    squaresFrom10To20++;
} while (squaresFrom10To20 <= 20);

console.log('Multiplication table for 7');
multFor7 = 0;

do {
    console.log(multFor7 * 7);
    multFor7++;
} while (multFor7 <= 10);

console.log('Sum of all integer numbers from 1 to 15');

sumTill15 = 0;
i = 0;

while (i <= 15) {
    sumTill15 += i;
    i++;
}
console.log(sumTill15);

console.log('Multiple of all integer numbers from 15 to 35');

multFrom15To35 = 15;
i = 16;

while (i <= 35) {
    multFrom15To35 *= i;
    i++;
}
console.log(BigInt(multFrom15To35));

console.log('Avarege of all integer numbers from 1 to 500');

sumTill500 = 0;
i = 0;

while (i <= 500) {
    sumTill500 += i;
    i++;
}
avaerageTill500 = sumTill500 / 500;
console.log(avaerageTill500);

console.log('The sum of the even integer numbers from 30 to 80');

i = 30;
evenSumTill80 = 0;

while (i <= 80) {
    if (i % 2 === 0) {
        evenSumTill80 += i;
    }
    i++;
}

console.log(evenSumTill80);

console.log('All numbers from 100 to 300 divisors of 3');

i = 100;

while (i <= 300) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}

naturalNumber = prompt('Enter a natural number');
console.log(`All divisors of ${naturalNumber} are : `);

i = 0;
while (i <= naturalNumber) {
    if (naturalNumber % i === 0) {
        console.log(i);
    }
    i++;
}

console.log(`All even divisors of ${naturalNumber} are : `);

i = 0;
while (i <= naturalNumber) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

i = 0;
sumOfEvenDivisors = 0;

while (i <= naturalNumber) {
    if (i % 2 === 0) {
        sumOfEvenDivisors += i;
    }
    i++;
}

console.log(`The sum of all even divisors of ${naturalNumber} is : ${sumOfEvenDivisors} `);

i = 1;

while (i <= 10) {
    console.log(`Multiplication table for ${i} :`);
    j = 0;
    while (j <= 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}
