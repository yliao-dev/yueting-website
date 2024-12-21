import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import DSCF4076 from "../assets/images/DSCF4076.jpg";
import "../styles/contact.css";
const ContactPage = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/yueting-liao-83b216171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>

          <Instagram />
          <a
            href="https://github.com/yliao-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
        <img src={DSCF4076} className="contact__image" />
      </section>

      <div className="page__divider" />

      <section className="contact__my__skill">
        <h1>Email Me</h1>
      </section>
    </>
  );
};

export default ContactPage;
