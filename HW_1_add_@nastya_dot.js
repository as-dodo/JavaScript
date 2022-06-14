/*
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */
const checkAge = function(age) {
    const age_2 = 18;
    const age_3 = 60;
    if (age < age_2) {
        console.log(`You don’t have access cause your age is ${age}. It's less than ${age_2}`);
     } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!");
     } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
     } else {
        console.log("Technical work");
     }}
// checkAge(17);
// checkAge(18);
// checkAge(61);
/*
2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/
const checkAge1 = function(age) {
    let age_typeof = typeof(age);
    if (age_typeof !== 'number') {
        console.log("Error! Please enter a number!");
    } else {
        checkAge(age);
     }}


// checkAge1('wrong');
// checkAge1(17);
// checkAge1(18);
// checkAge1(61);

/*3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number*/
const checkAge2 = function(age) {
    if (isNaN(age) == true) {
        console.log("Error! Please enter a number!");
    } else if (isFinite(age) == true) {
        age_1 = Number(age);
        const age_2 = 18;
        const age_3 = 60;
        if (age_1 < age_2) {
         console.log(`You don’t have access cause your age is ${age}. It's less than ${age_2}`);
        } else if (age_1 >= age_2 && age < age_3) {
         console.log("Welcome!");
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel");
        } else {
         console.log("Technical work");
     }}}
//checkAge2('2');

