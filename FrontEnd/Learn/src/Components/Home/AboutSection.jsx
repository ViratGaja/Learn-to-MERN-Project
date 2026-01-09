import './Home.css'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">About Our Platform</h2>
                        <p className="section-description">
                            We are dedicated to providing the best MERN stack solutions for modern web applications. 
                            Our platform combines cutting-edge technology with user-friendly design to help you 
                            build amazing projects.
                        </p>
                        <p className="section-description">
                            With years of experience in web development, we understand what it takes to create 
                            scalable and efficient applications that meet your business needs.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
