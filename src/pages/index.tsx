import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "../components/AuthStatus";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public page</Link>
        </li>
        <li>
          <Link to="/protected">Protected page</Link>
        </li>
      </ul>

      <AuthStatus />

      <Outlet />
    </div>
  );
};

export { Layout };
