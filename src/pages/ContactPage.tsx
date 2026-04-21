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
          <div className="contact__heroCard">
            <p className="page__eyebrow">Reach Out</p>
            <h1>Connect</h1>
            <p className="contact__lead">
              If anything here resonates, I’d love to connect. I’m always open
              to thoughtful conversations, meaningful collaboration, and meeting
              good people along the way.
            </p>
            <p>
              This site holds the overlap between software, Kendo, travel, and
              photography. If you want to talk about work, practice, or
              something thoughtful in between, I’m happy to hear from you.
            </p>
            <div className="contact__heroNote">
              <span>Based in the United States</span>
              <span>Open to meaningful conversations</span>
            </div>
          </div>

          <div className="contact__rail">
            <div className="contact__contactCard">
              <p className="contact__cardLabel">Best way to reach me</p>
              <h2>Email</h2>
              <div
                className="email-copy-row"
                onClick={handleCopy}
                title="Click to copy email"
              >
                <span className="clipboard-icon">📋</span>
                <code className="email-text">ytliaodev@gmail.com</code>
                {copied && <span className="copied-msg">Copied</span>}
              </div>
              <p>
                Email is the cleanest starting point. If it makes sense, we can
                take it from there.
              </p>
            </div>

            <div className="contact__socialCard">
              <p className="page__eyebrow">Elsewhere</p>
              <h2>Find me online</h2>
              <p>
                A few corners of the internet where I share work, practice, and
                the things I keep returning to.
              </p>
              <SocialMediaIcons />
            </div>
          </div>
        </section>

        <LineBreak />

        <section className="contact__facts">
          <div className="contact__facts__text">
            <p className="page__eyebrow">Behind The Scenes</p>
            <h2>Off the dojo floor</h2>
            <ul>
              <li>
                This site came together through travel, code, and many late
                nights on a MacBook Air.
              </li>
              <li>No Photoshop for the gallery photos yet.</li>
              <li>I genuinely enjoy bitter coffee.</li>
              <li>I care a lot about clarity, even in small interface details.</li>
              <li>If I could have any pet, it would probably be a horse.</li>
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
                  Favorite food: Grass
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
