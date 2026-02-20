import { Link } from "react-router-dom";

interface LogoProps {
  to?: string;
  className?: string;
}

const Logo = ({ to = "/", className = "" }: LogoProps) => {
  return (
    <Link 
      to={to} 
      className={`bg-neutral-900 text-[#f4f1ea] px-4 py-2 text-xl font-extrabold tracking-tight ${className}`}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}
    >
      ALBUMFY
    </Link>
  );
};

export default Logo;
