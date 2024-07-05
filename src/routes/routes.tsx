import { createBrowserRouter } from "react-router-dom";
import CharactersPage from "../pages/CharactersPage";
import NewCharacterPage from "../pages/NewCharacterPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CharactersPage />,
      },
      {
        path: "new-character",
        element: <NewCharacterPage />,
      },
      {
        path: "characters/:id",
        element: <CharacterDetailPage />,
      },
    ],
  },
]);

export default router;
