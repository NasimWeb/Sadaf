import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersFromServer = createAsyncThunk('users/getUsersFromServer', 
async (url) => {
    return (
        await fetch(url).then((response) => response.json()).then(data => data)
    )
})



export const deletUserAcion = createAsyncThunk('users/deletUserAction', 
 async (url) => {
    return (
        await fetch(url,{
            method: 'DELETE'
        }).then(res=> res.json()).then(data => data)
    )
 }
)



const users = createSlice({
    name : 'users',
    initialState : {
        data: [],
        loading: false, // Initial loading state is false
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUsersFromServer.pending, (state,action) => {
            return {
                ...state,
                loading : true
            }
        })
       builder.addCase(getUsersFromServer.fulfilled, (state,action) => {
        return {
            ...state,
            data: action.payload,
            loading:false,
        }
       })
       builder.addCase(getUsersFromServer.rejected, (state,action) => {
        return{
            ...state,
            error: action.error.message,
        }
       })
       builder.addCase(deletUserAcion.fulfilled, (state,action) => {
        return {
            ...state,
            data: state.data.filter(user => user._id !== action.payload.id)
        }
       })
    }
})



export default users.reducer