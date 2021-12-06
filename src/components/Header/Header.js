import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                Education T<span>a</span>T
            </div>
            <div>
                <ul className="navigation">
                    <li className="navigation-list-item"><Link className="navigation-link" to="/">Home</Link></li>
                    <li className="navigation-list-item"><Link className="navigation-link" to="/">Teachers</Link></li>
                    <li className="navigation-list-item"><Link className="navigation-link" to="/">About</Link></li>
                    <li className="navigation-list-item"><Link className="navigation-link" to="/">Contact Us</Link></li>
                </ul>
            </div>
        </header>
    );
};