/* Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
*/

const findOnlyUniqueUsers = (arr) => {
    let onlyUniqueUsers = [];
    for (let key of arr) {
        keyString = JSON.stringify(key);
        let index = onlyUniqueUsers.indexOf(keyString);
        if (index == -1) {
            onlyUniqueUsers.push(keyString);
            }
    }

    const finalArr = [];
    for (let key of onlyUniqueUsers) {
        key = JSON.parse(key);
        finalArr.push(key);
    }
    console.log(finalArr);
    console.log(`Было ${arr.length} записей, стало ${finalArr.length} записей`);
}


const fs = require('fs');

fs.readFile("task2.json", 'utf-8', (err, data) => {
    if (err) throw err;
    else {
        let arr = JSON.parse(data);
    findOnlyUniqueUsers(arr);
    }});




