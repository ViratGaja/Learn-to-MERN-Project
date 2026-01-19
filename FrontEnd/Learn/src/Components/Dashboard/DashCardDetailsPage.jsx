import { useState, useEffect } from "react";
import axios from "axios";
import DashLayout from "./DashLayout";
import "./dashboard.css";

const DashCardDetailsPage = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [detail, setDetail] = useState("");
  const [rows, setRows] = useState([]);

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
        setRows(res.data.cardDetails); // ⭐ DB DATA
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/card-detail/add",
        { title, para, detail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.cardDetail) {
        setRows([res.data.cardDetail, ...rows]); // add instantly
      }

      setTitle("");
      setPara("");
      setDetail("");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <DashLayout>
      <h2>Card Details Page</h2>

      <form className="dashboard-form" onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Paragraph" value={para} onChange={(e) => setPara(e.target.value)} />
        <input placeholder="Description" value={detail} onChange={(e) => setDetail(e.target.value)} />
        <button>Add</button>
      </form>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Paragraph</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="3">No data found</td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row._id}>
                <td>{row.title}</td>
                <td>{row.para}</td>
                <td>{row.detail}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </DashLayout>
  );
};

export default DashCardDetailsPage;
