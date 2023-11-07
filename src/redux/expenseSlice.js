import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expense: [
    {
      id: 'c1',
      date: new Date(2023, 2, 12),
      description: 'Fridge',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2023, 2, 6),
      description: 'MacBook',
      amount: 1254.72,
    },
    {
      id: 'c3',
      date: new Date(2023, 3, 1),
      description: 'Jeans',
      amount: 49.99,
    },
  ],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expense.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
