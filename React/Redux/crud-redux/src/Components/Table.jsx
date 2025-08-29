import React from "react";

const Table = ({ columns, data = [] }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border border-gray-200 bg-white">
        <thead className="bg-purple-600 text-white">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-semibold"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((row, rowIndex) => {
              if (!row) return null;
              return (
                <tr
                  key={row.id ?? rowIndex}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-4 py-2 text-sm">
                      {col.render
                        ? col.render(row)
                        : row?.[col.accessor] ?? "-"}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
