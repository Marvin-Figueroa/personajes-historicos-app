import { Image } from "primereact/image";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Image
        className="flex-shrink-0"
        src={logo}
        alt="react logo"
        width="40px"
      />
    </Link>
  );
};

export default Logo;
