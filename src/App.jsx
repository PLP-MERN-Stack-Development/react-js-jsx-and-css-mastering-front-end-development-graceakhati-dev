import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Api from "./pages/Api";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
