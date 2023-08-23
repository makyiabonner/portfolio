import styles from './project.module.scss';
import Link from 'next/link';

export default function ProjectViewer(props){
    const {isOpen, onClose, skillsUsed} = props
    const skills = [
        {id:'react', pic:'./icons/logo-react.svg', alt:'react'},
        {id:'html', pic:'./icons/logo-html.svg', alt:'html'},
        {id:'css', pic:'./icons/logo-css.svg', alt:'css'},
        {id:'sass', pic:'./icons/logo-sass.svg', alt:'sass'},
        {id:'javascript', pic:'./icons/logo-js.svg', alt:'javascript'},
        {id:'bootstrap', pic:'./icons/logo-bootstrap.svg', alt:'bootstrap'},
        {id:'typescript', pic:'./icons/logo-ts.svg', alt:'typescript'},
        {id:'nextjs', pic:'./icons/logo-nextjs.svg', alt:'nextjs'}
    ]
    return (
        <>
            <section 
            className={styles.page}
            style={{
                opacity: isOpen? 1 : 0,
                zIndex: isOpen? 999 : -1,
                transition:'opacity .3s'
            }}>
                <div className={styles.left_side}>
                <button className={styles.go_back} onClick={onClose}>GO BACK</button>
                    <h1 className={styles.project_name}>
                        {props.name}
                    </h1>
                    <p className={styles.project_description}>
                        {props.description}
                    </p>
                    <div className={styles.skills_div}>
                        <h3 className={styles.skills_subtitle}>SKILLS USED</h3>
                        <div className="d-flex gap-3">
                            <img className={styles.skill} />
                        </div>
                    </div>
                    <div className={styles.button_div}>
                        <Link href='/' className={styles.button}>View Site</Link>
                        <Link href='/' className={styles.button}>View Code</Link>
                    </div>
                </div>
                <div className={styles.right_side}></div>
            </section>
        </>
    )
}