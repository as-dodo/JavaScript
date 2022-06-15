/* 4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке */
const checkAge2 = function(age) {
    if (isNaN(age) == true || age === null || age.length === 0 || !age.trim()) {
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


let age = prompt("Введите возраст")
checkAge2(age)
