import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface PopupType {
    chemical: boolean;
    legend: boolean;
    ranking: boolean;
    index: number;
    indexR: number;
    region: "poland" | "europe";
}
const initialState: PopupType = {
    chemical: false,
    legend: false,
    ranking: false,
    index: 0,
    indexR: 0,
    region: "poland"
}
export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
      popupOff: (state) => {
        state.chemical = false,
        state.legend = false,
        state.ranking = false,
        state.index = 0
      },
      legendPopup: (state, action:PayloadAction<boolean>) => {
        state.legend = action.payload
      },
      chemicalPopup: (state, action:PayloadAction<boolean>) => {
        state.chemical = action.payload
      },
      rankingPopup: (state, action:PayloadAction<boolean>) => {
        state.ranking = action.payload
      },
      indexPopup: (state, action:PayloadAction<number>) => {
        state.index = action.payload
      },
      indexRank: (state, action:PayloadAction<number>) => {
        state.indexR = action.payload
      },
      region: (state, action:PayloadAction<"poland" | "europe">) => {
        state.region = action.payload
      }
  },
})
export const { 
    popupOff, 
    legendPopup, 
    chemicalPopup,
    rankingPopup, 
    indexPopup,
    indexRank,
    region
} = popupSlice.actions
export default popupSlice.reducer