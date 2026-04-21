import { Link } from "react-router-dom";

interface NavigationArrowsProps {
  prev?: {
    label?: string;
    to?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  next?: {
    label?: string;
    to?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  center?: React.ReactNode;
  className?: string;
}

const NavigationArrows = ({
  prev,
  next,
  center,
  className = "",
}: NavigationArrowsProps) => {
  return (
    <div className={`navigation-arrows ${className}`}>
      <div className="navigation-arrows__side navigation-arrows__side--start">
        {prev?.to ? (
          <Link
            className={`navigation-arrow ${
              !prev.label ? "navigation-arrow--iconOnly" : ""
            }`}
            to={prev.to}
            aria-label={prev.label ?? "Previous"}
          >
            <span className="arrow-symbol">&#10094;&nbsp;</span>
            <span className="arrow-label">{prev.label}</span>
          </Link>
        ) : prev?.onClick ? (
          <button
            type="button"
            className={`navigation-arrow ${
              !prev.label ? "navigation-arrow--iconOnly" : ""
            }`}
            onClick={prev.onClick}
            aria-label={prev.label ?? "Previous"}
          >
            <span className="arrow-symbol">&#10094;&nbsp;</span>
            <span className="arrow-label">{prev.label}</span>
          </button>
        ) : null}
      </div>

      {center && <div className="navigation-center">{center}</div>}

      <div className="navigation-arrows__side navigation-arrows__side--end">
        {next?.to ? (
          <Link
            className={`navigation-arrow ${
              !next.label ? "navigation-arrow--iconOnly" : ""
            }`}
            to={next.to}
            aria-label={next.label ?? "Next"}
          >
            <span className="arrow-label">{next.label}</span>
            <span className="arrow-symbol">&nbsp;&#10095;</span>
          </Link>
        ) : next?.onClick ? (
          <button
            type="button"
            className={`navigation-arrow ${
              !next.label ? "navigation-arrow--iconOnly" : ""
            }`}
            onClick={next.onClick}
            aria-label={next.label ?? "Next"}
          >
            <span className="arrow-label">{next.label}</span>
            <span className="arrow-symbol">&nbsp;&#10095;</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationArrows;
