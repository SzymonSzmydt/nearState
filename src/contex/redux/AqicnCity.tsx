import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AqicnType {
  value?: string[];
}

const initialState: AqicnType = {
  value: []
  //   aqi: 0,
  //   city: {
  //       name: '',
  //   },
  //   dominentpol: '',
  //   forecast: {
  //       daily: {
  //           o3: {  
  //             avg: 0,
  //             day: '',
  //             max: 0,
  //             min: 0,
  //           },
  //           pm10: {
  //             avg: 0,
  //             day: '',
  //             max: 0,
  //             min: 0,
  //           },
  //           pm25: {
  //             avg: 0,
  //             day: '',
  //             max: 0,
  //             min: 0,
  //           }
  //       }
  //   },
  //   iaqi: {
  //       co: { v: 0 },
  //       no2: { v: 0 },
  //       o3: { v: 0 },
  //       pm10: { v: 0 },
  //       pm25: { v: 0 }
  //   },
  //   idx: 0,
  //   time: {
  //       s: ''
  //   },
  // },
}

export const aqicnCity = createSlice({
  name: 'aqicn',
  initialState,
  reducers: {
    getAqicn: (state, action:PayloadAction<string[]>) => {
      state.value = action.payload
    },
  },
})

export const { getAqicn } = aqicnCity.actions
export default aqicnCity.reducer