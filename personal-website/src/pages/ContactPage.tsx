import SocialMediaIcons from "../components/SocialMediaIcons";
import LineBreak from "../components/LineBreak";
import { useState } from "react";

const ContactPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="contact">
        <section className="contact__intro">
          <div className="contact__intro__text">
            <h1>Connect</h1>
            <p>
              If any part of my journey resonates with you, I’d love to
              connect—whether it’s through a shared interest, a casual chat, or
              a meaningful collaboration.
            </p>
          </div>
          <SocialMediaIcons />
        </section>

        <LineBreak />

        <section className="contact__facts">
          <div className="contact__facts__text">
            <h2> Behind the Scenes </h2>
            <ul>
              <li>This Website = Travel + Code + Weeks + MacBook Air</li>
              <li>No PhotoShop for my gallery photos yet</li>
              <li>I genuinely enjoy bitter coffee.</li>
              <li>I don’t train chest much.</li>
              <li>If I could have any pet, it’d be a horse. 🐴</li>
            </ul>
          </div>
          <div
            className={`flip-card ${showInfo ? "flipped" : ""}`}
            onClick={() => setShowInfo(!showInfo)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="src/assets/images/bison.jpg"
                  alt="Behind the Scenes"
                />
              </div>
              <div className="flip-card-back">
                <p>
                  Name: Bison
                  <br />
                  Nationality: Polish
                  <br />
                  Species: Horse
                  <br />
                  Favorite Food: Grass
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
