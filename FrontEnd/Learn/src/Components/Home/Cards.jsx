import './Home.css'

const Cards = () => {
    const sportsData = [
        {
            id: 1,
            icon: '⚽',
            title: 'Football',
            description: 'Premium quality football with excellent grip and durability. Perfect for matches and practice sessions.'
        },
        {
            id: 2,
            icon: '🏏',
            title: 'Cricket Bat',
            description: 'Professional grade cricket bat made from finest English willow. Ideal for all playing conditions.'
        },
        {
            id: 3,
            icon: '🏀',
            title: 'Basketball',
            description: 'Official size basketball with superior bounce and control. Perfect for indoor and outdoor games.'
        },
        {
            id: 4,
            icon: '🎾',
            title: 'Tennis Racket',
            description: 'Lightweight tennis racket with carbon fiber frame. Provides excellent power and control.'
        },
        {
            id: 5,
            icon: '🏸',
            title: 'Badminton Set',
            description: 'Complete badminton set with rackets and shuttlecocks. Great for beginners and professionals.'
        },
        {
            id: 6,
            icon: '⛳',
            title: 'Golf Kit',
            description: 'Professional golf club set with premium quality irons and woods. Includes golf balls and tees.'
        },
        {
            id: 7,
            icon: '🏐',
            title: 'Volleyball',
            description: 'Regulation size volleyball with soft touch material. Perfect for beach and indoor volleyball.'
        },
        {
            id: 8,
            icon: '🥊',
            title: 'Boxing Gloves',
            description: 'High-quality boxing gloves with excellent padding and wrist support. Available in multiple sizes.'
        },
        {
            id: 9,
            icon: '🏓',
            title: 'Table Tennis',
            description: 'Complete table tennis set with paddles and balls. Professional grade equipment for home use.'
        }
    ]

    return (
        <section className="cards-section">
            <div className="container">
                <h2 className="section-title center">Our Sports Collection</h2>
                <p className="section-subtitle center">
                    Explore our wide range of premium sports equipment and accessories
                </p>
                
                <div className="cards-grid">
                    {sportsData.map(sport => (
                        <div key={sport.id} className="card">
                            <div className="card-icon">{sport.icon}</div>
                            <h3 className="card-title">{sport.title}</h3>
                            <p className="card-description">{sport.description}</p>
                            <button className="card-btn">View Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards
