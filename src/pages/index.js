import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <h1 className={styles.title}>MB</h1>
        <div className={styles.div}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Works</li>
          </ul>
          <div className={styles.contactBtn}>
            <p>Contact</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <section>
          <h1 className={styles.landingTitle}>Hello, I'm Makyia Bonner</h1>
          <h3 className={styles.landingSubtitle}>Front-end Developer</h3>
        </section>
      </main>
      <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
        <path  d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill="#012b4b" fill-opacity="1"></path>
      </svg>
      <section className={styles.secondMain}>
        <div>
          <h2>About Me</h2>
        </div>
      </section>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{display: "block"}}>
        <path d="M1200 0L0 103.52 0 120 1200 120 1200 0z" class="shape-fill" fill="#012b4b"></path>
      </svg>
      <section className={styles.thirdMain}>
        <div>
          <h2>Projects</h2>
        </div>
      </section>
      <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path  d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" fill="#012b4b" fill-opacity="1"></path>
      </svg>
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
