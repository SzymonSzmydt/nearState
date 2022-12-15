import { configureStore } from '@reduxjs/toolkit'
import airCityReducer from '../redux/AirCitySlice'
import aqicnPolandReducer from '../redux/AqicnPolandSlice'
import aqicnEuropeReducer from '../redux/AqicnEuropeSlice'
import popupSliceReducer from './PopupLogic';
import searchSliceReducer from './SearchSlice';
export const store = configureStore({
  reducer: {
    airCity: airCityReducer,
    poland: aqicnPolandReducer,
    europe: aqicnEuropeReducer,
    popUp: popupSliceReducer,
    searchResult: searchSliceReducer
  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;