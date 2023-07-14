import Head from 'next/head'
import NewNav from '../components/NewNav/newNav';
import styles from '../styles/Home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewNav/>
      <main className={styles.main}>
        <section>
          <h1 className={styles.landingTitle}>Hello, I'm Makyia Bonner</h1>
          <h3 className={styles.landingSubtitle}>Front-end Developer</h3>
        </section>
      </main>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 121" preserveAspectRatio="none" style={{background:"white"}}>
        <path  d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill="#012b4b" fill-opacity="1"></path>
      </svg>
      <section className={styles.secondMain}>
        <div className={styles.aboutDiv}>
          <h2 className={styles.subtitle}>About Me</h2>
          <p className={styles.p}>
            As a front-end engineer, I have a strong passion for coding, gaming, anime, and sports. 
            My days are primarily spent programming, exploring new programming languages, and avidly following my favorite teams, the Braves, Falcons, and Hawks 
            or indulging in my love for anime. I'm currently watching on the <i>"Hell's Paradise"</i> – definitely a good watch. 
          </p>
        </div>
      </section>
      <section className={styles.thirdMain}>
        <div>
          <h2>Projects</h2>
        </div>
      </section>
      <section className={styles.fourthMain}>
        <div>
          <h2>Contact</h2>
        </div>
      </section>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{display: "block"}}>
        <path d="M1200 0L0 103.52 0 120 1200 120 1200 0z" class="shape-fill" fill="#012b4b"></path>
      </svg>
      <footer className={styles.footer}>
        <div>
          
        </div>
      </footer>
    </>
  )
}
