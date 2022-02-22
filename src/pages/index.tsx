import { Link, Outlet } from "react-router-dom";

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

      <Outlet />
    </div>
  );
};

export { Layout };
