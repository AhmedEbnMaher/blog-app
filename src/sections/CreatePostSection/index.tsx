'use client';
import TitleInput from '@/components/TitleInput';
import styles from './index.module.css';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { Button } from '@mui/material';
import { addPost } from '@/apis/posts';
import { useRouter } from 'next/navigation';
export default function CreatePostSection() {
  const router = useRouter();
  const [postContent, setContent] = useState('');
  const [postTitle, setTitle] = useState('');
  const Post = {
    title: postTitle,
    content: postContent,
    id: 0,
  };
  const valied = postContent.length > 0 && postTitle.length > 0;

  return (
    <div className={styles.createPostContent}>
      <div className={styles.postInput}>
        <div className={styles.text}>
          <span>Create New Post: </span>
        </div>
        <TitleInput setTitle={setTitle} postTitle={postTitle} />
        <TextInput setContent={setContent} postContent={postContent} />
        <div className={styles.createSection}>
          <Button
            className={styles.createPost}
            onClick={() => {
              addPost(Post);
              router.push('/');
            }}
            disabled={valied ? false : true}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
