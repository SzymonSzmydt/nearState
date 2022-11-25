import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

interface PopUpType {
    chemical: boolean;
    legend: boolean;
    ranking: boolean;
    index: number;
    indexR: number;
}

const initialState: PopUpType = {
    chemical: false,
    legend: false,
    ranking: false,
    index: 0,
    indexR: 0
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
    indexRank: (state, action:PayloadAction<number>) => {
      state.indexR = action.payload
    },
  },
})

export const { 
    popUpOff, 
    legendPopUp, 
    chemicalPopUp,
    rankingPopUp, 
    indexPopUp,
    indexRank
} = popUpSlice.actions
export default popUpSlice.reducer