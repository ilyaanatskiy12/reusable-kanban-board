import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { InferZustandParams } from "../../utils/zustand";
import { mockTasks } from "./mock";
import { Task } from "./interfaces";

const emptyLoadingStatus = "empty" as LoadingStatus;
type LoadingStatus = "empty" | "loading" | "loaded" | "error";

export const useTaskStore = create(
  immer((...args: any) => {
    const [set] = args as InferZustandParams<typeof useTaskStore>;

    return {
      tasks: [] as Task[],
      tasksStatus: emptyLoadingStatus,

      loadTasks: async () => {
        try {
          set({ tasksStatus: "loading" });
          const tasks = mockTasks;
          set({
            tasksStatus: "loaded",
            tasks,
          });
        } catch (error) {
          set({ tasksStatus: "error" });
        }
      },

      updateTask: (updatedTask: Task) => {
        set((state) => ({
          tasks: state.tasks.map((task: Task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        }));
      },
    };
  })
);
