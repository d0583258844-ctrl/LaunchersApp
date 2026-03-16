import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddLauncherPage from "./pages/AddLauncherPage"
import LauncherDetailsPage from "./pages/LauncherDetailsPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<AddLauncherPage />} />
        <Route path="/api/launchers" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
