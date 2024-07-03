import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CharactersPage from "./pages/CharactersPage";
import NotFoundPage from "./pages/NotFoundPage";

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
              <div className="flex align-items-center justify-content-center flex-grow-1">
                <p className="text-2xl text-purple-500">
                  Page not ready yet 😢
                </p>
              </div>
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
