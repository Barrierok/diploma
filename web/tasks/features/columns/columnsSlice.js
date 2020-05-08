import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../service';

const initialState = {
  fetchingState: 'none',
  data: [],
  error: null,
};

const columns = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn(state, action) {
      const { data } = action.payload;
      state.data.push(data);
    },
    removeNullColumns(state) {
      state.data = state.data.filter((i) => i !== null);
    },
  },
});

const { actions, reducer } = columns;

export const { addColumn, removeNullColumns } = actions;

export const columnsSelectors = {
  columns: (state) => state.columns.data,
};

export const postColumn = createAsyncThunk(
  'columns/postColumn',
  async (attributes = {}) => {
    const response = await service.postColumn(attributes);
    return response.data;
  },
);

export default reducer;