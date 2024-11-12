import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase/credentials';
import { ref, push, get, remove, set } from 'firebase/database';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const snapshot = await get(ref(db, 'todos'));
  const todos = snapshot.exists() ? snapshot.val() : {};
  return Object.keys(todos).map((key) => ({
    id: key,
    ...todos[key],
  }));
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const newTodoRef = push(ref(db, 'todos'));
  const todo = { text, completed: false };
  await set(newTodoRef, todo);
  return { id: newTodoRef.key, ...todo };
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await remove(ref(db, `todos/${id}`));
  return id;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, completed }) => {
  const todoRef = ref(db, `todos/${id}`);
  const snapshot = await get(todoRef);
  if (snapshot.exists()) {
    const todo = snapshot.val();
    await set(todoRef, { ...todo, completed });
  }
  return { id, completed };
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const todo = state.items.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      });
  },
});

export default todosSlice.reducer;
