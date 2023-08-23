import styles from './project.module.scss';

export default function ProjectViewer(props){
    return (
        <>
            <section className={styles.page}>
                <div className={styles.left_side}>
                    <h1 className={styles.project_name}>
                        {props.name}
                    </h1>
                    <p className={styles.project_description}>
                        {props.description}
                    </p>
                    <div className={styles.skills_div}>
                        <h3 className={styles.skills_subtitle}>SKILLS USED</h3>
                        <div className="d-flex gap-3"></div>
                    </div>
                    <img className={styles.skill} />
                </div>
                <div className={styles.right_side}></div>
            </section>
        </>
    )
}