

export default function NewNav(){

    return (
        <>
            <nav className={styles.nav}>
                <h1 className={styles.title}>MB</h1>
                <div className={`${styles.div} d-none d-md-flex`}>
                  <ul className={styles.navList}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Works</li>
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
}