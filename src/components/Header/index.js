import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="wave-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="nav-image"
        />
        <h1 className="logo-name">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
