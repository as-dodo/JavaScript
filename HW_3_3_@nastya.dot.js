const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

/*
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

// // Решение
const showAllInfo = () => {
    for (let enterprise of enterprises) {
        let enterpriseName = enterprise['name'];
        let departments = enterprise['departments'];
        let allEmployees = 0;

        departments.forEach(function (department) {
            allEmployees += department['employees_count'];
        })
        if (allEmployees != 0) {
            console.log(`${enterpriseName} (${allEmployees} сотрудников)`);
        } else if (allEmployees == 0) {
            console.log(`${enterpriseName} (нет сотрудников)`);
        }

        departments.forEach(function (department) {
            let departmentName = department['name'];
            let employeesCount = department['employees_count'];
            if (employeesCount != 0) {
                console.log(`- ${departmentName} (${employeesCount} сотрудников)`);
            } else if (employeesCount == 0) {
                console.log(`- ${departmentName}(нет сотрудников)`);
            }
        })
    }
}
// showAllInfo()
// // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// // Пример:
// // getEnterpriseName(4) // Предприятие 1
// // getEnterpriseName("Отдел маркетинга") // Предприятие 2

// //Решение

const findEnterprise = (key) => {
    isDepartmentExist = false;
    enterprises.forEach((enterprise) => {
        let department = enterprise.departments.find(item => item.id == key || item.name == key);
        if (department) {
            isDepartmentExist = true;
            console.log(enterprise.name);
        }
    })
    if (!isDepartmentExist) {
        console.log('Такого отдела не существует');
    }
}

// findEnterprise("Отдел охраны труда");
// findEnterprise(3);
// findEnterprise(1);

/* 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")
*/

//Решение
const AddEnterprise = (newName) => {
    let newEnterprise = {};
    let id = { id: 11 };
    let name = { name: newName };
    let departments = { departments: [] }
    Object.assign(newEnterprise, id, name, departments)

    enterprises.push(newEnterprise);
    console.log(enterprises);
}
// AddEnterprise('Название нового предприятия');

/* 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела") */

//Решение
const addDepartment = (idEnterprise, newDepartment) => {
    const findEnterprise = enterprises.find(item => item.id == idEnterprise);

    if (findEnterprise) {
        let lastId = findEnterprise.departments[findEnterprise.departments.length - 1]['id'];
        let newDep = {};
        let id = { id: lastId + 1 };
        let nameDep = { name: newDepartment };
        let employeesCount = { employees_count: 0 };

        Object.assign(newDep, id, nameDep, employeesCount);

        findEnterprise.departments.push(newDep);
        console.log(findEnterprise)
    } else {
        console.log('Такого предприятия не существует');
    }
}

// addDepartment(1, "Название нового отдела");
// addDepartment(2, "Название нового отдела");

/* 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия") */

//Решение 

const editEnterprise = (idEnterprise, newName) => {
    const findEnterprise = enterprises.find(item => item.id == idEnterprise);
    if (findEnterprise) {
        findEnterprise['name'] = newName;
        console.log(enterprises);
    } else {
        console.log('Такого предприятия не существует');
    }
}

// editEnterprise (1, "Новое название предприятия");

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")*/

//Решение

const editDepartment = (idDepartment, newName) => {
    let isDepartmentExist = false;

    enterprises.forEach((enterprise) => {
        const findDepartment = enterprise.departments.find(item => item.id == idDepartment);
        if (findDepartment) {
            isDepartmentExist = true
            findDepartment['name'] = newName;
            console.log(enterprise.departments);
        }
    })
    if (!isDepartmentExist) {
        console.log('Такого отдела не существует');
    }
}

// editDepartment(1, "Новое название отдела");


/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)*/

//Решение

const deleteEnterprise = (idEnterprise) => {
    const findEnterprise = enterprises.find(item => item.id == idEnterprise);
    if (findEnterprise) {
        enterprises.splice(enterprises.indexOf(findEnterprise), 1)
        console.log('Предприятие успешно удалено');
        console.log(enterprises);
    } else {
        console.log('Такого предприятия не существует');
    }
}

// deleteEnterprise(1); 

/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3) */

//Решение
const deleteDepartment = (idDepartment) => {
    let isDepartmentExist = false;

    enterprises.forEach((enterprise) => {
        const findDepartment = enterprise.departments.find(item => item.id == idDepartment);

        if (findDepartment && findDepartment.employees_count == 0) {
            isDepartmentExist = true;
            enterprise.departments.splice(enterprise.departments.indexOf(findDepartment), 1);
            console.log('Отдел успешно удален');
            console.log(enterprise);
        } else if (findDepartment && findDepartment.employees_count != 0) {
            isDepartmentExist = true;
            console.log('Вы не можете удалить отдел: в нем работают люди! Имейте совесть.');
        }
    })
    if (!isDepartmentExist) {
        console.log('Такого отдела не существует');
    }
}

// deleteDepartment(1);

/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3) */

const moveEmployees = (idDepartmentOut, idDepartmentIn) => {
    let isDepartmentsExist = false;

    enterprises.forEach((enterprise) => {
        const findDepartmentOut = enterprise.departments.find(item => item.id == idDepartmentOut);
        const findDepartmentIn = enterprise.departments.find(item => item.id == idDepartmentIn);

        if (findDepartmentOut && findDepartmentIn) {
            isDepartmentsExist = true;
            const movedEmpl = findDepartmentOut.employees_count;
            findDepartmentOut.employees_count = 0;
            findDepartmentIn.employees_count += movedEmpl;
            console.log(`Перенос сотрудников из отдела "${findDepartmentOut.name}" в отдел "${findDepartmentIn.name}" завершен!`);
            console.log(findDepartmentOut, findDepartmentIn);
        }
    })
    if (!isDepartmentsExist) {
        console.log('Что-то пошло не так. Проверьте ID отделов');
    }
}

// moveEmployees(2, 3);