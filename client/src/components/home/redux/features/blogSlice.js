import { createSlice } from "@reduxjs/toolkit";


export const blogSlice = createSlice({
    name: 'blog',
    initialState:{
      
    },
    reducers: {
      specificBlog: (state, action) => {
        state.specificItem = state.blogs.find(blog => blog.id === action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { specificBlog } = blogSlice.actions;
  
  export default blogSlice.reducer;