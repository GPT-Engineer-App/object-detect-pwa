import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DetectionState {
  detectedObjects: string[]
  totalDetections: number
}

const initialState: DetectionState = {
  detectedObjects: [],
  totalDetections: 0,
}

export const detectionSlice = createSlice({
  name: 'detection',
  initialState,
  reducers: {
    addDetectedObject: (state, action: PayloadAction<string>) => {
      state.detectedObjects.push(action.payload)
      state.totalDetections += 1
    },
    resetDetections: (state) => {
      state.detectedObjects = []
      state.totalDetections = 0
    },
  },
})

export const { addDetectedObject, resetDetections } = detectionSlice.actions

export default detectionSlice.reducer