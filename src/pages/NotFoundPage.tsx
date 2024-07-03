import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import NotFoundImage from "../assets/undraw-page-not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-column align-items-center justify-content-evenly flex-grow-1">
      <h1 className="text-center m-0 text-3xl text-red-500">Page Not Found</h1>
      <div className="card flex justify-content-center">
        <Image src={NotFoundImage} alt="Page Not Found Image" width="250" />
      </div>
      <p className="text-center text-2xl">
        Sorry 😔, we couldn&apos;t find what you were looking for.
      </p>
      <div className="card flex justify-content-center">
        <Link
          to="/"
          className="p-button p-component p-button-help no-underline"
        >
          <span className="p-button-label">Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
