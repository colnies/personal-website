import Link from "next/link"
import styles from '../../styles/Nav.module.css';


export const NavigationBar = () => {
    return (
        <div>
            <Link href='/about' className={styles.nav}>About</Link>
            <Link href='/resume' className={styles.nav}>Resume</Link>
            <Link href='/personal' className={styles.nav}>Personal</Link>
        </div>

    );
}