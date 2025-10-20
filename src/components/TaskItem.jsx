import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded-xl shadow-sm transition-all duration-300 ${
        task.completed
          ? "bg-pink-100 line-through text-gray-500"
          : "bg-pink-50 hover:bg-pink-100"
      }`}
    >
      <div
        onClick={() => onToggle(task.id)}
        className="cursor-pointer flex items-center gap-2"
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="accent-pink-600 cursor-pointer"
        />
        <span className="text-sm font-medium">{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-pink-600 hover:text-red-500 transition-colors"
      >
        🗑️
      </button>
    </div>
  );
}
