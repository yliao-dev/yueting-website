import SocialMediaIcons from "../components/SocialMediaIcons";
import LineBreak from "../components/LineBreak";

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <section className="contact__intro">
          <h1>Connect</h1>
          <p>
            If any part of my journey resonates with you, I’d love to
            connect—whether it’s through a shared interest, a casual chat, or a
            meaningful collaboration.
          </p>
          <SocialMediaIcons />
        </section>

        <LineBreak />

        <section className="contact__facts">
          <h1> Random things </h1>
          <ul className="fact-list">
            <li>📷 I shoot mostly with Fujifilm</li>
            <li>🥋 Kendo taught me patience</li>
            <li>💻 Dark mode, always</li>
            <li>🌿 Quiet places, soft light</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
