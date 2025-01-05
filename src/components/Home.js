import "./Home.css";
import logo from "../icons/logo.svg";
import icon_star from "../icons/icon-star.svg";
import arrow_down from "../icons/icon-arrow-down.svg";
import Home_img from "../images/image-hero-mobile.webp";
import avatars from "../images/image-avatars.webp";

export default function Home() {
  return (
    <div className="container">
      <nav class="navbar">
        <img src={logo} alt="Logo" />
      </nav>
      <div className="home ">
        <div className="home__content">
          <h1>Join the ultimate tech book club</h1>
          <p>
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
          <button className="btn">
            REVIEW MEMBERSHIP OPTIONS
            <img src={arrow_down} alt="arrow_down" />
          </button>
          <div className="home__footer">
            <img src={avatars} alt="avatars" />
            <div className="home__rating">
              <div className="rating">
                <img src={icon_star} alt="icon_star" />
                <img src={icon_star} alt="icon_star" />
                <img src={icon_star} alt="icon_star" />
                <img src={icon_star} alt="icon_star" />
                <img src={icon_star} alt="icon_star" />
              </div>
              <p>200+ developers joined already</p>
            </div>
          </div>
        </div>
        <div className="home__img">
          <img src={Home_img} alt="Home_img" className="home__img" />
        </div>
      </div>
    </div>
  );
}
