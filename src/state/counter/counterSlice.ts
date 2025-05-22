import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
    isPending: boolean
}

const initialState: CounterState = {
    value: 15,
    isPending: false
}

export const incrementAsync = createAsyncThunk("counter/incrementAsync", async (payload: number) => {
    return await new Promise(res => setTimeout(() => res("resolved"), 1000)).then(() => {
        return payload
    })
})

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
    },
    extraReducers: builder => {
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
            state.isPending = false
        })

        builder.addCase(incrementAsync.pending, (state) => {
            state.isPending = true
        })
    }
})

export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer