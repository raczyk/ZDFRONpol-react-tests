import React from "react";
import { useParams } from "react-router-dom";


const EmployeePage = () => {
    let { id } = useParams();

    return (
        <>
            <h1>Employee Page</h1>
            <div>id={id}</div>
        </>
    )
}

export default EmployeePage;