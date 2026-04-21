type LineBreakProps = {
  variant?: "plain" | "gradient";
  spacing?: string;
  width?: string;
  spacerColor?: string;
};

const LineBreak = ({
  variant = "plain",
  spacing = "1rem",
  width = "min(100%, var(--page-measure))",
  spacerColor = "var(--white)",
}: LineBreakProps) => {
  const whiteSpaceStyle = {
    height: spacing,
    backgroundColor: spacerColor,
  };
  const lineStyle = {
    width,
    margin: "0 auto",
  };

  return (
    <>
      <div style={whiteSpaceStyle} />
      {variant === "plain" && (
        <div className="page__divider" style={lineStyle} />
      )}
      {variant === "gradient" && (
        <div className="page__divider-gradient" style={lineStyle} />
      )}
      <div style={whiteSpaceStyle} />
    </>
  );
};

export default LineBreak;
