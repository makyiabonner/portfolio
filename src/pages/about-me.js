import Head from 'next/head'
import NewNav from '../components/NewNav/newNav';
import styles from '../styles/AboutMe.module.scss';


export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.page}>
        <div className={styles.main_div}>
          <div className={styles.title_div}>
            <span className={styles.span}>SPECIAL THINGS</span>
            <h1 className={styles.section_title}>ABOUT ME.</h1>
          </div>
          <div className={styles.left_content}>
              <p className={styles.p}>
                  As a front-end engineer, I have a strong passion for coding, gaming, anime, and sports. 
                  My days are primarily spent programming, exploring new programming languages, and avidly following my favorite teams, the Braves, Falcons, and Hawks 
                  or indulging in my love for anime. I&apos;m currently watching on the <i>&quot;Hell&apos;s Paradise&quot;</i> – definitely a good watch. 
              </p>
          </div>
          <div className={styles.titles_div}>
            <div className={styles.titles}>UX DESIGNER</div>
            <div className={styles.titles}>FRONT-END ENGINEER</div>
          </div>
        </div>
        
      </section>
    </>
  )
}