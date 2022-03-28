import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface CounterState {
  value: number;
  disabledButtons: boolean;
  restart: boolean;
}

const initialState: CounterState = {
  value: 0,
  disabledButtons: false,
  restart: false,
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
    setRestart: (state, {payload}: PayloadAction<boolean>) => {
      state.restart = payload;
    },
  },
});

export const {increment, clear, setDisabledButtons, setRestart} = counterSlice.actions;

export default counterSlice.reducer;
