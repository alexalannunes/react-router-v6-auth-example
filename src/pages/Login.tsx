import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useAuth();

  console.log(auth, location);
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const username = formData.get("username");

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { LoginPage };
