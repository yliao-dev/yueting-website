import { Link } from "react-router-dom";

interface NavigationArrowsProps {
  prev?: {
    label?: string;
    to?: string;
    onClick?: () => void;
  };
  next?: {
    label?: string;
    to?: string;
    onClick?: () => void;
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
    <div className={`nav-arrows ${className}`}>
      <div>
        {prev?.to ? (
          <Link className="nav-arrow" to={prev.to}>
            &#10094; {prev.label}
          </Link>
        ) : prev?.onClick ? (
          <button className="nav-arrow" onClick={prev.onClick}>
            &#10094; {prev.label}
          </button>
        ) : null}
      </div>

      {center && <div className="nav-center">{center}</div>}

      <div>
        {next?.to ? (
          <Link className="nav-arrow" to={next.to}>
            {next.label} &#10095;
          </Link>
        ) : next?.onClick ? (
          <button className="nav-arrow" onClick={next.onClick}>
            {next.label} &#10095;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationArrows;
