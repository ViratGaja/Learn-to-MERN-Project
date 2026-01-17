import { useState } from "react";
import axios from "axios";
import DashLayout from "./DashLayout";
import "./dashboard.css";

const DashCardDetailsPage = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [detail, setDetail] = useState("");
  const [rows, setRows] = useState([]);

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
        setRows([...rows, res.data.cardDetail]);
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
        <input
          placeholder="Description"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
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
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.para}</td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashLayout>
  );
};

export default DashCardDetailsPage;
