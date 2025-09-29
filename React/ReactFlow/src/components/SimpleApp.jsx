import { Position, ReactFlow, useNodesState } from "@xyflow/react";
import React from "react";
const initialData = [
  { id: "1", data: { label: "Input Node" }, position: { x: 250, y: 5 } },

  { id: "2", data: { label: "Output Node" }, position: { x: 100, y: 100 } },
];
const SimpleApp = () => {
  const [nodes, serNodes, onNodeChange] = useNodesState();
  return (
    <div>
      <ReactFlow></ReactFlow>
    </div>
  );
};

export default SimpleApp;
