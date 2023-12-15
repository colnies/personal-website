import Head from 'next/head';
import Image from 'next/image';
import { NavigationBar } from '../components/NavigationBar';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <NavigationBar />
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        I'm a software engineer.
        <br/>
        I attended Rutgers University-New Brunswick from 2015 to 2019.
        <br/>
        I graduated with a Bachelor of Science in Computer Science.
        <br/>
        I first worked for WellSky, a healthcare software company.
        <br/>
        I was a back-end developer specializing in the Electronic Medical Record section.
        <br/>
        I later joined LendSwift, a startup in the personal lending space.
        <br/>
        I was a lead front-end engineer tasked with re-imagining their user experience.
        <br/>
        I also have certifications in Google Analytics, Shopify and Product Management.
        <br/>
        I plan on getting my Masters in Product Design.
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