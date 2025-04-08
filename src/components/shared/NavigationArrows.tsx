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
      <div>
        {prev?.to ? (
          <Link className="navigation-arrow" to={prev.to}>
            <span className="arrow-symbol">&#10094;</span>
            <span className="arrow-label">{prev.label}</span>
          </Link>
        ) : prev?.onClick ? (
          <button className="navigation-arrow" onClick={prev.onClick}>
            <span className="arrow-symbol">&#10094;</span>
            <span className="arrow-label">{prev.label}</span>
          </button>
        ) : null}
      </div>

      {center && <div className="navigation-center">{center}</div>}

      <div>
        {next?.to ? (
          <Link className="navigation-arrow" to={next.to}>
            <span className="arrow-label">{next.label}</span>
            <span className="arrow-symbol">&#10095;</span>
          </Link>
        ) : next?.onClick ? (
          <button className="navigation-arrow" onClick={next.onClick}>
            <span className="arrow-label">{next.label}</span>
            <span className="arrow-symbol">&#10095;</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationArrows;
