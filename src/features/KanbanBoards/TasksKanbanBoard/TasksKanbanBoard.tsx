import React from "react";
import { useTaskStore } from "./useTaskStore";
import { KanbanBoard } from "../../KanbanBoard/KanbanBoard";
import { TaskCard } from "./components/TaskCard";
import { Task } from "./interfaces";

const availableTaskColumns = ["open", "planned", "in-progress", "done"];

export const TasksKanbanBoard = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);

  if (!tasks) return null;

  return (
    <KanbanBoard<Task>
      columns={availableTaskColumns}
      items={tasks}
      itemField="status"
      itemComponent={TaskCard}
      onItemUpdate={updateTask}
    />
  );
};
