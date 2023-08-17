import React, { useState } from 'react';
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../NewNav/newNav.module.scss';


const NewNav = React.forwardRef((props) => {

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li>
                        <h5 className={styles.nav_list_item}>WORKS.</h5>
                    </li>
                    <li>
                        <h5 className={styles.nav_list_item}>CONTACT.</h5>
                    </li>
                    <li>
                        <svg width="56" height="42" viewBox="0 0 56 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_57" maskUnits="userSpaceOnUse" x="0" y="8" width="56" height="26">
                                <path d="M2.9581 8.54545H11.5589L16.282 22.9631H16.5803L23.6896 8.54545H32.2905L30.1776 34H23.4162L24.6342 19.2841H24.4354L17.5746 33.8011H13.4979L9.0483 19.1847H8.84943L7.60653 34H0.84517L2.9581 8.54545ZM33.4526 34L35.5655 8.54545H46.6025C48.5414 8.54545 50.1489 8.80646 51.4249 9.32848C52.7092 9.8505 53.6497 10.5879 54.2463 11.5408C54.8429 12.4937 55.0873 13.6165 54.9796 14.9091C54.8967 15.8371 54.615 16.6864 54.1344 17.457C53.6621 18.2276 53.0365 18.8739 52.2576 19.396C51.4788 19.918 50.588 20.2784 49.5854 20.4773L49.5605 20.7259C50.6543 20.759 51.6279 21.0324 52.4814 21.5462C53.3348 22.0516 53.9894 22.7518 54.4451 23.6467C54.9009 24.5415 55.079 25.5897 54.9796 26.7912C54.8636 28.1832 54.3996 29.422 53.5875 30.5075C52.7755 31.5929 51.6735 32.4464 50.2814 33.0678C48.8977 33.6893 47.2819 34 45.4341 34H33.4526ZM40.8354 28.4815H44.0669C45.2187 28.4815 46.1053 28.262 46.7267 27.8228C47.3482 27.3836 47.6879 26.7415 47.7459 25.8963C47.7956 25.2997 47.7003 24.7943 47.4601 24.38C47.228 23.9657 46.8676 23.6508 46.3787 23.4354C45.8981 23.2199 45.3016 23.1122 44.589 23.1122H41.258L40.8354 28.4815ZM41.6309 18.8366H44.4647C45.0695 18.8366 45.6123 18.7414 46.0929 18.5508C46.5734 18.3602 46.9587 18.0826 47.2488 17.718C47.5388 17.3535 47.7045 16.9143 47.7459 16.4006C47.8122 15.6051 47.5761 15.0002 47.0375 14.5859C46.5072 14.1716 45.8153 13.9645 44.9618 13.9645H42.0286L41.6309 18.8366Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_2_57)">
                                <rect x="-4" y="27" width="60" height="4" fill={props.theme || 'white'}/>
                                <rect x="-4" y="7" width="62" height="12" fill={props.theme || 'white'}/>
                                <rect x="-4" y="21" width="60" height="3" fill={props.theme || 'white'}/>
                                <rect x="-4" y="33" width="60" height="1" fill={props.theme || 'white'}/>
                            </g>
                        </svg>
                    </li>
                    <li>
                        <h5 className={styles.nav_list_item}>SKILLS.</h5>
                    </li>
                    <li>
                        <h5 className={styles.nav_list_item}>ABOUT ME.</h5>
                    </li>
                </ul>
            <div className='d-none'>
                <ul className={styles.list}>
                  <Link className={styles.listItem} target='_blank' href='https://github.com/makyiabonner'><li className='m-1'><span className={`${styles.listItem} fs-6`}>Github</span></li></Link>
                  <Link className={styles.listItem} target='_blank' href='https://www.linkedin.com/in/makyiabonner'><li className='m-1'><span className={`${styles.listItem} fs-6`}>LinkedIn</span></li></Link>
                  <Link className={styles.listItem} target='_blank' href='https://docs.google.com/document/d/1aiLKdgDUF3-jUGbIXilmyvPXX4_fxPgmV409h_utTKg/edit?usp=sharing'><li className='m-1'><span className={`${styles.listItem} fs-6`}>CV Resume</span></li></Link>
                </ul>
                <span className={`${styles.copyright} fs-6 text-info mb-5`}>@2023 Makyia Bonner. All rights reserved.</span>
            </div>
            </nav>
        </>
    )
})
export default NewNav