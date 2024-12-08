import React from "react";
import { Route, Routes } from "react-router";
import { TasksKanbanBoardPage } from "./features/KanbanBoards/TasksKanbanBoard/pages/TasksKanbanBoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksKanbanBoardPage />} />
    </Routes>
  );
}

export default App;
