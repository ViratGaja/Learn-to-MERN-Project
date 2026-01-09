import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">MyBrand</h3>
                    <p className="footer-description">
                        Building amazing web applications with the MERN stack. 
                        Your success is our mission.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon">📘</a>
                        <a href="#" className="social-icon">🐦</a>
                        <a href="#" className="social-icon">📸</a>
                        <a href="#" className="social-icon">💼</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Services</h4>
                    <ul className="footer-links">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">App Development</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Contact Info</h4>
                    <ul className="footer-contact">
                        <li>📧 info@mybrand.com</li>
                        <li>📞 +1 234 567 8900</li>
                        <li>📍 123 Main Street, City, Country</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 MyBrand. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
