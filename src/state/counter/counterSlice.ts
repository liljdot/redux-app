import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 15
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer