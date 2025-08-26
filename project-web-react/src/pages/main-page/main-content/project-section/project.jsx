import './project.css'
import home1 from './assets/Home1.png'
import home2 from './assets/Home2.png'
import login from './assets/Login.png'
import payment from './assets/Payment.png'

function Project() {
    return (
    <>
        <section className="project-section">
        <div className="projects-header">
            <h2>My Project</h2>
        </div>
        <div className="projects-card">
            <div className="projects-image">
                <img src={login} alt="Login Page" />
                <img src={home1} alt="Home 1" />
                <img src={home2} alt="Home 2" />
                <img src={payment} alt="Home 1" />
            </div>
            <div className="projects-desc">
                <h3>
                    MyTelkomsel Design
                </h3>
                <p>
                    This is my first project that i've made. Basically, this is the copy layout design of an internet service app called MyTelkomsel.
                    i managed to make this replica by using Flutter framework with a programming language called Dart.
                </p>
                <a href="https://www.mediafire.com/file/hpceoa95sli4dcv/MyTelkomsel-Layout.apk/file" target="_blank">
                    <button className="downloadDesign">Download Design!</button>
                </a>
            </div>
        </div>
        </section>
    </>
    )
}

export default Project;