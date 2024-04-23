
let employees = [];

class Employee {
    constructor(fullName, imageUrl, department, level) {

        this.id = idGenerator();
        this.fullName = fullName;
        this.imageUrl = imageUrl;
        this.department = department;
        this.level = level;
        this.salary = this.calculateEmployeeNetSalary;
        employees.push(this);

    }
}



let formElement = document.getElementById('employeesForm');

formElement.addEventListener('submit', onsubmitListener);



function onsubmitListener(event){

    event.preventDefault();


    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.imageUrl.value;

    

    let newEmployee = new Employee(fullName, imageUrl, department, level);
    newEmployee.calculateEmployeeNetSalary();

    newEmployee.renderEmployeeData();

    saveEmployeesData(employees);


}


Employee.prototype.renderEmployeeData =  function(){

    let card = document.createElement('div');

    card.classList.add('card');

    let imageElement = document.createElement('img');
    let nameAndIdElement = document.createElement('h2');
    let departmentAndLevel = document.createElement('h2');
    let salary = document.createElement('h2');

    imageElement.src = this.imageUrl;
    nameAndIdElement.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
    departmentAndLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    salary.textContent = this.salary;

    card.appendChild(imageElement);
    card.appendChild(nameAndIdElement);
    card.appendChild(departmentAndLevel);
    card.appendChild(salary);

    let departmentSection = document.getElementById(this.department);

    if(departmentSection !== null){

        document.getElementById(this.department).appendChild(card);

    }else{
        
        let newDepartmentSection = document.createElement('section');
        newDepartmentSection.id = this.department;
        newDepartmentSection.classList.add('cardsContainer');
        let sectionName = document.createElement('h1');

        sectionName.textContent = this.department;
        sectionName.classList.add('sectionName');

        document.getElementById('container').appendChild(sectionName);
        newDepartmentSection.appendChild(card);
        document.getElementById('container').appendChild(newDepartmentSection);


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


function idGenerator(){

    return `${Math.floor(Math.random() * 900) + 100}${employees.length}`;

}

function renderEmployees() {

    employees.forEach((emp) => {
let fname = emp.fullName.split(' ')[0];

emp.calculateEmployeeNetSalary();

        emp.imageUrl = `assets/${fname}.jpg`;
      emp.renderEmployeeData();
    });
  }

  getEmployeesData();

  if(employees.length == 0){

     // Employees Object
  new Employee("Lana Ali", " ", "Finance", "Senior");
  new Employee("Tamara Ayoub", " ", "Marketing", "Senior");
  new Employee("Safi Walid", " ", "Administration", "Mid-Senior");
  new Employee("Omar Zaid", " ", "Development", "Senior");
  new Employee("Rana Saleh", " ", "Development", "Junior");
  new Employee("Hadi Ahmad", " ", "Finance", "Mid-Senior");

  saveEmployeesData(employees);
  renderEmployees();

  }
 

function saveEmployeesData(data){

    let StringifyedData = JSON.stringify(data);

    localStorage.setItem("employeesData", StringifyedData);

}



function getEmployeesData(){

    let data = localStorage.getItem("employeesData");
    let parsedData = JSON.parse(data);

    if(parsedData != null){

    
 //re-instantiation.
    for (let i = 0; i < parsedData.length; i++) {
        
    new Employee(parsedData[i].fullName, parsedData[i].imageUrl, parsedData[i].department, parsedData[i].level);

    employees[i].calculateEmployeeNetSalary();
    employees[i].renderEmployeeData();
    
}
    }
   

}



// Employee.prototype.RenderEmployeeNameAndSalary = function(){

//     return `${this.fullName} ${this.salary}`;

// }




// let tbody = document.getElementsByTagName('tbody')[0];

// for (let i = 0; i < employees.length; i++) {
    
//     let employee = employees[i];

//     tbody.innerHTML += 
//     `<tr> 
    
//     <td>${employee.id}</td>
//     <td>${employee.fullName}</td>
//     <td><img src="${employee.imageUrl}" alt="img" width=50%></td>
//     <td>${employee.department}</td>
//     <td>${employee.level}</td>
//     <td>${employee.calculateEmployeeNetSalary()}</td>
//     <td>${employee.salary}</td>
    
//     </tr>`;

    
// }

// addExistingEmployees();


// function addExistingEmployees(){


//     let em1 = new Employee("Ghazi Samer", "https://cdn-icons-png.flaticon.com/128/4140/4140048.png", "Administration", "Senior", 2);

//     em1.renderEmployeeData();



// }