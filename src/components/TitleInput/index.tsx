import styles from './index.module.css';
type Props = {
  setTitle: (value: string) => void;
  postTitle: string;
};
export default function TitleInput({ setTitle, postTitle }: Props) {
  return (
    <div className={styles.inputRoot}>
      <input
        type="text"
        placeholder="Write Post Title..."
        className={styles.textInput}
        onChange={(e: any) => setTitle(e.target.value)}
        value={postTitle}
      />
    </div>
  );
}
