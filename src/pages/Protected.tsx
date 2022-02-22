import { Link } from "react-router-dom";

export const ProtectedPage = () => (
  <div>
    <h3>Protected</h3>
    <Link to="/dashboard">Dashboard</Link>
  </div>
);
