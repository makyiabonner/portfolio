import { Card } from 'react-bootstrap'
import styles from '../TechStack/techStack.module.scss'

export default function TechStack(){
    /* 
    React, NextJS, TypeScript, JavaScript, 
    Bootstrap, Sass, CSS, HTML, Git
    */
   const languages = 
   [
    {id:'React' ,link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {id:'NextJS' ,link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}, 
    {id:'TypeScript' ,link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {id:'JavaScript', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {id:'Bootstrap', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"}, 
    {id:'Sass', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"}, 
    {id:'CSS', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {id:'HTML5', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"}, 
    {id:'Git', link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"}
   ]

    return (
        <section className={styles.techSection}>
                <h2 className={styles.subtitle}>Tech Stack</h2>
                <div className={`${styles.div} m-auto`}>
                    {languages.map((language) =>{
                        return (
                            <Card id={language.id} 
                                  style={{ width: 'clamp(30px, 9vw, 100px)', background:'white',
                                           padding:"3px", boxShadow:'0px 5px 13px black', 
                                           display:'flex', alignSelf:'center', justifySelf:'center' }}>
                                <Card.Img variant="top" src={language.link} alt={language.id}/>
                            </Card>
                        )}
                      )
                    }
                </div>
        </section>
    )
}