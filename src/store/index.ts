import { configureStore } from '@reduxjs/toolkit'
import detectionReducer from './slices/detectionSlice'

export const store = configureStore({
  reducer: {
    detection: detectionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch