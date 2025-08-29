import { apiCall } from "../Utils/apiCall";
import { API_BASE } from "../Utils/enums/apiBase";
const BASE = API_BASE.EMPLOYEE;

export const employeeApi = {
  getAll: () =>
    apiCall({
      url: "/",
      method: "GET",
      base: BASE,
    }),

  getById: (id) =>
    apiCall({
      url: `/${id}`,
      method: "GET",
      base: BASE,
    }),

  create: (employee) =>
    apiCall({
      url: "/",
      method: "POST",
      body: employee,
      base: BASE,
    }),

  update: (employee) =>
    apiCall({
      url: `/${employee.id}`,
      method: "PUT",
      body: employee,
      base: BASE,
    }),

  remove: (id) =>
    apiCall({
      url: `/${id}`,
      method: "DELETE",
      base: BASE,
    }),
};
