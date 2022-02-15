import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './words'
import paintReducer from './paint'
import todoReducer from './todo'

export const store = configureStore({
  reducer: {
words: wordsReducer,
paint: paintReducer,
todo:todoReducer
  },
})