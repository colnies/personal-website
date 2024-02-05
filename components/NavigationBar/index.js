import Link from "next/link"
import styles from '../../styles/Nav.module.css';


export const NavigationBar = ({selected}) => {
    
    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li  className={selected === 'home' ? styles.active : styles.nav}><a href='/'>Home /</a></li>
                <li  className={selected === 'about' ? styles.active : styles.nav}><a href='/about'>About</a></li>
                <li  className={selected === 'personal' ? styles.active : styles.nav}><a href='/personal'>Personal</a></li>
                <li  className={selected === 'resume' ? styles.active : styles.nav}><a href='/resume'>Resume</a></li>
                <li  className={styles.nav}><a href='https://www.linkedin.com/in/colin-nies-564847120/'> LinkedIn</a></li>
            
            
            
            
            </ul>
        </div>
        
    );
}