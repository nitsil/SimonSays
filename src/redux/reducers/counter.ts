import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    clear: state => {
      state.value = 0;
    },
  },
});

// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
