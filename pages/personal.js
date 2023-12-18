import Head from 'next/head';
import Image from 'next/image';
import { NavigationBar } from '../components/NavigationBar';
import styles from '../styles/Home.module.css';

export default function Personal() {
  return (
    <div className={styles.container}>
      <NavigationBar selected='personal'/>
      <Head>
        <title>Personal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        
        <Image src='/headshot_1.jpg' width='200' height='200' className={styles.rounded}></Image>
        
        <div className={styles.description}>
          In my free time I enjoy being at the beach, surfing, playing soccer and being with my dog. 
          <br/>
          I love to travel, especially to Central America and the Carribean.
          <br/>
          I'd love to live in Puerto Rico someday.
          <br/>
          I also like to code in my free time on projects like this. 
        </div>
      </div>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
      
    </div>
  );
}