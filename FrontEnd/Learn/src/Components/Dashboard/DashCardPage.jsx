import { useState } from "react";
import axios from "axios";
import DashLayout from "./DashLayout";
import "./dashboard.css";

const DashCardPage = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [rows, setRows] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // login token

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
        setRows([...rows, res.data.card]);
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

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Paragraph</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.para}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashLayout>
  );
};

export default DashCardPage;
