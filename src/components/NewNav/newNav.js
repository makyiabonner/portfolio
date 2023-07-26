import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../NewNav/newNav.module.scss';
import { useRef } from 'react';


const NewNav = React.forwardRef((props, ref) => {
    const homeRef = useRef(props.refHome);
    const aboutRef = useRef(props.refAbout);
    const projectRef = useRef(props.refWork);
    const contactRef = useRef(props.refContact)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav className={`${styles.nav} bg-primary`}>
                <h1 className={styles.title}>MB</h1>
                    <Button variant='primary' onClick={handleShow} className="d-sm-flex d-md-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} className="w-50 bg-primary">
                        <Offcanvas.Header className="variant-info" closeButton>
                        <Offcanvas.Title>
                            <h1 className={`${styles.title} text-info`}>MB</h1>
                        </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <ul className={`${styles.navList} d-block text-info`}>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>Home</li>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>About</li>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>Works</li>
                        </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                <div className={`${styles.div} d-none d-md-flex`}>
                  <ul className={styles.navList}>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>Home</li>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>About</li>
                            <li className={styles.navItem} onClick={() => props.homeRef.current.scrollIntoView({ behavior: 'smooth' })}>Works</li>
                  </ul>
                  <div className={styles.contactBtn}>
                    <p className={styles.contactText}>Contact</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                  </div>
                </div>
            </nav>
        </>
    )
})
export default NewNav