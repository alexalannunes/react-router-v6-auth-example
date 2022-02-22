import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context";
import { Layout } from "./pages";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login";
import { ProtectedPage } from "./pages/Protected";
import { PublicPage } from "./pages/Public";
import { RequireAuth } from "./PrivatePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
