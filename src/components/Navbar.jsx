export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md flex justify-between items-center px-8 py-4 z-50 rounded-b-2xl">
      <h1 className="text-2xl font-bold text-pink-500 tracking-wide">
        🌸 TaskMaster
      </h1>

      <div className="flex gap-8 text-lg font-medium">
        <a
          href="/"
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="/tasks"
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
        >
          Tasks
        </a>
        <a
          href="/api"
          className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
        >
          API
        </a>
      </div>
    </nav>
  );
}
