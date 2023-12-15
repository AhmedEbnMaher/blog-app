'use client';
import styles from './index.module.css';
import { useSelector } from 'react-redux';
export default function PostSection() {
  const Post = useSelector((state: any) => state.postsSlice.singlePost);

  return (
    <div className={styles.homeContent}>
      <div>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <h5>{Post.title}</h5>
          </div>
          <div className={styles.postContent}>
            <p>{Post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
