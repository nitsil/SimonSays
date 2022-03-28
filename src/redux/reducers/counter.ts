import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface CounterState {
  value: number;
  disabledButtons: boolean;
}

const initialState: CounterState = {
  value: 0,
  disabledButtons: false,
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
    setDisabledButtons: (state, {payload}: PayloadAction<boolean>) => {
      state.disabledButtons = payload;
    },
  },
});

export const {increment, clear, setDisabledButtons} = counterSlice.actions;

export default counterSlice.reducer;
