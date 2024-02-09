import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk('courses/getCoursesFromServer', 
 async (url) => {
   return (
     await fetch(url).then(res => res.json()).then(data => data)
   )
 }
)

export const deletCourseAcyion = createAsyncThunk('courses/deletCourseAcyion', 
 async (url) => {
   return (
     await fetch(url,{
      method:'DELETE'
     }).then(res => res.json()).then(data => data)
   )
 }
)



const coursesSlice = createSlice({
    name: "courses",
    initialState:{
      data : [],
      loading : false,
      error : null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getCoursesFromServer.pending, (state,action) => {
          return {
            ...state,
            loading : true
          }
       }),
       builder.addCase(getCoursesFromServer.fulfilled, (state,action) => {
        return {
          ...state,
          data : action.payload,
          loading : false
        }
       }),
       builder.addCase(getCoursesFromServer.rejected, (state,action) => {
        return {
          ...state,
          error : action.error.message,
          loading : false
        }
       })
       builder.addCase(deletCourseAcyion.fulfilled, (state,action) => {
        return {
          ...state,
          data : state.data.filter(course => course._id !== action.payload.id)
        }
       })
    }
})



export default coursesSlice.reducer