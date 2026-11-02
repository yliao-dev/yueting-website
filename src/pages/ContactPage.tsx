import SocialMediaIcons from "../components/shared/SocialMediaIcons";
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
    <div className="contact">
      <section className="contact__intro">
        <p className="page__eyebrow">Reach Out</p>
        <h1>Connect</h1>
        <p className="contact__lead">
          If you want to talk about software, Kendo, photography, or something
          thoughtful in between, I’d be glad to hear from you.
        </p>
        <div className="contact__heroNote">
          <span>Houston, Texas</span>
          <span>Open to meaningful conversations</span>
        </div>
        <div className="contact__actions" aria-label="Ways to connect">
          <button
            type="button"
            className="email-copy-row"
            onClick={handleCopy}
            title="Copy email address"
          >
            <span className="clipboard-icon" aria-hidden="true">
              📋
            </span>
            <code className="email-text">ytliaodev@gmail.com</code>
            {copied && <span className="copied-msg">Copied</span>}
          </button>
          <SocialMediaIcons />
        </div>
      </section>

      <section className="contact__facts">
        <div className="contact__facts__text">
          <p className="page__eyebrow">Behind The Scenes</p>
          <h2 className="page__section-title">Off the dojo floor</h2>
          <ul className="contact__factsList">
            <li>
              This site came together through travel, code, and many late nights
              on a MacBook Air.
            </li>
            <li>No Photoshop for the gallery photos yet.</li>
            <li>I genuinely enjoy bitter coffee.</li>
            <li>I care about clarity, even in small interface details.</li>
            <li>If I could have any pet, it would probably be a horse.</li>
          </ul>
        </div>
        <button
          type="button"
          className={`flip-card ${showInfo ? "flipped" : ""}`}
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Show Bison's details"
          aria-pressed={showInfo}
        >
          <span className="flip-card-inner">
            <span className="flip-card-front">
              <img src={bisonImg} alt="Bison character" />
              <span className="flip-card-hint">Meet Bison</span>
            </span>
            <span className="flip-card-back">
              <span>
                Name: Bison
                <br />
                Nationality: Polish
                <br />
                Species: Horse
                <br />
                Favorite food: Sausage
              </span>
            </span>
          </span>
        </button>
      </section>
    </div>
  );
};

export default ContactPage;
