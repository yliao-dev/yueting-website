import SocialMediaIcons from "../components/shared/SocialMediaIcons";
import LineBreak from "../components/shared/LineBreak";
import { useState } from "react";
import bisonImg from "../assets/icons/bison.svg";

const ContactPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ytliaodev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <div className="contact">
        <section className="contact__intro">
          <div className="contact__intro__text">
            <p className="page__eyebrow">Reach Out</p>
            <h1>Connect</h1>
            <p>
              If any part of my journey resonates with you, I’d love to
              connect—whether it’s through a shared interest, a casual chat, or
              a meaningful collaboration.
            </p>

            <div
              className="email-copy-row"
              onClick={handleCopy}
              title="Click to copy email"
            >
              <span className="clipboard-icon">📋</span>
              <code className="email-text">ytliaodev@gmail.com</code>
              {copied && <span className="copied-msg">Copied 👍🏼</span>}
            </div>
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
              <li>This site does not support IE. Neither do I.</li>
              <li>If I could have any pet, it’d be a horse. 🐴</li>
            </ul>
          </div>
          <div
            className={`flip-card ${showInfo ? "flipped" : ""}`}
            onClick={() => setShowInfo(!showInfo)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={bisonImg} alt="Behind the Scenes" />
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
