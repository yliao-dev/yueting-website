import SocialMediaIcons from "../components/SocialMediaIcons";
import LineBreak from "../components/LineBreak";

const ContactPage = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__row">
          <section className="contact__intro">
            <h1>Connect</h1>
            <p>
              If any part of my journey resonates with you, feel free to reach
              out.
              <br /> I’m here for creative collaboration, thoughtful
              conversation, or simply to connect.
            </p>
          </section>

          <SocialMediaIcons orientation="vertical" />
        </div>

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
      </section>
    </>
  );
};

export default ContactPage;
