import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-pink-400 mb-6">📝 My Tasks</h1>
      <div className="flex gap-3 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="px-4 py-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-500"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-3"
          >
            <span className="text-gray-700">{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-pink-500 hover:text-pink-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
