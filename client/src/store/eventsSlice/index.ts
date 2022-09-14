import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

// API
import { eventsAPI } from '../../api';
// Types
import { Event } from '../../interfaces/event';

type InitialState = {
  loading: boolean;
  events: Event[];
  error: string | null;
};

const initialState: InitialState = {
  loading: false,
  events: [],
  error: null,
};

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (data: Event, { rejectWithValue }) => {
    try {
      const response = await eventsAPI.post('/', data);
      return response.data.data;
    } catch (err) {
      console.log(err);
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data.error);
    }
  },
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEvent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || 'Error while adding an event';
    });
    builder.addCase(
      addEvent.fulfilled,
      (state, action: PayloadAction<Event>) => {
        state.loading = false;
        state.events.push(action.payload);
      },
    );
  },
});

export default eventsSlice.reducer;
