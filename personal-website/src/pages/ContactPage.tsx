import "../styles/contact.css";
import SocialMediaIcons from "../components/SocialMediaIcons";
import LineBreak from "../components/LineBreak";

const ContactPage = () => {
  return (
    <>
      <section className="contact">
        <section className="contact__intro">
          <h1>Connect</h1>
          <p>
            If any part of my journey resonates with you, feel free to reach
            out.
            <br /> I’m here for creative collaboration, thoughtful conversation,
            or simply to connect.
          </p>
        </section>

        <SocialMediaIcons orientation="vertical" />
      </section>

      <LineBreak variant="plain" />

      <section className="contact__facts">
        <div className="fact-card">📷 I shoot mostly with Fujifilm</div>
        <div className="fact-card">🥋 Kendo taught me patience</div>
        <div className="fact-card">💻 Dark mode, always</div>
        <div className="fact-card">🌿 Quiet places, soft light</div>
      </section>
    </>
  );
};

export default ContactPage;
