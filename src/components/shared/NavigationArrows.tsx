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
    // NavigationArrows.tsx (better named as NavigationArrows)
    <div className={`navigation-arrows ${className}`}>
      <div>
        {prev?.to ? (
          <Link className="navigation-arrow" to={prev.to}>
            &#10094; {prev.label}
          </Link>
        ) : prev?.onClick ? (
          <button className="navigation-arrow" onClick={prev.onClick}>
            &#10094; {prev.label}
          </button>
        ) : null}
      </div>

      {center && <div className="navigation-center">{center}</div>}

      <div>
        {next?.to ? (
          <Link className="navigation-arrow" to={next.to}>
            {next.label} &#10095;
          </Link>
        ) : next?.onClick ? (
          <button className="navigation-arrow" onClick={next.onClick}>
            {next.label} &#10095;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationArrows;
