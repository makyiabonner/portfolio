import styles from '../Projects/projects.module.scss'


export default function Projects(){
    const projects = [
      {
        id:1,
        img:'',
        name:"Rosco's Apparel", 
        desc:(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed cursus turpis. Vivamus
             sit amet neque id eros elementum pulvinar. In tortor dolor, vehicula eget ultricies at, porttitor 
             a nibh.`
           ),
        github:'', 
        site:'', 
        figma:''
      },
      {
        id:2,
        img:'',
        name:"Rosco's Apparel", 
        desc:(
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed cursus turpis. Vivamus
           sit amet neque id eros elementum pulvinar. In tortor dolor, vehicula eget ultricies at, porttitor 
           a nibh.`
         ),
        github:'', 
        site:'', 
        figma:''
      },
      {
        id:3,
        img:'',
        name:"Rosco's Apparel", 
        desc:(
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed cursus turpis. Vivamus
           sit amet neque id eros elementum pulvinar. In tortor dolor, vehicula eget ultricies at, porttitor 
           a nibh.`
         ),
        github:'', 
        site:'', 
        figma:''
      },
    ]

    return(
        <section className={`${styles.fourthMain} d-block p-5`}>
          <h2 className={`${styles.subtitle} text-center m-5`}>Projects</h2>
          <div className={`${styles.div} bg-info p-5 m-auto d-flex flex-column gap-5 align-items-center`}>
            {projects.map((project) => {
                    return (
                        <div id={project.id} className={(project.id % 2 === 0)
                              ? `${styles.project} flex-lg-row-reverse flex-column p-4`
                              : `${styles.project} flex-column flex-lg-row justify-content-evenly p-4`
                        }>
                          <img className={styles.img} src={project.img} />
                          <div className='d-block text-center'>
                            <h3 className='m-3'>{project.name}</h3>
                            <p className={`${styles.p}`}>{project.desc}</p>
                            <div>
                              <button className='mx-4 py-1 px-3 rounded-pill fs-6'>Source Code</button>
                              <button className='mx-4 py-1 px-3 rounded-pill fs-6'>Website</button>
                              <button className='mx-4 py-1 px-3 rounded-pill fs-6'>Blueprint</button>
                            </div>
                          </div>
                        </div>)
                      }
                    )}
          </div>
        </section>
    )
}