import LineBreak from "../components/LineBreak";
import "../styles/contact.css";
import SocialMediaIcons from "../components/SocialMediaIcons";

const ContactPage = () => {
  return (
    <>
      <section className="contact">
        <SocialMediaIcons orientation="vertical" />
        <LineBreak variant="plain" />
        <section className="contact__my__skill">
          <h1>Connect</h1>
          <p>
            If any part of my journey resonates with you, feel free to reach
            out.I’m here for creative collaboration, thoughtful conversation, or
            simply to connect.
          </p>
        </section>
      </section>
    </>
  );
};

export default ContactPage;
