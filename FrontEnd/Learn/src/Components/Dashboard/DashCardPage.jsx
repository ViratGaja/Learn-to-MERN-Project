import { useState } from "react";
import DashLayout from "./DashLayout";
import "./dashboard.css";

const DashCardPage = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, { title, para }]);
    setTitle("");
    setPara("");
  };

  return (
    <DashLayout>
      <h2 style={{marginBottom:"10px"}}>Card Page</h2>

      <form className="dashboard-form" onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Paragraph" value={para} onChange={(e) => setPara(e.target.value)} />
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
