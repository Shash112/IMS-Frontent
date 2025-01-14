import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsAPI, addProductAPI, updateProductAPI, deleteProductAPI } from '../../api/products';


export const fetchProducts = createAsyncThunk('products/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await fetchProductsAPI();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const addProduct = createAsyncThunk('products/add', async (product, { rejectWithValue }) => {
    try {
        const response = await addProductAPI(product);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const updateProduct = createAsyncThunk('products/update', async ({id, product}, { rejectWithValue }) => {
    try {
        const response = await updateProductAPI(id, product);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

export const deleteProduct = createAsyncThunk('products/delete', async (id, { rejectWithValue }) => {
    try {
        await deleteProductAPI(id);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        addStatus: 'idle',
        updateStatus: 'idle',
        deleteStatus: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(addProduct.pending, (state) => {
                state.addStatus = 'loading';
                state.error = null;
              })
              .addCase(addProduct.fulfilled, (state, action) => {
                state.addStatus = 'succeeded';
                state.items.push(action.payload);
              })
              .addCase(addProduct.rejected, (state, action) => {
                state.addStatus = 'failed';
                state.error = action.payload;
              })
              .addCase(updateProduct.pending, (state) => {
                state.updateStatus = 'loading';
                state.error = null;
              })
              .addCase(updateProduct.fulfilled, (state, action) => {
                state.updateStatus = 'succeeded';
                const index = state.items.findIndex((product) => product.id === action.payload.id);
                if (index !== -1) {
                  state.items[index] = action.payload;
                }
              })
              .addCase(updateProduct.rejected, (state, action) => {
                state.updateStatus = 'failed';
                state.error = action.payload;
              })
              .addCase(deleteProduct.pending, (state) => {
                state.deleteStatus = 'loading';
                state.error = null;
              })
              .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteStatus = 'succeeded';
                state.items = state.items.filter((product) => product.id !== action.payload); 
              })
              .addCase(deleteProduct.rejected, (state, action) => {
                state.deleteStatus = 'failed';
                state.error = action.payload;
              });
    },
});

export default productSlice.reducer;