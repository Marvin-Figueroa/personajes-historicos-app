import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from '../components/MainLayout';
import CharactersPage from '../pages/CharactersPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import NewCharacterPage from '../pages/NewCharacterPage';
import { LoginPage } from '../pages/LoginPage';
import { UnauthorizedPage } from '../pages/UnauthorizedPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <CharactersPage />,
      },
      {
        path: "new-character",
        element: (
          <ProtectedRoute requireUser>
            <NewCharacterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "characters/:id",
        element: <CharacterDetailPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "unauthorized",
    element: <UnauthorizedPage />,
  },
]);
