import { useState, useEffect } from "react";
import axios from "axios";
import DashLayout from "./DashLayout";
import "./dashboard.css";

const DashCardPage = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch cards on component mount
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/card/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.cards) {
        setRows(res.data.cards);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/card/add",
        { title, para },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.card) {
        setRows([...rows, res.data.card]); // Add new card to table
      }

      setTitle("");
      setPara("");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <DashLayout>
      <h2 style={{ marginBottom: "10px" }}>Card Page</h2>

      <form className="dashboard-form" onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Paragraph"
          value={para}
          onChange={(e) => setPara(e.target.value)}
        />
        <button>Add</button>
      </form>

      {loading ? (
        <p>Loading cards...</p>
      ) : (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Paragraph</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="2">No cards found</td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row._id}>
                  <td>{row.title}</td>
                  <td>{row.para}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </DashLayout>
  );
};

export default DashCardPage;
