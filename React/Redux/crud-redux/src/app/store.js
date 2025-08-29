import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../features/employees/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
});
