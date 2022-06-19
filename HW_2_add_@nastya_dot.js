/* 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1*/

for (let i = 1; i < 11; i++) {
    let num = 2;
    let numPower = num ** i;
    console.log(`${num} в степени ${i} равно ${numPower}`);
}
/*
1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
*/

function getPower(power) {
    for (let i = 1; i < power + 1; i++) {
        let num = 2;
        let numPower = num ** i;
        console.log(`${num} в степени ${i} равно ${numPower}`);
    }
}
getPower(5)

/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

//Первый вариант
for (let i = 1; i <6; i++) {
    let smile = ':)';
    console.log(smile.repeat(i));
}

//Второй вариант
let smile = '';

for (let i = 1; i <6; i++) {
    smile += ':)';
    console.log(smile);
}

/*
2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/

function printSmile(str, numberOfRows) {
    let smile = '';

    for (let i = 1; i <= numberOfRows; i++) {
        smile += str;
        console.log(smile);
    }
}

printSmile('*', 5)

/*
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

// consonants

function getWordStructure(word) {
    const vowels = 'aeiоuу';
    let vowelsCount = 0;
    let consonantsCount = 0;
    let wordNorm = word.toLowerCase().replace(/[^a-zа-яё]/gi, '');

    for (let char of wordNorm) {
        if (vowels.includes(char)) {
                vowelsCount += 1;
            } else {
                consonantsCount += 1;
            }  
        }
    
    console.log(`Слово ${word} состоит из ${vowelsCount} гласных и ${consonantsCount} согласных букв`);
}      

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');
getWordStructure('Check sefge !@$ list');
/* 
4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' */

function isPalindrom(word) {
    let wordNorm = word.toLowerCase().replace(/[^a-zа-яё]/gi, '');
    let reversedWord = wordNorm.split("").reverse().join("");
    if (wordNorm == reversedWord) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPalindrom('abba');
isPalindrom('Abba');
isPalindrom('Abbat');
isPalindrom('Искать такси')