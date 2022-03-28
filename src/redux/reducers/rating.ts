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
  list: [],
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    addResult: (state: RatingState, {payload}: PayloadAction<IResult>) => {
      let listCopy = [...state.list];
      listCopy = [...listCopy, payload];

      listCopy.sort((a: IResult, b: IResult) => {
        if (a.value > b.value) return -1;
        if (a.value < b.value) return 1;
        return 0;
      });

      listCopy.length > 10 && listCopy.pop();

      state.list = [...listCopy];
    },
  },
});

export const {addResult} = ratingSlice.actions;

export default ratingSlice.reducer;
