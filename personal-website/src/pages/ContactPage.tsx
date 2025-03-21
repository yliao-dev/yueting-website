import "../styles/contact.css";
import SocialMediaIcons from "../components/SocialMediaIcons";

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
    </>
  );
};

export default ContactPage;
