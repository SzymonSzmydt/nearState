import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Aqicn } from '../types/Aqicn';

type AqicnType = {
  value: Array<Aqicn>
}
const initialState: AqicnType = {
  value: []
}
export const aqicnCity = createSlice({
  name: 'aqicn',
  initialState,
  reducers: {
    getAqicn: (state, action:PayloadAction<Array<Aqicn>>) => {
      state.value = action.payload
    },
  },
})
export const { getAqicn } = aqicnCity.actions
export default aqicnCity.reducer