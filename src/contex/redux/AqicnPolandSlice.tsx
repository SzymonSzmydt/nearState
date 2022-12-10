import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Aqicn, AqicnType } from '../types/Aqicn';
const initialState: AqicnType = {
  value: [],
  isLoaded: false,
  citys: ["Katowice", "Poznań", "Warszawa", "Gdansk", "Kraków", "Łódź", "Szczecin", "Wrocław"]
}
export const aqicnPoland = createSlice({
  name: 'poland',
  initialState,
  reducers: {
    getPolandAqi: (state, action:PayloadAction<Array<Aqicn>>) => {
      state.value = action.payload
    },
    getPlLoaded: (state, action:PayloadAction<boolean>) => {
        state.isLoaded = action.payload
    },
  },
})
export const { getPolandAqi, getPlLoaded } = aqicnPoland.actions
export default aqicnPoland.reducer