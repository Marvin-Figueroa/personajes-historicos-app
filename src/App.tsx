import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CharactersPage from "./pages/CharactersPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewCharacterPage from "./pages/NewCharacterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <CharactersPage />
            </Layout>
          }
        />
        <Route
          path="/new-character"
          element={
            <Layout>
              <NewCharacterPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
