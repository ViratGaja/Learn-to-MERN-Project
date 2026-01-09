import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        // Validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields')
            setLoading(false)
            return
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters')
            setLoading(false)
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }

        // Simulate API call
        setTimeout(() => {
            console.log('Register Data:', formData)
            alert('Registration Successful! Please login.')
            navigate('/login')
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <div className="auth-left">
                    <div className="auth-info">
                        <h1>Join Us Today! 🎉</h1>
                        <p>Create an account to unlock exclusive features and deals</p>
                        <div className="auth-features">
                            <div className="feature-item">
                                <span className="feature-icon">🎁</span>
                                <span>Get welcome bonus</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🚚</span>
                                <span>Free shipping on first order</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">⭐</span>
                                <span>Exclusive member deals</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="auth-right">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Create Account</h2>
                            <p>Sign up to get started</p>
                        </div>

                        {error && (
                            <div className="error-message">
                                <span>⚠️</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Minimum 6 characters"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" required />
                                    <span>I agree to Terms & Conditions</span>
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary btn-full"
                                disabled={loading}
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        <div className="social-login">
                            <button className="btn-social btn-google">
                                <span>🔍</span> Sign up with Google
                            </button>
                            <button className="btn-social btn-facebook">
                                <span>📘</span> Sign up with Facebook
                            </button>
                        </div>

                        <div className="auth-footer">
                            <p>
                                Already have an account? 
                                <Link to="/login"> Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
