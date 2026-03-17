import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddLauncherPage from "./pages/AddLauncherPage"
import LauncherDetailsPage from "./pages/LauncherDetailsPage"
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Logout from './components/Logout'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luncher/add" element={<AddLauncherPage />} />
        <Route path="/launcher/details" element={<LauncherDetailsPage />} />
        <Route path="/auth/register" element={< RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
