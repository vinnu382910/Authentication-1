// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div>
      <Header />
      <div className="home-cont">
        <div className="desc-cont">
          <h1 className="main-heading">Clothes That Get You Noticed</h1>
          <p className="content">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </div>
  </>
)

export default Home
