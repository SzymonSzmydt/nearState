import { configureStore } from '@reduxjs/toolkit'
import airCityReducer from '../redux/AirCitySlice'
import aqicnCityReducer from '../redux/AqicnCitySlice'
import popUpSliceReducer from './PopUpLogic';
export const store = configureStore({
  reducer: {
    airCity: airCityReducer,
    aqicn: aqicnCityReducer,
    popUp: popUpSliceReducer
  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;