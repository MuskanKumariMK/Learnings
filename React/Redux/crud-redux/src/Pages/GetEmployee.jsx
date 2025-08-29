import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  fetchEmployees,
  getByIdEmployee,
  updateEmployee,
} from "../features/employees/employeeThunks";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";
const GetEmployee = () => {
  const { list: employees, loading } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const { notify } = useNotification();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchEmployees())
      .unwrap()
      .then(() =>
        notify("Employees fetched successfully!", { type: "success" })
      )
      .catch((err) =>
        notify(`Error fetching employees: ${err.message}`, { type: "error" })
      );
  }, [dispatch, notify]);

  const handleDelete = (id) => {
    try {
      console.log(id);
      dispatch(deleteEmployee(id));
      notify("Delete Employee successfully!", { type: "success" });
    } catch (error) {
      notify(`Delete Employee Error! ${error.message} `, {
        type: "error",
      });
    }
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };
  // console.log(employees);
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Address", accessor: "address" },
    {
      header: "Action",
      render: (row) => (
        <div className="flex gap-2">
          <Button
            className="bg-purple-600 w-100 sm:p-3 hover:bg-purple-800"
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </Button>
          <Button
            className="bg-green-500 w-100 sm:p-3 hover:bg-green-600"
            onClick={() => handleView(row.id)}
          >
            View
          </Button>
          <Button
            className="bg-red-500 w-100 sm:p-3 hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Employee List</h2>
      <div>
        <Button
          className="w-20"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </Button>
      </div>
      <Table columns={columns} data={employees} />
    </div>
  );
};

export default GetEmployee;
