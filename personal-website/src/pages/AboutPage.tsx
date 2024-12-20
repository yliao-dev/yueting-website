import DSCF4076 from "../assets/images/DSCF4076.jpg";
import "../styles/about.css";
const AboutPage = () => {
  return (
    <>
      <div className="about">
        <section className="about__intro">
          <h1>About</h1>
          <h3>About me</h3>
          <img src={DSCF4076} className="about__intro__image" />
        </section>

        <div className="page__divider" />

        <section className="about__my__skill">
          <h1>My Skills</h1>
          <img src={DSCF4076} className="about__my__skill__image" />
        </section>

        <div className="page__divider" />

        <section className="about__my__story">
          <h1>My Storys</h1>
          <img src={DSCF4076} className="about__my__story__image" />
        </section>
      </div>
    </>
  );
};

export default AboutPage;
