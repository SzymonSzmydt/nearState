import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PopUpType {
    index: number;
    chemical: boolean;
    legend: boolean;
    ranking: boolean;

}

const initialState: PopUpType = {
    index: 0,
    chemical: false,
    legend: false,
    ranking: false,
}

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
      popUpOff: (state) => {
        state.chemical = false,
        state.legend = false,
        state.ranking = false,
        state.index = 0
      },
      legendPopUp: (state, action:PayloadAction<boolean>) => {
        state.legend = action.payload
      },
      chemicalPopUp: (state, action:PayloadAction<boolean>) => {
        state.chemical = action.payload
      },
      rankingPopUp: (state, action:PayloadAction<boolean>) => {
        state.ranking = action.payload
      },
    indexPopUp: (state, action:PayloadAction<number>) => {
      state.index = action.payload
    },
  },
})

export const { 
    popUpOff, 
    legendPopUp, 
    chemicalPopUp,
    rankingPopUp, 
    indexPopUp 
} = popUpSlice.actions
export default popUpSlice.reducer