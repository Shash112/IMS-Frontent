import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBranchesAPI, getBranchesAPI } from "../../api/branches";

const brancSlice = createSlice({
    name: "branch",
    initialState: {
        items: [],
        status: 'idle',
        addStatus: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBranches.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getBranches.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(getBranches.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(createBranch.pending, (state) => {
                state.addStatus = 'loading';
                state.error = null;
            })
            .addCase(createBranch.fulfilled, (state, action) => {
                state.addStatus = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(createBranch.rejected, (state, action) => {
                state.addStatus = 'failed';
                state.error = action.payload;
            });
    },
});

export const getBranches = createAsyncThunk('stores/getStores', async (_, { rejectWithValue }) => {
    try {
        const response = await getBranchesAPI();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const createBranch = createAsyncThunk('stores/createStores', async (store, { rejectWithValue }) => {
    try {
        const response = await createBranchesAPI(store);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export default brancSlice.reducer;