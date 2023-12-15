import Link from 'next/link';
import styles from './index.module.css';
export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.logoLink}>
        BLOGS-APP
      </Link>
    </div>
  );
}
