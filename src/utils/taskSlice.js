import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { taskTitle, newStatus, newPriority } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.title === taskTitle);
      if (taskToUpdate) {
        taskToUpdate.status = newStatus;
        taskToUpdate.priority = newPriority;
      }
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.title === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
