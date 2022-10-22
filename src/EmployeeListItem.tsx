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
    itemNumber: number;
}

const EmployeesListItem = ({ employee, itemNumber }: EmployeeListItemProps) => {

    return (
      <li style={employeeItemStyle}>
        <div>({itemNumber})</div>
        <div>{employee.firstName} {employee.lastName}</div>
        <div>{employee.dateOfBirth}</div>
        <div style={salaryStyle}>{employee.salary}</div>
        <div style={positionStyle}>{employee.position}</div>
      </li>
    )
}

export default EmployeesListItem;