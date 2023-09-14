import React from 'react';
import Image from 'next/image';
import styles from '../NewNav/newNav.module.scss';
import { Link } from 'react-scroll';
export default function NewNav(){
    return (
        <>
            <div className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <button className={`${styles.nav_item}`}>
                            <Link activeClass={styles.active} spy to='home'>
                                <h1 className={styles.item}>HOME</h1>
                                <img
                                    className={styles.mobile_logo}
                                    width='23'
                                    height='20'
                                    src='./icons/home.webp'
                                />
                            </Link>
                        </button>

                    </li>
                    <li>
                        <button className={`${styles.nav_item}`}>
                            <Link activeClass={styles.active} spy to='works'>
                                <h1 className={styles.item}>WORKS</h1>
                                <img
                                    className={styles.mobile_logo}
                                    width='23'
                                    height='20'
                                    src='./icons/works.webp'
                                />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.nav_item}`}>
                            <Link activeClass={styles.active} spy to='skills'>
                                <h1 className={styles.item}>SKILLS</h1>
                                <img
                                    className={styles.mobile_logo}
                                    width='23'
                                    height='20'
                                    src='./icons/skills.webp'
                                />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.nav_item}`}>
                            <Link activeClass={styles.active} spy to='aboutMe'>
                                <h1 className={styles.item}>ABOUT ME</h1>
                                <img
                                    className={styles.mobile_logo}
                                    width='23'
                                    height='20'
                                    src='./icons/about-me.webp'
                                />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={`${styles.nav_item}`}>
                            <Link activeClass={styles.active} spy to='contact'>
                                <h1 className={styles.item}>CONTACT</h1>
                                <img
                                    className={styles.mobile_logo}
                                    width='23'
                                    height='20'
                                    src='./icons/contact.webp'
                                />
                            </Link>
                        </button>
                    </li>
                </ul>
                <ul className={styles.nav_icon_list}>
                  <li className={styles.nav_icon}>
                    <Link 
                        className={styles.icon} 
                        target='_blank' 
                        href='https://github.com/makyiabonner'>
                        <Image 
                            width='18' 
                            height='18'
                            alt='github link' 
                            src='./icons/github.svg' 
                        />
                    </Link>
                  </li>
                  <li className={styles.nav_icon}>
                    <Link 
                        className={styles.icon} 
                        target='_blank' 
                        href='https://www.linkedin.com/in/makyiabonner'>
                        <Image 
                            width='16' 
                            height='16'
                            alt='linkedin link' 
                            src='./icons/linkedIn.svg' 
                        />
                    </Link>
                  </li>
                  <li className={styles.nav_icon}>
                    <Link 
                        className={styles.icon} 
                        target='_blank' 
                        href='https://docs.google.com/document/d/1aiLKdgDUF3-jUGbIXilmyvPXX4_fxPgmV409h_utTKg/edit?usp=sharing'>
                        <Image 
                            width='18' 
                            height='18'
                            style={{color:'red'}} 
                            alt='resume link' 
                            src='./icons/resume.svg' 
                        />
                    </Link>
                  </li>
                </ul>
            </div>
        </>
    );
};
