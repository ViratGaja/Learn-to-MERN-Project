import { useState } from 'react'
import '../components/Contact/Contact.css'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        We'd love to hear from you. Get in touch with us!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>
                                Have a question or want to work together? 
                                Fill out the form and we'll get back to you as soon as possible.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>info@mybrand.com</p>
                                        <p>support@mybrand.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+1 234 567 8900</p>
                                        <p>+1 234 567 8901</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <h3>Address</h3>
                                        <p>123 Main Street</p>
                                        <p>City, State 12345</p>
                                        <p>Country</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">⏰</div>
                                    <div>
                                        <h3>Working Hours</h3>
                                        <p>Monday - Friday</p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            {submitted && (
                                <div className="success-message">
                                    ✅ Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map">
                <div className="container">
                    <div className="map-placeholder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
