import React from 'react';
import employeesData from './employeesDataMock';
import EmployeesListItem from './EmployeeListItem';

const EmployeesList = () => {
  const employeesListItems = employeesData.map((employee, index) => {
    const numberInTheList = index + 1;

    return (
        <div>
            <EmployeesListItem employee={employee} number={numberInTheList}/>
        </div>
    )

    // return (
    //   <li style={employeeItemStyle}>
    //     {el.firstName} {el.lastName} <br />
    //     {el.dateOfBirth} <br />
    //     <span style={salaryStyle}>{el.salary}</span> <br />
    //     <span style={positionStyle}>{el.position}</span>
    //   </li>
    // );
  });
  return (
    <div>
      Hello employees
      <ul>
        {employeesListItems}
      </ul>
    </div>
  );
};
export default EmployeesList;
// return (
  //   <li key={`element-${el.id}`}>
  //     <a href={`/employees-list/employees-item/${el.id}`}>
  //       {el.id}. {el.firstName} {el.lastName}
  //     </a>
  //   </li>
  // );
// function allEmployees() {
//   let employessList:[] = []
//   for (let i = 0; i < employees.length; i++) {
//     const singlEmployee = getEmployee({id: i})
//     employessList.push(singlEmployee)
//   }
//