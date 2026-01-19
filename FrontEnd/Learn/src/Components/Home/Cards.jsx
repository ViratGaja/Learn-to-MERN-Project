import './Home.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();      

 // ✅ FETCH DATA FROM DB
  useEffect(() => {
    fetchCardDetails();
  }, []);

  const fetchCardDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/card-detail/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.cardDetails) {
        setData(res.data.cardDetails); // ⭐ DB DATA
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="cards-section">
      <div className="container">
        <h2 className="section-title center">Our Sports Collection</h2>
        <p className="section-subtitle center">
          Explore our wide range of premium sports equipment and accessories
        </p>

        <div className="cards-grid">
          {data.map((sport) => (
            <div key={sport._id} className="card">
              <h3 className="card-title">{sport.title}</h3>
              <p className="card-description">{sport.para}</p>

              <button
                className="card-btn"
              onClick={() => navigate(`/card-detail/${sport._id}`)}

              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
