import Link from 'next/link';
import Container from '../Container';
import Logo from '../Logo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from './index.module.css';
export default function NavBar() {
  return (
    <div className={styles.root}>
      {' '}
      <Container>
        <nav className={styles.navBar}>
          <Logo />
          <div>
            <Link href="/create" className={styles.addPost}>
              <AddCircleOutlineIcon className={styles.addIcon} />
              Create Post
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
}
