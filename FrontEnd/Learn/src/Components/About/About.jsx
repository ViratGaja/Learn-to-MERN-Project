import '../components/About/About.css'

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">
                        Learn more about our journey and mission
                    </p>
                </div>
            </section>

            <section className="about-story">
                <div className="container">
                    <div className="story-content">
                        <div className="story-image">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Our Story" />
                        </div>
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2020, we started with a simple mission: to make web development 
                                accessible and efficient for everyone. Our team of passionate developers 
                                came together to create powerful solutions using the MERN stack.
                            </p>
                            <p>
                                Today, we've helped hundreds of businesses build their dream applications, 
                                from small startups to large enterprises. Our commitment to quality and 
                                innovation drives everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="container">
                    <h2 className="section-title center">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>We constantly push boundaries and embrace new technologies</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>Quality is not an option, it's our standard</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Collaboration</h3>
                            <p>Together we achieve more than we could alone</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌟</div>
                            <h3>Integrity</h3>
                            <p>Honest and transparent in everything we do</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <div className="container">
                    <h2 className="section-title center">Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
                            <h3>John Smith</h3>
                            <p className="member-role">CEO & Founder</p>
                            <p className="member-bio">Full-stack developer with 10+ years of experience</p>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
                            <h3>Sarah Johnson</h3>
                            <p className="member-role">CTO</p>
                            <p className="member-bio">Tech enthusiast and MERN stack expert</p>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Team Member" />
                            <h3>Mike Wilson</h3>
                            <p className="member-role">Lead Developer</p>
                            <p className="member-bio">Passionate about clean code and scalability</p>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Team Member" />
                            <h3>Emily Brown</h3>
                            <p className="member-role">UI/UX Designer</p>
                            <p className="member-bio">Creating beautiful and intuitive experiences</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
