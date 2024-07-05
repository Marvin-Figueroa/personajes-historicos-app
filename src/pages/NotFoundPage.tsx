import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Image } from "primereact/image";
import NotFoundImage from "../assets/undraw-page-not-found.svg";
import UnexpectedErrorImage from "../assets/unexpected-error.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-column min-h-screen">
      <NavBar />
      <main className="flex flex-grow-1 flex-column">
        <div className="flex flex-column align-items-center justify-content-evenly flex-grow-1">
          <h1 className="text-center m-0 text-3xl text-red-500">Oops!</h1>
          <div className="card flex justify-content-center">
            <Image
              src={
                isRouteErrorResponse(error)
                  ? NotFoundImage
                  : UnexpectedErrorImage
              }
              alt={
                isRouteErrorResponse(error)
                  ? "Page not found image"
                  : "Unexpected error image"
              }
              width="250"
            />
          </div>
          <p className="text-center text-2xl my-0">
            {isRouteErrorResponse(error)
              ? "Sorry 😔, we could not find what you were looking for."
              : "An unexpected error occurred 💥"}
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
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
