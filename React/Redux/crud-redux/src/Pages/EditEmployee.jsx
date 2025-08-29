import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getByIdEmployee,
  updateEmployee,
} from "../features/employees/employeeThunks";
import { useNotification } from "../context/NotificationContext";
import Button from "../Components/Button";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const fields = [
    { type: "text", name: "name", placeholder: "Enter Name" },
    { type: "text", name: "address", placeholder: "Enter Address" },
    { type: "email", name: "email", placeholder: "Enter Email" },
    { type: "text", name: "phone", placeholder: "Enter Phone" },
  ];

  useEffect(() => {
    dispatch(getByIdEmployee(id))
      .unwrap()
      .then((emp) => setEmployee(emp))
      .catch((err) =>
        notify(`Error fetching employee: ${err.message}`, { type: "error" })
      );
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(employee))
      .unwrap()
      .then(() => {
        notify("Employee updated successfully!", { type: "success" });
        navigate("/");
      })
      .catch((err) =>
        notify(`Error updating employee: ${err.message}`, { type: "error" })
      );
  };

  return (
    <Form
      title="Edit Employee"
      fields={fields}
      values={employee}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText="Update Employee"
      header={
        <Button
          className="bg-gray-400 hover:bg-gray-500 text-white"
          onClick={() => navigate("/")}
        >
          Back to List
        </Button>
      }
    />
  );
};

export default EditEmployee;
