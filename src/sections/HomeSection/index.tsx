'use client';
import styles from './index.module.css';
import CustomizedMenus from '@/components/DropDown';
import { deletPost, fetchPosts } from '@/apis/posts';
import { post } from '@/types';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function HomeSection() {
  const Posts = useSelector((state: any) => state.postsSlice.posts);
  const deletePostData = useCallback((id: number) => {
    deletPost(id);
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.homeContent}>
      <div>
        {Posts &&
          Posts.map((post: post) => (
            <div key={post.id} className={styles.post}>
              <div className={styles.postHeader}>
                <h5>{post.title}</h5>
                <CustomizedMenus id={post.id} deletePostData={deletePostData} />
              </div>
              <div className={styles.postContent}>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
