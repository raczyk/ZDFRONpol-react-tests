import employeesData, { EmployeeRawData } from "./employeesDataMock";

const fakeFetch = () => {
    console.log('---- executing fake fetch -----')
    return new Promise<EmployeeRawData[]>((resolve) => {
        setTimeout(() => {resolve(employeesData)}, 3000)
    });
}

export default fakeFetch;