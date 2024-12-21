import DSCF4076 from "../assets/images/DSCF4076.jpg";
import "../styles/contact.css";
const ContactPage = () => {
  return (
    <>
      <div className="contact">
        <section className="contact__intro">
          <h1>contact</h1>
          <h3>contact me</h3>
          <img src={DSCF4076} className="contact__intro__image" />
        </section>

        <div className="page__divider" />

        <section className="contact__my__skill">
          <h1>My Skills</h1>
          <img src={DSCF4076} className="contact__my__skill__image" />
        </section>

        <div className="page__divider" />

        <section className="contact__my__story">
          <h1>My Storys</h1>
          <img src={DSCF4076} className="contact__my__story__image" />
        </section>

        <section className="contact__my__places">
          <h1>Places I visited</h1>
          <img src={DSCF4076} className="contact__my__story__places" />
        </section>
      </div>
    </>
  );
};

export default ContactPage;
