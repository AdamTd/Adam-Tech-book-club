import "./Main.css";
import Main_img from "../images/image-read-together-mobile.webp";
import Main_img_1 from "../images/image-not-average-mobile.webp";
import icon_star from "../icons/icon-star.svg";
import icon_check from "../icons/icon-check.svg";
import icon_tech from "../icons/logos-tech.svg";
import pattern_arrow from "../icons/pattern-arrow.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <img src={Main_img} alt="Main_img" className="main__img" />
        </div>
        <div className="main__content">
          <h1>Read together, grow together</h1>
          <p>
            <img src={icon_check} alt="Check icon" />
            Monthly curated tech reads selected by industry experts
          </p>
          <p>
            <img src={icon_check} alt="Check icon" />
            Virtual and in-person meetups for deep-dive discussions
          </p>
          <p>
            <img src={icon_check} alt="Check icon" />
            Early access to new tech book releases
          </p>
          <p>
            <img src={icon_check} alt="Check icon" />
            Author Q&A sessions with tech thought leaders
          </p>
        </div>
      </div>
      <div className="main__container">
        <div className="main__content">
          <h1>Not your average book club</h1>
          <p>
            Connect with a community that speaks your language - from Python to
            TypeScript and everything in between. Our discussions blend
            technical depth with practical applications.
          </p>
        </div>
        <div>
          <img src={Main_img_1} alt="Main_img" className="main__img" />
          <img src={icon_tech} alt="icon_tech" className="main__icon" />
        </div>
      </div>
      <div className="journey">
        <h1>Your tech reading journey</h1>
        <div className="step">
          <div className="step__content">
            <div className="step__number">
              <p>1</p>
              <img src={pattern_arrow} alt="pattern_arrow" />
            </div>
            <p>Choose your membership tier</p>
          </div>
          <div className="step__content">
            <div className="step__number">
              <p>2</p>
              <img src={pattern_arrow} alt="pattern_arrow" />
            </div>
            <p>Get your monthly book selection</p>
          </div>
          <div className="step__content">
            <div className="step__number">
              <p>3</p>
              <img src={pattern_arrow} alt="pattern_arrow" />
            </div>
            <p>Join our discussion forums</p>
          </div>
          <div className="step__content">
            <div className="step__number">
              <p>4</p>
            </div>
            <p>Attend exclusive meetups</p>
          </div>
        </div>
      </div>
      <div className="membership">
        <h1>Membership Options</h1>
        <div className="membership__content">
          <div className="starter">
            <h3>Starter</h3>
            <h2>
              <span>$19 </span>/month
            </h2>
            <hr />
            <ul>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>book/month</p>
              </li>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>Online forums</p>
              </li>
            </ul>
            <button className="btn">SUBSCRIBE NOW</button>
          </div>
          <div className="pro">
            <h3>Pro</h3>
            <h2>
              <span>$29 </span>/month
            </h2>
            <hr />
            <ul>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>2 book/month</p>
              </li>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>Virtual meetups</p>
              </li>
            </ul>
            <button className="btn">SUBSCRIBE NOW</button>
          </div>
          <div className="enterprise">
            <h3>Enterprise</h3>
            <h2>
              <span>Custom</span>
            </h2>
            <hr />
            <ul>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>Team access</p>
              </li>
              <li>
                <img src={icon_check} alt="Check icon" />
                <p>Private sessions</p>
              </li>
            </ul>
            <button className="btn">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="rated">
          <img src={icon_star} alt="icon_star" />
          <img src={icon_star} alt="icon_star" />
          <img src={icon_star} alt="icon_star" />
          <img src={icon_star} alt="icon_star" />
          <img src={icon_star} alt="icon_star" />
        </div>
        <h2>
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </h2>
        <p>Adam Tadesse, Frontend Developer</p>
      </div>
    </div>
  );
}
