
import { PayloadAction } from '@reduxjs/toolkit';
export const setPostsData = (state:any, action: PayloadAction) => {
  void (state.posts = action.payload);
};export const setPost = (state:any, action: PayloadAction) => {
  void (state.singlePost = action.payload);
};
