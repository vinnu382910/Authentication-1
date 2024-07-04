// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="list-cont">
      <li className="para">Home</li>
      <li className="para">Products</li>
      <li className="para">Cart</li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
