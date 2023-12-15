import styles from './index.module.css';
type Props = {
  setContent: (value: string) => void;
  postContent: string;
};
export default function TextInput({ setContent, postContent }: Props) {
  return (
    <div className={styles.areaRoot}>
      <textarea
        placeholder="Write Post Content..."
        className={styles.textArea}
        value={postContent}
        onChange={(e: any) => setContent(e.target.value)}
      />
    </div>
  );
}
