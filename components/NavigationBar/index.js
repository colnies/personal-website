import Link from "next/link"
import styles from '../../styles/Nav.module.css';


export const NavigationBar = () => {
    return (
        <div className={styles.navbar}>

            <li  className={styles.nav}><a href='https://www.linkedin.com/in/colin-nies-564847120/'> LinkedIn</a></li>
            <li  className={styles.nav}><a href='/resume'>Resume</a></li>
            <li  className={styles.nav}><a href='/personal'>Personal</a></li>
            <li  className={styles.nav}><a href='/about'>About</a></li>
            <li href='/' className={styles.nav}><a href='/'>Home /</a></li>

        </div>
        
    );
}