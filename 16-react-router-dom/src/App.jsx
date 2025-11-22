import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 items-center mb-6 bg-gray-100 p-4 rounded-xl shadow">
        <div className="text-2xl font-bold">Logo</div>

        <nav className="flex gap-6 justify-end">
          <Link className="text-blue-600 hover:text-blue-800" to="/">Home</Link>
          <Link className="text-blue-600 hover:text-blue-800" to="/about">About</Link>
          <Link className="text-blue-600 hover:text-blue-800" to="/contact">Contact</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
