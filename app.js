
class Employee {
    constructor(id, fullName, imageUrl, department, level, salary) {

        this.id = id;
        this.fullName = fullName;
        this.imageUrl = imageUrl;
        this.department = department;
        this.level = level;
        this.salary = salary;

    }
}

Employee.prototype.calculateEmployeeNetSalary = function () {

    let minSalary, maxSalary;
    const taxPercent = 7.5;

    switch (this.level) {


        case "Junior":
            minSalary = 500;
            maxSalary = 1000;
            break;
        case "Mid-Senior":
            minSalary = 1000;
            maxSalary = 1500;
            break;
        case "Senior":
            minSalary = 1500;
            maxSalary = 2000;
            break;
    }

    this.salary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);

    let taxtAmount = (taxPercent * this.salary) / 100;

    return this.salary - taxtAmount; // this is the net salary

}


Employee.prototype.RenderEmployeeNameAndSalary = function(){

    return `${this.fullName} ${this.salary}`;

}


const employees = [
    new Employee(1000, "Ghazi Samer", "https://cdn-icons-png.flaticon.com/128/4140/4140048.png", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "https://cdn-icons-png.flaticon.com/128/4140/4140047.png", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub", "https://cdn-icons-png.flaticon.com/128/4140/4140051.png", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "https://cdn-icons-png.flaticon.com/128/4139/4139981.png", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "https://cdn-icons-png.flaticon.com/128/3001/3001764.png", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "https://cdn-icons-png.flaticon.com/128/4140/4140047.png", "Development", "Junior"),
    new Employee(1006, "Hadi Ahmad", "https://cdn-icons-png.flaticon.com/128/4202/4202831.png", "Finance", "Mid-Senior")
];


let tbody = document.getElementsByTagName('tbody')[0];

for (let i = 0; i < employees.length; i++) {
    
    let employee = employees[i];

    tbody.innerHTML += 
    `<tr> 
    
    <td>${employee.id}</td>
    <td>${employee.fullName}</td>
    <td><img src="${employee.imageUrl}" alt="img" width=50%></td>
    <td>${employee.department}</td>
    <td>${employee.level}</td>
    <td>${employee.calculateEmployeeNetSalary()}</td>
    <td>${employee.salary}</td>
    
    </tr>`;

    
}