import React from "react";
import { Task } from "../interfaces";

type Props = {
  item: Task;
};

export const TaskCard = (props: Props) => {
  const { item } = props;

  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg border border-gray-200"
      draggable
    >
      <h3 className="font-semibold text-gray-800">{item.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <p
        className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
          item.priority === "P0"
            ? "bg-red-100 text-red-600"
            : item.priority === "P1"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        Priority: {item.priority}
      </p>
    </div>
  );
};
