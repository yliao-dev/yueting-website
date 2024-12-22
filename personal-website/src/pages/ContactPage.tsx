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
          <h1>Email Me</h1>
        </section>
      </section>
    </>
  );
};

export default ContactPage;
