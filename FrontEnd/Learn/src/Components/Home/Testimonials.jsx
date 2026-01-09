import './Home.css'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, Tech Company',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            text: 'This platform has transformed the way we build web applications. The MERN stack implementation is flawless!'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            position: 'Product Manager',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            text: 'Incredible experience! The dashboard is intuitive and the authentication system works perfectly.'
        },
        {
            id: 3,
            name: 'Mike Wilson',
            position: 'Full Stack Developer',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            text: 'Best MERN stack boilerplate I have ever used. Saved me weeks of development time!'
        }
    ]

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title center">What Our Clients Say</h2>
                <p className="section-subtitle center">
                    Don't just take our word for it
                </p>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                            </div>
                            <div className="testimonial-author">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="testimonial-image"
                                />
                                <div className="testimonial-info">
                                    <h4 className="testimonial-name">{testimonial.name}</h4>
                                    <p className="testimonial-position">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
