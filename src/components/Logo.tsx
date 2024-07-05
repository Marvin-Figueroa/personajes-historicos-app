import { Image } from "primereact/image";
import logo from "../assets/logo-dark-bg.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Image
        className="flex-shrink-0"
        src={logo}
        alt="myneflow logo"
        width="100"
      />
    </Link>
  );
};

export default Logo;
