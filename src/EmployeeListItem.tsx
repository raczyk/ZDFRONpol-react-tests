import React from "react";
const employeeItemStyle = {
  border: '2px solid yellow',
  margin: '5px',
  textAlign: 'center' as const,
  padding: '10px',
};

const salaryStyle = {
  color: 'blue',
};

const positionStyle = {
  border: '3px dashed yellow',
  padding: '5px',
  margin: '5px'
};

interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    salary: number;
    position: string;
}

interface EmployeeListItemProps {
    employee: Employee;
    number: number;
}

const EmployeesListItem = (props: EmployeeListItemProps) => {

    return (
      <li style={employeeItemStyle}>
        <div>({props.number})</div>
        <div>{props.employee.firstName} {props.employee.lastName}</div>
        <div>{props.employee.dateOfBirth}</div>
        <div style={salaryStyle}>{props.employee.salary}</div>
        <div style={positionStyle}>{props.employee.position}</div>
      </li>
    )
}


export default EmployeesListItem;