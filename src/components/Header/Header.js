import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/" className="link-home">Education T<span>a</span>T</NavLink>
            </div>
            <div>
                <ul className="navigation">
                    <li className="navigation-list-item"><NavLink className="navigation-link" to="/">Home</NavLink></li>
                    <li className="navigation-list-item"><NavLink className="navigation-link" to="/">Teachers</NavLink></li>
                    <li className="navigation-list-item"><NavLink className="navigation-link" to="/">About</NavLink></li>
                    <li className="navigation-list-item"><NavLink className="navigation-link" to="/">Contact Us</NavLink></li>
                </ul>
            </div>
        </header>
    );
};