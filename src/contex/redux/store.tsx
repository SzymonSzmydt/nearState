import { configureStore } from '@reduxjs/toolkit'
import airCityreducer from '../redux/AirCitySlice'


export const store = configureStore({
  reducer: {
    airCity: airCityreducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;