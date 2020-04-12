$(document).ready(readyNow);

let employeeList = [];
let totalMonthlySalary = 0; 

function readyNow() {
   // When the submit button is clicked, run this function
    $('#submitButton').on('click', createEmployeeInfo); 
   //When something on the employee table is clicked, run this function 
    $('#employeeTable').delegate('.deleteButton','click' , deleteEmployee );
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
    //add employee info to DOM
    let buttonDelete = ('<button class="deleteButton">Delete</button>');
    let tr1 = $(` <tr class="trDynamic"> <td> ${employeeToAdd.firstName}</td> <td>${employeeToAdd.lastName} </td> <td> <div class="idNumbers"> ${employeeToAdd.id} </div> </td> <td> ${employeeToAdd.title} </td> <td> ${employeeToAdd.salary} </td>  <td> ${buttonDelete} </td> </tr>`);
    $("table tbody").append(tr1);
    console.log(tr1);   

 } //end createEmployeeInfo



function deleteEmployee() {
   //delete employee info in DOM
    console.log('in deleteEmployee'); 
    $(this).closest('.trDynamic').remove();
   
}


console.log('javascript working!');

//IGNORE CODE BELOW. Tracking code that eventually was not used 
//  function addToDom() {
//      //create delete button
//     let buttonDelete = ('<button class="deleteButton">Delete</button>');
//     let tr1 = $(` <tr> <td> ${employeeToAdd.firstName}</td> <td>${employeeToAdd.lastName} </td> <td> ${employeeToAdd.id} </td> <td> ${employeeToAdd.title} </td> <td> ${employeeToAdd.salary} </td>  <td> ${buttonDelete} </td> </tr>`);
//     $("table tbody").append(tr1);
//     console.log(tr1); 
//     // let el = $('.trDynamic');
//      // el.empty(); 
//     //loop through employeeList array to print to DOM
//     //  for(i=0; i<employeeList.length; i++){
//     //     let tr1 = $(` <tr class="trDynamic"> <td> ${employeeList[i].firstName}</td> <td>${employeeList[i].lastName} </td> <td> ${employeeList[i].id} </td> <td> ${employeeList[i].title} </td> <td> ${employeeList[i].salary} </td>  <td> ${buttonDelete} </td> </tr>`);
//     //      $("table tbody").append(tr1);
//     //  }

//  } //end addToDom

 //append employee info to DOM and add delete button
    // let buttonDelete = ('<button id="deleteButton">Delete</button>');
    // let tr1 = $(` <tr> <td> ${employeeToAdd.firstName}</td> <td>${employeeToAdd.lastName} </td> <td> ${employeeToAdd.id} </td> <td> ${employeeToAdd.title} </td> <td> ${employeeToAdd.salary} </td>  <td> ${buttonDelete} </td> </tr>`);
    // $("table tbody").append(tr1);
    // console.log(tr1);    

