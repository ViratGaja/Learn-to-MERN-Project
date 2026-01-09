import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields')
            setLoading(false)
            return
        }

        // Simulate API call (Replace with actual API later)
        setTimeout(() => {
            console.log('Login Data:', formData)
            // Navigate to dashboard after successful login
            // navigate('/dashboard')
            alert('Login Successful! (Connect backend later)')
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <div className="auth-left">
                    <div className="auth-info">
                        <h1>Welcome Back! 👋</h1>
                        <p>Login to access your sports dashboard and manage your orders</p>
                        <div className="auth-features">
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <span>Track your orders</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <span>Save favorite items</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <span>Quick checkout</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="auth-right">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Login</h2>
                            <p>Enter your credentials to continue</p>
                        </div>

                        {error && (
                            <div className="error-message">
                                <span>⚠️</span> {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="auth-form">
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
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <Link to="/forgot-password" className="forgot-link">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary btn-full"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>OR</span>
                        </div>

                        <div className="social-login">
                            <button className="btn-social btn-google">
                                <span>🔍</span> Continue with Google
                            </button>
                            <button className="btn-social btn-facebook">
                                <span>📘</span> Continue with Facebook
                            </button>
                        </div>

                        <div className="auth-footer">
                            <p>
                                Don't have an account? 
                                <Link to="/register"> Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
