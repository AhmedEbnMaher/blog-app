
import { createSlice } from '@reduxjs/toolkit';
import { setPost, setPostsData } from './function';


const initialState = {
posts:[],
singlePost:{}
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
   setPosts:setPostsData,
   setSinglePost:setPost,
  },
});

 export const {setPosts,setSinglePost} = postsSlice.actions;

export default postsSlice.reducer;
