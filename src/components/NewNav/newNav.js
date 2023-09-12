import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../NewNav/newNav.module.scss';

export default function NewNav(props){
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    };

    const NavItem = ({ href, text }) => (
        <Link style={{textDecoration:'none'}} href={href} passHref>
            <li>
                <h5 className={styles.nav_list_item} style={{color:props.navTextColor}}>{text}</h5>
            </li>
        </Link>
    );
    /*ALL PROPS:
        logoTheme - logo color
        mobileBg - mobile nav bg color
        navTextColor - nav text color
    */
    return (
        <>
            <div className={styles.nav}>
                <ul className={styles.list}>
                    <li className={`${styles.nav_item} ${styles.active}`}>
                        <h1 className={styles.item}>HOME</h1>
                        <img
                            className={styles.mobile_logo}
                            width='23'
                            height='20'
                            src='./icons/home.webp'
                        />
                    </li>
                    <li className={`${styles.nav_item} ${styles.inactive}`}>
                        <h1 className={styles.item}>WORKS</h1>
                        <img
                            className={styles.mobile_logo}
                            width='23'
                            height='20'
                            src='./icons/works.webp'
                        />
                    </li>
                    <li className={`${styles.nav_item} ${styles.inactive}`}>
                        <h1 className={styles.item}>SKILLS</h1>
                        <img
                            className={styles.mobile_logo}
                            width='23'
                            height='20'
                            src='./icons/skills.webp'
                        />
                    </li>
                    <li className={`${styles.nav_item} ${styles.inactive}`}>
                        <h1 className={styles.item}>ABOUT ME</h1>
                        <img
                            className={styles.mobile_logo}
                            width='23'
                            height='20'
                            src='./icons/about-me.webp'
                        />
                    </li>
                    <li className={`${styles.nav_item} ${styles.inactive}`}>
                        <h1 className={styles.item}>CONTACT</h1>
                        <img
                            className={styles.mobile_logo}
                            width='23'
                            height='20'
                            src='./icons/contact.webp'
                        />
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
