import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Aqicn, AqicnType } from '../types/Aqicn';

const initialState: AqicnType = {
  value: []
}
export const aqicnPoland = createSlice({
  name: 'poland',
  initialState,
  reducers: {
    getPolandAqi: (state, action:PayloadAction<Array<Aqicn>>) => {
      state.value = action.payload
    },
  },
})
export const { getPolandAqi } = aqicnPoland.actions
export default aqicnPoland.reducer