import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getByIdEmployee } from "../features/employees/employeeThunks";
import Button from "../Components/Button";
import { useNotification } from "../context/NotificationContext";

const ViewEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify } = useNotification();
  const { selected, loading } = useSelector((state) => state.employees);
  useEffect(() => {
    if (!selected || selected.id !== Number(id)) {
      dispatch(getByIdEmployee(id))
        .unwrap()
        .then(() => notify("Employee loaded", { type: "success" }))
        .catch((err) => notify(`Error: ${err.message}`, { type: "error" }));
    }
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!selected) return <p className="p-4">No employee found</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Employee Details
      </h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {selected.name}
        </p>
        <p>
          <strong>Email:</strong> {selected.email}
        </p>
        <p>
          <strong>Phone:</strong> {selected.phone}
        </p>
        <p>
          <strong>Address:</strong> {selected.address}
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </Button>
        <Button
          className="bg-gray-400 hover:bg-gray-500 text-white"
          onClick={() => navigate("/")}
        >
          Back to List
        </Button>
      </div>
    </div>
  );
};

export default ViewEmployee;
