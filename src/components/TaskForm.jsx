import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    onAdd(taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow border border-pink-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-400"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-all shadow-md hover:shadow-pink-400"
      >
        Add
      </button>
    </form>
  );
}
