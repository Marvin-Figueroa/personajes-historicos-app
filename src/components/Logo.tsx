import { Image } from "primereact/image";
import logo from "../assets/logo-dark-bg.png";

const Logo = () => {
  return (
    <Image
      className="flex-shrink-0"
      src={logo}
      alt="myneflow logo"
      width="100"
    />
  );
};

export default Logo;
