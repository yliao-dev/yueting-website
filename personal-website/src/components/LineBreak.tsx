import "../styles/typography.css";

interface LineBreakProps {
  variant?: "plain" | "gradient"; // Add variants for plain or gradient divider
}

const LineBreak = ({ variant = "plain" }: LineBreakProps) => {
  return (
    <>
      <div className="page__gradient-white" />
      {variant === "plain" && <div className="page__divider" />}
      {variant === "gradient" && <div className="page__divider-gradient" />}
      <div className="page__gradient-white" />
    </>
  );
};

export default LineBreak;
