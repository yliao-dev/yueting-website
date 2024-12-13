import image1 from "../assets/images/london.png";

const HomePage = () => {
  return (
    <>
      {/* Personal Image Section */}
      <section
        className="flex-grow bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to My Website
          </h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
