import '../style.css'
const About = ()=>{
    return(
        <>
            <header className="tm-site-header-box tm-bg-dark">
                <h1 className="tm-site-title">JUNAID SHAKEEL AHMED</h1>
                <p className="mb-0 tm-site-subtitle">A web developer.</p>
            </header>
            <div class="tm-content">
            <section className="tm-section tm-section-0" style={{display: 'block'}}>
                <h2 className="tm-section-title mb-3 font-weight-bold">
                     About
                </h2>
                <div className="tm-textbox tm-bg-dark">
                    <p>
                        Assalam-u-Alaikum,
                    </p>
                    <p className="mb-0">
                        I'm JUNAID SHAKEEL AHMED, I'm a CS student and a web developer.
                        
                        <ul>
                            I have following Skills:
                            <li>HTML 5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>ES6</li>
                            <li>MongoDB</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>ExpressJS</li>
                        </ul>
                    </p>
                </div>
            </section>
            </div>
      </>
    )
}

export default About;