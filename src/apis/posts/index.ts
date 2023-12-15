import { post } from "@/types";
import axios from "axios";
import { setPosts, setSinglePost } from "@/redux/slices/posts/slice";
import store from "@/redux/store";

const api='http://localhost:3030'

export function fetchPosts() {
    return axios
      .get(`${api}/posts`)
      .then((response:any) => {
        store.dispatch(setPosts(
         response.data
        ))
      })
      .catch(() => []);
  }
  export const addPost = async (post:post) => {
    try {
      const response = await axios.post(`${api}/posts`,post);
      if (response.status === 200) {
        return response.status
      }
    } catch (error: any) {
      return { error:'error' };
    }
  };
  export const deletPost = async (id:number) => {
    try {
      const response = await axios.delete(`${api}/posts/${id}`);
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return {  };
    }
  };
  export function fetchPostById(id:number) {
    return axios
      .get(`${api}/posts/${id}`)
      .then((response:any) => {
        store.dispatch(setSinglePost(
          response.data
         ))
      })
      .catch(() => []);
  }
  export const EditPost = async (id:number,post:post) => {
    try {
      const response = await axios.put(`${api}/posts/${id}`,post);
      if (response.status === 200) {
        return response.status
      }
    } catch (error: any) {
      return { error:'error' };
    }
  };
