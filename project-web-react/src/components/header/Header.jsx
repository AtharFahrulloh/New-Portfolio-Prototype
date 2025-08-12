import afCode from './assets/afcode-new.png'
import './header.css'

function Header() {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <img src={afCode} className="logo" alt="AFCode Logo" />
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
                            <a href='/My Projects'>My Projects</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;