import "./Footer.css";
import icon_star from "../icons/icon-star.svg";
import bluesky from "../icons/logo-bluesky.svg";
import arrow_up from "../icons/icon-arrow-up.svg";
import linkedin from "../icons/logo-linkedin.svg";
import avatars from "../images/image-avatars.webp";

export default function Home() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1>Ready to debug your reading list?</h1>
        <div className="footer__Reference">
          <button className="btn">
            REVIEW MEMBERSHIP OPTIONS
            <img src={arrow_up} alt="arrow_up" />
          </button>
          <div className="footer__home">
            <img src={avatars} alt="avatars" />
            <div className="footer__rating">
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
      </div>
      <hr />
      <div className="foot">
        <p>© 2024 - Tech Book Club</p>
        <div className="foot__icons">
          <img src={bluesky} alt="bluesky" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
}
