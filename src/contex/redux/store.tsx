import { configureStore } from '@reduxjs/toolkit'
import airCityReducer from '../redux/AirCitySlice'
import aqicnCityReducer from '../redux/AqicnCity'

export const store = configureStore({
  reducer: {
    airCity: airCityReducer,
    aqicn: aqicnCityReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;