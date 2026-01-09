import './Home.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1 className="banner-title">
                    Welcome to Our Amazing Platform
                </h1>
                <p className="banner-subtitle">
                    Build your dreams with the best MERN stack solutions
                </p>
                <div className="banner-buttons">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="banner-image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" alt="Banner" />
            </div>
        </section>
    )
}

export default Banner
