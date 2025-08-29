import React, { useState } from "react";
import Form from "../Components/Form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employees/employeeThunks";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useNotification } from "../context/NotificationContext";
const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify } = useNotification();
  const fields = [
    { type: "text", name: "name", placeholder: "Enter Name" },
    { type: "text", name: "address", placeholder: "Enter Address" },
    { type: "email", name: "email", placeholder: "Enter Email" },
    { type: "text", name: "phone", placeholder: "Enter Phone" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee)).unwrap();
    notify("Employee created successfully!", { type: "success" });
    console.log("Form Submitted!", employee);
    // navigate("/");
  };
  //   console.log(employee);
  return (
    <>
      <div>
        <Form
          title="Add Employee"
          fields={fields}
          values={employee}
          onChange={handleChange}
          onSubmit={handleSubmit}
          buttonText="Create Employee"
          header={
            <>
              <Button
                className="w-20"
                onClick={() => {
                  navigate("/");
                }}
              >
                List
              </Button>
            </>
          }
        />
      </div>
    </>
  );
};

export default CreateEmployee;
