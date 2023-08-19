import NewNav from '@/components/NewNav/newNav';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import styles from '../styles/Skills.module.scss';

export default function Skills(){
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
    return(
        <>
         <main className={styles.page}>
            <section className={styles.left_side}>
                <div className={styles.left_content}>
                    {skills.map((skill) => <img key={skill.id} className={styles.tech_logo} src={skill.pic} alt={skill.alt} />)}
                </div>
            </section>
            <section className={styles.right_side}>
                <h1 className={styles.page_name}>SKILLS</h1>
            </section>
            <NewNav />
         </main>
        </>
    )
}