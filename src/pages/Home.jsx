// Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-pink-400 mb-4">🌸 TaskMaster</h1>
      <p className="text-gray-600 max-w-xl mb-8 text-lg">
        Welcome to <span className="text-pink-500 font-semibold">TaskMaster</span> — your calm productivity companion.
        Manage your daily goals, explore API data, and stay inspired in a pastel world built with 💖 React, Vite & Tailwind CSS.
      </p>
      <div className="flex gap-6">
        <a href="/tasks" className="px-6 py-3 bg-pink-400 text-white rounded-xl shadow-md hover:bg-pink-500 transition">Go to Tasks</a>
        <a href="/api" className="px-6 py-3 bg-gray-700 text-white rounded-xl shadow-md hover:bg-gray-800 transition">Explore API</a>
      </div>
    </div>
  );
}
