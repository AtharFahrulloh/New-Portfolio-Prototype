import { motion } from 'framer-motion'
import instagram from './assets/icons8-instagram-50.png'
import youtube from './assets/icons8-youtube-50.png'
import linkedin from './assets/icons8-linkedin-50.png'
import athar from './assets/athar.jpeg'
import './hero.css'

function Hero() {
    return (
        <>
        <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-text">
                        <h3>Hello,</h3>
                        <h1>I'm <span className="highlight">Athar Fahrulloh</span></h1>
                        <div className="hero-description">
                            <h3>I'm a junior front-end developer, content creator, and UI/UX designer</h3>
                            <p>Even so, I still want to learn more about programming and design to become a professional programmer.</p>
                        </div>
                        <div className="social-links">
                        <a href="https://www.instagram.com/atharfahrulloh/" target='_blank'>
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://m.youtube.com/@atharfahrulloh" target='_blank'>
                            <img src={youtube} alt="YouTube" />
                        </a>
                        <a href="https://id.linkedin.com/in/atharfahrulloh" target='_blank'>
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        </div>
                </div>
                <div className='hero-image'>
                    <img src={athar} alt="My Picture" />
                </div>
            </div>
    </section>
    </motion.div>
        </>
    )
}

export default Hero;