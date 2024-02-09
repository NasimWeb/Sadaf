import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const getCategoriesFromServer = createAsyncThunk('categories/getCategoriesFromServer',
 async (url) => {
    return fetch(url).then(res => res.json()).then(data => data)
 }
)



const categoriesSlice = createSlice({
    name:'categories',
    initialState: {
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesFromServer.pending, (state,action) => {
            state.loading = true
        })
        builder.addCase(getCategoriesFromServer.fulfilled, (state, action) => {
            return {
                data : action.payload,
                loading: false
            }
        })
        builder.addCase(getCategoriesFromServer.rejected, (state,action) => {
            return {
                loading : false,
                error : action.error.message
            }
        })
    }
})



export default categoriesSlice.reducer