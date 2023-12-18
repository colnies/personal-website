import Head from 'next/head';
import Image from 'next/image';
import { NavigationBar } from '../components/NavigationBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavigationBar selected='home'/>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>

      <main>
      <Image src='/desk.png' width='800' height='300' className={styles.image}></Image>
        <h1 className={styles.title}>
          <div className={`${styles.intro} ${styles.animate1}`}>
            <font size="+5">hello</font>
          </div>
          <div className={`${styles.intro} ${styles.animate2}`}>
            I'm Colin Nies,
          </div>
          <div className={`${styles.intro} ${styles.animate3}`}>
            a Rutgers CS graduate.
          </div>
          <div className={`${styles.intro} ${styles.animate4}`}>
            I'm a Lead Software Engineer @ <a href='https://lendswift.com/'>LendSwift</a>
          </div>
        </h1>

        
      </main>

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
