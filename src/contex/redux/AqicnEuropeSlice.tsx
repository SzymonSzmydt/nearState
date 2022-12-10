import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Aqicn, AqicnType } from '../types/Aqicn';
const initialState: AqicnType = {
  value: []
}
export const aqicnEuropeSlice = createSlice({
  name: 'europe',
  initialState,
  reducers: {
    getEuropeAqi: (state, action:PayloadAction<Array<Aqicn>>) => {
      state.value = action.payload
    },
  },
})
export const { getEuropeAqi } = aqicnEuropeSlice.actions
export default aqicnEuropeSlice.reducer