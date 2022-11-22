import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar-container">
            <h2 className="Navbar-logo"><Link to="/" className="Navbar-logo">Logo</Link></h2>
            <ul className="Navbar-ul">
                <li><Link to="/" className="Navbar-links">Início</Link></li>
                <li><Link to="/create" className="Navbar-links">Criar Blogs</Link></li>
                <li><Link to="/seeblogs" className="Navbar-links">Ver Blogs</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;