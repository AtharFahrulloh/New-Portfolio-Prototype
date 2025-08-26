import './footer.css'
import afcode from './assets/afcode-new.png'
import ig from './assets/icons8-instagram-50.png'
import linkedin from './assets/icons8-linkedin-50.png'
import youtube from './assets/icons8-youtube-50.png'

function Footer() {
    return (
        <>
        <section className="footer-section">
            <div className="footer-content">
                <div>
                    <img src={afcode} alt='AFCode' className='logo'/>
                    <div className="social-links">
                        <a href="https://www.instagram.com/atharfahrulloh/" target='_blank'>
                            <img src={ig} alt="Instagram" />
                        </a>
                        <a href="https://m.youtube.com/@atharfahrulloh" target='_blank'>
                            <img src={youtube} alt="YouTube" />
                        </a>
                        <a href="https://id.linkedin.com/in/atharfahrulloh" target='_blank'>
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                    <p>Empowering skills to achieve project success through effective management and experience.</p>
                </div>
                <div className='navbar'>
                <ul className='nav-list'>
                            <li className='nav-list-item'>
                                <a href='/home'>Home</a>
                            </li>
                            <li className='nav-list-item'>
                                <a href='/About'>About</a>
                            </li>
                            <li className='nav-list-item'>
                                <a href='/My Skills'>My Skills</a>
                            </li>
                            <li className='nav-list-item'>
                                <a href='/fanpage'>Fanpage</a>
                            </li>
                        </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer