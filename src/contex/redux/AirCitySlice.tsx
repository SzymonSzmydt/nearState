import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AirVisualApi } from '../types/AirVisualApi';

interface AirCityType {
  data?: AirVisualApi;
}

const initialState: AirCityType = {
  data: {
    city: "",
    state: "",
    country: "",
    location: {
        coordinates: [],
    },
    current: {
        pollution: {
            aqicn: 0,
            aqius: 0,
            mainus: "",
            ts: "",
        },
        weather: {
            hu: 0,
            ic: "01n",
            pr: 0,
            tp: 0,
            wd: 0,
            ws: 0,
        },
    },
  }
}

export const airCitySlice = createSlice({
  name: 'airCity',
  initialState,
  reducers: {
    getAirCityData: (state, action: PayloadAction<AirVisualApi>) => {
      state.data = action.payload
    },
  },
})

export const { getAirCityData } = airCitySlice.actions
export default airCitySlice.reducer