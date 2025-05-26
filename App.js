import React, { useState, useEffect } from "react";
import "./App.css";

const defaultIssues = [
  { id: 1, title: "Bug in login", description: "Users cannot log in with Google OAuth.", status: "Open" },
  { id: 2, title: "UI issue on dashboard", description: "Buttons are misaligned on the mobile view.", status: "Closed" },
  { id: 3, title: "Slow API response", description: "Fetching user data takes too long.", status: "Open" },
];

const IssueList = () => {
  const [issues, setIssues] = useState(() => JSON.parse(localStorage.getItem("issues")) || defaultIssues);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    localStorage.setItem("issues", JSON.stringify(issues));
  }, [issues]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addIssue = () => {
    if (!form.title || !form.description) return;
    setIssues([...issues, { id: Date.now(), title: form.title, description: form.description, status: "Open" }]);
    setForm({ title: "", description: "" });
  };

  const toggleStatus = (id) =>
    setIssues(issues.map((issue) => issue.id === id ? { ...issue, status: issue.status === "Open" ? "Closed" : "Open" } : issue));

  const deleteIssue = (id) => setIssues(issues.filter((issue) => issue.id !== id));

  const filtered = filter === "All" ? issues : issues.filter((i) => i.status === filter);

  return (
    <div className="container">
      <h1 className="title">Issue Tracker</h1>

      <div className="filters">
        {["All", "Open", "Closed"].map((type) => (
          <button key={type} onClick={() => setFilter(type)} className={`filter-btn ${type.toLowerCase()}`}>
            {type}
          </button>
        ))}
      </div>

      <div className="form">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button onClick={addIssue} className="add-btn">Add</button>
      </div>

      <ul className="issue-list">
        {filtered.map(({ id, title, description, status }) => (
          <li key={id} className="issue">
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <button className={`status-btn ${status.toLowerCase()}`} onClick={() => toggleStatus(id)}>
                {status}
              </button>
            </div>
            <button className="delete-btn" onClick={() => deleteIssue(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="wrapper">
      <IssueList />
    </div>
  );
}
