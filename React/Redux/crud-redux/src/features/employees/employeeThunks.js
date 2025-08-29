import { createAsyncThunk } from "@reduxjs/toolkit";
import { employeeApi } from "../../api/employeeApi";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async () => {
    const res = await employeeApi.getAll();
    console.log("Reponse : ", res);
    return res;
  }
);

export const addEmployee = createAsyncThunk(
  "employees/add",
  async (employee) => {
    const res = await employeeApi.create(employee);
    return res.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/update",
  async (employee) => {
    const res = await employeeApi.update(employee);
    return res.data;
  }
);
export const getByIdEmployee = createAsyncThunk(
  "employees/getById",
  async (employee) => {
    const res = await employeeApi.getById(employee);
    console.log("res by Id ", res);
    return res.data;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/delete",
  async (id) => {
    await employeeApi.remove(id);
    return id;
  }
);
