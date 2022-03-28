import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface IResult {
  name: string;
  value: number;
}

interface RatingState {
  list: Array<IResult>;
}

const initialState: RatingState = {
  list: [
    {
      name: 'StartStartStartStartStartStartStartStartStartStartStartStartStartStartStartStartStartStart',
      value: 5,
    },
    {name: 'Mid', value: 3},
    {name: 'end', value: 1},
  ],
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    addResult: ({list}: RatingState, {payload}: PayloadAction<IResult>) => {
      let listCopy = [...list];
      listCopy = [...listCopy, payload];

      listCopy.sort((a: IResult, b: IResult) => {
        if (a.value > b.value) return -1;
        if (a.value < b.value) return 1;
        return 0;
      });

      listCopy.length > 10 && listCopy.pop();

      list = [...listCopy];
    },
  },
});

export const {addResult} = ratingSlice.actions;

export default ratingSlice.reducer;
