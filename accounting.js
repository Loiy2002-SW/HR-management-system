
let departments = [];

class Department {
    constructor(name) {

        this.name = name;
        this.noOfEmployees = 0;
        this.totalSalary = 0;
        this.average = 0;

    }
}


Department.prototype.addEmployeeNumbers = function () {
    this.noOfEmployees += 1;
}
Department.prototype.addEmployeeSalary = function (employeeSalary) {
    this.totalSalary += employeeSalary;
}


getData();

let tbody = document.getElementById('tableBody');

let totalNumberOfEmployees = 0;
let totalSalaryOfEmployees = 0;
let averageSalary = 0;

for (let i = 0; i < departments.length; i++) {


    let department = departments[i];

    tbody.innerHTML +=
        `<tr> 

    <td>${department.name}</td>
    <td>${department.noOfEmployees}</td>
    <td>${department.totalSalary}</td>
    <td>${department.average}</td>

    </tr>`;

    totalNumberOfEmployees += department.noOfEmployees;
    totalSalaryOfEmployees += department.totalSalary;
    averageSalary += department.average;



}


tbody.innerHTML +=
    `<tfoot>

    <tr id="footer"> 

    <td> Total </td>
    <td>${totalNumberOfEmployees}</td>
    <td>${totalSalaryOfEmployees.toFixed(2)}</td>
    <td>${averageSalary.toFixed(2)}</td>

    </tr>

</tfoot>
`;




function getData() {

    let data = localStorage.getItem("employeesData");
    //console.log(data);
    let parsedData = JSON.parse(data);




    //re-instantiation.
    for (let i = 0; i < parsedData.length; i++) {


        //console.log("department names: ", departments.map(dep => dep.name));

        if (!departments.map(dep => dep.name).includes(parsedData[i].department)) {

            console.log("department is not added, adding it and increase the number of employees and salary, etc");

            let newDepartment = new Department(parsedData[i].department);
            departments.push(newDepartment);
            newDepartment.addEmployeeNumbers();
            newDepartment.addEmployeeSalary(parsedData[i].salary);


        } else {
            console.log("department is already added, just increasing the number of employees and salary, etc");

            // Find the department object with the matching name
            let existingDepartment = departments.find(dep => dep.name === parsedData[i].department);

            // Increment employee count and add salary to the existing department
            existingDepartment.addEmployeeNumbers();
            existingDepartment.addEmployeeSalary(parsedData[i].salary);

        }


    }

    departments.forEach(department => {
        if (department.noOfEmployees > 0) {


            department.average = department.totalSalary / department.noOfEmployees;
            console.log(department.average);
        } else {

            department.average = 0; // Handle division by zero case
        }
    });



}

