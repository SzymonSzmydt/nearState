import { configureStore } from '@reduxjs/toolkit'
import airCityReducer from '../redux/AirCitySlice'
import katowiceReducer from '../redux/AirCitySlice'

export const store = configureStore({
  reducer: {
    airCity: airCityReducer,
    katowiceCity: katowiceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;