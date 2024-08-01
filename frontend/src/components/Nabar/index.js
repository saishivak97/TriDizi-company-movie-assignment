import { Link } from "react-router-dom"
import './index.css'

const Navbar =()=> {

    return(
        <div className="navbar">
            <Link to='/home' className="web-logo">MovieLook</Link>
            <Link to='/home' className="nav-item">Home</Link>
        </div>
        
    )
}

export default Navbar