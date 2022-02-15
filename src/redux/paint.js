import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const paintSlice = createSlice({
  name: 'paint',
  initialState,
  reducers: {
    offInfo: (state) => {
    
      state.value =false 
    },
  
  
  },
})

// Action creators are generated for each case reducer function
export const { offInfo} = paintSlice.actions

export default paintSlice.reducer