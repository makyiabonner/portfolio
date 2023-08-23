import styles from './project.module.scss';
import Link from 'next/link';

export default function ProjectViewer(props){
    const {isOpen, onClose, skillsUsed} = props

    const skills = [
        {id:'react', pic:'./icons/white-react.svg', alt:'react'},
        {id:'html', pic:'./icons/white-html.svg', alt:'html'},
        {id:'css', pic:'./icons/white-css.svg', alt:'css'},
        {id:'sass', pic:'./icons/white-sass.svg', alt:'sass'},
        {id:'javascript', pic:'./icons/white-js.svg', alt:'javascript'},
        {id:'bootstrap', pic:'./icons/white-bootstrap.svg', alt:'bootstrap'},
        {id:'typescript', pic:'./icons/white-ts.svg', alt:'typescript'},
        {id:'nextjs', pic:'./icons/white-nextjs.svg', alt:'nextjs'}
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
                        {skillsUsed.map((skillId) => {
                          const tech = skills.find((tech) => tech.id === skillId);
                          if (tech) {
                            return (
                              <img
                                key={tech.id}
                                className={styles.skill}
                                src={tech.pic}
                                alt={tech.alt}
                              />
                            );
                          }
                          else return null;
                        })}
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