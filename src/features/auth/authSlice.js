import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI, forgotPasswordAPI, checkAuthAPI } from '../../api/auth';

export const authCheck = createAsyncThunk('auth/check', async (_, { rejectWithValue }) => {
    try {
        const response = await checkAuthAPI();
        console.log(response);
        console.log(response.data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await loginAPI(credentials);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
    try {
        const response = await signupAPI(userData);
        console.log("PASS");
        return response.data;
    } catch (error) {
        console.error("ERROR");
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, { rejectWithValue }) => {
    try {
        const response = await forgotPasswordAPI(email);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.response);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        status: 'idle',
        error: null,
    },

    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        resetStatus: (state) => {
            state.status = 'idle';
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(authCheck.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(authCheck.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.userData;
                state.isAuthenticated = true;
            })
            .addCase(authCheck.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.userData;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signup.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.message;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout, resetStatus } = authSlice.actions;
export default authSlice.reducer;