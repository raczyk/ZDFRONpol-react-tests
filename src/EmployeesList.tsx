import React, { useEffect, useState } from 'react';
import EmployeesListItem from './EmployeeListItem';
import OrangeLink from './OrangeLink';
import fakeFetch from './fakeFetch';
import { EmployeeRawData } from './employeesDataMock';

const EmployeesList = () => {
    // const employeesData: EmployeeRawData[] = [];
    const [employeesData, setEmployeesData] = useState<EmployeeRawData[]>([]);
    const dataIsLoading = employeesData.length === 0;

    useEffect(() => {
        const fetchEmployeeData = async () => {
            const promisedValueFromFetch = await fakeFetch();
            setEmployeesData(promisedValueFromFetch)
        }
        fetchEmployeeData();
    }, [])

    const employeesListItems = employeesData.map((employee, index) => {
    const numberInTheList = index + 1;

    return <EmployeesListItem key={index} employee={employee} itemNumber={numberInTheList}/>
  });

  const loader = dataIsLoading ? <div className="loader"></div> : null;

  return (
    <div>
        <OrangeLink to="/">Go back to Home</OrangeLink>
        <h1>Emloyee List</h1>
        <pre>{loader}</pre>
        <ul>
            {employeesListItems}
        </ul>
    </div>
  );
};
export default EmployeesList;