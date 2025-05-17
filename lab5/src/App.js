import React, { useState, useEffect } from "react";

const IssueList = () => {
  const [issues, setIssues] = useState(() => JSON.parse(localStorage.getItem("issues")) || [
    { id: 1, title: "Bug in login", description: "Users cannot log in with Google OAuth.", status: "Open" },
    { id: 2, title: "UI issue on dashboard", description: "Buttons are misaligned on the mobile view.", status: "Closed" },
    { id: 3, title: "Slow API response", description: "Fetching user data takes too long.", status: "Open" }
  ]);
  const [filter, setFilter] = useState("All");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => localStorage.setItem("issues", JSON.stringify(issues)), [issues]);

  const addIssue = () => {
    if (!newTitle || !newDescription) return;
    setIssues([...issues, {
      id: issues.length + 1,
      title: newTitle,
      description: newDescription,
      status: "Open"
    }]);
    setNewTitle(""); setNewDescription("");
  };

  const toggleStatus = (id) => setIssues(issues.map(i => i.id === id ? { ...i, status: i.status === "Open" ? "Closed" : "Open" } : i));
  const deleteIssue = (id) => setIssues(issues.filter(i => i.id !== id));
  const filtered = filter === "All" ? issues : issues.filter(i => i.status === filter);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Issue Tracker</h1>
      <div className="mb-4 space-x-2">
        {["All", "Open", "Closed"].map(f => (
          <button key={f} className={`px-4 py-2 rounded text-white ${f === "All" ? "bg-blue-500" : f === "Open" ? "bg-red-500" : "bg-green-500"}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="mb-4 space-x-2">
        <input className="border p-2" placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        <input className="border p-2" placeholder="Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
        <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={addIssue}>Add Issue</button>
      </div>
      <ul>
        {filtered.map(({ id, title, description, status }) => (
          <li key={id} className="border-b py-3 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-gray-600">{description}</p>
              <button className={`px-2 py-1 text-sm font-bold rounded-md ${status === "Open" ? "bg-red-500" : "bg-green-500"} text-white`} onClick={() => toggleStatus(id)}>{status}</button>
            </div>
            <button className="px-3 py-1 bg-gray-300 text-black rounded" onClick={() => deleteIssue(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <IssueList />
    </div>
  );
}

