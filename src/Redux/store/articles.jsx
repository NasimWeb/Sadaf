import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'



export const getArticlesFromServer = createAsyncThunk('articles/getArticlesFromServer' , 
 async (url) => {
 return await fetch(url).then(res => res.json()).then(data => data)
 }
)

export const delteArticleAction = createAsyncThunk('articles/delteArticleAction' , 
 async (url) => {
 return await fetch(url,{
    method:'DELETE'
 }).then(res => res.json()).then(data => data)
 }
)



const articleSlice = createSlice({
    name:'articles',
    initialState:{
        data:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getArticlesFromServer.pending, (state,action) => {
               return {
                ...state,
                loading : true
               }
        })
        builder.addCase(getArticlesFromServer.fulfilled, (state,action) => {
            return {
                ...state,
                data : action.payload,
                loading: false
            }
        }),
        builder.addCase(getArticlesFromServer.rejected, (state,action) => {
            return  {
                ...state,
                error: action.error.message,
                loader: false
            }
        })
        builder.addCase(delteArticleAction.fulfilled, (state,action) => {
            return {
                ...state,
                data : state.data.filter(article => article._id !== action.payload.id)
            }
        })
    }
})



export default articleSlice.reducer