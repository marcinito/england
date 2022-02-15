import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {word:"omit",translate:"omijać,pomijać,przeoczyć",id:0,important:false},
    {word:"omit",translate:"omijać,pomijać,przeoczyć",id:1,important:false},
]

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add: (state,action) => {
        const newElement={
            word:action.payload.word,
            translate:action.payload.translate,
            important:action.payload.important,

            id:action.payload.id,
        }
        state.push(newElement)
    
    },
    sub: (state,action) => {
      return state=state.filter(el=>el.id!==action.payload.id)
    },
    incrementByAmount: (state, action) => {
      state=state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, sub, incrementByAmount } = wordsSlice.actions

export default wordsSlice.reducer