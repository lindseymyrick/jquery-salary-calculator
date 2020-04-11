$(document).ready(readyNow);

let employeeList = [];
let totalMonthlySalary = 0; 

function readyNow() {
   //hey Jquery, when the submit button is clicked, run this function
    $('#submitButton').on('click', createEmployeeInfo); 
    $('.deleteButton').on('click', deleteEmployee);
}

function createEmployeeInfo() {
    console.log('in createEmployeeInfo');
    //get employee info and place info into an object
    let employeeToAdd = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput'). val(),
        id: $('#idInput'). val(),
        title: $('#titleInput'). val(),
        salary: $('#salaryInput'). val()
    } //end employeeToAdd
    //add employe to add to employeeList array
    console.log('employee to add:', employeeToAdd);
    employeeList.push(employeeToAdd);
    console.log('employee list:', employeeList);
    $('.employeeInput').val(''); 
    //compute monthly salary and add to total monthly salary
    let monthlySalaryEmployee = Math.round(employeeToAdd.salary / 12);
    console.log('monthly salary:', monthlySalaryEmployee);
    totalMonthlySalary += monthlySalaryEmployee;
    $('#monthlyNumber').text(totalMonthlySalary);
    console.log('total monthly salary:', totalMonthlySalary);
    //change background color to red if total monthly salary is greater than 20,000
    if(totalMonthlySalary > 20000) {
        $('#totalMonthlySalary').css("background-color", "red");
    }

    //append employee info to DOM and add delete button
let tr1 = $(`<tr> <td> ${employeeToAdd.firstName}</td> <td>${employeeToAdd.lastName} </td> <td> ${employeeToAdd.id} </td> <td> ${employeeToAdd.title} </td> <td> ${employeeToAdd.salary} </td> <td> <button class= "deleteButton" type="button"> Delete </button> </td> </tr> `);
    $("table tbody").append(tr1);

 } //end createEmployeeInfo

function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).remove(); 
}

    

    



console.log('javascript working!');

