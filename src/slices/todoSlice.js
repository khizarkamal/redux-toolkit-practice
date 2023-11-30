import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    initialState: [],
    name: 'todos',
    reducers: {
        addTodo: (state, action) => {
            console.log(state, action);
            const todo = action.payload;
            state.push({
                id: Date.now(),
                todoText: todo,
                isCompleted: false
            });
            console.log("Added Todo---", state);
        },
        removeTodo: (state, action) => {
            console.log(state, action);
            console.log("Bofore");
            state.filter((todo) => {
                console.log("Remove todo--", todo);
                return todo.id !== action.payload;
            });
            console.log("After");
        },
        editTodo: (state, action) => {
            console.log("PAyload---", action.payload);
            const result = state.find((todo) => {
                return todo.id === action.payload;
            });
            console.log("Result", result);
            console.log("Edit Todo ", state, action);
        },

    }
});

console.log("Counter Slice------", todoSlice);
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;