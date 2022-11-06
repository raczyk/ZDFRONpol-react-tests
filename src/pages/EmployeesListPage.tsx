import React, { useEffect, useState } from "react";
import EmployeesListItem from "../components/EmployeeListItem";
import fakeFetch from "../fakeFetch";
import { EmployeeRawData } from "../employeesDataMock";
import CircleLoader from "../components/CircleLoader";
import PageTitle from "../components/PageTitle";

const EmployeesListPage = () => {
  const [employeesData, setEmployeesData] = useState<EmployeeRawData[]>([]);
  const dataIsLoading = employeesData.length === 0;

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const promisedValueFromFetch = await fakeFetch();
      setEmployeesData(promisedValueFromFetch);
    };
    fetchEmployeeData();
  }, []);

  const employeesListItems = employeesData.map((employee, index) => {
    const numberInTheList = index + 1;

    return (
      <EmployeesListItem
        key={index}
        employee={employee}
        itemNumber={numberInTheList}
      />
    );
  });

  return (
    <div>
      <PageTitle title="Emloyee List" />
      <CircleLoader show={dataIsLoading} />
      <ul style={{ listStyleType: "none" }}>{employeesListItems}</ul>
    </div>
  );
};
export default EmployeesListPage;
