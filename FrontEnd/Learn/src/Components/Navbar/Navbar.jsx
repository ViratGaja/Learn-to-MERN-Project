import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyBrand
                </Link>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="navbar-link" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/contact" className="navbar-link" onClick={closeMenu}>
                        Contact
                    </Link>
                    <Link to="/login" className="navbar-link navbar-btn" onClick={closeMenu}>
                        Login
                    </Link>
                </div>

                <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
