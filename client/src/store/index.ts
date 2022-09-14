import { configureStore } from '@reduxjs/toolkit';
// Import reducers
import eventsReducer from './eventsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
