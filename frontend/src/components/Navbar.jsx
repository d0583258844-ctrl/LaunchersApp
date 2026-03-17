import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="title">ROCKETS APP</h3>
      <div className="links">
        <Link className="link" to={"/"}>Home Page</Link>
        <Link className="link" to={"/launcher/add"}>Launcher Add</Link>
        <Link className="link" to={"/launcher/details"}>Launcher Details</Link>
        <Link className="link" to={"/auth/register"}>Register </Link>
        <Link className="link" to={"/auth/login"}>Login </Link>
        <Link className="link" to={"/auth/logout"}>Logout </Link>
      </div>
    </div>
  )
}

export default Navbar
