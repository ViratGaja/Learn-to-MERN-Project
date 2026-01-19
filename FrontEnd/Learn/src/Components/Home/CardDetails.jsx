import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllAndFilter();
  }, [id]);

  const fetchAllAndFilter = async () => {
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
        const foundCard = res.data.cardDetails.find(
          (item) => item._id === id
        );
        setCard(foundCard);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!card) return <p>No card found</p>;

  return (
    <div className="card-details-page">
      <h2>{card.title}</h2>
      <p><strong>{card.para}</strong></p>
      <p>{card.detail}</p>
    </div>
  );
};

export default CardDetails;
