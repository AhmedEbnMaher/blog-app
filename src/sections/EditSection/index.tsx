'use client';
import TitleInput from '@/components/TitleInput';
import styles from './index.module.css';
import TextInput from '@/components/TextInput';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { EditPost } from '@/apis/posts';
type Props = {
  id: number;
};
export default function EditPostSection({ id }: Props) {
  const router = useRouter();
  const Post = useSelector((state: any) => state.postsSlice.singlePost);
  const [postContent, setContent] = useState('');
  const [postTitle, setTitle] = useState('');
  const valied = postContent?.length > 0 && postTitle?.length > 0;
  const edtedPost = {
    title: postTitle,
    content: postContent,
    id: id,
  };
  useEffect(() => {
    setContent(Post.content);
    setTitle(Post.title);
  }, [Post]);
  return (
    <div className={styles.createPostContent}>
      <div className={styles.postInput}>
        <div className={styles.text}>
          <span> Edit Post: </span>
        </div>
        <TitleInput setTitle={setTitle} postTitle={postTitle} />
        <TextInput setContent={setContent} postContent={postContent} />
        <div className={styles.createSection}>
          <Button
            className={styles.createPost}
            onClick={() => {
              EditPost(id, edtedPost);
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
