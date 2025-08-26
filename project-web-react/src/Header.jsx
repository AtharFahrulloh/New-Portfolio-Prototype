import afCode from './assets/afcode-new.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
            <>
                <header>
                    <nav className='flex justify-between items-center w-[100%] my-0 mx-auto'>
                        <img src={afCode} className="w-[120px] cursor-pointer" alt="AFCode Logo" />
                        <ul className='flex gap-[2rem]'>
                            <li className='nav-list-item'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='nav-list-item'>
                                <Link to="/">About</Link>
                            </li>
                            <li className='nav-list-item'>
                                <Link to="/">My Skills</Link>
                            </li>
                            <li className='nav-list-item'>
                                <Link to="/fanPage">Fanpage</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
    )
}

export default Header;