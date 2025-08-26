import './about.css'
import aboutMe from './assets/athar-about.jpeg'

function About() {
    return (
    <>
        <section className="about-section">
            <div className='about-content'>
                <div className='image-container'>
                    <h2>About Me</h2>
                    <img src={aboutMe} className='img-about'/>
                </div>
                <p className='about-description'>
                Hi, I’m Athar — a passionate high school student at SMKN 8 Malang, majoring in Software Engineering. I love exploring programming languages and frameworks such as Flutter, ReactJS, and NodeJS. Currently, I’m focused on building clean and user-friendly applications while improving my skills in mobile and web development. My goal is to become a software developer and work abroad, contributing to impactful technology projects. 
                </p>
                <div className='my-biography'>
                    <div className='bio-item'>
                        <span className='bio-label'>Name : </span>
                        <span className='bio-value'>Muhammad Athar Aydin Fahrulloh</span>
                    </div>
                    <div className='bio-item'>
                        <span className='bio-label'>Location : </span>
                        <span className='bio-value'>Malang, Indonesia</span>
                    </div>
                    <div className='bio-item'>
                        <span className='bio-label'>E-Mail : </span>
                        <span className='bio-value'>athar.fahrulloh@gmail.com</span>
                    </div>
                    <div className='bio-item'>
                        <span className='bio-label'>Focus : </span>
                        <span className='bio-value'>Website and App developments</span>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default About;