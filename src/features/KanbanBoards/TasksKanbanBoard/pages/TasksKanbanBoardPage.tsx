import React, { useEffect } from "react";

import { TasksKanbanBoard } from "../TasksKanbanBoard";
import { useTaskStore } from "../useTaskStore";
import { Loading } from "../../../../ui/Loading/Loading";

export const TasksKanbanBoardPage = () => {
  const tasksLoaded = useTaskStore((state) => state.tasksStatus === "loaded");
  const loadTasks = useTaskStore((state) => state.loadTasks);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  if (!tasksLoaded) {
    return <Loading />;
  }

  return <TasksKanbanBoard />;
};
