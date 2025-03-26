import SocialMediaIcons from "../components/SocialMediaIcons";
import LineBreak from "../components/LineBreak";

const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__row">
          <section className="contact__intro">
            <h1>Connect</h1>
            <p>
              If any part of my journey resonates with you, I’d love to
              connect—whether it’s through a shared interest, a casual chat, or
              a meaningful collaboration.
            </p>
          </section>
          <SocialMediaIcons />
        </div>

        <LineBreak />

        <section className="contact__facts">
          <h1> Behind the Scenes </h1>
          <ul>
            <li>This Website = Travel + Code + Weeks + MacBook Air</li>
            <li>No PhotoShop for my gallery photos yet</li>
            <li>I genuinely enjoy bitter coffee.</li>
            <li>I don’t train chest much.</li>
            <li>If I could have any pet, it’d be a horse.</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
